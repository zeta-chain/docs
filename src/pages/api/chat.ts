/* eslint-disable no-console */
import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next/types";
import { z } from "zod";

// CORS configuration aligned with other API routes
const cors = Cors({
  origin: ["zetachain.com", "zetachain.app", /\.zetachain\.((com)|(app))$/],
  methods: ["POST", "OPTIONS"],
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result: Error | undefined) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const ChatRequestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1),
      })
    )
    .min(1, "At least one message is required"),
  chatbotId: z.string().min(1, "chatbotId is required"),
  stream: z.boolean().default(false),
  temperature: z.number().min(0).max(1).optional(),
  model: z.string().trim().min(1).optional(),
  conversationId: z.string().trim().min(1).optional(),
});

const CHATBASE_URL = "https://www.chatbase.co/api/v1/chat";
const MAX_RESPONSE_SIZE = 1 * 1024 * 1024; // 1MB

type ChatbaseSuccessResponse = {
  text: string;
};

type ChatbaseErrorResponse = {
  message?: string;
  [key: string]: unknown;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await runMiddleware(req, res);

    if (req.method === "OPTIONS") {
      // CORS preflight
      return res.status(204).end();
    }

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const apiKey = process.env.CHATBASE_API_KEY || process.env.CHATBASE_SECRET_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Missing CHATBASE_API_KEY server configuration" });
    }

    const parseResult = ChatRequestSchema.safeParse(req.body);
    if (!parseResult.success) {
      const firstError = parseResult.error.errors[0];
      return res.status(400).json({
        error: `${firstError.path.join(".")}: ${firstError.message}`,
      });
    }

    const { messages, chatbotId, stream, temperature, model, conversationId } = parseResult.data;

    const payload: Record<string, unknown> = {
      messages,
      chatbotId,
      stream,
    };

    if (temperature !== undefined) payload.temperature = temperature;
    if (model !== undefined) payload.model = model;
    if (conversationId !== undefined) payload.conversationId = conversationId;

    // For streaming, we need to fetch first to know if it's ok; then pipe chunks through.
    const chatRes = await fetch(CHATBASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!stream) {
      // Non-streaming: proxy the JSON response or return error
      const text = await chatRes.text();
      const isJson = chatRes.headers.get("content-type")?.includes("application/json");
      const data = isJson ? safeParseJson<ChatbaseSuccessResponse | ChatbaseErrorResponse>(text) : null;
      const dataMessage = data && "message" in data ? data.message : undefined;
      if (!chatRes.ok) {
        const message = dataMessage || chatRes.statusText || "Upstream error";
        return res
          .status(chatRes.status)
          .json({ error: message, upstreamStatus: chatRes.status, upstreamBody: isJson ? data : text });
      }
      // Successful JSON proxy (expected shape: { text: string })
      return res.status(200).send(isJson ? data : text);
    }

    // Streaming: set up SSE headers and pipe upstream chunks through
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    // Keep the socket alive for long-running streams (5 minute timeout)
    res.socket?.setTimeout?.(300000);
    res.socket?.setNoDelay?.(true);
    res.socket?.setKeepAlive?.(true);

    if (!chatRes.ok || !chatRes.body) {
      const errBody = await chatRes.text().catch(() => "");
      res.statusCode = chatRes.status || 502;
      res.write(`event: error\n`);
      res.write(`data: ${JSON.stringify({ message: chatRes.statusText || "Upstream error", body: errBody })}\n\n`);
      return res.end();
    }

    const reader = (chatRes.body as ReadableStream<Uint8Array>)?.getReader?.();
    if (reader && typeof reader.read === "function") {
      const decoder = new TextDecoder();
      let done = false;
      // Forward chunks as-is; upstream already formats as SSE `data: ...` lines
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunkValue = decoder.decode(value);
          res.write(chunkValue);
        }
      }
      return res.end();
    }

    // Fallback: if no reader, buffer and send (with size limit)
    const contentLength = chatRes.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > MAX_RESPONSE_SIZE) {
      return res.status(413).json({
        error: `Response too large (${contentLength} bytes, max ${MAX_RESPONSE_SIZE})`,
      });
    }

    const fallbackText = await chatRes.text();

    if (fallbackText.length > MAX_RESPONSE_SIZE) {
      return res.status(413).json({
        error: `Response too large (${fallbackText.length} bytes, max ${MAX_RESPONSE_SIZE})`,
      });
    }

    res.write(fallbackText);
    return res.end();
  } catch (error: unknown) {
    console.error("Chat API proxy error:", error);
    return res.status(500).json({ error: error instanceof Error ? error.message : "Internal Server Error" });
  }
}

function safeParseJson<T>(text: string): T | null {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}
