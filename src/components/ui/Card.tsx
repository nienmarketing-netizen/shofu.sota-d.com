import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
 variant?: 'standard' | 'glass' | 'highlight';
 cornerAccents?: boolean;
 hoverLift?: boolean;
 children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
 variant = 'standard',
 cornerAccents = false,
 hoverLift = true,
 children,
 className = '',
 ...props
}) => {
 const baseStyles = "relative rounded-2xl transition-all duration-300 overflow-hidden";
 
 const variantStyles = {
  standard: "bg-[#0F1115] border border-slate-200 text-slate-900",
  glass: "bg-black/50 backdrop-blur-xl border border-slate-200 text-slate-900 shadow-md",
  highlight: "bg-gradient-to-b from-[#181B22] to-[#0F1115] border border-[#F7931A]/60 text-white shadow-md",
 };

 const hoverStyle = hoverLift 
  ? "hover:-translate-y-1 hover:border-[#F7931A]/50 hover:shadow-md" 
  : "";

 const accentClass = cornerAccents ? "corner-accents" : "";

 return (
  <div
   className={`${baseStyles} ${variantStyles[variant]} ${hoverStyle} ${accentClass} ${className}`}
   {...props}
  >
   {children}
  </div>
 );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
 <div className={`p-6 pb-3 ${className}`} {...props}>
  {children}
 </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, className = '', ...props }) => (
 <h3 className={`font-heading font-semibold text-xl md:text-2xl text-slate-900 tracking-tight ${className}`} {...props}>
  {children}
 </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ children, className = '', ...props }) => (
 <p className={`font-body text-slate-600 text-sm mt-1 leading-relaxed ${className}`} {...props}>
  {children}
 </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
 <div className={`p-6 pt-3 ${className}`} {...props}>
  {children}
 </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
 <div className={`p-6 pt-0 border-t border-slate-200 mt-2 flex items-center justify-between ${className}`} {...props}>
  {children}
 </div>
);
