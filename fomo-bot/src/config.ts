import 'dotenv/config';
import { z } from 'zod';

const schema = z.object({
  TELEGRAM_BOT_TOKEN: z.string().min(1),
  SOLANA_RPC_URL: z.string().url().default('https://api.mainnet-beta.solana.com'),
  PAPER_TRADING: z.coerce.boolean().default(true),
  FOMO_THRESHOLD: z.coerce.number().min(0).max(100).default(75),
  MAX_POSITION_SOL: z.coerce.number().positive().default(0.25),
  MAX_DAILY_LOSS_SOL: z.coerce.number().positive().default(1),
});

export const config = schema.parse({
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  SOLANA_RPC_URL: process.env.SOLANA_RPC_URL,
  PAPER_TRADING: process.env.PAPER_TRADING ?? 'true',
  FOMO_THRESHOLD: process.env.FOMO_THRESHOLD ?? '75',
  MAX_POSITION_SOL: process.env.MAX_POSITION_SOL ?? '0.25',
  MAX_DAILY_LOSS_SOL: process.env.MAX_DAILY_LOSS_SOL ?? '1',
});
