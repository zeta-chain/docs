/* eslint-disable no-console */
import { openai } from "@ai-sdk/openai";
import { createClient } from "@supabase/supabase-js";
import { CoreMessage, streamText } from "ai";
import { embed } from "ai";

import { supabaseClient } from "~/lib/supabase/client";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
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
    embedding,
    match_threshold: 0.7,
    match_count: 10,
    min_content_length: 50,
  });

  console.log(matchError, pageSections, status);

  console.log(`Got the following sections: ${pageSections?.map((s) => `${s.heading}\n`)}`);

  const result = await streamText({
    model: openai("gpt-4o"),
    prompt: `
      Answer the user's question:
      ${userPrompt}
      Use the following data from ZetaChain:
      ${(pageSections || []).map((section) => section.content).join("\n")}
    `,
  });

  return result.toAIStreamResponse();
}
