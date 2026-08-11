export interface NewTokenEvent {
  address: string;
  name?: string;
  symbol?: string;
  createdAt: number;
}

export interface TokenScanner {
  start(onToken: (token: NewTokenEvent) => Promise<void>): Promise<void>;
  stop(): Promise<void>;
}

/** Adapter boundary for Pump.fun event ingestion.
 * Implement the provider-specific stream here; keep strategy and Telegram independent.
 */
export class PumpfunScanner implements TokenScanner {
  private running = false;
  async start(_onToken: (token: NewTokenEvent) => Promise<void>): Promise<void> {
    this.running = true;
    // Provider integration intentionally isolated from the strategy layer.
  }
  async stop(): Promise<void> { this.running = false; }
  isRunning(): boolean { return this.running; }
}
