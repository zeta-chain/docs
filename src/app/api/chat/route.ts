/* eslint-disable no-console */
import { openai } from "@ai-sdk/openai";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { CoreMessage, embed, streamText } from "ai";

import { supabaseClient } from "~/lib/supabase/client";

const getPrompt = (userPrompt: string, pageSections: any[] | null) => {
  if (typeof process.env.ZETA_AI_PROMPT !== "string") throw new Error("ZETA_AI_PROMPT is not a string");

  return Buffer.from(process.env.ZETA_AI_PROMPT, "base64")
    .toString("utf-8")
    .replace("{{userPrompt}}", userPrompt)
    .replace(
      "{{pageSections}}",
      pageSections?.length
        ? (pageSections || []).map((section) => section.content).join("\n")
        : "No ZetaChain data available: just answer \"I'm sorry, I don't have the information to answer that question.\""
    );
};

// Allow streaming responses up to 45 seconds
export const maxDuration = 45;

export async function POST(req: Request) {
  try {
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      throw new Error("KV_REST_API_URL and KV_REST_API_TOKEN env vars not found.");
    }

    const ip = req.headers.get("x-forwarded-for");
    const ratelimit = new Ratelimit({
      redis: kv,
      limiter: Ratelimit.fixedWindow(15, "10m"),
    });

    const { success, limit, reset, remaining } = await ratelimit.limit(`ratelimit_${ip}`);

    if (!success) {
      console.error("Rate limit exceeded for IP:", ip);

      return new Response("You have reached your request limit for the day.", {
        status: 429,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      });
    }

    const { messages: _messages } = await req.json();
    const messages = _messages as CoreMessage[];

    const userPrompt = messages[messages.length - 1].content;

    const { embedding } = await embed({
      model: openai.embedding("text-embedding-ada-002"),
      value: userPrompt,
    });

    const {
      error: matchError,
      data: pageSections,
      status,
    } = await supabaseClient.rpc("match_page_sections", {
      embedding: embedding as any,
      match_threshold: 0.7,
      match_count: 10,
      min_content_length: 50,
    });

    if (process.env.NODE_ENV === "development") {
      console.log(matchError, pageSections, status);

      console.log(`Got the following sections: ${pageSections?.map((s) => `${s.heading}\n`)}`);
    }

    const prompt = getPrompt(userPrompt as string, pageSections);

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      prompt,
    });

    return result.toAIStreamResponse();
  } catch (error) {
    console.error(error);

    return new Response("Internal Server Error", { status: 500 });
  }
}
