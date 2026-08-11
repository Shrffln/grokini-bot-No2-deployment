export interface PaperPosition { id: string; tokenAddress: string; amountSol: number; entryPrice: number; openedAt: string }

export class PaperTrader {
  private positions = new Map<string, PaperPosition>();

  buy(tokenAddress: string, amountSol: number, entryPrice: number): PaperPosition {
    const position: PaperPosition = {
      id: crypto.randomUUID(), tokenAddress, amountSol, entryPrice,
      openedAt: new Date().toISOString(),
    };
    this.positions.set(position.id, position);
    return position;
  }

  list(): PaperPosition[] { return [...this.positions.values()]; }
}
