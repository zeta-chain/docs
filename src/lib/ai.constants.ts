import { z } from "zod";

export const inputSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["assistant", "user", "system"]),
      content: z.string().min(1).max(1500),
    })
  ),
});
