import React from 'react';

export interface BadgeProps {
 variant?: 'active' | 'gold' | 'success' | 'muted' | 'outline';
 dot?: boolean;
 children: React.ReactNode;
 className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
 variant = 'active',
 dot = true,
 children,
 className = '',
}) => {
 const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border transition-all duration-200";

 const variantStyles = {
  active: "bg-[#00ADEF]/15 text-[#00ADEF] border-sky-300 shadow-md",
  gold: "bg-red-100 text-[#C43838] border-red-300 shadow-md",
  success: "bg-sky-500/10 text-sky-500 border-sky-500/30 shadow-md",
  muted: "bg-slate-50 text-slate-600 border-slate-200",
  outline: "bg-transparent text-slate-900 border-slate-300 hover:border-[#00ADEF]/50",
 };

 const dotColors = {
  active: "bg-[#00ADEF]",
  gold: "bg-[#FF5252]",
  success: "bg-sky-500",
  muted: "bg-[#94A3B8]",
  outline: "bg-white",
 };

 return (
  <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
   {dot && (
    <span className="relative flex h-2 w-2">
     <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColors[variant]} opacity-75`}></span>
     <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColors[variant]}`}></span>
    </span>
   )}
   <span>{children}</span>
  </span>
 );
};
