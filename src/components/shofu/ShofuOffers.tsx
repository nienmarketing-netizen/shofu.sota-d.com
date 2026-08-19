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

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Offer 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ADEF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#00ADEF]/20 flex items-center justify-center mb-6">
                <Gift className="w-6 h-6 text-[#00ADEF]" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-2">Deal phục hình gián tiếp</h3>
              <p className="font-body text-sm text-slate-300 mb-6 line-clamp-2">
                Nhận ngay bộ quà tặng vật liệu trị giá 3.500.000đ khi đăng ký gói Combo "Giomer Không Ê Buốt".
              </p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-red-400 font-bold">Chỉ còn 15 suất</span>
                <button className="inline-flex items-center gap-2 text-[#00ADEF] font-mono text-xs font-bold uppercase hover:text-white transition-colors">
                  Đăng ký ngay <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C43838]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#C43838]/20 flex items-center justify-center mb-6">
                <Gift className="w-6 h-6 text-[#C43838]" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-2">Gói khởi động trám MiCD</h3>
              <p className="font-body text-sm text-slate-300 mb-6 line-clamp-2">
                Trải nghiệm đỉnh cao composite với ưu đãi chiết khấu trực tiếp lên đến 25% + Tặng kèm khóa học Online.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-red-400 font-bold">Chỉ còn 8 suất</span>
                <button className="inline-flex items-center gap-2 text-[#C43838] font-mono text-xs font-bold uppercase hover:text-white transition-colors">
                  Nhận ưu đãi <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
