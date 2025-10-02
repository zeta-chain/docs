// Ambient module declarations for ESM-only libs used in API route
declare module "@modelcontextprotocol/sdk/client" {
  const Client: any;
  export { Client };
}

declare module "@modelcontextprotocol/sdk/client/streamableHttp.js" {
  const StreamableHTTPClientTransport: any;
  export { StreamableHTTPClientTransport };
}

declare module "ai" {
  export const generateObject: any;
}

declare module "@ai-sdk/openai" {
  export const createOpenAI: any;
}

declare module "@modelcontextprotocol/sdk/client/websocket" {
  const WebSocketClientTransport: any;
  export { WebSocketClientTransport };
}

declare module "@modelcontextprotocol/sdk/client/sse" {
  const SSEClientTransport: any;
  export { SSEClientTransport };
}
