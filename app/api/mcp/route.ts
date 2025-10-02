// app/api/mcp/route.ts
export const runtime = "nodejs";
export const dynamic = (process.env.EXPORT ? "force-static" : "force-dynamic") as "force-static" | "force-dynamic";

import { NextRequest } from "next/server";
import { z } from "zod";

// Keep CORS behavior consistent with chat route
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

// Debug helpers (avoid leaking secrets)
const redact = (value: string | undefined | null) => {
  if (!value) return "";
  return value.length > 8 ? `${value.slice(0, 4)}…${value.slice(-4)}` : "***";
};

const truncate = (value: string, max = 120) => {
  if (value.length <= max) return value;
  return `${value.slice(0, max)}…(${value.length - max} more)`;
};

const RequestSchema = z.object({
  prompt: z.string().min(1, "prompt is required"),
  model: z.string().trim().optional(),
  serverUrl: z.string().url().optional(),
});

type McpClient = {
  listTools: () => Promise<Array<{ name: string; description?: string }>>;
  callTool: (args: { name: string; arguments?: Record<string, unknown> }) => Promise<any>;
  close?: () => Promise<void> | void;
};

const getMcpClientLib = async () => {
  const { Client } = await import("@modelcontextprotocol/sdk/client");
  const { StreamableHTTPClientTransport } = await import("@modelcontextprotocol/sdk/client/streamableHttp");
  return { Client, StreamableHTTPClientTransport } as const;
};

const getAiSdk = async () => {
  const { generateObject } = await import("ai");
  const { createOpenAI } = await import("@ai-sdk/openai");
  return { generateObject, createOpenAI } as const;
};

const connectMcp = async (serverUrl: string, apiKey?: string, profile?: string): Promise<McpClient> => {
  const { Client, StreamableHTTPClientTransport } = await getMcpClientLib();
  const httpUrl = new URL(serverUrl);
  if (apiKey) httpUrl.searchParams.set("api_key", apiKey);
  if (profile) httpUrl.searchParams.set("profile", profile);
  const client = new Client({ name: "ZetaChain Docs MCP", version: "1.0.0" });
  const transport = new StreamableHTTPClientTransport(httpUrl);
  try {
    // eslint-disable-next-line no-console
    console.log(
      `[mcp] connecting StreamableHTTP url=${httpUrl.origin}${httpUrl.pathname}?api_key=${redact(
        apiKey || ""
      )}\u2026&profile=${profile || ""}`
    );
    await (client as any).connect(transport as any);
    // eslint-disable-next-line no-console
    console.log("[mcp] connected (streamable-http)");
    return client as unknown as McpClient;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("[mcp] connect failed", { url: httpUrl.toString(), error: String(e) });
    throw e;
  }
};

// Generic type for MCP tool (we only rely on a few fields; extra fields are preserved at runtime)
type McpTool = {
  name: string;
  description?: string;
  inputSchema?: {
    type?: string;
    properties?: Record<
      string,
      {
        type?: string;
        description?: string;
        enum?: string[];
      }
    >;
    required?: string[];
  };
  [key: string]: unknown;
};

const chooseToolAndArgs = async (params: {
  instruction: string;
  tools: Array<McpTool>;
  modelName: string;
  openaiApiKey?: string;
}) => {
  const { generateObject, createOpenAI } = await getAiSdk();
  const openai = createOpenAI(params.openaiApiKey ? ({ apiKey: params.openaiApiKey } as any) : ({} as any));

  const schema = z.object({
    toolName: z.string(),
    arguments: z.record(z.any()).default({}),
  });

  const toolList = params.tools
    .map((t) => {
      const props = t.inputSchema?.properties || {};
      const required = t.inputSchema?.required || [];
      const propSummaries = Object.entries(props)
        .slice(0, 8)
        .map(([k, v]) => `${k}${v?.type ? `(${v.type})` : ""}${v?.description ? ` - ${v.description}` : ""}`)
        .join(", ");
      const requiredStr = required.length ? ` | required: ${required.join(", ")}` : "";
      const propsStr = propSummaries ? ` | props: ${propSummaries}` : "";
      return `- ${t.name}${t.description ? `: ${t.description}` : ""}${propsStr}${requiredStr}`;
    })
    .join("\n");

  const { object } = await generateObject({
    model: openai(params.modelName) as any,
    schema,
    system:
      "You are an expert CLI agent. Choose the best tool and return minimal JSON args strictly matching the tool's input schema (use exact key names).",
    prompt: `User instruction: "${params.instruction}"
\nAvailable tools (with schema hints):\n${toolList}
\nReturn STRICT JSON for { toolName, arguments }.\n- toolName: one of the available tools above\n- arguments: object whose keys exactly match the chosen tool's input schema.\nIf no tool clearly matches, pick the closest tool and set arguments to {}.`,
  });

  return object as { toolName: string; arguments: Record<string, unknown> };
};

