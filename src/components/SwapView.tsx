import React, { useState } from 'react';
import { ArrowLeftRight, Settings, Sparkles, TrendingUp, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';
import { SwapToken } from '../types';

const availableTokens: SwapToken[] = [
 { symbol: 'BTC', name: 'Native Bitcoin', balance: 0.85, priceUsd: 98450, change24h: 3.8, iconColor: '#F7931A' },
 { symbol: 'sBTC', name: 'Stacks Liquid BTC', balance: 2.10, priceUsd: 98410, change24h: 3.7, iconColor: '#FFD600' },
 { symbol: 'RUNES', name: 'UNCOMMON•GOODS', balance: 50000, priceUsd: 0.42, change24h: 12.4, iconColor: '#EA580C' },
 { symbol: 'DOG', name: 'DOG•GO•TO•THE•MOON', balance: 120000, priceUsd: 0.0082, change24h: -2.1, iconColor: '#38BDF8' },
 { symbol: 'PUPS', name: 'PUPS•WORLD•PEACE', balance: 3500, priceUsd: 14.50, change24h: 8.9, iconColor: '#A855F7' },
];

export const SwapView: React.FC = () => {
 const [fromToken, setFromToken] = useState<SwapToken>(availableTokens[0]);
 const [toToken, setToToken] = useState<SwapToken>(availableTokens[2]);
 const [fromAmount, setFromAmount] = useState<string>('0.05');
 const [slippage, setSlippage] = useState<number>(0.5);
 const [isSwapping, setIsSwapping] = useState(false);
 const [swapSuccess, setSwapSuccess] = useState(false);

 // Calculate output amount
 const parsedFrom = parseFloat(fromAmount) || 0;
 const usdVal = parsedFrom * fromToken.priceUsd;
 const calculatedOutput = toToken.priceUsd > 0 ? usdVal / toToken.priceUsd : 0;

 const handleSwitchTokens = () => {
  const temp = fromToken;
  setFromToken(toToken);
  setToToken(temp);
 };

 const handleExecuteSwap = () => {
  setIsSwapping(true);
  setTimeout(() => {
   setIsSwapping(false);
   setSwapSuccess(true);
   setTimeout(() => setSwapSuccess(false), 4000);
  }, 1200);
 };

 return (
  <div className="space-y-12 pb-20">
   {/* Title */}
   <div className="pt-8">
    <Badge variant="active">Runes Protocol AMM</Badge>
    <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 tracking-tight mt-2">
     Runes & BRC-20 Liquidity Swap
    </h2>
    <p className="font-body text-slate-600 text-base max-w-2xl mt-1">
     Swap native Bitcoin, sBTC, and top Bitcoin Runes with sub-second L2 finality and minimal price impact.
    </p>
   </div>

   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    {/* Left Column: Swap Interface Card */}
    <div className="lg:col-span-6 bg-[#0F1115] border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 corner-accents relative shadow-md">
     {/* Top Bar: Settings & Slippage */}
     <div className="flex items-center justify-between border-b border-slate-200 pb-4">
      <h3 className="font-heading font-bold text-xl text-slate-900">Instant Swap</h3>
      <div className="flex items-center gap-2">
       <span className="font-mono text-xs text-slate-600">Slippage:</span>
       {[0.1, 0.5, 1.0].map((val) => (
        <button
         key={val}
         onClick={() => setSlippage(val)}
         className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
          slippage === val 
           ? 'bg-[#EA580C] text-slate-900 font-bold' 
           : 'bg-black/50 text-slate-600 hover:text-slate-900'
         }`}
        >
         {val}%
        </button>
       ))}
      </div>
     </div>

     {/* Pay Input Box */}
     <div className="bg-black/60 border border-slate-200 rounded-2xl p-4 space-y-2 hover:border-[#F7931A]/40 transition-colors">
      <div className="flex justify-between font-mono text-xs text-slate-600">
       <span>You Pay</span>
       <span>Balance: <strong className="text-slate-900">{fromToken.balance} {fromToken.symbol}</strong></span>
      </div>
      
      <div className="flex items-center justify-between gap-4">
       <input
        type="number"
        value={fromAmount}
        onChange={(e) => setFromAmount(e.target.value)}
        placeholder="0.0"
        className="w-full bg-transparent font-mono text-2xl font-bold text-slate-900 focus:outline-none"
       />

       <select
        value={fromToken.symbol}
        onChange={(e) => {
         const found = availableTokens.find(t => t.symbol === e.target.value);
         if (found) setFromToken(found);
        }}
        className="bg-white border border-slate-300 text-slate-900 font-heading font-bold text-sm px-3 py-2 rounded-xl focus:border-[#F7931A] focus:outline-none"
       >
        {availableTokens.map((token) => (
         <option key={token.symbol} value={token.symbol}>{token.symbol}</option>
        ))}
       </select>
      </div>

      <div className="font-mono text-xs text-slate-600">
       ≈ ${usdVal.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD
      </div>
     </div>

     {/* Switch Tokens Arrow */}
     <div className="flex justify-center -my-3 relative z-10">
      <button
       onClick={handleSwitchTokens}
       className="p-3 bg-[#0F1115] border border-[#F7931A]/60 hover:border-[#F7931A] text-[#F7931A] hover:bg-[#EA580C]/20 rounded-full shadow-md hover:scale-110 transition-all"
      >
       <ArrowLeftRight className="w-5 h-5" />
      </button>
     </div>

     {/* Receive Input Box */}
     <div className="bg-black/60 border border-slate-200 rounded-2xl p-4 space-y-2">
      <div className="flex justify-between font-mono text-xs text-slate-600">
       <span>You Receive (Estimated)</span>
       <span>Balance: <strong className="text-slate-900">{toToken.balance} {toToken.symbol}</strong></span>
      </div>

      <div className="flex items-center justify-between gap-4">
       <input
        type="text"
        readOnly
        value={calculatedOutput > 0 ? calculatedOutput.toFixed(4) : '0.00'}
        className="w-full bg-transparent font-mono text-2xl font-bold text-slate-200 focus:outline-none cursor-default"
       />

       <select
        value={toToken.symbol}
        onChange={(e) => {
         const found = availableTokens.find(t => t.symbol === e.target.value);
         if (found) setToToken(found);
        }}
        className="bg-white border border-slate-300 text-slate-900 font-heading font-bold text-sm px-3 py-2 rounded-xl focus:border-[#F7931A] focus:outline-none"
       >
        {availableTokens.map((token) => (
         <option key={token.symbol} value={token.symbol}>{token.symbol}</option>
        ))}
       </select>
      </div>

      <div className="font-mono text-xs text-slate-600">
       ≈ ${usdVal.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD
      </div>
     </div>

     {/* Transaction Info Box */}
     <div className="bg-black/40 border border-slate-200 rounded-xl p-4 font-mono text-xs space-y-2 text-slate-600">
      <div className="flex justify-between">
       <span>Exchange Rate:</span>
       <span className="text-slate-900">1 {fromToken.symbol} = {(fromToken.priceUsd / (toToken.priceUsd || 1)).toFixed(4)} {toToken.symbol}</span>
      </div>
      <div className="flex justify-between">
       <span>Price Impact:</span>
       <span className="text-sky-500 font-semibold">&lt; 0.05%</span>
      </div>
      <div className="flex justify-between">
       <span>Minimum Received:</span>
       <span className="text-slate-900">{(calculatedOutput * (1 - slippage/100)).toFixed(4)} {toToken.symbol}</span>
      </div>
      <div className="flex justify-between">
       <span>Network Route:</span>
       <span className="text-[#F7931A]">SatoshiFi L2 AMM Pool</span>
      </div>
     </div>

     {/* Action Swap Button */}
     <Button
      variant="primary"
      size="lg"
      fullWidth
      onClick={handleExecuteSwap}
      disabled={isSwapping || parsedFrom <= 0}
      icon={<RefreshCw className={`w-5 h-5 ${isSwapping ? 'animate-spin' : ''}`} />}
     >
      {isSwapping ? "Executing Runes AMM Swap..." : `Swap ${fromToken.symbol} to ${toToken.symbol}`}
     </Button>

     {swapSuccess && (
      <div className="bg-sky-500/20 border border-sky-500 p-4 rounded-xl text-center space-y-1 font-mono text-xs text-sky-500">
       <div className="flex items-center justify-center gap-2 font-bold text-sm">
        <CheckCircle2 className="w-5 h-5 text-sky-500" />
        Swap Executed Successfully!
       </div>
       <p>Swapped {fromAmount} {fromToken.symbol} for {calculatedOutput.toFixed(4)} {toToken.symbol}. Tx: 0x3a9b...712c</p>
      </div>
     )}
    </div>

    {/* Right Column: Live Runes Market Chart & Liquidity Depth */}
    <div className="lg:col-span-6 space-y-6">
     <Card variant="standard">
      <CardHeader>
       <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
         <div className="w-10 h-10 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/40 flex items-center justify-center text-[#F7931A] font-bold font-mono">
          {toToken.symbol.slice(0, 3)}
         </div>
         <div>
          <CardTitle>{toToken.name} Market</CardTitle>
          <span className="font-mono text-xs text-slate-600">${toToken.priceUsd} USD</span>
         </div>
        </div>

        <div className="text-right">
         <span className={`font-mono text-sm font-bold ${toToken.change24h >= 0 ? 'text-sky-500' : 'text-red-400'}`}>
          {toToken.change24h >= 0 ? '+' : ''}{toToken.change24h}% (24h)
         </span>
         <p className="font-mono text-[10px] text-slate-600">Vol: $48.2M</p>
        </div>
       </div>
      </CardHeader>

      <CardContent>
       {/* Simulated Tech Chart Visual */}
       <div className="h-48 w-full bg-black/60 rounded-xl border border-slate-200 p-4 relative flex flex-col justify-between overflow-hidden">
        <div className="flex justify-between font-mono text-[10px] text-slate-600">
         <span>SatoshiFi Order Book Depth</span>
         <span className="text-slate-200">Live Feed</span>
        </div>

        {/* SVG Graph Wave */}
        <svg className="w-full h-28 overflow-visible" viewBox="0 0 400 100">
         <defs>
          <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stopColor="#F7931A" stopOpacity="0.4" />
           <stop offset="100%" stopColor="#F7931A" stopOpacity="0.0" />
          </linearGradient>
         </defs>
         <path
          d="M 0 80 Q 50 60, 100 70 T 200 40 T 300 20 T 400 10 L 400 100 L 0 100 Z"
          fill="url(#chartGlow)"
         />
         <path
          d="M 0 80 Q 50 60, 100 70 T 200 40 T 300 20 T 400 10"
          fill="none"
          stroke="#F7931A"
          strokeWidth="3"
         />
        </svg>

        <div className="flex justify-between font-mono text-[10px] text-slate-600/60">
         <span>08:00</span>
         <span>12:00</span>
         <span>16:00</span>
         <span>20:00</span>
         <span>NOW</span>
        </div>
       </div>
      </CardContent>
     </Card>

     {/* Top Runes Liquidity Pools */}
     <Card variant="standard">
      <CardHeader>
       <CardTitle>Featured Runes L2 Pools</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 font-mono text-xs">
       {availableTokens.slice(1).map((t) => (
        <div key={t.symbol} className="flex items-center justify-between p-3 bg-black/40 border border-slate-200 rounded-xl hover:border-[#F7931A]/40 transition-colors">
         <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.iconColor }} />
          <span className="text-slate-900 font-bold">{t.symbol} / BTC</span>
         </div>
         <div className="text-right">
          <span className="text-slate-200 font-semibold">${t.priceUsd}</span>
          <span className="text-slate-600 text-[10px] block">TVL: $8.4M</span>
         </div>
        </div>
       ))}
      </CardContent>
     </Card>
    </div>
   </div>
  </div>
 );
};
