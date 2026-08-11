export interface RiskLimits { maxPositionSol: number; maxDailyLossSol: number; minFomoScore: number }
export interface TradeRequest { amountSol: number; fomoScore: number; dailyLossSol: number }

export function validateTrade(request: TradeRequest, limits: RiskLimits): string[] {
  const errors: string[] = [];
  if (request.amountSol <= 0) errors.push('trade amount must be positive');
  if (request.amountSol > limits.maxPositionSol) errors.push('position exceeds maximum size');
  if (request.dailyLossSol >= limits.maxDailyLossSol) errors.push('daily loss limit reached');
  if (request.fomoScore < limits.minFomoScore) errors.push('FOMO score below threshold');
  return errors;
}
