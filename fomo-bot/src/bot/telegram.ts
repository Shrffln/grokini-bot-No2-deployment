import { Telegraf } from 'telegraf';
import { config } from '../config.js';
import { PaperTrader } from '../execution/paper-trader.js';

export function createTelegramBot(trader: PaperTrader): Telegraf {
  const bot = new Telegraf(config.TELEGRAM_BOT_TOKEN);
  bot.start((ctx) => ctx.reply(`🔥 FOMO BOT\nMode: ${config.PAPER_TRADING ? 'PAPER TRADING' : 'LIVE'}\nUse /status to inspect the bot.`));
  bot.command('status', (ctx) => ctx.reply(`🟢 Online\nMode: ${config.PAPER_TRADING ? 'PAPER' : 'LIVE'}\nPositions: ${trader.list().length}`));
  bot.command('positions', (ctx) => {
    const positions = trader.list();
    if (!positions.length) return ctx.reply('No open paper positions.');
    return ctx.reply(positions.map(p => `• ${p.tokenAddress} — ${p.amountSol} SOL @ ${p.entryPrice}`).join('\n'));
  });
  return bot;
}
