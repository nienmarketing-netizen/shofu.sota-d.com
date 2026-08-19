import React, { useState } from 'react';
import { ShieldCheck, Cpu, ArrowUpRight, Zap, RefreshCw, Activity, Layers, Lock, Flame } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { StakingVault, BlockExplorerItem } from '../types';

interface DashboardViewProps {
 onNavigateToVaults: () => void;
 onNavigateToSwap: () => void;
 onNavigateToBridge: () => void;
}

const mockVaultsPreview: StakingVault[] = [
 {
  id: 'babylon-btc',
  name: 'Babylon BTC Prime Vault',
  symbol: 'BTC',
  asset: 'BTC',
  apy: 18.4,
  tvl: '$840.5M',
  userStaked: 0.45,
  earnedRewards: 0.012,
  riskScore: 'Low',
  lockDays: 30,
  protocol: 'Babylon Staking Protocol',
  description: 'Direct Native Bitcoin Staking securing PoS chains with zero bridge risk.',
  iconBg: 'bg-[#EA580C]/20 text-[#F7931A]',
 },
 {
  id: 'sbtc-yield',
  name: 'Stacks sBTC Yield Pool',
  symbol: 'sBTC',
  asset: 'sBTC',
  apy: 14.2,
  tvl: '$420.2M',
  userStaked: 1.2,
  earnedRewards: 0.048,
  riskScore: 'Low-Med',
  lockDays: 14,
  protocol: 'Stacks L2 Smart Contracts',
  description: 'Trustless 1:1 Bitcoin peg earning native yield via Proof of Transfer.',
  iconBg: 'bg-slate-200 text-slate-200',
 },
 {
  id: 'runes-[#1]',
  name: 'UNCOMMON•GOODS Runes Vault',
  symbol: 'RUNES',
  asset: 'RUNES',
  apy: 28.6,
  tvl: '$210.8M',
  userStaked: 10000,
  earnedRewards: 850,
  riskScore: 'Medium',
  lockDays: 7,
  protocol: 'Runes Protocol L2 Engine',
  description: 'High-velocity Runes liquidity vault with automated yield compounding.',
  iconBg: 'bg-[#EA580C]/30 text-[#EA580C]',
 },
];

const mockBlocks: BlockExplorerItem[] = [
 { height: 894120, hash: '00000000000000000002a89f8d1c2e4f', txCount: 3842, miner: 'Foundry USA', reward: '3.125 BTC', timeAgo: '2 mins ago' },
 { height: 894119, hash: '000000000000000000019b8e7f6a5d4c', txCount: 2910, miner: 'AntPool', reward: '3.125 BTC', timeAgo: '11 mins ago' },
 { height: 894118, hash: '00000000000000000004e3d2c1b0a9f8', txCount: 4120, miner: 'F2Pool', reward: '3.125 BTC', timeAgo: '18 mins ago' },
 { height: 894117, hash: '00000000000000000003f2e1d0c9b8a7', txCount: 3450, miner: 'Binance Pool', reward: '3.125 BTC', timeAgo: '29 mins ago' },
];

