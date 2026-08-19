import React, { useState } from 'react';
import { ShieldCheck, Zap, Lock, Calculator, CheckCircle2, AlertTriangle, ArrowRight, X } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';
import { StakingVault } from '../types';

const allVaults: StakingVault[] = [
 {
  id: 'babylon-btc',
  name: 'Babylon BTC Prime Staking',
  symbol: 'BTC',
  asset: 'BTC',
  apy: 18.4,
  tvl: '$840,500,000',
  userStaked: 0.5,
  earnedRewards: 0.0142,
  riskScore: 'Low',
  lockDays: 30,
  protocol: 'Babylon Native Protocol',
  description: 'Secures PoS chains directly via Bitcoin Taproot time-lock scripts. Zero bridge collateral risk.',
  iconBg: 'bg-[#EA580C]/20 text-[#F7931A]',
 },
 {
  id: 'stacks-sbtc',
  name: 'Stacks sBTC Yield Pool',
  symbol: 'sBTC',
  asset: 'sBTC',
  apy: 14.2,
  tvl: '$420,200,000',
  userStaked: 1.25,
  earnedRewards: 0.0510,
  riskScore: 'Low-Med',
  lockDays: 14,
  protocol: 'Stacks L2 Smart Contracts',
  description: 'Trustless 1:1 Bitcoin peg earning native yield via Proof of Transfer consensus rewards.',
  iconBg: 'bg-slate-200 text-slate-200',
 },
 {
  id: 'runes-liquidity',
  name: 'UNCOMMON•GOODS Runes Pool',
  symbol: 'RUNES',
  asset: 'RUNES',
  apy: 28.6,
  tvl: '$210,800,000',
  userStaked: 25000,
  earnedRewards: 1850,
  riskScore: 'Medium',
  lockDays: 7,
  protocol: 'Runes Protocol Engine',
  description: 'Provide dual-sided liquidity for top Runes tokens with automated fee compounding.',
  iconBg: 'bg-[#EA580C]/30 text-[#EA580C]',
 },
 {
  id: 'lightning-hash',
  name: 'Lightning Hashrate Vault',
  symbol: 'L2-BTC',
  asset: 'L2-BTC',
  apy: 22.1,
  tvl: '$315,000,000',
  userStaked: 0.0,
  earnedRewards: 0.0,
  riskScore: 'Medium',
  lockDays: 60,
  protocol: 'Lightning Hashrate Pool',
  description: 'Tokenized hash power routing Lightning channel liquidity with daily satoshi rewards.',
  iconBg: 'bg-sky-500/20 text-sky-500',
 },
];

