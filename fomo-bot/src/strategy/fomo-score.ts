export interface TokenSnapshot {
  liquiditySol: number;
  buyCount: number;
  sellCount: number;
  uniqueBuyers: number;
  transactionsPerMinute: number;
  holderConcentrationPct: number;
}

export interface FomoScore { total: number; reasons: string[] }

export function calculateFomoScore(token: TokenSnapshot): FomoScore {
  let total = 0;
  const reasons: string[] = [];
  const liquidity = Math.min(20, token.liquiditySol / 2);
  const buys = Math.min(20, token.buyCount / 10);
  const ratio = token.sellCount === 0 ? 2 : token.buyCount / token.sellCount;
  const pressure = Math.min(15, Math.max(0, ratio * 5));
  const buyers = Math.min(10, token.uniqueBuyers / 10);
  const velocity = Math.min(15, token.transactionsPerMinute / 10);
  const distribution = Math.max(0, Math.min(20, (100 - token.holderConcentrationPct) / 5));
  total = liquidity + buys + pressure + buyers + velocity + distribution;
  if (liquidity >= 15) reasons.push('healthy liquidity');
  if (buys >= 15) reasons.push('strong buy activity');
  if (ratio >= 2) reasons.push('buy pressure');
  if (buyers >= 7) reasons.push('growing buyer base');
  if (velocity >= 10) reasons.push('high transaction velocity');
  if (distribution >= 12) reasons.push('better holder distribution');
  return { total: Math.round(Math.min(100, total)), reasons };
}
