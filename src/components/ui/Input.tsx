import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
 label?: string;
 helperText?: string;
 error?: string;
 rightElement?: React.ReactNode;
 leftElement?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
 label,
 helperText,
 error,
 rightElement,
 leftElement,
 className = '',
 disabled,
 ...props
}) => {
 return (
  <div className="w-full flex flex-col gap-1.5">
   {label && (
    <label className="font-mono text-xs text-slate-600 uppercase tracking-wider font-medium flex items-center justify-between">
     <span>{label}</span>
    </label>
   )}
   
   <div className="relative flex items-center">
    {leftElement && (
     <div className="absolute left-3 text-slate-600 pointer-events-none">
      {leftElement}
     </div>
    )}
    
    <input
     className={`w-full bg-black/60 border-b-2 border-slate-300 text-slate-900 font-mono text-sm h-12 ${
      leftElement ? 'pl-10' : 'px-4'
     } ${rightElement ? 'pr-16' : 'px-4'} py-2 rounded-t-lg transition-all duration-200 placeholder:text-slate-900/30 focus:border-[#F7931A] focus:bg-black/80 focus:shadow-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
      error ? 'border-red-500/80 focus:border-red-500' : ''
     } ${className}`}
     disabled={disabled}
     {...props}
    />

    {rightElement && (
     <div className="absolute right-3 flex items-center">
      {rightElement}
     </div>
    )}
   </div>

   {error ? (
    <p className="font-mono text-xs text-red-400 mt-0.5">{error}</p>
   ) : helperText ? (
    <p className="font-mono text-xs text-slate-600/70 mt-0.5">{helperText}</p>
   ) : null}
  </div>
 );
};
