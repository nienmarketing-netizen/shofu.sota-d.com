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
          <div className="bg-slate-800/40 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative group overflow-hidden flex flex-col h-full hover:bg-slate-800/60 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ADEF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#00ADEF]/20 flex items-center justify-center mb-6 shrink-0">
                <Gift className="w-6 h-6 text-[#00ADEF]" />
              </div>
              <h3 className="font-heading font-bold mb-3 text-white flex flex-col gap-1">
                <span className="text-lg sm:text-xl">Combo phục hình gián tiếp</span>
                <span className="text-sm sm:text-base text-[#00ADEF]">Giomer không ê buốt</span>
              </h3>
              <p className="font-body text-sm text-slate-300 mb-6 flex-1 leading-relaxed">
                Triệt tiêu ê buốt tức thì nhờ màng dán dính khóa kín ống ngà từ Keo dán BeautiBond Xtreme (HEMA-Free) kỵ nước tuyệt đối, chống thoái hóa lớp lai. Xi măng tự dán BeautiLink SA phóng thích 6 ion sinh học S-PRG liên tục tái khoáng ngà răng, bảo vệ khỏi sâu răng tái phát.
              </p>
              
              <div className="flex flex-col gap-2 mb-4 bg-slate-900/50 p-3 sm:p-4 rounded-xl border border-white/5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Tổng giá trị:</span>
                  <span className="text-slate-300 font-semibold">8.155.000đ</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">Mức đầu tư ưu đãi:</span>
                  <span className="text-[#00ADEF] font-heading font-extrabold text-lg sm:text-xl">3.415.000đ</span>
                </div>
              </div>
              
              <div className="mb-6 text-center">
                <span className="inline-block bg-emerald-500/10 text-emerald-400 text-[9px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider px-2 sm:px-3 py-1.5 rounded-lg border border-emerald-500/20 whitespace-nowrap">
                  Hoàn tiền 100% nếu Bác sĩ không hài lòng
                </span>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/10">
                <span className="font-mono text-xs text-red-400 font-bold">Chỉ còn 15 suất</span>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent("open-offer-modal", { detail: { offerId: 1 } }))}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00ADEF] border border-[#00ADEF] text-white font-mono text-xs font-bold uppercase hover:bg-[#00c2ff] hover:border-[#00c2ff] hover:shadow-[0_0_20px_rgba(0,173,239,0.5)] transition-all cursor-pointer tracking-wider animate-slow-scale-pulse"
                >
                  ĐĂNG KÝ NGAY <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="bg-slate-800/40 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative group overflow-hidden flex flex-col h-full hover:bg-slate-800/60 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C43838]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#C43838]/20 flex items-center justify-center mb-6 shrink-0">
                <Gift className="w-6 h-6 text-[#C43838]" />
              </div>
              <h3 className="font-heading font-bold mb-3 text-white flex flex-col gap-1">
                <span className="text-lg sm:text-xl">Gói khởi động Trám MiCD</span>
                <span className="text-sm sm:text-base text-[#C43838]">Giải pháp trám thẩm mỹ sinh học</span>
              </h3>
              <p className="font-body text-sm text-slate-300 mb-6 flex-1 leading-relaxed">
                Đồng bộ hóa quy trình trám thẩm mỹ từ dán dính đến đánh bóng chỉ trong một gói giải pháp. Loại bỏ các bước nhạy cảm kỹ thuật, bịt kín xoang sâu phức tạp, kết thúc bằng bộ mũi mài mịn màng chính hãng giúp mô nướu lành thương hồng hào và ngăn mảng bám tích tụ.
              </p>
              
              <div className="flex flex-col gap-2 mb-4 bg-slate-900/50 p-3 sm:p-4 rounded-xl border border-white/5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Tổng giá trị:</span>
                  <span className="text-slate-300 font-semibold">7.250.000đ</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">Mức đầu tư ưu đãi:</span>
                  <span className="text-[#C43838] font-heading font-extrabold text-lg sm:text-xl">3.250.000đ</span>
                </div>
              </div>
              
              <div className="mb-6 text-center">
                <span className="inline-block bg-emerald-500/10 text-emerald-400 text-[9px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider px-2 sm:px-3 py-1.5 rounded-lg border border-emerald-500/20 whitespace-nowrap">
                  Hoàn tiền 100% nếu Bác sĩ không hài lòng
                </span>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/10">
                <span className="font-mono text-xs text-red-400 font-bold">Chỉ còn 8 suất</span>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent("open-offer-modal", { detail: { offerId: 2 } }))}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C43838] border border-[#C43838] text-white font-mono text-xs font-bold uppercase hover:bg-[#e64242] hover:border-[#e64242] hover:shadow-[0_0_20px_rgba(196,56,56,0.5)] transition-all cursor-pointer tracking-wider animate-slow-scale-pulse"
                >
                  NHẬN ƯU ĐÃI <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
