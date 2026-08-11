# FOMO Trading Bot Module

Solana/Pump.fun-style Telegram FOMO trading module integrated into the Grokini deployment repository.

## Current mode

Paper trading by default. Live execution is intentionally disabled until the scanner, safety filters, risk controls, and strategy are validated.

## Pipeline

Telegram → Token Scanner → Safety Filters → FOMO Score → Risk Manager → Paper Execution → Position Tracking

## Modules

- `src/config.ts` — validated environment configuration
- `src/strategy/fomo-score.ts` — momentum/FOMO scoring
- `src/risk/risk-manager.ts` — trade limits and score gating
- `src/execution/paper-trader.ts` — simulated execution
- `src/solana/connection.ts` — Solana RPC connection
- `src/scanner/pumpfun.ts` — scanner interface
- `src/bot/telegram.ts` — Telegram interface

Never commit private keys, seed phrases, Telegram tokens, or RPC secrets.
