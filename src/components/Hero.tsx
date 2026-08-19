import React from 'react';
import { Calendar, MapPin, UserCheck, Sparkles, Clock, CheckCircle2, Award } from 'lucide-react';
import { Button } from './ui/Button';

interface HeroProps {
 onScrollToForm: () => void;
 onScrollToSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({
 onScrollToForm,
 onScrollToSchedule,
}) => {
 return (
  <section id="hero" className="relative pt-8 pb-14 md:pt-16 md:pb-24 overflow-hidden max-w-full w-full border-b border-slate-200 bg-slate-100 bg-grid-pattern">
   {/* Background Ambient Glow Blobs */}
   <div className="absolute top-1/4 right-0 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] bg-[#00ADEF] opacity-15 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
   <div className="absolute bottom-0 left-0 w-[220px] sm:w-[450px] h-[220px] sm:h-[450px] bg-[#C43838] opacity-15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

   <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
    {/* Partner Logos */}
    <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-5 mb-8 sm:mb-12 bg-white p-2.5 sm:p-3 px-4 sm:px-6 rounded-full shadow-sm border border-slate-200">
      {/* Organised By */}
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">Organised by</span>
        <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/Sota-D%20logo%20(1).png" alt="Sota-D Logo" className="h-5 sm:h-7 object-contain" />
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-5 bg-slate-200"></div>

      {/* Supported By */}
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">Supported by</span>
        <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/Logo_Shofu%20(1).png" alt="Shofu Logo" className="h-5 sm:h-7 object-contain" />
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full max-w-full">
     
     {/* Left Column: Headline & Event Details */}
     <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6 text-left w-full max-w-full">
      {/* Pre-head Badge */}
      <div className="inline-flex max-w-full items-center gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 ">
       <span className="w-2.5 h-2.5 rounded-full bg-[#00ADEF] animate-pulse shadow-md shrink-0" />
       <span className="font-mono text-[10px] sm:text-xs font-semibold text-[#00ADEF] uppercase tracking-normal sm:tracking-wider leading-tight">
        VIDEC 2026 | Gian hàng Sota-D (B75–B77)
       </span>
      </div>

      {/* Headline */}
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-slate-900 uppercase flex flex-col gap-1 sm:gap-2">
       <span>ĐĂNG KÝ THAM DỰ</span>
       <span>BÁO CÁO KHOA HỌC</span>
       <span className="text-gradient">& DEMO HANDS-ON</span>
      </h1>

      {/* Hook message */}
      <p className="font-body text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
       Cập nhật báo cáo khoa học vật liệu, trực tiếp hands-on kỹ thuật, áp dụng ngay vào thực tế lâm sàng và <strong className="font-semibold text-slate-900">nhận bộ quà tặng giá trị từ Shofu và Sota-D.</strong>
      </p>

      {/* Event Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
       <div className="glass-card rounded-xl p-4 border border-slate-200 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0">
         <Calendar className="w-5 h-5 text-[#00ADEF]" />
        </div>
        <div>
         <div className="font-mono text-[11px] uppercase text-slate-600">Thời gian</div>
         <div className="font-heading font-bold text-base text-slate-900">27/08/2026</div>
        </div>
       </div>

       <div className="glass-card rounded-xl p-4 border border-slate-200 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
         <MapPin className="w-5 h-5 text-[#C43838]" />
        </div>
        <div>
         <div className="font-mono text-[11px] uppercase text-slate-600">Địa điểm</div>
         <div className="font-body text-xs font-semibold text-slate-900 leading-snug">
          135 Nam Kỳ Khởi Nghĩa, Phường Bến Thành, TP. Hồ Chí Minh
         </div>
        </div>
       </div>
      </div>

      {/* CTA Button 1 & 2 */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
       <Button
        variant="primary"
        size="lg"
        onClick={onScrollToForm}
        className="sota-gradient font-heading font-bold text-xs sm:text-sm text-white hover:scale-[1.02] transition-transform w-full sm:w-auto justify-start text-left px-3.5 sm:px-7 py-3 leading-snug"
        icon={<UserCheck className="w-5 h-5 text-white shrink-0" />}
       >
        <span className="flex flex-col items-start justify-start text-left leading-tight">
         <span className="uppercase font-extrabold tracking-wide">ĐĂNG KÝ GIỮ SUẤT NGAY</span>
         <span className="font-mono text-[11px] sm:text-xs font-normal opacity-90 normal-case mt-0.5">(Chỉ 15 suất/phiên)</span>
        </span>
       </Button>

       <Button
        variant="outline"
        size="lg"
        onClick={onScrollToSchedule}
        className="glass-card border-sky-200 text-slate-900 hover:bg-slate-100 font-heading font-semibold text-xs sm:text-sm w-full sm:w-auto justify-start text-left"
        icon={<Clock className="w-4 h-4 text-[#00ADEF] shrink-0" />}
       >
        Xem Lịch Trình
       </Button>
      </div>
     </div>

     {/* Right Column: Interactive Session Availability & Tech Highlight Card */}
     <div className="lg:col-span-5 flex flex-col justify-center gap-5">
      {/* Live Availability Card */}
      <div className="glass-card rounded-2xl p-6 relative overflow-hidden glass-card-hover border border-sky-200">
       <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center">
         <Award className="w-6 h-6 text-[#00ADEF]" />
        </div>
        <div className="text-right">
         <div className="font-mono text-[10px] uppercase text-slate-600">Giới hạn tham dự</div>
         <div className="font-heading font-bold text-2xl text-[#00ADEF]">15 Suất / Phiên</div>
        </div>
       </div>

       <h3 className="font-heading font-semibold text-xl mb-2 text-slate-900">Chương trình báo cáo khoa học và hands-on đặc biệt tại VIDEC 2026</h3>
       <p className="text-slate-600 text-sm mb-6 leading-relaxed">
        Trực tiếp tương tác cùng các Báo cáo viên hàng đầu và trải nghiệm vật liệu Nha khoa SHOFU Nhật Bản tại gian hàng Sota-D.
       </p>

       {/* Progress bars for morning & afternoon sessions */}
       <div className="space-y-3.5">
        {/* Phiên Sáng */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
         <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 sm:gap-2">
          <div className="min-w-0">
           <div className="text-[#00ADEF] font-mono font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00ADEF] animate-pulse shrink-0" />
            Phiên Sáng (10:30 - 11:15)
           </div>
           <div className="text-slate-900 font-semibold text-xs sm:text-sm mt-0.5 truncate">
            3D Printed Technique
           </div>
          </div>
          <div className="self-start xs:self-center shrink-0">
           <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-sky-100 text-[#00ADEF] border border-sky-200">
            Còn 9/15 suất
           </span>
          </div>
         </div>
         <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full w-[73%] shofu-gradient rounded-full"></div>
         </div>
        </div>

        {/* Phiên Chiều */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
         <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 sm:gap-2">
          <div className="min-w-0">
           <div className="text-[#C43838] font-mono font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF5252] animate-pulse shrink-0" />
            Phiên Chiều (14:15 - 15:00)
           </div>
           <div className="text-slate-900 font-semibold text-xs sm:text-sm mt-0.5 truncate">
            S-PRG & Resin Cement
           </div>
          </div>
          <div className="self-start xs:self-center shrink-0">
           <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-[#FF5252]/20 text-[#C43838] border border-[#FF5252]/30">
            Còn 8/15 suất
           </span>
          </div>
         </div>
         <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full w-[60%] sota-gradient rounded-full"></div>
         </div>
        </div>
       </div>
      </div>

      {/* Quick Stat Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
       <div className="glass-card rounded-2xl p-4 sm:p-5 border-l-2 border-l-[#C43838]">
        <div className="font-mono text-[10px] uppercase text-slate-600 mb-1">Gian hàng chính thức</div>
        <div className="font-heading font-bold text-lg sm:text-xl text-slate-900">BOOTH B75–B77</div>
       </div>

       <div className="glass-card rounded-2xl p-4 sm:p-5 border-l-2 border-l-[#00ADEF]">
        <div className="font-mono text-[10px] uppercase text-slate-600 mb-1">Đơn vị tổ chức</div>
        <div className="font-heading font-bold text-lg sm:text-xl text-[#00ADEF]">SOTA-D</div>
       </div>
      </div>
     </div>

    </div>
   </div>
  </section>
 );
};
