import React from 'react';
import { Clock, ShieldAlert, Sparkles, CheckCircle, Zap } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
 return (
  <section id="loi-ich" className="py-12 md:py-24 relative border-b border-slate-200 overflow-hidden max-w-full w-full bg-slate-200 bg-grid-pattern">
   {/* Background glow accent */}
   <div className="absolute top-1/2 right-0 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-[#00ADEF] opacity-10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

   <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
    {/* Section Title */}
    <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-16">
     <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 mb-3 sm:mb-4">
      <Sparkles className="w-4 h-4 text-[#00ADEF]" />
      <span className="font-mono text-xs uppercase tracking-widest text-[#00ADEF] font-semibold">
       NỘI DUNG CHUYÊN SÂU VÀ HANDS-ON
      </span>
     </div>
     <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-900 uppercase tracking-tight leading-snug sm:leading-[1.3]">
      Giải pháp Công nghệ <br />
      và ứng dụng Lâm sàng <br className="sm:hidden" />
      <span className="text-gradient">từ SHOFU</span>
     </h2>
     <p className="font-body text-slate-600 text-sm sm:text-lg mt-3 max-w-3xl mx-auto">
      Giải quyết triệt để hai thách thức lớn trong phục hồi nha khoa: Tối ưu hóa thời gian ghế khám và triệt tiêu hoàn toàn tình trạng ê buốt sau dán.
     </p>
    </div>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
     
     {/* Card 1: Tối ưu thời gian */}
     <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden glass-card-hover border-l-4 border-l-[#00ADEF]">
      <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
       <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center shrink-0">
        <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-[#00ADEF]" />
       </div>
       <div>
        <span className="font-mono text-[10px] sm:text-xs text-[#00ADEF] font-bold uppercase tracking-wider block">Nội dung 1 • Tối ưu thời gian</span>
        <h3 className="font-heading font-bold text-lg sm:text-2xl text-slate-900 mt-0.5">3D Printed Technique</h3>
       </div>
      </div>

      <p className="font-body text-slate-600 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
       Phục hồi trực tiếp răng sau với <strong className="text-slate-900">3D Printed Technique</strong>: Tạm biệt đắp lớp thủ công. Phục hình chính xác chỉ qua một lần bơm ép, tối ưu độ khít sát và thẩm mỹ bề mặt.
      </p>


      <div className="space-y-2.5 sm:space-y-3 font-body text-xs sm:text-sm text-slate-600">
       <div className="flex items-start gap-2.5 sm:gap-3 bg-white shadow-sm p-2.5 sm:p-3 rounded-xl border border-slate-200">
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500 shrink-0 mt-0.5" />
        <span className="leading-snug">Tiết kiệm tối đa thời gian ghế nha (Tối ưu lợi nhuận)</span>
       </div>
       <div className="flex items-start gap-2.5 sm:gap-3 bg-white shadow-sm p-2.5 sm:p-3 rounded-xl border border-slate-200">
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500 shrink-0 mt-0.5" />
        <span className="leading-snug">Kết quả tiên lượng chính xác (Không phụ thuộc "hoa tay")</span>
       </div>
       <div className="flex items-start gap-2.5 sm:gap-3 bg-white shadow-sm p-2.5 sm:p-3 rounded-xl border border-slate-200">
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500 shrink-0 mt-0.5" />
        <span className="leading-snug">Bảo vệ sinh học chủ động (Giảm thiểu rủi ro bảo hành)</span>
       </div>
      </div>
     </div>

     {/* Card 2: Triệt tiêu ê buốt */}
     <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden glass-card-hover border-l-4 border-l-[#C43838]">
      <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
       <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-red-100 border border-red-300 flex items-center justify-center shrink-0">
        <ShieldAlert className="w-5 h-5 sm:w-7 sm:h-7 text-[#C43838]" />
       </div>
       <div>
        <span className="font-mono text-[10px] sm:text-xs text-[#C43838] font-bold uppercase tracking-wider block">Nội dung 2 • Triệt tiêu ê buốt</span>
        <h3 className="font-heading font-bold text-lg sm:text-2xl text-slate-900 mt-0.5">Xi Măng Đa Năng Thế Hệ Mới & S-PRG</h3>
       </div>
      </div>

      <p className="font-body text-slate-600 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
       Khám phá xi măng đa năng thế hệ mới. Không chỉ <strong className="text-slate-900">"Thụ động"</strong> kết dính, mà <strong className="text-[#00ADEF]">"Chủ động"</strong> bảo vệ với công nghệ hạt độn S-PRG tái khoáng hóa.
      </p>


      <div className="space-y-2.5 sm:space-y-3 font-body text-xs sm:text-sm text-slate-600">
       <div className="flex items-start gap-2.5 sm:gap-3 bg-white shadow-sm p-2.5 sm:p-3 rounded-xl border border-slate-200">
        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ADEF] shrink-0 mt-0.5" />
        <span className="leading-snug">Giải phóng liên tục 6 loại ion khoáng (Na+, B3+, Al3+, F-, Sr2+, SiO32-) tái tạo men răng tự nhiên.</span>
       </div>
       <div className="flex items-start gap-2.5 sm:gap-3 bg-white shadow-sm p-2.5 sm:p-3 rounded-xl border border-slate-200">
        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ADEF] shrink-0 mt-0.5" />
        <span className="leading-snug">Khả năng tự sạc lại Fluoride từ kem đánh răng, tạo hàng rào chống vi khuẩn sâu răng tái phát.</span>
       </div>
       <div className="flex items-start gap-2.5 sm:gap-3 bg-white shadow-sm p-2.5 sm:p-3 rounded-xl border border-slate-200">
        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#00ADEF] shrink-0 mt-0.5" />
        <span className="leading-snug">Ứng dụng dòng xi măng <strong className="text-[#00ADEF]">Beautilink SA</strong> cho quy trình dán Zirconia, sứ thủy tinh, sứ lai bền vững.</span>
       </div>
      </div>
     </div>

    </div>

    {/* SHOFU Material Product Showcase Strip */}
    <div className="mt-8 sm:mt-12 glass-card rounded-2xl p-4 sm:p-6 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center items-start">
     <div className="p-3 rounded-xl bg-white shadow-sm hover:bg-slate-100 transition-colors flex flex-col h-fit">
      <div className="w-full bg-slate-100 rounded-lg mb-1.5 overflow-hidden border border-slate-200">
       <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautifil-injectable-x.png" alt="Beautifil Injectable X" className="w-full h-auto object-contain" />
      </div>
      <div className="font-mono text-[10px] text-[#00ADEF] uppercase mt-1">Composite lỏng cao cấp</div>
      <div className="font-heading font-bold text-sm sm:text-base text-slate-900 mt-1">Beautifil Injectable X</div>
      <div className="font-mono text-[11px] sm:text-xs text-slate-600 mt-1">Độ bóng & Độ bền vượt trội</div>
     </div>

     <div className="p-3 rounded-xl bg-white shadow-sm hover:bg-slate-100 transition-colors flex flex-col h-fit">
      <div className="w-full bg-slate-100 rounded-lg mb-1.5 overflow-hidden border border-slate-200">
       <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautibond-xtreme.png" alt="BeautiBond Xtreme" className="w-full h-auto object-contain" />
      </div>
      <div className="font-mono text-[10px] text-[#00ADEF] uppercase mt-1">Keo dán đa năng HEMA-free</div>
      <div className="font-heading font-bold text-sm sm:text-base text-slate-900 mt-1">BeautiBond Xtreme</div>
      <div className="font-mono text-[11px] sm:text-xs text-slate-600 mt-1">Lực dán chắc chắn mọi bề mặt</div>
     </div>

     <div className="p-3 rounded-xl bg-white shadow-sm hover:bg-slate-100 transition-colors flex flex-col h-fit">
      <div className="w-full bg-slate-100 rounded-lg mb-1.5 overflow-hidden border border-slate-200">
       <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BeautilinkSA.png" alt="Beautilink SA" className="w-full h-auto object-contain" />
      </div>
      <div className="font-mono text-[10px] text-[#C43838] uppercase mt-1">Xi măng tự dán thế hệ mới</div>
      <div className="font-heading font-bold text-sm sm:text-base text-slate-900 mt-1">Beautilink SA</div>
      <div className="font-mono text-[11px] sm:text-xs text-slate-600 mt-1">One-Sweep sạch xi măng dư</div>
     </div>

     <div className="p-3 rounded-xl bg-white shadow-sm hover:bg-slate-100 transition-colors flex flex-col h-fit">
      <div className="w-full bg-slate-100 rounded-lg mb-1.5 overflow-hidden border border-slate-200">
       <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/S-PRG.png" alt="S-PRG Technology" className="w-full h-auto object-contain" />
      </div>
      <div className="font-mono text-[10px] text-sky-500 uppercase mt-1">Công nghệ độc quyền</div>
      <div className="font-heading font-bold text-sm sm:text-base text-slate-900 mt-1">S-PRG Technology</div>
      <div className="font-mono text-[11px] sm:text-xs text-slate-600 mt-1">Tái khoáng & Ngừa ê buốt</div>
     </div>
    </div>

   </div>
  </section>
 );
};
