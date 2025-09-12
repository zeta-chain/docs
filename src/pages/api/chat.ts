/* eslint-disable no-console */
import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next/types";

// CORS configuration aligned with other API routes
const cors = Cors({
  origin: ["zetachain.com", "zetachain.app", /\.zetachain\.((com)|(app))$/],
  methods: ["POST", "OPTIONS"],
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

type ChatbaseMessage = { role: "user" | "assistant"; content: string };

const CHATBASE_URL = "https://www.chatbase.co/api/v1/chat";

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

    const body = req.body;
    if (!body || typeof body !== "object") {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const {
      messages,
      chatbotId,
      stream = false,
      temperature,
      model,
      conversationId,
    } = body as {
      messages?: ChatbaseMessage[];
      chatbotId?: string;
      stream?: boolean;
      temperature?: number;
      model?: string;
      conversationId?: string;
    };

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "'messages' must be a non-empty array" });
    }
    if (!chatbotId || typeof chatbotId !== "string") {
      return res.status(400).json({ error: "'chatbotId' is required" });
    }
    if (!messages.every((m) => m && typeof m.content === "string" && (m.role === "user" || m.role === "assistant"))) {
      return res.status(400).json({ error: "Each message must have { content: string, role: 'user' | 'assistant' }" });
    }

    const payload: Record<string, unknown> = {
      messages,
      chatbotId,
      stream: Boolean(stream),
    };
    if (typeof temperature === "number") payload.temperature = Math.min(1, Math.max(0, temperature));
    if (typeof model === "string" && model.trim()) payload.model = model.trim();
    if (typeof conversationId === "string" && conversationId.trim()) payload.conversationId = conversationId.trim();

    // For streaming, we need to fetch first to know if it's ok; then pipe chunks through.
    const chatRes = await fetch(CHATBASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!Boolean(stream)) {
      // Non-streaming: proxy the JSON response or return error
      const text = await chatRes.text();
      const isJson = chatRes.headers.get("content-type")?.includes("application/json");
      const data = isJson ? safeParseJson(text) : null;
      if (!chatRes.ok) {
        const message = (data as any)?.message || chatRes.statusText || "Upstream error";
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
    // Keep the socket alive for long-running streams
    res.socket?.setTimeout?.(0);
    res.socket?.setNoDelay?.(true);
    res.socket?.setKeepAlive?.(true);

    if (!chatRes.ok || !chatRes.body) {
      const errBody = await chatRes.text().catch(() => "");
      res.statusCode = chatRes.status || 502;
      res.write(`event: error\n`);
      res.write(`data: ${JSON.stringify({ message: chatRes.statusText || "Upstream error", body: errBody })}\n\n`);
      return res.end();
    }

    const reader = (chatRes.body as any).getReader?.();
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

    // Fallback: if no reader, buffer and send
    const fallbackText = await chatRes.text();
    res.write(fallbackText);
    return res.end();
  } catch (error: any) {
    console.error("Chat API proxy error:", error);
    return res.status(500).json({ error: error?.message ?? "Internal Server Error" });
  }
}

function safeParseJson(text: string) {
  try {
    return JSON.parse(text);
  } catch (_) {
    return null;
  }
}
