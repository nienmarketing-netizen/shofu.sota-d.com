import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight, Gift } from 'lucide-react';

export function ShofuOffers() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 25,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="offers" className="py-20 bg-slate-900 bg-grid-pattern text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ADEF]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Timer className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold text-red-400 uppercase tracking-widest">Ưu đãi giới hạn số lượng</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-6 uppercase tracking-tight">
            MUA HÀNG <span className="block sm:inline text-[#00ADEF]">KHÔNG RỦI RO</span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 sm:gap-6 font-mono text-2xl sm:text-4xl font-bold">
            <div className="flex flex-col items-center">
              <span className="text-white">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase mt-1">Ngày</span>
            </div>
            <span className="text-[#00ADEF] -mt-5">:</span>
            <div className="flex flex-col items-center">
              <span className="text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase mt-1">Giờ</span>
            </div>
            <span className="text-[#00ADEF] -mt-5">:</span>
            <div className="flex flex-col items-center">
              <span className="text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase mt-1">Phút</span>
            </div>
            <span className="text-[#00ADEF] -mt-5">:</span>
            <div className="flex flex-col items-center">
              <span className="text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase mt-1">Giây</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Offer 1 */}
          <div className="bg-slate-800/40 border border-white/5 rounded-3xl p-8 sm:p-10 backdrop-blur-md relative group overflow-hidden flex flex-col h-full hover:bg-slate-800/60 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ADEF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#00ADEF]/20 flex items-center justify-center mb-8 shrink-0">
                <Gift className="w-8 h-8 text-[#00ADEF]" />
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-white">
                Combo Giomer Không Ê Buốt
              </h3>
              <p className="font-body text-base sm:text-lg text-slate-300 mb-12 flex-1 leading-relaxed">
                Khóa chặt vi kẽ, trị liệu sinh học 6 ion, chấm dứt 100% ám ảnh bảo hành răng sống. Nhận ngay bộ Quà tặng & Đặc quyền cố vấn trị giá <strong>4.740.000đ</strong>!
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4">
                <span className="font-mono text-sm sm:text-base text-red-400 font-bold">Chỉ còn 15 suất</span>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent("open-offer-modal"))}
                  className="inline-flex items-center gap-2 text-[#00ADEF] font-mono text-sm sm:text-base font-bold uppercase hover:text-white transition-colors cursor-pointer tracking-wider"
                >
                  ĐĂNG KÝ NGAY <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="bg-slate-800/40 border border-white/5 rounded-3xl p-8 sm:p-10 backdrop-blur-md relative group overflow-hidden flex flex-col h-full hover:bg-slate-800/60 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C43838]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#C43838]/20 flex items-center justify-center mb-8 shrink-0">
                <Gift className="w-8 h-8 text-[#C43838]" />
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-white">
                Gói khởi động trám MiCD
              </h3>
              <p className="font-body text-base sm:text-lg text-slate-300 mb-12 flex-1 leading-relaxed">
                Trải nghiệm đỉnh cao composite với ưu đãi chiết khấu trực tiếp lên đến 25% + Tặng kèm khóa học Online.
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4">
                <span className="font-mono text-sm sm:text-base text-red-400 font-bold">Chỉ còn 8 suất</span>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent("open-offer-modal"))}
                  className="inline-flex items-center gap-2 text-[#C43838] font-mono text-sm sm:text-base font-bold uppercase hover:text-white transition-colors cursor-pointer tracking-wider"
                >
                  NHẬN ƯU ĐÃI <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
