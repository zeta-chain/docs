/* eslint-disable no-console */
import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next/types";
import { z } from "zod";

// CORS configuration aligned with other API routes
const cors = Cors({
  origin: ["zetachain.com", "zetachain.app", /\.zetachain\.((com)|(app))$/],
  methods: ["POST", "OPTIONS"],
});

/**
 * Converts CORS middleware to Promise for Next.js API routes.
 */
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

// Validation Limits
const MIN_CONTENT_LENGTH = 1;
const MIN_TEMPERATURE = 0;
const MAX_TEMPERATURE = 1;

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

// API Configuration
const CHATBASE_URL = "https://www.chatbase.co/api/v1/chat";

// Resource Limits
const MAX_RESPONSE_SIZE = 1 * 1024 * 1024; // 1MB
const SOCKET_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes

// HTTP Status Codes
const HTTP_NO_CONTENT = 204;
const HTTP_BAD_REQUEST = 400;
const HTTP_METHOD_NOT_ALLOWED = 405;
const HTTP_PAYLOAD_TOO_LARGE = 413;
const HTTP_INTERNAL_SERVER_ERROR = 500;
const HTTP_BAD_GATEWAY = 502;

type ChatbaseSuccessResponse = {
  text: string;
};

type ChatbaseErrorResponse = {
  message?: string;
  [key: string]: unknown;
};

/**
 * Handler for proxying chat requests to Chatbase.
 *
 * Supports both streaming and non-streaming responses, with proper CORS handling,
 * input validation, and resource limits to prevent abuse.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await runMiddleware(req, res);

    if (req.method === "OPTIONS") {
      // CORS preflight
      return res.status(HTTP_NO_CONTENT).end();
    }

    if (req.method !== "POST") {
      return res.status(HTTP_METHOD_NOT_ALLOWED).json({ error: "Method not allowed" });
    }

    // Support both CHATBASE_API_KEY and legacy CHATBASE_SECRET_KEY environment variables
    const apiKey = process.env.CHATBASE_API_KEY || process.env.CHATBASE_SECRET_KEY;
    if (!apiKey) {
      return res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error: "Missing CHATBASE_API_KEY server configuration" });
    }

    const parseResult = ChatRequestSchema.safeParse(req.body);
    if (!parseResult.success) {
      const firstError = parseResult.error.errors[0];
      return res.status(HTTP_BAD_REQUEST).json({
        error: `${firstError.path.join(".")}: ${firstError.message}`,
      });
    }

    const { messages, chatbotId, stream, temperature, model, conversationId } = parseResult.data;

    // Build payload for Chatbase API, only including defined optional parameters
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

      // Extract error message from response if available
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

    // Streaming: set up Server-Sent Events (SSE) headers for real-time streaming
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no"); // Disable nginx buffering for real-time streaming
    // Keep the socket alive for long-running streams (5 minute timeout)
    res.socket?.setTimeout?.(SOCKET_TIMEOUT_MS);
    res.socket?.setNoDelay?.(true); // Send data immediately without buffering
    res.socket?.setKeepAlive?.(true); // Keep connection alive for streaming

    if (!chatRes.ok || !chatRes.body) {
      const errBody = await chatRes.text().catch(() => "");
      res.statusCode = chatRes.status || HTTP_BAD_GATEWAY;
      res.write(`event: error\n`);
      res.write(`data: ${JSON.stringify({ message: chatRes.statusText || "Upstream error", body: errBody })}\n\n`);
      return res.end();
    }

    // Try to get a readable stream reader for efficient streaming
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
      return res.status(HTTP_PAYLOAD_TOO_LARGE).json({
        error: `Response too large (${contentLength} bytes, max ${MAX_RESPONSE_SIZE})`,
      });
    }

    const fallbackText = await chatRes.text();

    if (fallbackText.length > MAX_RESPONSE_SIZE) {
      return res.status(HTTP_PAYLOAD_TOO_LARGE).json({
        error: `Response too large (${fallbackText.length} bytes, max ${MAX_RESPONSE_SIZE})`,
      });
    }

    res.write(fallbackText);
    return res.end();
  } catch (error: unknown) {
    console.error("Chat API proxy error:", error);
    return res
      .status(HTTP_INTERNAL_SERVER_ERROR)
      .json({ error: error instanceof Error ? error.message : "Internal Server Error" });
  }
}

/**
 * Safely parses JSON text without throwing errors.
 * @param text - The JSON string to parse
 * @returns Parsed object of type T, or null if parsing fails
 */
function safeParseJson<T>(text: string): T | null {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}
