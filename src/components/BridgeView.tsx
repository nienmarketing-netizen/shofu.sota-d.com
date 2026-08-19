import React, { useState } from 'react';
import { Bitcoin, ArrowRight, ShieldCheck, CheckCircle2, Clock, RefreshCw, Layers } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';
import { BridgeTx } from '../types';

const initialBridgeTxs: BridgeTx[] = [
 { id: '1', txHash: '0x8f2a...129c', fromChain: 'Bitcoin L1 Mainnet', toChain: 'SatoshiFi L2', amount: '0.25 BTC', status: 'Completed', timestamp: '12 mins ago', confirmations: '6/6' },
 { id: '2', txHash: '0x3e10...94fa', fromChain: 'Bitcoin L1 Mainnet', toChain: 'SatoshiFi L2', amount: '1.50 BTC', status: 'In Mempool', timestamp: '2 mins ago', confirmations: '2/6' },
 { id: '3', txHash: '0x71ba...440c', fromChain: 'SatoshiFi L2', toChain: 'Bitcoin L1 Mainnet', amount: '0.10 BTC', status: 'Completed', timestamp: '1 hour ago', confirmations: '6/6' },
];

export const BridgeView: React.FC = () => {
 const [bridgeAmount, setBridgeAmount] = useState('0.1');
 const [recipientAddress, setRecipientAddress] = useState('bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh');
 const [direction, setDirection] = useState<'L1-to-L2' | 'L2-to-L1'>('L1-to-L2');
 const [isBridging, setIsBridging] = useState(false);
 const [txs, setTxs] = useState<BridgeTx[]>(initialBridgeTxs);

 const handleStartBridge = () => {
  setIsBridging(true);
  setTimeout(() => {
   const newTx: BridgeTx = {
    id: Date.now().toString(),
    txHash: `0x${Math.random().toString(16).substring(2, 8)}...${Math.random().toString(16).substring(2, 6)}`,
    fromChain: direction === 'L1-to-L2' ? 'Bitcoin L1 Mainnet' : 'SatoshiFi L2',
    toChain: direction === 'L1-to-L2' ? 'SatoshiFi L2' : 'Bitcoin L1 Mainnet',
    amount: `${bridgeAmount} BTC`,
    status: 'In Mempool',
    timestamp: 'Just now',
    confirmations: '1/6',
   };
   setTxs([newTx, ...txs]);
   setIsBridging(false);
  }, 1500);
 };

 return (
  <div className="space-y-12 pb-20">
   {/* Title */}
   <div className="pt-8">
    <Badge variant="active">Non-Custodial Script Lock</Badge>
    <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 tracking-tight mt-2">
     Bitcoin Teleport Bridge
    </h2>
    <p className="font-body text-slate-600 text-base max-w-2xl mt-1">
     Bridge native Bitcoin directly into L2 sBTC with zero central custodians, verified on-chain via zk-SNARK time-locks.
    </p>
   </div>

   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    {/* Left: Bridge Controls Card */}
    <div className="lg:col-span-7 bg-[#0F1115] border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 corner-accents relative shadow-md">
     {/* Direction Toggle */}
     <div className="flex items-center justify-between p-1 bg-black/60 border border-slate-200 rounded-xl font-heading text-xs font-semibold">
      <button
       onClick={() => setDirection('L1-to-L2')}
       className={`flex-1 py-2.5 rounded-lg transition-all ${
        direction === 'L1-to-L2' 
         ? 'bg-gradient-to-r from-[#EA580C] to-[#F7931A] text-white shadow-md' 
         : 'text-slate-600 hover:text-slate-900'
       }`}
      >
       Deposit: Bitcoin L1 → SatoshiFi L2
      </button>
      <button
       onClick={() => setDirection('L2-to-L1')}
       className={`flex-1 py-2.5 rounded-lg transition-all ${
        direction === 'L2-to-L1' 
         ? 'bg-gradient-to-r from-[#EA580C] to-[#F7931A] text-white shadow-md' 
         : 'text-slate-600 hover:text-slate-900'
       }`}
      >
       Withdraw: SatoshiFi L2 → Bitcoin L1
      </button>
     </div>

     {/* Amount Input */}
     <div className="space-y-4">
      <Input
       label="Bridge Amount (BTC)"
       value={bridgeAmount}
       onChange={(e) => setBridgeAmount(e.target.value)}
       type="number"
       step="0.01"
       rightElement={
        <span className="font-mono text-xs text-[#F7931A] font-bold">
         ≈ ${(parseFloat(bridgeAmount || '0') * 98450).toLocaleString()} USD
        </span>
       }
      />

      <Input
       label="Recipient Address (Taproot/Native Segwit)"
       value={recipientAddress}
       onChange={(e) => setRecipientAddress(e.target.value)}
       placeholder="bc1p..."
      />
     </div>

     {/* Verification Protocol Box */}
     <div className="bg-black/50 border border-slate-200 p-4 rounded-xl space-y-2 font-mono text-xs">
      <div className="flex justify-between text-slate-600">
       <span>Lock Protocol:</span>
       <span className="text-slate-900">Bitcoin Taproot DLC Contract</span>
      </div>
      <div className="flex justify-between text-slate-600">
       <span>Mempool Confirmation:</span>
       <span className="text-slate-200">6 Blocks (≈ 15-20 Mins)</span>
      </div>
      <div className="flex justify-between text-slate-600">
       <span>Relayer Gas Fee:</span>
       <span className="text-sky-500">12 sat/vB (≈ $1.25)</span>
      </div>
      <div className="flex justify-between text-slate-600">
       <span>Security Guarantee:</span>
       <span className="text-[#F7931A]">100% On-Chain Proof</span>
      </div>
     </div>

     <Button
      variant="primary"
      size="lg"
      fullWidth
      onClick={handleStartBridge}
      disabled={isBridging || parseFloat(bridgeAmount || '0') <= 0}
      icon={<Bitcoin className={`w-5 h-5 ${isBridging ? 'animate-spin' : ''}`} />}
     >
      {isBridging ? "Initiating Teleport Lock Script..." : `Teleport ${bridgeAmount} BTC to ${direction === 'L1-to-L2' ? 'SatoshiFi L2' : 'Bitcoin L1'}`}
     </Button>
    </div>

    {/* Right: Live Teleport Bridge Log */}
    <div className="lg:col-span-5 space-y-6">
     <Card variant="standard">
      <CardHeader>
       <div className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2">
         <Clock className="w-5 h-5 text-[#F7931A]" />
         Teleport Activity Log
        </CardTitle>
        <Badge variant="active">Live Mempool</Badge>
       </div>
      </CardHeader>
      <CardContent className="space-y-3 font-mono text-xs">
       {txs.map((tx) => (
        <div key={tx.id} className="p-4 bg-black/50 border border-slate-200 rounded-xl space-y-2">
         <div className="flex items-center justify-between">
          <span className="text-slate-900 font-bold">{tx.amount}</span>
          <Badge variant={tx.status === 'Completed' ? 'success' : 'gold'}>
           {tx.status} ({tx.confirmations})
          </Badge>
         </div>
         <div className="flex justify-between text-[11px] text-slate-600">
          <span>{tx.fromChain} → {tx.toChain}</span>
          <span>{tx.timestamp}</span>
         </div>
         <p className="text-[10px] text-slate-900/40 truncate">Hash: {tx.txHash}</p>
        </div>
       ))}
      </CardContent>
     </Card>
    </div>
   </div>
  </div>
 );
};
