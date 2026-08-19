import React from 'react';
import { Bitcoin, ShieldCheck, Cpu, Zap } from 'lucide-react';

export const OrbitalGraphic: React.FC = () => {
 return (
  <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] flex items-center justify-center select-none overflow-hidden">
   {/* Background Radial Fire Glow */}
   <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] bg-gradient-to-r from-[#EA580C] via-[#F7931A] to-[#FFD600] opacity-20 rounded-full blur-[90px] " />

   {/* Outer Rotating Ring */}
   <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-[#F7931A]/30 animate-spin-slow" />

   {/* Inner Reverse Rotating Ring */}
   <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[310px] md:h-[310px] rounded-full border border-double border-slate-200 animate-spin-reverse">
    {/* Node Orbs on Ring */}
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#F7931A] rounded-full shadow-md" />
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFD600] rounded-full shadow-md" />
   </div>

   {/* Central Glowing Bitcoin Core Sphere */}
   <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-[#EA580C] via-[#F7931A] to-[#FFD600] flex items-center justify-center shadow-md animate-float">
    <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white border border-[#FFD600]/60 flex items-center justify-center">
     <Bitcoin className="w-12 h-12 sm:w-16 sm:h-16 text-[#F7931A] drop-shadow-md" />
    </div>
   </div>

   {/* Floating Card Node 1: TVL */}
   <div className="absolute top-4 left-2 sm:left-6 z-20 bg-[#0F1115]/90 backdrop-blur-md border border-[#F7931A]/40 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-md flex items-center gap-3 animate-float [animation-delay:-1.5s]">
    <div className="p-2 bg-[#EA580C]/20 border border-[#EA580C]/40 rounded-lg text-[#F7931A]">
     <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
    </div>
    <div>
     <p className="font-mono text-[10px] sm:text-xs text-slate-600 uppercase">L2 Locked TVL</p>
     <p className="font-heading font-bold text-sm sm:text-base text-slate-900">$1,842,910,400</p>
    </div>
   </div>

   {/* Floating Card Node 2: Average APY */}
   <div className="absolute bottom-6 right-2 sm:right-6 z-20 bg-[#0F1115]/90 backdrop-blur-md border border-slate-200 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-md flex items-center gap-3 animate-float [animation-delay:-3.5s]">
    <div className="p-2 bg-slate-200 border border-slate-200 rounded-lg text-slate-200">
     <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
    </div>
    <div>
     <p className="font-mono text-[10px] sm:text-xs text-slate-600 uppercase">Native APY Boost</p>
     <p className="font-heading font-bold text-sm sm:text-base text-slate-200">18.4% APY</p>
    </div>
   </div>

   {/* Floating Card Node 3: Hashrate Node */}
   <div className="absolute top-1/2 -right-1 sm:right-2 -translate-y-1/2 z-20 bg-[#0F1115]/90 backdrop-blur-md border border-slate-200 rounded-xl px-3 py-2 shadow-lg hidden sm:flex items-center gap-2.5 animate-float [animation-delay:-2.2s]">
    <Cpu className="w-4 h-4 text-[#F7931A]" />
    <div>
     <p className="font-mono text-[10px] text-slate-600">Mempool Fee</p>
     <p className="font-mono font-semibold text-xs text-sky-500">12 sat/vB</p>
    </div>
   </div>
  </div>
 );
};
