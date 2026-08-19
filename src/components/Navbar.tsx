import React from 'react';
import { Sparkles, UserCheck } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
 onOpenAiCopilot: () => void;
 onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
 onOpenAiCopilot,
 onScrollToSection,
}) => {
 return (
  <header className="sticky top-0 z-50 w-full bg-slate-50/90 backdrop-blur-xl border-b border-slate-200">
   {/* Main Header Bar */}
   <div className="w-[90%] lg:w-[80%] mx-auto h-20 flex items-center justify-between gap-4">
    {/* Brand Logo & Event Badge */}
    <div 
     onClick={() => onScrollToSection('hero')}
     className="flex items-center gap-3 cursor-pointer group select-none"
    >
     {/* Sota-D Red & SHOFU Cyan Gradient Icon Circle */}
     <div className="w-10 h-10 rounded-full sota-shofu-gradient p-0.5 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
      <span className="font-heading font-extrabold text-slate-900 text-xl">S</span>
     </div>
     <div>
      <div className="flex items-center gap-2">
       <span className="font-heading font-bold text-xl tracking-tight text-slate-900">
        <span className="text-[#C43838]">SOTA-D</span> <span className="text-[#00ADEF]">/ SHOFU</span>
       </span>
       <span className="px-2 py-0.5 text-[10px] font-mono bg-sky-100 text-[#00ADEF] border border-sky-300 rounded-full font-semibold">
        BOOTH B75–B77
       </span>
      </div>
      <p className="font-mono text-[10px] text-slate-600 hidden sm:block">VIDEC 2026 • Giải pháp Nha khoa Hiện đại</p>
     </div>
    </div>

    {/* Quick Anchor Navigation Links */}
    <nav className="hidden lg:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-slate-600">
     <button onClick={() => onScrollToSection('loi-ich')} className="hover:text-[#00ADEF] transition-colors">
      Công nghệ SHOFU
     </button>
     <button onClick={() => onScrollToSection('lich-trinh')} className="hover:text-[#00ADEF] transition-colors">
      Lịch trình & Báo cáo viên
     </button>
     <button onClick={() => onScrollToSection('dac-quyen')} className="hover:text-[#00ADEF] transition-colors">
      Đặc quyền tham dự
     </button>
     <button onClick={() => onScrollToSection('dang-ky')} className="hover:text-[#C43838] font-semibold transition-colors flex items-center gap-1">
      <UserCheck className="w-3.5 h-3.5 text-[#00ADEF]" />
      Đăng ký giữ suất
     </button>
    </nav>

    {/* Header Action Buttons */}
    <div className="flex items-center gap-3">
     <Button
      variant="outline"
      size="sm"
      onClick={onOpenAiCopilot}
      className="border-sky-300 text-[#00ADEF] hover:bg-sky-50 font-mono text-xs"
      icon={<Sparkles className="w-3.5 h-3.5 text-[#00ADEF] animate-pulse" />}
     >
      <span className="hidden sm:inline">Hỏi AI Sota-D</span>
      <span className="sm:hidden">AI</span>
     </Button>

     <Button
      variant="primary"
      size="sm"
      onClick={() => onScrollToSection('dang-ky')}
      className="sota-gradient font-heading font-bold text-xs"
     >
      Giữ suất ngay
     </Button>
    </div>
   </div>
  </header>
 );
};
