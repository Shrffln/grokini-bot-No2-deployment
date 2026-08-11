import { Connection } from '@solana/web3.js';
import { config } from '../config.js';

export const solana = new Connection(config.SOLANA_RPC_URL, 'confirmed');