export const VaultsView: React.FC = () => {
 // Calculator state
 const [calcAmount, setCalcAmount] = useState<number>(1.0);
 const [calcDays, setCalcDays] = useState<number>(30);
 const [calcApy, setCalcApy] = useState<number>(18.4);

 // Selected Vault for Staking Modal
 const [selectedVault, setSelectedVault] = useState<StakingVault | null>(null);
 const [stakeAmount, setStakeAmount] = useState<string>('0.1');
 const [isStaking, setIsStaking] = useState(false);
 const [stakeStep, setStakeStep] = useState<'input' | 'confirming' | 'success'>('input');

 const btcPrice = 98450;
 const projectedReturnBtc = (calcAmount * (calcApy / 100) * (calcDays / 365));
 const projectedReturnUsd = projectedReturnBtc * btcPrice;

 const handleOpenStakeModal = (vault: StakingVault) => {
  setSelectedVault(vault);
  setStakeStep('input');
  setIsStaking(true);
 };

 const handleConfirmStake = () => {
  setStakeStep('confirming');
  setTimeout(() => {
   setStakeStep('success');
  }, 1500);
 };

 return (
  <div className="space-y-12 pb-20">
   {/* Title */}
   <div className="pt-8">
    <Badge variant="active">Bitcoin L2 Staking</Badge>
    <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 tracking-tight mt-2">
     L2 Yield Vaults
    </h2>
    <p className="font-body text-slate-600 text-base max-w-2xl mt-1">
     Select non-custodial yield strategies engineered on Bitcoin Script locktime rules and zero-knowledge proofs.
    </p>
   </div>

   {/* Yield Calculator Component */}
   <section className="bg-gradient-to-r from-[#0F1115] via-[#181B22] to-[#0F1115] border border-[#F7931A]/40 rounded-2xl p-6 md:p-8 corner-accents relative overflow-hidden">
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
     <div className="flex-1 space-y-4">
      <div className="flex items-center gap-2 text-[#F7931A]">
       <Calculator className="w-5 h-5" />
       <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-900">
        Interactive Staking Calculator
       </h3>
      </div>
      <p className="font-body text-xs md:text-sm text-slate-600">
       Simulate your compound earnings across different lockup periods and yield strategies.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
       <div>
        <label className="font-mono text-xs text-slate-600 uppercase block mb-1">Deposit Amount (BTC)</label>
        <Input
         type="number"
         value={calcAmount}
         onChange={(e) => setCalcAmount(Math.max(0.001, parseFloat(e.target.value) || 0))}
         step="0.1"
         min="0.001"
        />
       </div>

       <div>
        <label className="font-mono text-xs text-slate-600 uppercase block mb-1">Target Strategy APY</label>
        <select
         value={calcApy}
         onChange={(e) => setCalcApy(parseFloat(e.target.value))}
         className="w-full bg-black/60 border-b-2 border-slate-300 text-slate-900 font-mono text-sm h-12 px-4 rounded-t-lg focus:border-[#F7931A] focus:outline-none"
        >
         <option value={18.4}>Babylon Prime (18.4% APY)</option>
         <option value={14.2}>Stacks sBTC (14.2% APY)</option>
         <option value={28.6}>UNCOMMON Runes (28.6% APY)</option>
         <option value={22.1}>Lightning Hash (22.1% APY)</option>
        </select>
       </div>
      </div>

      {/* Lockup Duration Slider */}
      <div className="space-y-2 pt-2">
       <div className="flex justify-between font-mono text-xs text-slate-600">
        <span>Lockup Period: <strong className="text-slate-200">{calcDays} Days</strong></span>
        <span>Max: 365 Days</span>
       </div>
       <input
        type="range"
        min="7"
        max="365"
        step="1"
        value={calcDays}
        onChange={(e) => setCalcDays(parseInt(e.target.value))}
        className="w-full accent-[#F7931A] bg-black/60 h-2 rounded-lg cursor-pointer"
       />
       <div className="flex justify-between text-[10px] font-mono text-slate-600/60">
        <span>7d</span>
        <span>30d</span>
        <span>90d</span>
        <span>180d</span>
        <span>365d</span>
       </div>
      </div>
     </div>

     {/* Calculator Yield Output Card */}
     <div className="w-full lg:w-80 bg-black/70 border border-slate-200 rounded-2xl p-6 space-y-4 font-mono text-center shadow-md">
      <span className="text-xs text-slate-600 uppercase">Projected Net Earnings</span>
      <div>
       <p className="font-heading font-bold text-3xl text-slate-200">
        +{projectedReturnBtc.toFixed(4)} BTC
       </p>
       <p className="text-xs text-sky-500 mt-1 font-semibold">
        ≈ ${projectedReturnUsd.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD
       </p>
      </div>
      <div className="border-t border-slate-200 pt-3 text-[11px] text-slate-600 text-left space-y-1">
       <div className="flex justify-between">
        <span>Principal:</span>
        <span className="text-slate-900">{calcAmount} BTC</span>
       </div>
       <div className="flex justify-between">
        <span>Effective Yield:</span>
        <span className="text-[#F7931A]">{((projectedReturnBtc / calcAmount) * 100).toFixed(2)}%</span>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* Vault Grid */}
   <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {allVaults.map((vault) => (
     <Card key={vault.id} variant="standard" cornerAccents={true}>
      <CardHeader>
       <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
         <div className={`p-3.5 rounded-xl ${vault.iconBg} font-mono font-bold text-base`}>
          {vault.symbol}
         </div>
         <div>
          <CardTitle>{vault.name}</CardTitle>
          <span className="font-mono text-xs text-slate-600">{vault.protocol}</span>
         </div>
        </div>
        <Badge variant={vault.riskScore === 'Low' ? 'success' : 'gold'}>
         {vault.riskScore} Risk
        </Badge>
       </div>
       <CardDescription>{vault.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
       <div className="grid grid-cols-3 gap-3 bg-black/50 p-4 rounded-xl border border-slate-200 font-mono text-center">
        <div>
         <p className="text-[10px] text-slate-600 uppercase">Current APY</p>
         <p className="font-heading font-bold text-lg text-slate-200 mt-0.5">{vault.apy}%</p>
        </div>
        <div>
         <p className="text-[10px] text-slate-600 uppercase">TVL</p>
         <p className="font-heading font-semibold text-sm text-slate-900 mt-0.5">{vault.tvl}</p>
        </div>
        <div>
         <p className="text-[10px] text-slate-600 uppercase">Lockup</p>
         <p className="font-heading font-semibold text-sm text-slate-900 mt-0.5">{vault.lockDays} Days</p>
        </div>
       </div>

       {vault.userStaked > 0 && (
        <div className="bg-[#EA580C]/10 border border-[#EA580C]/30 p-3 rounded-xl flex items-center justify-between font-mono text-xs">
         <span className="text-slate-600">Your Staked Position:</span>
         <span className="text-slate-900 font-bold">{vault.userStaked} {vault.symbol} (Earned: +{vault.earnedRewards} {vault.symbol})</span>
        </div>
       )}
      </CardContent>

      <CardFooter>
       <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
        <ShieldCheck className="w-4 h-4 text-[#F7931A]" />
        <span>Audited Script</span>
       </div>
       <Button
        variant="primary"
        size="md"
        onClick={() => handleOpenStakeModal(vault)}
        icon={<Zap className="w-4 h-4" />}
       >
        Stake {vault.asset}
       </Button>
      </CardFooter>
     </Card>
    ))}
   </section>

   {/* Interactive Staking Modal */}
   {isStaking && selectedVault && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
     <div className="bg-[#0F1115] border border-[#F7931A]/60 rounded-2xl p-6 md:p-8 max-w-md w-full relative space-y-6 shadow-md corner-accents">
      {/* Modal Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
       <div className="flex items-center gap-2">
        <Lock className="w-5 h-5 text-[#F7931A]" />
        <h3 className="font-heading font-bold text-xl text-slate-900">
         Stake into {selectedVault.name}
        </h3>
       </div>
       <button 
        onClick={() => setIsStaking(false)}
        className="text-slate-600 hover:text-slate-900 transition-colors"
       >
        <X className="w-5 h-5" />
       </button>
      </div>

      {stakeStep === 'input' && (
       <div className="space-y-4">
        <p className="font-body text-xs text-slate-600">
         Enter the amount of {selectedVault.asset} you wish to stake. Your deposit will be locked for {selectedVault.lockDays} days.
        </p>

        <Input
         label={`Stake Amount (${selectedVault.asset})`}
         value={stakeAmount}
         onChange={(e) => setStakeAmount(e.target.value)}
         type="number"
         step="0.01"
         rightElement={<span className="font-mono text-xs text-[#F7931A] font-bold">MAX</span>}
        />

        <div className="bg-black/50 p-4 rounded-xl border border-slate-200 space-y-2 font-mono text-xs">
         <div className="flex justify-between text-slate-600">
          <span>Expected APY:</span>
          <span className="text-slate-200 font-bold">{selectedVault.apy}%</span>
         </div>
         <div className="flex justify-between text-slate-600">
          <span>Est. Daily Reward:</span>
          <span className="text-sky-500">+{(parseFloat(stakeAmount || '0') * (selectedVault.apy / 100) / 365).toFixed(6)} {selectedVault.symbol}</span>
         </div>
         <div className="flex justify-between text-slate-600">
          <span>Network Fee:</span>
          <span className="text-slate-900">12 sat/vB (≈ $1.20)</span>
         </div>
        </div>

        <Button
         variant="primary"
         fullWidth
         size="lg"
         onClick={handleConfirmStake}
         icon={<Zap className="w-4 h-4" />}
        >
         Confirm Bitcoin Lock Script
        </Button>
       </div>
      )}

      {stakeStep === 'confirming' && (
       <div className="py-8 text-center space-y-4 font-mono">
        <div className="w-12 h-12 mx-auto border-2 border-[#F7931A] border-t-transparent rounded-full animate-spin" />
        <h4 className="font-heading font-semibold text-lg text-slate-900">Broadcasting Bitcoin Taproot Script...</h4>
        <p className="text-xs text-slate-600">Signing transaction with Unisat / Xverse wallet keys.</p>
       </div>
      )}

      {stakeStep === 'success' && (
       <div className="py-6 text-center space-y-4">
        <div className="w-14 h-14 mx-auto bg-sky-500/20 border border-sky-500 rounded-full flex items-center justify-center text-sky-500">
         <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="font-heading font-bold text-2xl text-slate-900">Staking Confirmed!</h4>
        <p className="font-body text-xs text-slate-600">
         You have locked <strong className="text-slate-900">{stakeAmount} {selectedVault.asset}</strong> into {selectedVault.name}. Rewards will begin accumulating in the next block.
        </p>
        <div className="bg-black/60 p-3 rounded-xl border border-slate-200 font-mono text-xs text-[#F7931A]">
         Tx Hash: 0x89fa21...384b
        </div>
        <Button variant="gold" fullWidth onClick={() => setIsStaking(false)}>
         Close & View Position
        </Button>
       </div>
      )}
     </div>
    </div>
   )}
  </div>
 );
};
