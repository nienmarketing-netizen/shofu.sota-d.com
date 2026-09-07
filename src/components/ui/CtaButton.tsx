import React from 'react';

export interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ctaName?: string;
  children: React.ReactNode;
}

export const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ ctaName, className, onClick, children, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Thực thi đoạn lệnh tracking GTM
      if (typeof window !== 'undefined') {
        const win = window as any;
        win.dataLayer = win.dataLayer || [];
        win.dataLayer.push({
          event: 'click_cta_open_form',
          cta_name: ctaName || 'CTA_Button',
        });
      }

      // Vẫn giữ nguyên logic cũ nếu có truyền prop onClick
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CtaButton.displayName = 'CtaButton';
