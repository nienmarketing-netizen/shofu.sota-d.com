import React from 'react';
import { Clock, User, Sparkles, Layers, CheckCircle2, BookmarkPlus } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
 return (
  <section id="lich-trinh" className="py-12 md:py-24 relative border-b border-slate-200 max-w-full w-full bg-slate-100 bg-grid-pattern">
   <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
    
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
     <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 mb-3 sm:mb-4">
      <Clock className="w-4 h-4 text-[#00ADEF]" />
      <span className="font-mono text-xs font-bold text-[#00ADEF] uppercase tracking-wider">
       BÁO CÁO KHOA HỌC & DEMO HANDS-ON
      </span>
     </div>
     <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-900 uppercase tracking-tight">
      Lịch trình Chi tiết <span className="text-gradient">(27/08/2026)</span>
     </h2>
     <p className="font-body text-slate-600 text-sm sm:text-lg mt-2 sm:mt-3">
      Mỗi phiên giới hạn đúng 15 suất để đảm bảo tất cả Bác sĩ được thao tác thực hành trực tiếp và trao đổi sâu cùng diễn giả.
     </p>
    </div>

    {/* Schedule Columns Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
     
     {/* Morning Session Column */}
     <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-sky-300 relative overflow-hidden glass-card-hover flex flex-col justify-between">
      <div>
       {/* Session Header Tag */}
       <div className="flex items-center justify-between gap-1 sm:gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-200">
        <div className="flex items-center gap-1.5 sm:gap-3">
         <div className="px-1.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-sky-100 border border-sky-300 font-mono text-[10px] sm:text-sm font-bold text-[#00ADEF] whitespace-nowrap">
          10:30 - 11:15
         </div>
         <span className="font-mono text-[10px] sm:text-xs font-semibold text-[#00ADEF] uppercase tracking-wider whitespace-nowrap">PHIÊN SÁNG</span>
        </div>
        <span className="px-1.5 sm:px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-500 border border-sky-500/30 text-[9px] sm:text-[11px] font-mono font-semibold whitespace-nowrap shrink-0">
         Còn 9 suất
        </span>
       </div>

       {/* Topic */}
       <div className="mb-4 sm:mb-6">
        <span className="font-mono text-[10px] sm:text-xs text-slate-600 uppercase block mb-1">Chủ đề bài báo cáo</span>
        <h3 className="font-heading font-bold text-lg sm:text-2xl text-slate-900 leading-snug">
         Phục hồi trực tiếp răng sau với 3D Printed Technique
        </h3>
       </div>

       {/* Speaker */}
       <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-3 sm:gap-5 items-center p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 mb-4 sm:mb-6">
        <div className="w-full h-fit rounded-xl sm:rounded-2xl shofu-gradient p-0.5 shrink-0">
         <div className="w-full h-fit bg-slate-200 rounded-[10px] sm:rounded-[14px] overflow-hidden">
          <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BS.Ngo%CC%A3c.png" alt="BS. Dương Bảo Ngọc" className="w-full h-auto object-contain block" />
         </div>
        </div>
        <div className="flex flex-col justify-center">
         <div className="font-mono text-[10px] sm:text-[11px] uppercase text-slate-500 mb-0.5 sm:mb-1">Báo cáo viên</div>
         <div className="font-heading font-bold text-base sm:text-lg lg:text-xl text-slate-900 mb-1">BS. Dương Bảo Ngọc</div>
         <div className="font-body text-[11px] sm:text-xs text-[#00ADEF] leading-snug">Co-founder Nha Khoa Dentiny & Admin Hyperrealism – Chuyên gia Phục hồi Thẩm mỹ & Nha khoa Kỹ thuật số</div>
        </div>
       </div>

       {/* Activities & Materials */}
       <div className="space-y-3 sm:space-y-4 font-body text-xs sm:text-sm text-slate-600 mb-6 sm:mb-8">
        <div className="flex items-start gap-2.5 sm:gap-3">
         <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ADEF] shrink-0 mt-0.5" />
         <div>
          <strong className="text-slate-900 block font-mono text-[10px] sm:text-xs uppercase mb-0.5">HOẠT ĐỘNG TẠI GIAN HÀNG</strong>
          <span>Demo kỹ thuật & Thực hành Hands-on trực tiếp tại gian hàng Sota-D.</span>
         </div>
        </div>

        <div className="flex items-start gap-2.5 sm:gap-3">
         <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ADEF] shrink-0 mt-0.5" />
         <div>
          <strong className="text-slate-900 block font-mono text-[10px] sm:text-xs uppercase mb-0.5">Vật tư trải nghiệm:</strong>
          <span className="text-[#00ADEF] font-semibold">Beautifil Injectable X/XSL + BeautiBond Xtreme</span>
         </div>
        </div>
       </div>
      </div>

      <div className="pt-3.5 sm:pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-slate-600">
       <span>Địa điểm: Booth B75–B77</span>
       <span className="text-[#00ADEF] flex items-center gap-1 font-semibold">
        <CheckCircle2 className="w-3.5 h-3.5" /> Demo thực hành
       </span>
      </div>
     </div>

     {/* Afternoon Session Column */}
     <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-red-300 relative overflow-hidden glass-card-hover flex flex-col justify-between">
      <div>
       {/* Session Header Tag */}
       <div className="flex items-center justify-between gap-1 sm:gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-200">
        <div className="flex items-center gap-1.5 sm:gap-3">
         <div className="px-1.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-red-100 border border-red-300 font-mono text-[10px] sm:text-sm font-bold text-[#C43838] whitespace-nowrap">
          14:15 – 15:00
         </div>
         <span className="font-mono text-[10px] sm:text-xs font-semibold text-[#C43838] uppercase tracking-wider whitespace-nowrap">PHIÊN CHIỀU</span>
        </div>
        <span className="px-1.5 sm:px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-500 border border-sky-500/30 text-[9px] sm:text-[11px] font-mono font-semibold whitespace-nowrap shrink-0">
         Còn 8 suất
        </span>
       </div>

       {/* Topic */}
       <div className="mb-4 sm:mb-6">
        <span className="font-mono text-[10px] sm:text-xs text-slate-600 uppercase block mb-1">Chủ đề bài báo cáo</span>
        <h3 className="font-heading font-bold text-lg sm:text-2xl text-slate-900 leading-snug">
         Xi măng đa năng thế hệ mới & Công nghệ S-PRG
        </h3>
       </div>

       {/* Speaker */}
       <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-3 sm:gap-5 items-center p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 mb-4 sm:mb-6">
        <div className="w-full h-fit rounded-xl sm:rounded-2xl sota-gradient p-0.5 shrink-0">
         <div className="w-full h-fit bg-slate-200 rounded-[10px] sm:rounded-[14px] overflow-hidden">
          <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BS%20Kha%CC%81nh.png" alt="ThS.BS Trần Quang Khánh" className="w-full h-auto object-contain block" />
         </div>
        </div>
        <div className="flex flex-col justify-center">
         <div className="font-mono text-[10px] sm:text-[11px] uppercase text-slate-500 mb-0.5 sm:mb-1">Báo cáo viên</div>
         <div className="font-heading font-bold text-base sm:text-lg lg:text-xl text-slate-900 mb-1">ThS.BS Trần Quang Khánh</div>
         <div className="font-body text-[11px] sm:text-xs text-[#C43838] leading-snug">Trainer MiCD Global Network – Chuyên gia Vật liệu, Hệ thống dán và Phục hình Nha Khoa.</div>
        </div>
       </div>

       {/* Activities & Materials */}
       <div className="space-y-3 sm:space-y-4 font-body text-xs sm:text-sm text-slate-600 mb-6 sm:mb-8">
        <div className="flex items-start gap-2.5 sm:gap-3">
         <BookmarkPlus className="w-4 h-4 sm:w-5 sm:h-5 text-[#C43838] shrink-0 mt-0.5" />
         <div>
          <strong className="text-slate-900 block font-mono text-[10px] sm:text-xs uppercase mb-0.5">Trọng tâm kiến thức:</strong>
          <span>Phân loại Resin Cement, quy trình dán Zirconia/sứ thủy tinh/sứ lai và ứng dụng Beautilink SA.</span>
         </div>
        </div>

        <div className="flex items-start gap-2.5 sm:gap-3">
         <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ADEF] shrink-0 mt-0.5" />
         <div>
          <strong className="text-slate-900 block font-mono text-[10px] sm:text-xs uppercase mb-0.5">Vật tư trải nghiệm:</strong>
          <span className="text-[#00ADEF] font-semibold">Resin Cement Beautilink SA & Hạt độn S-PRG</span>
         </div>
        </div>
       </div>
      </div>

      <div className="pt-3.5 sm:pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-slate-600">
       <span>Địa điểm: Booth B75–B77</span>
       <span className="text-[#00ADEF] flex items-center gap-1 font-semibold">
        <CheckCircle2 className="w-3.5 h-3.5" /> Nhận bộ Slide & Tài liệu
       </span>
      </div>
     </div>

    </div>
   </div>
  </section>
 );
};
