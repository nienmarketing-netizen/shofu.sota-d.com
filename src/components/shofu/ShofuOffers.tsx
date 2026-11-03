import { CtaButton } from "../ui/CtaButton";
import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight, Gift } from 'lucide-react';
import { HomeOffersSection, OfferPackageItem } from '../../pages/admin/home/types';

interface ShofuOffersProps {
  data?: HomeOffersSection;
  onSelectOffer?: (pkg: OfferPackageItem) => void;
}

export function ShofuOffers({ data, onSelectOffer }: ShofuOffersProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: data?.countdownDays ?? 3,
    hours: data?.countdownHours ?? 14,
    minutes: data?.countdownMinutes ?? 25,
    seconds: data?.countdownSeconds ?? 0
  });

  useEffect(() => {
    if (data) {
      setTimeLeft({
        days: data.countdownDays ?? 3,
        hours: data.countdownHours ?? 14,
        minutes: data.countdownMinutes ?? 25,
        seconds: data.countdownSeconds ?? 0
      });
    }
  }, [data]);

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

  const defaultPackages: OfferPackageItem[] = [
    {
      id: 1,
      badge: 'COMBO HOT',
      title1: 'Combo phục hình gián tiếp',
      title2: 'Giomer không ê buốt',
      description: 'Chuẩn hóa phác đồ dán - gắn phục hình gián tiếp 3 bước: Khóa kín ống ngà bằng màng dán kỵ nước HEMA-Free (<strong class="text-[#00ADEF]">BeautiBond Xtreme</strong>), kết hợp Xi măng tự dán sinh học (<strong class="text-emerald-400">BeautiLink SA</strong>) giải phóng 6 ion – Giảm thiểu nguy cơ thủy phân liên kết và bảo vệ viền sinh học bền vững.',
      originalPrice: '3.250.000đ',
      salePrice: '1.497.000vnđ',
      refundBadge: 'Hoàn tiền 100% nếu Bác sĩ không hài lòng',
      spotsLeftText: 'Chỉ còn 15 suất',
      accentColor: '#00ADEF',
      ctaText: 'ĐĂNG KÝ NGAY'
    },
    {
      id: 2,
      badge: 'ƯU ĐÃI ĐẶC BIỆT',
      title1: 'Gói khởi động Phục Hồi MiCD',
      title2: 'Giải pháp phục hồi thẩm mỹ sinh học',
      description: 'Đồng bộ hóa quy trình phục hồi thẩm mỹ từ dán dính đến đánh bóng chỉ trong một gói giải pháp. <strong class="text-emerald-400">Loại bỏ các bước nhạy cảm kỹ thuật</strong>, bịt kín xoang sâu phức tạp, kết thúc bằng bộ mũi mài mịn màng chính hãng giúp <strong class="text-amber-400">mô nướu lành thương hồng hào</strong> và <strong class="text-emerald-400">ngăn mảng bám tích tụ</strong>.',
      originalPrice: '7.250.000đ',
      salePrice: '3.250.000đ',
      refundBadge: 'Hoàn tiền 100% nếu Bác sĩ không hài lòng',
      spotsLeftText: 'Chỉ còn 8 suất',
      accentColor: '#C43838',
      ctaText: 'NHẬN ƯU ĐÃI'
    }
  ];

  const packagesList = (data?.packages && data.packages.length > 0) ? data.packages : defaultPackages;

  const handlePackageClick = (pkg: OfferPackageItem) => {
    if (onSelectOffer) {
      onSelectOffer(pkg);
    } else {
      window.dispatchEvent(new CustomEvent("open-offer-modal", { detail: { offerId: pkg.id } }));
    }
  };

  return (
    <section id="offers" className="py-20 bg-slate-900 bg-grid-pattern text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ADEF]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Timer className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold text-red-400 uppercase tracking-widest">
              {data?.badge || 'Ưu đãi giới hạn số lượng'}
            </span>
          </div>
          {data?.headline ? (
            <h2 
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-6 uppercase tracking-tight"
              dangerouslySetInnerHTML={{ __html: data.headline }}
            />
          ) : (
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-6 uppercase tracking-tight">
              MUA HÀNG <span className="block sm:inline text-[#00ADEF]">KHÔNG RỦI RO</span>
            </h2>
          )}
          
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
          {packagesList.map((pkg) => {
            const isRed = pkg.accentColor === '#C43838' || pkg.id === 2;
            const accentClass = isRed ? 'text-[#C43838]' : 'text-[#00ADEF]';
            const bgIconClass = isRed ? 'bg-[#C43838]/20 text-[#C43838]' : 'bg-[#00ADEF]/20 text-[#00ADEF]';
            const btnBgClass = isRed 
              ? 'bg-[#C43838] border-[#C43838] hover:bg-[#e64242] hover:border-[#e64242] hover:shadow-[0_0_20px_rgba(196,56,56,0.5)]' 
              : 'bg-[#00ADEF] border-[#00ADEF] hover:bg-[#00c2ff] hover:border-[#00c2ff] hover:shadow-[0_0_20px_rgba(0,173,239,0.5)]';

            return (
              <div 
                key={pkg.id} 
                className="bg-slate-800/40 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative group overflow-hidden flex flex-col h-full hover:bg-slate-800/60 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${isRed ? 'from-[#C43838]/5' : 'from-[#00ADEF]/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className={`w-12 h-12 rounded-xl ${bgIconClass} flex items-center justify-center mb-6 shrink-0`}>
                    <Gift className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold mb-3 text-white flex flex-col gap-1">
                    <span className="text-lg sm:text-xl">{pkg.title1}</span>
                    <span className={`text-sm sm:text-base ${accentClass}`}>{pkg.title2}</span>
                  </h3>
                  <p 
                    className="font-body text-sm text-slate-300 mb-6 flex-1 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: pkg.description }}
                  />
                  
                  <div className="flex flex-col gap-2 mb-4 bg-slate-900/50 p-3 sm:p-4 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Tổng giá trị:</span>
                      <span className="text-slate-300 font-semibold">{pkg.originalPrice}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300 font-medium">Mức đầu tư ưu đãi:</span>
                      <span className={`${accentClass} font-heading font-extrabold text-lg sm:text-xl`}>{pkg.salePrice}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6 text-center">
                    <span className="inline-block bg-emerald-500/10 text-emerald-400 text-[9px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider px-2 sm:px-3 py-1.5 rounded-lg border border-emerald-500/20 whitespace-nowrap">
                      {pkg.refundBadge}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/10">
                    <span className="font-mono text-xs text-red-400 font-bold">{pkg.spotsLeftText}</span>
                    <CtaButton 
                      ctaName="MoKhoaUuDai" 
                      onClick={() => handlePackageClick(pkg)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-white font-mono text-xs font-bold uppercase ${btnBgClass} transition-all cursor-pointer tracking-wider animate-slow-scale-pulse`}
                    >
                      {pkg.ctaText} <ArrowRight className="w-4 h-4" />
                    </CtaButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

