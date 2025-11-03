// app/api/chat/route.ts
export const runtime = "edge";
export const dynamic = (process.env.EXPORT ? "force-static" : "force-dynamic") as "force-static" | "force-dynamic";

import { NextRequest } from "next/server";
import { z } from "zod";

const CHATBASE_URL = "https://www.chatbase.co/api/v1/chat";
const MIN_CONTENT_LENGTH = 1;
const MIN_TEMPERATURE = 0;
const MAX_TEMPERATURE = 1;
const MAX_RESPONSE_SIZE = 1 * 1024 * 1024; // 1MB
const HEARTBEAT_MS = 15000;

const ChatRequestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(MIN_CONTENT_LENGTH),
      })
    )
    .min(MIN_CONTENT_LENGTH, "At least one message is required"),
  chatbotId: z.string().min(MIN_CONTENT_LENGTH, "chatbotId is required"),
  stream: z.boolean().default(false),
  temperature: z.number().min(MIN_TEMPERATURE).max(MAX_TEMPERATURE).optional(),
  model: z.string().trim().min(MIN_CONTENT_LENGTH).optional(),
  conversationId: z.string().trim().min(MIN_CONTENT_LENGTH).optional(),
});

const originAllowlist = ["https://zetachain.com", "https://zetachain.app"];
const originRegexes = [/^https:\/\/([a-z0-9-]+\.)*zetachain\.com$/i, /^https:\/\/([a-z0-9-]+\.)*zetachain\.app$/i];

const isAllowedOrigin = (origin: string | null): boolean => {
  if (!origin) return false;
  if (originAllowlist.includes(origin)) return true;
  return originRegexes.some((re) => re.test(origin));
};

const corsHeaders = (req: NextRequest): Headers => {
  const origin = req.headers.get("origin");
  const headers = new Headers({
    Vary: "Origin",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });

  if (isAllowedOrigin(origin)) {
    headers.set("Access-Control-Allow-Origin", origin!);
  }
  return headers;
};

const json = (status: number, data: unknown, extra?: HeadersInit) => {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      ...(extra || {}),
    },
  });
};

const safeParseJson = <T>(text: string): T | null => {
  try {
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
};

export const OPTIONS = async (req: NextRequest) => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(req),
  });
};

export const POST = async (req: NextRequest) => {
  const headers = corsHeaders(req);

  const apiKey = process.env.CHATBASE_API_KEY || process.env.CHATBASE_SECRET_KEY;
  if (!apiKey) {
    return json(500, { error: "Server configuration error" }, headers);
  }

  // Parse & validate body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "Invalid JSON body" }, headers);
  }

  const parsed = ChatRequestSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.errors[0];
    return json(400, { error: `${first.path.join(".")}: ${first.message}` }, headers);
  }

  const { messages, chatbotId, stream, temperature, model, conversationId } = parsed.data;

  const trimmedConversationId = conversationId?.trim();
  const hasConversationId = !!trimmedConversationId;

  const payload: Record<string, unknown> = {
    messages,
    chatbotId,
    stream,
  };
  if (hasConversationId) payload.conversationId = trimmedConversationId;
  if (temperature !== undefined) payload.temperature = temperature;
  if (model !== undefined) payload.model = model;

  // Call Chatbase
  const upstream = await fetch(CHATBASE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // Non-streaming path: proxy JSON/text
  if (!stream) {
    const text = await upstream.text();
    const isJson = upstream.headers.get("content-type")?.includes("application/json");
    const data = isJson ? safeParseJson<unknown>(text) : null;

    if (!upstream.ok) {
      const message =
        (data && typeof data === "object" && "message" in data && data.message) ||
        upstream.statusText ||
        "Upstream error";
      return json(
        upstream.status,
        { error: message, upstreamStatus: upstream.status, upstreamBody: isJson ? data : text },
        { ...Object.fromEntries(headers) }
      );
    }

    const respHeaders = new Headers({
      ...Object.fromEntries(headers),
      "Content-Type": isJson ? "application/json" : "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    });

    return new Response(isJson ? JSON.stringify(data) : text, {
      status: 200,
      headers: respHeaders,
    });
  }

  // Streaming SSE path
  const upstreamContentType = upstream.headers.get("content-type") || "";
  const isUpstreamSSE = /text\/event-stream/i.test(upstreamContentType);

  if (!upstream.ok || !upstream.body) {
    const errBody = await upstream.text().catch(() => "");
    const sseErr = `event: error\ndata: ${JSON.stringify({
      message: upstream.statusText || "Upstream error",
      body: errBody,
    })}\n\n`;
    const errHeaders = new Headers({
      ...Object.fromEntries(headers),
      "Content-Type": isUpstreamSSE ? "text/event-stream" : "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    });

    return new Response(sseErr, {
      status: upstream.status || 502,
      headers: errHeaders,
    });
  }

  // Bridge upstream SSE to client with a heartbeat to prevent idle timeouts
  const streamOut = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      const reader = upstream.body!.getReader();

      const hb = isUpstreamSSE
        ? setInterval(() => {
            controller.enqueue(encoder.encode(`:\n\n`));
          }, HEARTBEAT_MS)
        : null;

      let total = 0;

      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          if (value) {
            total += value.byteLength;
            if (total > MAX_RESPONSE_SIZE) {
              controller.enqueue(
                encoder.encode(`event: error\ndata: ${JSON.stringify({ message: "Response too large" })}\n\n`)
              );
              break;
            }
            controller.enqueue(value); // Pass through upstream bytes as-is
          }
        }
      } catch (e) {
        controller.enqueue(encoder.encode(`event: error\ndata: ${JSON.stringify({ message: String(e) })}\n\n`));
      } finally {
        if (hb) clearInterval(hb as unknown as number);
        controller.close();
      }
    },
  });

  const respHeaders = new Headers({
    ...Object.fromEntries(headers),
    "Content-Type": isUpstreamSSE ? "text/event-stream" : upstreamContentType || "text/plain; charset=utf-8",
    "Cache-Control": "no-store",
    ...(isUpstreamSSE ? { Connection: "keep-alive" } : {}),
  });

  return new Response(streamOut, {
    status: 200,
    headers: respHeaders,
  });
};
