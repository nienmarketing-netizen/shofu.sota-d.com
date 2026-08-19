import React, { useState } from 'react';
import { Copy, Check, Code2, Sparkles, Layers, Type, Palette, Component, Terminal, Flame, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';
import { OrbitalGraphic } from './ui/OrbitalGraphic';

export const DesignSystemExplorer: React.FC = () => {
 const [activeTab, setActiveTab] = useState<'tokens' | 'typography' | 'components' | 'snippets'>('tokens');
 const [copiedText, setCopiedText] = useState<string | null>(null);

 const handleCopy = (text: string, label: string) => {
  navigator.clipboard.writeText(text);
  setCopiedText(label);
  setTimeout(() => setCopiedText(null), 2000);
 };

 const colors = [
  { name: 'True Void', hex: '#030304', usage: 'Deep background space where all begins', token: 'bg-white', text: 'white' },
  { name: 'Dark Matter', hex: '#0F1115', usage: 'Elevated surfaces, cards, and panels', token: 'bg-[#0F1115]', text: 'white' },
  { name: 'Bitcoin Orange', hex: '#F7931A', usage: 'Iconic decentralization. Primary CTAs & active states', token: 'bg-[#F7931A]', text: 'black' },
  { name: 'Burnt Orange', hex: '#EA580C', usage: 'Deeper warm orange for fire gradients & depth', token: 'bg-[#EA580C]', text: 'white' },
  { name: 'Digital Gold', hex: '#FFD600', usage: 'Color of value. Highlighting APY, success & gains', token: 'bg-[#FFD600]', text: 'black' },
  { name: 'Stardust Muted', hex: '#94A3B8', usage: 'Secondary text, metadata, descriptions', token: 'bg-[#94A3B8]', text: 'black' },
  { name: 'Dim Boundary', hex: '#1E293B', usage: 'Delicate 1px borders at rest', token: 'bg-[#1E293B]', text: 'white' },
 ];

 const cssSnippet = `/* Bitcoin DeFi Design System Tokens */
:root {
 --bg-void: #030304;
 --bg-surface: #0F1115;
 --color-[#F7931A]: #F7931A; /* Bitcoin Orange */
 --color-gold: #FFD600;  /* Digital Gold */
 --font-heading: 'Space Grotesk', sans-serif;
 --font-body: 'Inter', sans-serif;
 --font-mono: 'JetBrains Mono', monospace;
 --glow-orange: 0 0 25px -5px rgba(247, 147, 26, 0.5);
 --glow-gold: 0 0 25px rgba(255, 214, 0, 0.35);
}`;

 return (
  <div className="space-y-12 pb-20">
   {/* Title */}
   <div className="pt-8">
    <Badge variant="gold">System Design Hub</Badge>
    <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 tracking-tight mt-2">
     "Bitcoin DeFi" Design System
    </h2>
    <p className="font-body text-slate-600 text-base max-w-3xl mt-1">
     A deep cosmic void where data structures glow with the warmth of Bitcoin orange and the brilliance of digital gold. Precision engineering meets mathematical trust.
    </p>
   </div>

   {/* Navigation Sub-Tabs */}
   <div className="flex items-center gap-2 border-b border-slate-200 pb-4 overflow-x-auto font-heading text-xs font-semibold">
    {[
     { id: 'tokens', label: 'Color & Glow Tokens', icon: <Palette className="w-4 h-4" /> },
     { id: 'typography', label: 'Typography Scale', icon: <Type className="w-4 h-4" /> },
     { id: 'components', label: 'Component Workbench', icon: <Component className="w-4 h-4" /> },
     { id: 'snippets', label: 'Code & CSS Snippets', icon: <Code2 className="w-4 h-4" /> },
    ].map((tab) => (
     <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id as any)}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all ${
       activeTab === tab.id
        ? 'bg-gradient-to-r from-[#EA580C] to-[#F7931A] text-white shadow-md'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
      }`}
     >
      {tab.icon}
      <span>{tab.label}</span>
     </button>
    ))}
   </div>

   {/* TAB 1: COLOR & GLOW TOKENS */}
   {activeTab === 'tokens' && (
    <section className="space-y-8">
     <div>
      <h3 className="font-heading font-bold text-2xl text-slate-900">Color Palette ("True Void & Bitcoin Fire")</h3>
      <p className="font-body text-xs text-slate-600 mt-1">Click any color card to copy its Hex code to clipboard.</p>
     </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {colors.map((c) => (
       <div
        key={c.name}
        onClick={() => handleCopy(c.hex, c.name)}
        className="bg-[#0F1115] border border-slate-200 rounded-2xl p-5 hover:border-[#F7931A]/60 transition-all cursor-pointer group corner-accents"
       >
        <div 
         className={`w-full h-24 rounded-xl ${c.token} border border-slate-200 flex items-end p-3 shadow-inner relative overflow-hidden`}
        >
         <span className={`font-mono text-xs font-bold uppercase px-2 py-0.5 rounded bg-black/60 text-slate-900 backdrop-blur`}>
          {c.hex}
         </span>
         <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {copiedText === c.name ? (
           <Check className="w-4 h-4 text-sky-500" />
          ) : (
           <Copy className="w-4 h-4 text-slate-900" />
          )}
         </div>
        </div>

        <div className="mt-4 space-y-1">
         <h4 className="font-heading font-bold text-base text-slate-900">{c.name}</h4>
         <p className="font-body text-xs text-slate-600">{c.usage}</p>
        </div>
       </div>
      ))}
     </div>

     {/* Glow Shadows & Luminescence */}
     <div className="pt-6 space-y-4">
      <h3 className="font-heading font-bold text-2xl text-slate-900">Luminescent Shadow Effects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       <div className="bg-[#0F1115] border border-[#EA580C]/50 rounded-2xl p-6 space-y-2">
        <Badge variant="active">Orange Glow</Badge>
        <h4 className="font-heading font-bold text-lg text-slate-900">Primary Energy Glow</h4>
        <p className="font-mono text-xs text-slate-600">shadow-md</p>
       </div>

       <div className="bg-[#0F1115] border border-[#FFD600]/50 rounded-2xl p-6 space-y-2">
        <Badge variant="gold">Digital Gold Glow</Badge>
        <h4 className="font-heading font-bold text-lg text-slate-900">Value & APY Highlight</h4>
        <p className="font-mono text-xs text-slate-600">shadow-md</p>
       </div>

       <div className="holographic-card rounded-2xl p-6 space-y-2">
        <Badge variant="muted">Glass Morphism</Badge>
        <h4 className="font-heading font-bold text-lg text-slate-900">Floating Translucent Void</h4>
        <p className="font-mono text-xs text-slate-600">backdrop-blur-xl + bg-black/40</p>
       </div>
      </div>
     </div>
    </section>
   )}

   {/* TAB 2: TYPOGRAPHY SCALE */}
   {activeTab === 'typography' && (
    <section className="space-y-8 bg-[#0F1115] border border-slate-200 rounded-2xl p-8">
     <div>
      <h3 className="font-heading font-bold text-2xl text-slate-900">Typography Hierarchy</h3>
      <p className="font-body text-xs text-slate-600 mt-1">
       Paired Space Grotesk (Display Headings), Inter (Legible Body), and JetBrains Mono (Technical Data).
      </p>
     </div>

     <div className="space-y-6">
      <div className="border-b border-slate-200 pb-6 space-y-2">
       <span className="font-mono text-xs text-[#F7931A] uppercase">Display Heading 1 (Space Grotesk - 700 Bold)</span>
       <h1 className="font-heading font-bold text-4xl sm:text-5xl text-slate-900">
        Bitcoin L2 Yield Vaults & Staking
       </h1>
      </div>

      <div className="border-b border-slate-200 pb-6 space-y-2">
       <span className="font-mono text-xs text-slate-200 uppercase">Section Heading 2 (Space Grotesk - 600 Semibold)</span>
       <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-slate-900">
        Cryptographic Proofs & Taproot Script Locks
       </h2>
      </div>

      <div className="border-b border-slate-200 pb-6 space-y-2">
       <span className="font-mono text-xs text-slate-600 uppercase">Body Copy (Inter - 400 Regular - 16px / Leading 1.6)</span>
       <p className="font-body text-base text-slate-600 max-w-3xl leading-relaxed">
        The Bitcoin DeFi design system balances technical precision with modern geometric forms. High-contrast typography guarantees legibility across dense trading terminals and clean yield calculators.
       </p>
      </div>

      <div className="space-y-2">
       <span className="font-mono text-xs text-sky-500 uppercase">Monospace Data Text (JetBrains Mono - 500 Medium)</span>
       <p className="font-mono text-sm text-slate-900">
        TX_HASH: 0x89fa2190c4b12384b | APY: 18.40% | TVL: $1,842,910,400 | SAT/VB: 12
       </p>
      </div>
     </div>
    </section>
   )}

   {/* TAB 3: COMPONENT WORKBENCH */}
   {activeTab === 'components' && (
    <section className="space-y-12">
     {/* Interactive Buttons Showcase */}
     <div className="bg-[#0F1115] border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6">
      <h3 className="font-heading font-bold text-2xl text-slate-900">Button Variants (Crypto Pill Shape)</h3>
      
      <div className="flex flex-wrap items-center gap-4">
       <Button variant="primary" icon={<Flame className="w-4 h-4" />}>
        Primary Glow
       </Button>

       <Button variant="gold" icon={<Zap className="w-4 h-4" />}>
        Digital Gold
       </Button>

       <Button variant="outline">
        Outline Boundary
       </Button>

       <Button variant="ghost">
        Ghost Link
       </Button>

       <Button variant="link">
        Underline Link
       </Button>
      </div>
     </div>

     {/* Interactive Terminal Inputs */}
     <div className="bg-[#0F1115] border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6">
      <h3 className="font-heading font-bold text-2xl text-slate-900">Terminal Bottom-Border Inputs</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <Input
        label="Standard Input Field"
        placeholder="Enter bitcoin address..."
        rightElement={<span className="font-mono text-xs text-[#F7931A]">SegWit</span>}
       />

       <Input
        label="Error State Input"
        value="Invalid Hash Syntax"
        error="Must be a valid 64-character hexadecimal string"
       />
      </div>
     </div>

     {/* Badges & Orbital Graphic Preview */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#0F1115] border border-slate-200 rounded-2xl p-6 space-y-4">
       <h3 className="font-heading font-bold text-xl text-slate-900">Status Node Badges</h3>
       <div className="flex flex-wrap gap-3">
        <Badge variant="active">Mainnet Active</Badge>
        <Badge variant="gold">Genesis Staking</Badge>
        <Badge variant="success">Audit Passed</Badge>
        <Badge variant="muted">Offline Node</Badge>
        <Badge variant="outline">Taproot V2</Badge>
       </div>
      </div>

      <div className="bg-[#0F1115] border border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
       <h3 className="font-heading font-bold text-xl text-slate-900">3D Orbital Ring Physics</h3>
       <p className="font-body text-xs text-slate-600">
        Endless rotating rings (`animate-spin-slow`) surrounding the glowing Bitcoin core.
       </p>
      </div>
     </div>
    </section>
   )}

   {/* TAB 4: CODE & CSS SNIPPETS */}
   {activeTab === 'snippets' && (
    <section className="bg-[#0F1115] border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4">
     <div className="flex items-center justify-between">
      <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center gap-2">
       <Terminal className="w-5 h-5 text-[#F7931A]" />
       Design System CSS Token Variables
      </h3>

      <Button
       variant="outline"
       size="sm"
       onClick={() => handleCopy(cssSnippet, 'CSS Snippet')}
       icon={copiedText === 'CSS Snippet' ? <Check className="w-4 h-4 text-sky-500" /> : <Copy className="w-4 h-4" />}
      >
       {copiedText === 'CSS Snippet' ? "Copied Tokens!" : "Copy CSS Variables"}
      </Button>
     </div>

     <pre className="bg-black/80 p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-200 overflow-x-auto">
      {cssSnippet}
     </pre>
    </section>
   )}
  </div>
 );
};
