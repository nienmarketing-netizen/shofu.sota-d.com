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

        <div className="max-w-4xl mx-auto">
          {/* Main Offer */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-sm relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ADEF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-[#00ADEF]/20 text-[#00ADEF] mb-4">
                  <Gift className="w-4 h-4" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">Hệ Thống Giải Pháp Lâm Sàng</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3 leading-tight">
                  Giomer Không Ê Buốt<br/>
                  <span className="text-[#00ADEF]">An Tâm Phục Hình Răng Sống</span>
                </h3>
                <p className="font-body text-sm sm:text-base text-slate-300 mb-6">
                  Sở hữu Combo quyền lực <strong>BeautiBond Xtreme</strong> & <strong>BeautiLink SA</strong>. Khóa chặt vi kẽ, trị liệu sinh học 6 ion, chấm dứt 100% ám ảnh bảo hành.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-sm text-slate-200"><strong>Tặng kèm:</strong> Bộ Đánh Bóng Composite Polishing Kit CA (Trị giá 740k)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-sm text-slate-200"><strong>Bonus:</strong> Bộ Giải Pháp Số Thực Chiến (Trị giá 1.500k)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-sm text-slate-200"><strong>Đặc quyền:</strong> Cố vấn Lâm sàng 1:1 cùng ThS.BS (Trị giá 2.500k)</span>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-72 shrink-0 bg-slate-900/50 rounded-2xl p-6 border border-white/5 flex flex-col justify-center text-center">
                <div className="text-slate-400 text-sm line-through mb-1">Tổng giá trị: 8.155.000đ</div>
                <div className="text-[#00ADEF] font-heading font-extrabold text-4xl mb-2">3.415k</div>
                <div className="text-xs text-slate-400 mb-6 uppercase tracking-wider">Mức đầu tư duy nhất</div>
                
                <div className="flex flex-col gap-4">
                  <button onClick={() => window.dispatchEvent(new CustomEvent("open-offer-modal"))} className="w-full inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-6 py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 transition-colors shadow-lg shadow-sky-500/25 cursor-pointer">
                    ĐĂNG KÝ NGAY <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="font-mono text-xs text-red-400 font-bold bg-red-500/10 py-2 rounded-lg">
                    Chỉ còn 15 suất
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
