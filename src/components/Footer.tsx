import React from 'react';
import { MapPin, Phone, CheckCircle2, AlertCircle, Building2 } from 'lucide-react';

export const Footer: React.FC = () => {
 return (
  <footer className="bg-slate-50 border-t border-slate-200 text-slate-900 pt-10 sm:pt-14 pb-8 sm:pb-10 font-body text-sm relative max-w-full w-full">
   <div className="w-[90%] lg:w-[80%] mx-auto space-y-8 sm:space-y-10">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
     
     {/* Company Main Info */}
     <div className="md:col-span-6 space-y-4">
      <div className="pb-1">
       <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 uppercase tracking-tight leading-tight">
        SOTA-D | VIDEC 2026
       </h3>
      </div>

      <div className="space-y-2.5 font-body text-xs text-slate-600 pt-1">
       <div className="flex items-start gap-2.5">
        <MapPin className="w-4 h-4 text-[#C43838] shrink-0 mt-0.5" />
        <span className="leading-snug"><strong className="text-slate-900">Địa điểm diễn ra sự kiện:</strong> 135 Nam Kỳ Khởi Nghĩa, Phường Bến Thành, TP. Hồ Chí Minh (Gian hàng B75–B77)</span>
       </div>
       <div className="flex items-center gap-2.5">
        <Phone className="w-4 h-4 text-[#00ADEF] shrink-0" />
        <span><strong className="text-slate-900">Hotline hỗ trợ:</strong> <a href="tel:0967287139" className="text-[#00ADEF] hover:underline font-bold">0967 287 139</a></span>
       </div>
      </div>
     </div>

     {/* Event Rules Box */}
     <div className="md:col-span-6 glass-card rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-2 font-body text-xs text-slate-600">
      <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-sm uppercase">
       <AlertCircle className="w-4 h-4 shrink-0" /> QUY ĐỊNH THAM DỰ & CHECK-IN
      </div>
      <p className="leading-relaxed">
       Quý Bác sĩ vui lòng check-in trước 10 phút để nhận kit quà tặng. Suất tham dự có thể nhường cho Waitlist nếu Quý Bác sĩ đến trễ quá 10 phút.
      </p>
      <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3 font-mono text-[11px] text-[#00ADEF]">
       <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" /> Ngày 27/08/2026</span>
       <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#00ADEF] shrink-0" /> Booth B75–B77</span>
       <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#C43838] shrink-0" /> Giới hạn 15 suất/phiên</span>
      </div>
     </div>

    </div>

    {/* Bottom Bar */}
    <div className="pt-5 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-slate-600 text-center sm:text-left">
     <div className="flex flex-col sm:flex-row items-center sm:gap-2 text-[#00ADEF] font-semibold mx-auto sm:mx-0">
      <span>VIDEC 2026</span>
      <span className="hidden sm:inline">|</span>
      <span>Gian hàng Sota-D (B75–B77)</span>
     </div>
    </div>
   </div>
  </footer>
 );
};