// Attempt to extract arguments for a specific tool using its JSON schema as guidance
const extractArgsForTool = async (params: {
  instruction: string;
  tool: McpTool;
  modelName: string;
  openaiApiKey?: string;
}): Promise<Record<string, unknown>> => {
  const { generateObject, createOpenAI } = await getAiSdk();
  const openai = createOpenAI(params.openaiApiKey ? ({ apiKey: params.openaiApiKey } as any) : ({} as any));

  const argSchema = z.record(z.any());
  const jsonSchema = params.tool.inputSchema ? JSON.stringify(params.tool.inputSchema, null, 2) : "{}";

  const { object } = await generateObject({
    model: openai(params.modelName) as any,
    schema: argSchema,
    system:
      "You extract arguments for a tool call. Output ONLY a JSON object whose keys exactly match the given JSON schema. Do not include extra keys.",
    prompt: `User instruction: "${params.instruction}"
\nChosen tool: ${params.tool.name}
\nInput JSON Schema:\n${jsonSchema}
\nReturn ONLY the JSON object for the arguments, with values parsed from the instruction. Use strings for numbers unless the schema clearly requires number.`,
  });

  return (object || {}) as Record<string, unknown>;
};

export const OPTIONS = async (req: NextRequest) => {
  return new Response(null, { status: 204, headers: corsHeaders(req) });
};

