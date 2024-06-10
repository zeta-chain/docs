import { openai } from "@ai-sdk/openai";
import { createClient } from "@supabase/supabase-js";
import { CoreMessage, streamText } from "ai";
import { embed } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(req: Request) {
  const { messages: _messages } = await req.json();
  const messages = _messages as CoreMessage[];

  console.log(messages);

  const { embedding } = await embed({
    model: openai.embedding("text-embedding-ada-002"),
    value: messages[messages.length - 1].content,
  });

  const { error: matchError, data: pageSections } = await supabaseClient.rpc("match_page_sections", {
    embedding,
    match_threshold: 0.78,
    match_count: 10,
    min_content_length: 50,
  });

  console.log(pageSections);

  const result = await streamText({
    model: openai("gpt-4o"),
    messages,
  });

  return result.toAIStreamResponse();
}
