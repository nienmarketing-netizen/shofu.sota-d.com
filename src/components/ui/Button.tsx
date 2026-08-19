import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
 variant?: 'primary' | 'outline' | 'ghost' | 'link' | 'gold';
 size?: 'sm' | 'md' | 'lg';
 children: React.ReactNode;
 icon?: React.ReactNode;
 fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
 variant = 'primary',
 size = 'md',
 children,
 icon,
 fullWidth = false,
 className = '',
 disabled,
 ...props
}) => {
 const baseStyles = "inline-flex items-center justify-center font-heading font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none select-none";
 
 const sizeStyles = {
  sm: "px-3 sm:px-4 py-2 text-xs min-h-[36px] gap-1.5 rounded-full",
  md: "px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm min-h-[44px] gap-2 rounded-full",
  lg: "px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base min-h-[48px] gap-2.5 rounded-full",
 };

 const variantStyles = {
  primary: "bg-[#C43838] text-white tracking-wider uppercase shadow-md hover:scale-[1.03] hover:shadow-md active:scale-95",
  gold: "bg-[#C43838] text-black font-semibold tracking-wider uppercase shadow-md hover:scale-[1.03] hover:shadow-md active:scale-95",
  outline: "border border-sky-200 text-slate-800 bg-white hover:border-[#00ADEF] hover:text-[#00ADEF] hover:bg-slate-50 hover:shadow-md active:scale-95",
  ghost: "text-slate-900 bg-transparent hover:bg-slate-100 hover:text-[#00ADEF] active:scale-95",
  link: "text-[#00ADEF] bg-transparent hover:text-slate-900 underline-offset-4 hover:underline p-0 h-auto font-body font-normal text-sm",
 };

 const widthStyle = fullWidth ? "w-full" : "";

 return (
  <button
   className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
   disabled={disabled}
   {...props}
  >
   {icon && <span className="shrink-0">{icon}</span>}
   <span className="text-center min-w-0 max-w-full break-words leading-tight">{children}</span>
  </button>
 );
};
