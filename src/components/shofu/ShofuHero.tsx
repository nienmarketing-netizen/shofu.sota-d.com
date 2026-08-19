import React from 'react';
import { ArrowRight, Atom, ShieldCheck, Feather, Zap } from 'lucide-react';

interface ShofuHeroProps {
  onCTA: () => void;
}

export function ShofuHero({ onCTA }: ShofuHeroProps) {
  return (
    <section className="relative pb-20 lg:pb-32 overflow-hidden border-b border-slate-200 bg-transparent">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] bg-[#00ADEF] opacity-15 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[220px] sm:w-[450px] h-[220px] sm:h-[450px] bg-[#C43838] opacity-15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Main Image - Aligned with Content */}
      <div className="w-[90%] lg:w-[80%] mx-auto relative z-10 mb-10 md:mb-16 mix-blend-multiply opacity-90">
        <img
          src="/images/background-hero-section-full-solution-shofu.png"
          alt="Shofu Full Solution"
          className="w-full h-auto object-cover block mix-blend-multiply"
          onError={(e) => {
            // Hiển thị placeholder nếu ảnh chưa được tải lên
            e.currentTarget.src = "https://placehold.co/1200x600/f8fafc/94a3b8?text=Đang+chờ+ảnh:+background-hero-section-full-solution-shofu.png";
          }}
        />
      </div>

      <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Content */}
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6 max-w-full overflow-hidden">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00ADEF] animate-pulse shrink-0"></span>
              <span className="font-mono text-[9px] min-[375px]:text-[10px] sm:text-xs font-medium text-slate-700 tracking-tight sm:tracking-wide whitespace-nowrap">
                <span className="sm:hidden"><strong className="font-bold text-[#C43838]">Sota-D</strong> - Đối tác chính thức của Shofu tại Việt Nam</span>
                <span className="hidden sm:inline"><strong className="font-bold text-[#C43838]">Sota-D</strong> - Đối tác phân phối chính thức Shofu tại Việt Nam</span>
              </span>
            </div>
            
            <h1 className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.3] mb-6 uppercase tracking-tight">
              Giải Pháp Nha Khoa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADEF] to-blue-600 py-2 whitespace-nowrap">
                Chuẩn Mực Nhật Bản
              </span>
            </h1>
            
            <p className="font-body text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Hệ sinh thái vật liệu nha khoa tiên tiến tích hợp công nghệ hạt độn sinh học <strong className="text-slate-900">S-PRG độc quyền</strong>. Tối ưu quy trình lâm sàng, mang lại hiệu quả phục hình bền vững và bảo vệ mô răng chủ động.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button 
                onClick={onCTA}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00ADEF] text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 transition-all shadow-xl shadow-sky-500/30 flex items-center justify-center gap-2 group"
              >
                Nhận Tư Vấn Ngay
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/50 overflow-hidden relative z-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-200/80">
              <div className="flex flex-col xl:flex-row items-center justify-center text-center xl:text-left gap-2 sm:gap-3 py-5 px-3 sm:py-6 sm:px-4 group bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Atom className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ADEF]" />
                </div>
                <div className="font-mono text-[10px] sm:text-xs xl:text-sm font-bold text-slate-900 leading-snug">VẬT LIỆU SINH HỌC</div>
              </div>
              
              <div className="flex flex-col xl:flex-row items-center justify-center text-center xl:text-left gap-2 sm:gap-3 py-5 px-3 sm:py-6 sm:px-4 group bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#C43838]" />
                </div>
                <div className="font-mono text-[10px] sm:text-xs xl:text-sm font-bold text-slate-900 leading-snug">CÔNG NGHỆ HEMA-FREE</div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-center text-center xl:text-left gap-2 sm:gap-3 py-5 px-3 sm:py-6 sm:px-4 group bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Feather className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ADEF]" />
                </div>
                <div className="font-mono text-[10px] sm:text-xs xl:text-sm font-bold text-slate-900 leading-snug">CAN THIỆP TỐI THIỂU</div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-center text-center xl:text-left gap-2 sm:gap-3 py-5 px-3 sm:py-6 sm:px-4 group bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#C43838]" />
                </div>
                <div className="font-mono text-[10px] sm:text-xs xl:text-sm font-bold text-slate-900 leading-snug">QUY TRÌNH TỐI GIẢN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