export const POST = async (req: NextRequest) => {
  const headers = corsHeaders(req);

  // Server-held secrets
  const smitheryServerUrlEnv = process.env.SMITHERY_SERVER_URL || "";
  const smitheryApiKeyEnv = process.env.SMITHERY_API_KEY || "";
  const smitheryProfileEnv = process.env.SMITHERY_PROFILE || "";
  const openaiApiKey = process.env.OPENAI_API_KEY;

  // eslint-disable-next-line no-console
  console.log("[mcp] POST /api/mcp", {
    serverUrlEnv: Boolean(smitheryServerUrlEnv),
    hasApiKey: Boolean(smitheryApiKeyEnv),
    profile: smitheryProfileEnv || undefined,
    hasOpenAIKey: Boolean(openaiApiKey),
  });

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "Invalid JSON body" }, headers);
  }

  const parsed = RequestSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.errors[0];
    return json(400, { error: `${first.path.join(".")}: ${first.message}` }, headers);
  }

  const { prompt, model, serverUrl } = parsed.data;
  // eslint-disable-next-line no-console
  console.log("[mcp] request", {
    prompt: truncate(prompt),
    model: model || "gpt-4o",
    serverUrl: serverUrl || smitheryServerUrlEnv,
  });

  // Connect to MCP
  let client: McpClient | undefined;
  try {
    const baseUrl = (serverUrl || smitheryServerUrlEnv || "").trim();
    const apiKey = (smitheryApiKeyEnv || "").trim();
    const profile = (smitheryProfileEnv || "").trim();
    if (!baseUrl || !apiKey) {
      return json(
        500,
        { error: "Server configuration error: set SMITHERY_SERVER_URL and SMITHERY_API_KEY or pass serverUrl" },
        headers
      );
    }
    client = await connectMcp(baseUrl, apiKey, profile || undefined);
  } catch (e) {
    return json(502, { error: "Failed to connect MCP server", detail: String(e) }, headers);
  }

  try {
    const toolsResponse = await client.listTools();
    const tools = Array.isArray(toolsResponse) ? toolsResponse : (toolsResponse as any)?.tools ?? [];
    if (!Array.isArray(tools) || tools.length === 0) {
      // eslint-disable-next-line no-console
      console.warn("[mcp] no tools available");
      return json(502, { error: "No tools available from MCP server" }, headers);
    }
    // eslint-disable-next-line no-console
    console.log("[mcp] tools", { count: tools.length });

    const modelName = model?.trim() || "gpt-4o";
    const { toolName, arguments: toolArgs } = await chooseToolAndArgs({
      instruction: prompt,
      tools: tools as any,
      modelName,
      openaiApiKey,
    });
    // eslint-disable-next-line no-console
    console.log("[mcp] selection", { toolName, argsKeys: Object.keys(toolArgs || {}) });
    // eslint-disable-next-line no-console
    console.log("[mcp] selection args", toolArgs || {});

    if (!tools.find((t) => t.name === toolName)) {
      return json(500, { error: `Model chose unknown tool: ${toolName}` }, headers);
    }

    // If arguments are missing required fields, try a schema-guided extraction pass
    let finalArgs = toolArgs || {};
    try {
      const selectedTool = (tools as any as McpTool[]).find((t) => t.name === toolName);
      const required = selectedTool?.inputSchema?.required || [];
      const isMissingRequired = required.some(
        (k) => (finalArgs as any)[k] === undefined || (finalArgs as any)[k] === null
      );
      if ((Object.keys(finalArgs).length === 0 || isMissingRequired) && selectedTool) {
        // eslint-disable-next-line no-console
        console.log("[mcp] extracting args via schema", { toolName, required });
        finalArgs = await extractArgsForTool({
          instruction: prompt,
          tool: selectedTool,
          modelName,
          openaiApiKey,
        });
        // eslint-disable-next-line no-console
        console.log("[mcp] extracted args", { argsKeys: Object.keys(finalArgs || {}) });
        // eslint-disable-next-line no-console
        console.log("[mcp] extracted args detail", finalArgs || {});
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("[mcp] arg extraction fallback failed", String(e));
    }

    // eslint-disable-next-line no-console
    console.log("[mcp] final args", finalArgs || {});
    // eslint-disable-next-line no-console
    console.log("[mcp] calling tool", { toolName });
    const result = await client.callTool({ name: toolName, arguments: finalArgs });

    // Best-effort friendly response shape similar to toolkit CLI
    if (typeof result === "string") {
      // eslint-disable-next-line no-console
      console.log("[mcp] result:string", { length: result.length });
      return new Response(result, {
        status: 200,
        headers: new Headers({
          ...Object.fromEntries(headers),
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store",
        }),
      });
    }

    if (result && typeof result === "object" && Array.isArray((result as any).content)) {
      const content = (result as any).content as Array<any>;
      const lines = content
        .map((c) => {
          if (typeof c === "string") return c;
          if (c && typeof c === "object") {
            if ((c as any).type === "text" && typeof (c as any).text === "string") return (c as any).text;
            if (typeof (c as any).text === "string") return (c as any).text;
          }
          return undefined;
        })
        .filter((v): v is string => Boolean(v));
      // eslint-disable-next-line no-console
      console.log("[mcp] result:content", { lines: lines.length });
      if (lines.length > 0) {
        return new Response(lines.join("\n"), {
          status: 200,
          headers: new Headers({
            ...Object.fromEntries(headers),
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-store",
          }),
        });
      }
    }

    // eslint-disable-next-line no-console
    console.log("[mcp] result:json");
    return json(200, result, headers);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("[mcp] execution failed", String(e));
    return json(500, { error: "MCP tool execution failed", detail: String(e) }, headers);
  } finally {
    await Promise.resolve(client?.close?.());
  }
};
