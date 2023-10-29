import "dotenv/config"
import { z } from "zod"

export const env = z.object({
  DISCORD_CLIENT_ID: z.string().min(1, "Faltando a propriedade DISCORD_CLIENT_ID no .env"),
  DISCORD_CLIENT_TOKEN: z.string().min(1, "Faltando a propriedade DISCORD_CLIENT_TOKEN no .env"),
}).parse(process.env)