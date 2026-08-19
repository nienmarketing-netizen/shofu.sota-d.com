import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface ShofuHeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuote?: () => void;
}

export function ShofuHeader({ onNavigate, onOpenQuote }: ShofuHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Về Shofu', id: 'about-shofu' },
    { label: 'Giải pháp', id: 'solutions' },
    { label: 'Ưu đãi', id: 'offers' },
    { label: 'Chứng nhận', id: 'social-proof' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-sm py-3' : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="w-[90%] lg:w-[80%] mx-auto relative z-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/Sota-D%20logo%20(1).png" alt="Sota-D" className="h-6 sm:h-8 object-contain" />
            <div className="w-[1px] h-6 bg-slate-300 hidden sm:block"></div>
            <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/Logo_Shofu%20(1).png" alt="Shofu" className="h-6 sm:h-8 object-contain hidden sm:block" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="font-mono text-sm font-semibold text-slate-700 hover:text-[#00ADEF] transition-colors tracking-wide uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => onOpenQuote?.()}
              className="px-5 py-2.5 rounded-full bg-[#00ADEF] text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 transition-colors shadow-lg shadow-sky-500/25"
            >
              YÊU CẦU BÁO GIÁ
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-700 relative z-50"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen((prev) => !prev);
            }}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[68px] left-0 right-0 w-full bg-white border-t border-slate-100 shadow-2xl z-[100] animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="py-4 px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className="font-mono text-sm font-semibold text-slate-700 hover:text-[#00ADEF] transition-colors tracking-wide uppercase text-left py-2 border-b border-slate-50 last:border-0"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => {
              onOpenQuote?.();
              setIsMobileMenuOpen(false);
            }}
            className="w-full mt-2 px-5 py-3 rounded-xl bg-[#00ADEF] text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 transition-colors shadow-lg shadow-sky-500/25 text-center"
          >
            YÊU CẦU BÁO GIÁ
          </button>
        </div>
      </div>
      )}
    </header>
  );
}