export const DashboardView: React.FC<DashboardViewProps> = ({
 onNavigateToVaults,
 onNavigateToSwap,
 onNavigateToBridge,
}) => {
 const [refreshing, setRefreshing] = useState(false);

 const handleRefreshData = () => {
  setRefreshing(true);
  setTimeout(() => setRefreshing(false), 800);
 };

 return (
  <div className="space-y-16 pb-20">
   {/* Top Banner & Quick Actions */}
   <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
    <div>
     <div className="flex items-center gap-2">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
       Protocol Dashboard
      </h2>
      <Badge variant="active">Live Telemetry</Badge>
     </div>
     <p className="font-body text-slate-600 text-sm md:text-base mt-1">
      Real-time status of Bitcoin L2 liquidity, yield vaults, and blockchain mempool.
     </p>
    </div>

    <div className="flex items-center gap-3">
     <Button
      variant="outline"
      size="sm"
      onClick={handleRefreshData}
      icon={<RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />}
     >
      Refresh Feed
     </Button>
     <Button
      variant="gold"
      size="sm"
      onClick={onNavigateToVaults}
      icon={<Zap className="w-4 h-4" />}
     >
      Deposit & Stake
     </Button>
    </div>
   </div>

   {/* Featured Yield Vaults */}
   <section className="space-y-6">
    <div className="flex items-center justify-between">
     <div>
      <h3 className="font-heading font-bold text-2xl text-slate-900 flex items-center gap-2">
       <Flame className="w-6 h-6 text-[#EA580C]" />
       High-Yield L2 Bitcoin Vaults
      </h3>
      <p className="font-body text-sm text-slate-600">
       Automated smart strategies backed directly by Bitcoin L1 finality scripts.
      </p>
     </div>

     <Button variant="link" onClick={onNavigateToVaults} icon={<ArrowUpRight className="w-4 h-4" />}>
      View All 8 Vaults
     </Button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {mockVaultsPreview.map((vault) => (
      <Card key={vault.id} variant="standard" cornerAccents={true}>
       <CardHeader>
        <div className="flex items-center justify-between mb-2">
         <div className={`p-3 rounded-xl ${vault.iconBg} font-mono font-bold text-sm`}>
          {vault.asset}
         </div>
         <Badge variant={vault.riskScore === 'Low' ? 'success' : 'gold'}>
          {vault.riskScore} Risk
         </Badge>
        </div>
        <CardTitle>{vault.name}</CardTitle>
        <CardDescription>{vault.description}</CardDescription>
       </CardHeader>

       <CardContent className="space-y-4">
        <div className="bg-black/50 p-4 rounded-xl border border-slate-200 space-y-2 font-mono">
         <div className="flex justify-between text-xs">
          <span className="text-slate-600">Target APY</span>
          <span className="text-slate-200 font-bold text-sm">{vault.apy}%</span>
         </div>
         <div className="flex justify-between text-xs">
          <span className="text-slate-600">Total Value Locked</span>
          <span className="text-slate-900 font-semibold">{vault.tvl}</span>
         </div>
         <div className="flex justify-between text-xs">
          <span className="text-slate-600">Lock Period</span>
          <span className="text-slate-900">{vault.lockDays} Days</span>
         </div>
        </div>
       </CardContent>

       <CardFooter>
        <span className="font-mono text-xs text-slate-600">{vault.protocol}</span>
        <Button variant="primary" size="sm" onClick={onNavigateToVaults}>
         Stake {vault.asset}
        </Button>
       </CardFooter>
      </Card>
     ))}
    </div>
   </section>

   {/* Protocol Architecture: "How It Works" Blockchain Ledger Timeline */}
   <section className="bg-[#0F1115] border border-slate-200 rounded-2xl p-8 relative overflow-hidden">
    {/* Subtle Background Glow */}
    <div className="absolute top-0 right-0 w-80 h-80 bg-[#F7931A] opacity-5 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-3xl mb-8">
     <Badge variant="active">Cryptographic Execution</Badge>
     <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mt-2">
      How SatoshiFi Secures Your Bitcoin Yield
     </h3>
     <p className="font-body text-slate-600 text-sm md:text-base mt-1">
      Built on non-custodial Bitcoin Taproot scripts and zero-knowledge validity proofs.
     </p>
    </div>

    {/* Timeline Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
     {/* Connecting Line behind nodes (desktop) */}
     <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EA580C] via-[#F7931A] to-[#FFD600] opacity-40 -translate-y-6 z-0" />

     {[
      { step: '01', title: 'Taproot Deposit', desc: 'Lock native BTC directly into an immutable Bitcoin time-locked contract.', icon: <Lock className="w-5 h-5 text-[#F7931A]" /> },
      { step: '02', title: 'L2 Minting', desc: 'Receive 1:1 liquid sBTC backed by mainnet cryptographic proofs.', icon: <Layers className="w-5 h-5 text-slate-200" /> },
      { step: '03', title: 'Yield Generation', desc: 'Deploy assets into Babylon validator staking and Runes pools.', icon: <Zap className="w-5 h-5 text-[#EA580C]" /> },
      { step: '04', title: 'Native Settlement', desc: 'Withdraw yield and principal back to your L1 Bitcoin address anytime.', icon: <ShieldCheck className="w-5 h-5 text-sky-500" /> },
     ].map((item, index) => (
      <div 
       key={item.step} 
       className="relative z-10 bg-white border border-slate-200 rounded-xl p-6 corner-accents hover:border-[#F7931A]/60 transition-all duration-300"
      >
       <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-[#EA580C]/10 border border-[#EA580C]/30 rounded-lg">
         {item.icon}
        </div>
        <span className="font-mono font-bold text-xs text-[#F7931A] bg-[#EA580C]/20 px-2 py-0.5 rounded">
         STEP {item.step}
        </span>
       </div>
       <h4 className="font-heading font-semibold text-lg text-slate-900 mb-1">{item.title}</h4>
       <p className="font-body text-xs text-slate-600 leading-relaxed">{item.desc}</p>
      </div>
     ))}
    </div>
   </section>

   {/* Block Explorer & Live Mempool Monitor Grid */}
   <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
    {/* Left: Live Blocks */}
    <div className="lg:col-span-7 bg-[#0F1115] border border-slate-200 rounded-2xl p-6 space-y-4">
     <div className="flex items-center justify-between border-b border-slate-200 pb-4">
      <div className="flex items-center gap-2">
       <Activity className="w-5 h-5 text-[#F7931A]" />
       <h3 className="font-heading font-bold text-xl text-slate-900">Bitcoin Mainnet Recent Blocks</h3>
      </div>
      <span className="font-mono text-xs text-slate-600">Target Time: ~10m</span>
     </div>

     <div className="space-y-3 font-mono text-xs">
      {mockBlocks.map((block) => (
       <div 
        key={block.height} 
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 bg-black/40 border border-slate-200 rounded-xl hover:border-[#F7931A]/40 transition-all"
       >
        <div className="flex items-center gap-3">
         <div className="px-2.5 py-1 bg-[#EA580C]/20 text-[#F7931A] font-bold rounded border border-[#EA580C]/40">
          #{block.height}
         </div>
         <div>
          <p className="text-slate-900 font-semibold truncate max-w-[180px]">{block.hash}</p>
          <p className="text-slate-600 text-[11px]">{block.miner} • {block.txCount} Txs</p>
         </div>
        </div>

        <div className="mt-2 sm:mt-0 text-left sm:text-right">
         <p className="text-slate-200 font-bold">{block.reward}</p>
         <p className="text-slate-600 text-[10px]">{block.timeAgo}</p>
        </div>
       </div>
      ))}
     </div>
    </div>

    {/* Right: Network Health & Quick Swap Widget */}
    <div className="lg:col-span-5 flex flex-col gap-6">
     {/* Mempool Gas Gauge */}
     <div className="bg-[#0F1115] border border-slate-200 rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-between">
       <h4 className="font-heading font-semibold text-lg text-slate-900 flex items-center gap-2">
        <Cpu className="w-5 h-5 text-slate-200" />
        Mempool Gas Rates
       </h4>
       <Badge variant="gold">Optimal</Badge>
      </div>

      <div className="grid grid-cols-3 gap-3 font-mono text-center">
       <div className="bg-black/50 p-3 rounded-xl border border-slate-200">
        <p className="text-[10px] text-slate-600">Low Priority</p>
        <p className="text-sm font-bold text-sky-500 mt-1">8 sat/vB</p>
        <p className="text-[9px] text-slate-600">$0.85</p>
       </div>

       <div className="bg-black/50 p-3 rounded-xl border border-[#F7931A]/40 shadow-md">
        <p className="text-[10px] text-[#F7931A] font-bold">Standard</p>
        <p className="text-sm font-bold text-slate-900 mt-1">12 sat/vB</p>
        <p className="text-[9px] text-slate-600">$1.28</p>
       </div>

       <div className="bg-black/50 p-3 rounded-xl border border-slate-200">
        <p className="text-[10px] text-slate-600">Fast L1</p>
        <p className="text-sm font-bold text-slate-200 mt-1">18 sat/vB</p>
        <p className="text-[9px] text-slate-600">$1.92</p>
       </div>
      </div>
     </div>

     {/* Quick Action Navigation Card */}
     <div className="bg-gradient-to-br from-[#0F1115] to-[#181B22] border border-[#F7931A]/40 rounded-2xl p-6 space-y-4 corner-accents">
      <h4 className="font-heading font-bold text-xl text-slate-900">Need L2 Liquidity?</h4>
      <p className="font-body text-xs text-slate-600 leading-relaxed">
       Bridge native BTC instantly to SatoshiFi L2 to participate in Runes token trading and high-yield staking.
      </p>
      <div className="flex items-center gap-3 pt-2">
       <Button variant="primary" size="sm" onClick={onNavigateToBridge} fullWidth>
        Bridge BTC to L2
       </Button>
       <Button variant="outline" size="sm" onClick={onNavigateToSwap} fullWidth>
        Runes Swap
       </Button>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
};
