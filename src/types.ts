export interface StakingVault {
 id: string;
 name: string;
 symbol: string;
 asset: 'BTC' | 'sBTC' | 'RUNES' | 'L2-BTC';
 apy: number;
 tvl: string;
 userStaked: number;
 earnedRewards: number;
 riskScore: 'Low' | 'Medium' | 'Low-Med';
 lockDays: number;
 protocol: string;
 description: string;
 iconBg: string;
}

export interface SwapToken {
 symbol: string;
 name: string;
 balance: number;
 priceUsd: number;
 change24h: number;
 iconColor: string;
}

export interface BridgeTx {
 id: string;
 txHash: string;
 fromChain: string;
 toChain: string;
 amount: string;
 status: 'Completed' | 'In Mempool' | 'Confirming';
 timestamp: string;
 confirmations: string;
}

export interface BlockExplorerItem {
 height: number;
 hash: string;
 txCount: number;
 miner: string;
 reward: string;
 timeAgo: string;
}

export interface DesignToken {
 category: string;
 name: string;
 value: string;
 cssVar?: string;
 description: string;
 colorHex?: string;
}

export interface AiChatMessage {
 id: string;
 sender: 'user' | 'assistant';
 text: string;
 timestamp: string;
 topic?: string;
}
