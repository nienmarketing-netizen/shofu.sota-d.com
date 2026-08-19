import React, { useState } from 'react';
import { Gift, Gamepad2, FileText, CheckCircle2, Trophy, HelpCircle, Award, Sparkles, Star } from 'lucide-react';

const quizData = [
  {
    title: "CÂU 1: CẶP ION CỘNG HƯỞNG LÂM SÀNG",
    question: "Cặp ion sinh học nào từ S-PRG kết hợp giúp tái khoáng răng và bít kín ống ngà hở hiệu quả nhất?",
    options: [
      "A. Fluoride (F−) & Calcium (Ca2+)",
      "B. Fluoride (F−) & Strontium (Sr2+)",
      "C. Fluoride (F−) & Aluminium (Al3+)",
      "D. Strontium (Sr2+) & Silicate (SiO32−)"
    ],
    correctIndex: 1,
    insight: "💡 Clinical Insight: Fluoride và Strontium cộng hưởng tạo mạng tinh thể Fluoro-Strontium-apatite cực bền, giúp tái khoáng và bít kín ống ngà hở. Đây là cơ chế bảo vệ tủy có mặt trong toàn bộ hệ sinh thái Giomer của Shofu, giải thích vì sao tỷ lệ ê buốt sau điều trị bằng 0 khi Bác sĩ trám răng với composite Beautifil hoặc gắn phục hình với xi măng tự dán BeautiLink SA."
  },
  {
    title: "CÂU 2: BƯỚC NGOẶT SINH HỌC PHÂN TỬ (NATURE 2018)",
    question: "Theo tạp chí Scientific Reports (Nature 2018), hạt S-PRG ức chế vi khuẩn sâu răng S. mutans bằng cơ chế phân tử nào?",
    options: [
      "A. Phá hủy cơ học màng tế bào vi khuẩn.",
      "B. Ngăn chặn chuỗi tổng hợp DNA.",
      "C. Kìm hãm gen pdh operon, cắt đứt nguồn năng lượng của vi khuẩn.",
      "D. Trung hòa thụ động axit vi khuẩn tiết ra."
    ],
    correctIndex: 2,
    insight: "💡 Clinical Insight: Hạt S-PRG can thiệp trực tiếp ở cấp độ gen để khóa con đường chuyển hóa đường của vi khuẩn S. mutans. Hoạt tính kháng khuẩn chủ động này được tích hợp đồng nhất trong mọi dòng composite thuộc hệ Giomer, giúp Bác sĩ yên tâm tuyệt đối khi đắp composite lỏng Beautifil Injectable X vào các hốc xoang sâu, khuất hoặc khó vệ sinh."
  },
  {
    title: "CÂU 3: TRUNG HÒA AXIT CHỦ ĐỘNG",
    question: "Hạt S-PRG trung hòa axit tại đường viền phục hình (khi pH < 5.5) bằng cách giải phóng những ion nào?",
    options: [
      "A. Liên tục nhả ion kiềm mạnh 24/7.",
      "B. Nhả ion Sodium (Na+), Silicate (SiO32−) và Aluminium (Al3+) để kéo pH về mức trung tính (~7).",
      "C. Hấp thụ trực tiếp ion H+ vào trong lõi hạt độn.",
      "D. Kích thích nước bọt tiết ra nhiều bicarbonate hơn."
    ],
    correctIndex: 1,
    insight: "💡 Clinical Insight: Khả năng tự động nhả hệ ion đệm để trung hòa axit mảng bám là đặc tính sinh học bảo vệ đường viền chung của mọi vật liệu Giomer. Khi kết hợp đặc tính này với thiết kế giảm co ngót vật lý của dòng composite răng sau chuyên biệt Beautifil II LS (co ngót cực thấp 0.85%), răng sau sẽ đạt được độ bền bỉ kép tối đa."
  },
  {
    title: "CÂU 4: BÌNH ẮC QUY SINH HỌC (RECHARGE)",
    question: "Vì sao hoạt tính giải phóng Fluoride của S-PRG có thể kéo dài suốt hàng chục năm lâm sàng mà không bị cạn kiệt?",
    options: [
      "A. Lõi hạt S-PRG tự phân hạch để tạo ion mới.",
      "B. Cơ chế \"Tái nạp\" (Recharge): Tự hấp thụ Fluoride ngoại sinh từ kem đánh răng để giải phóng ngược lại khi cần.",
      "C. Nhờ màng nhựa resin bọc ngoài giữ ion lại.",
      "D. Thực tế hoạt tính sẽ biến mất hoàn toàn sau 2 năm."
    ],
    correctIndex: 1,
    insight: "💡 Clinical Insight: Khả năng \"tái sạc\" Fluoride vĩnh cửu là bảo chứng công nghệ độc quyền cho tất cả sản phẩm ứng dụng S-PRG của Shofu. Tính năng này hoạt động hiệu quả từ lớp dán lót FL-Bond II (chứa 40% hạt S-PRG) cho đến các lớp composite Beautifil phủ bên trên, giúp tái khoáng hóa liên tục và bảo vệ tủy răng bền bỉ theo thời gian."
  },
  {
    title: "CÂU 5: LÁ CHẮN KHÁNG MẢNG BÁM (ANTI-BIOFILM)",
    question: "Cặp ion nào từ S-PRG giúp ngăn vi khuẩn S. mutans bám dính, chống hình thành màng sinh học (biofilm) trên mặt phục hình?",
    options: [
      "A. Sodium (Na+) & Silicate (SiO32−)",
      "B. Aluminium (Al3+) & Sodium (Na+)",
      "C. Borate (BO33−) & Fluoride (F−)",
      "D. Strontium (Sr2+) & Silicate (SiO32−)"
    ],
    correctIndex: 2,
    insight: "💡 Clinical Insight: Sự kết hợp giữa Borate và Fluoride để phá vỡ lực bám dính của vi khuẩn là lá chắn sinh học bảo vệ bề mặt có trên mọi phục hình Giomer. Nhờ cơ chế này, các miếng trám thẩm mỹ bằng composite Beautifil II hay phục hình gián tiếp được gắn bằng xi măng BeautiLink SA luôn giữ được bề mặt láng mịn, sạch bóng màng sinh học và kháng bám màu thực phẩm tối ưu."
  }
];

export const ValueStackSection: React.FC = () => {
 const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
 const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
 const [showQuizResult, setShowQuizResult] = useState(false);

 const currentQuestion = quizData[currentQuestionIndex];

 const handleQuizSubmit = (index: number) => {
  setQuizAnswer(index);
  setShowQuizResult(true);
 };

 const handleNextQuestion = () => {
  if (currentQuestionIndex < quizData.length - 1) {
   setCurrentQuestionIndex(currentQuestionIndex + 1);
   setQuizAnswer(null);
   setShowQuizResult(false);
  } else {
   setCurrentQuestionIndex(0);
   setQuizAnswer(null);
   setShowQuizResult(false);
  }
 };

 return (
  <section id="dac-quyen" className="py-16 md:py-24 relative border-b border-slate-200 bg-slate-200 bg-grid-pattern">
   <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
    
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
     <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 mb-4">
      <Trophy className="w-4 h-4 text-sky-600" />
      <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider">
       Đặc quyền khách đăng ký và check-in
      </span>
     </div>
     <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 uppercase tracking-tight leading-snug sm:leading-[1.3]">
      Kho Quà Tặng & Đặc Quyền <span className="text-gradient">Dành Riêng Khách Check-in</span>
     </h2>
     <p className="font-body text-slate-600 text-base sm:text-lg mt-3">
      Toàn bộ Bác sĩ tham dự đầy đủ sẽ nhận bộ quà tặng cao cấp và cơ hội trúng giải thưởng lớn tại gian hàng Sota-D.
     </p>
    </div>

    {/* 1. Quà Tặng Check-in (Dành cho Bác sĩ tham dự đầy đủ) */}
    <div className="mb-8 sm:mb-12">
     <div className="flex items-start gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-[#00ADEF] shrink-0 mt-1">
       <Gift className="w-5 h-5" />
      </div>
      <div className="space-y-1">
       <h3 className="font-heading font-bold text-lg sm:text-2xl text-slate-900 leading-snug">
        1. Quà Tặng Check-in
       </h3>
       <div className="font-heading font-semibold text-xs sm:text-sm text-[#00ADEF] uppercase tracking-wide">
        (Dành cho Bác sĩ tham dự đầy đủ)
       </div>
       <p className="font-body text-xs text-slate-600 pt-0.5 leading-relaxed">
        Quét mã QR check-in tại quầy B75–B77 để nhận bộ sample trải nghiệm lâm sàng gốc từ SHOFU Nhật Bản
       </p>
      </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Morning Gift */}
      <div className="glass-card rounded-2xl p-4 sm:p-6 border border-sky-300 relative overflow-hidden">
       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
        <span className="font-mono text-xs font-bold text-[#00ADEF] uppercase tracking-wider flex items-center gap-2">
         <Sparkles className="w-4 h-4 shrink-0" /> PHIÊN SÁNG (10:30 - 11:15)
        </span>
        <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-sky-100 text-[#00ADEF] text-[11px] font-mono font-bold">
         CHECK-IN SAMPLE
        </span>
       </div>
       <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-3">Bộ Sample Phục Hồi Direct 3D:</h4>
       <ul className="space-y-2.5 font-body text-xs sm:text-sm text-slate-600">
        <li className="flex items-center gap-2.5">
         <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
         <span>Bộ sample Composite lỏng <strong className="text-slate-900">Injectable X A2</strong></span>
        </li>
        <li className="flex items-center gap-2.5">
         <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
         <span>Mũi đánh bóng cao su <strong className="text-slate-900">One Gloss</strong></span>
        </li>
        <li className="flex items-center gap-2.5">
         <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
         <span>Đĩa đánh bóng <strong className="text-slate-900">Super Snap Xtreme</strong></span>
        </li>
       </ul>
      </div>

      {/* Afternoon Gift */}
      <div className="glass-card rounded-2xl p-4 sm:p-6 border border-red-300 relative overflow-hidden">
       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
        <span className="font-mono text-xs font-bold text-[#C43838] uppercase tracking-wider flex items-center gap-2">
         <Sparkles className="w-4 h-4 shrink-0" /> PHIÊN CHIỀU (14:15 – 15:00)
        </span>
        <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-red-100 text-[#C43838] text-[11px] font-mono font-bold">
         CHECK-IN SAMPLE
        </span>
       </div>
       <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-3">Bộ Sample Resin Cement & Dán:</h4>
       <ul className="space-y-2.5 font-body text-xs sm:text-sm text-slate-600">
        <li className="flex items-center gap-2.5">
         <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
         <span>Bộ sample Resin Cement <strong className="text-slate-900">Beautilink SA</strong></span>
        </li>
        <li className="flex items-center gap-2.5">
         <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
         <span>Keo dán thế hệ mới <strong className="text-slate-900">BeautiBond Xtreme</strong></span>
        </li>
        <li className="flex items-center gap-2.5">
         <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
         <span>Mũi <strong className="text-slate-900">One Gloss</strong> + Đĩa <strong className="text-slate-900">Super Snap Xtreme</strong></span>
        </li>
       </ul>
      </div>
     </div>
    </div>

    {/* 2. Giải Thưởng Mini Game "SHOFU QUIZ CHALLENGE" */}
    <div className="mb-8 sm:mb-12">
     <div className="flex items-start gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 mt-1">
       <Trophy className="w-5 h-5" />
      </div>
      <div className="space-y-1">
       <h3 className="font-heading font-bold text-lg sm:text-2xl text-slate-900 leading-snug">
        2. Giải Thưởng Mini Game
       </h3>
       <div className="font-heading font-semibold text-xs sm:text-sm text-slate-700 uppercase tracking-wide">
        "SHOFU QUIZ CHALLENGE"
       </div>
       <p className="font-body text-xs text-slate-600 pt-0.5 leading-relaxed">
        Cơ hội trúng vé học 3D Printed Technique trị giá 3.000.000đ cùng vật tư cao cấp SHOFU
       </p>
      </div>
     </div>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Morning Quiz Prizes */}
      <div className="glass-card rounded-2xl p-4 sm:p-6 border border-sky-200 space-y-4">
       <div className="font-mono text-xs font-bold text-[#00ADEF] uppercase tracking-wider pb-2 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
        <span>Giải Thưởng Phiên Sáng</span>
        <span className="text-slate-900/60">3D Printed Technique</span>
       </div>

       {/* Giải Nhất */}
       <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFD600]/15 to-transparent border border-slate-200 space-y-1.5">
        <div className="flex items-center gap-2 font-heading font-bold text-sm text-slate-700">
         <Award className="w-4 h-4" /> GIẢI NHẤT
        </div>
        <p className="font-body text-xs text-slate-900 leading-relaxed">
         • <strong>01 vé tham dự lớp 3D Printed Technique</strong> (trị giá 3.000.000đ)<br/>
         • 01 tuýp Composite Injectable X A2 + 01 Direct Dia Paste + 01 Đánh bóng Snap Buff
        </p>
       </div>

       {/* Giải Nhì */}
       <div className="p-3.5 rounded-xl bg-white shadow-sm border border-slate-200 space-y-1">
        <div className="flex items-center gap-2 font-heading font-semibold text-xs text-slate-700">
         <Star className="w-3.5 h-3.5 text-slate-700" /> GIẢI NHÌ
        </div>
        <p className="font-body text-xs text-slate-600 leading-relaxed">
         • <strong>Voucher giảm 30% lớp 3D</strong> (trị giá 900.000đ)<br/>
         • 01 tuýp Composite Injectable X A2 + 01 Direct Dia Paste + 01 Đánh bóng Snap Buff
        </p>
       </div>

       {/* Giải Ba */}
       <div className="p-3.5 rounded-xl bg-white shadow-sm border border-slate-200 space-y-1">
        <div className="flex items-center gap-2 font-heading font-semibold text-xs text-slate-700">
         <Award className="w-3.5 h-3.5 text-slate-700" /> GIẢI BA
        </div>
        <p className="font-body text-xs text-slate-600 leading-relaxed">
         • <strong>Voucher giảm 20% lớp 3D</strong> (trị giá 600.000đ)<br/>
         • 01 Direct Dia Paste + 01 Đánh bóng Snap Buff
        </p>
       </div>
      </div>

      {/* Afternoon Quiz Prizes */}
      <div className="glass-card rounded-2xl p-4 sm:p-6 border border-red-200 space-y-4">
       <div className="font-mono text-xs font-bold text-[#C43838] uppercase tracking-wider pb-2 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
        <span>Giải Thưởng Phiên Chiều</span>
        <span className="text-slate-900/60">Resin Cement & S-PRG</span>
       </div>

       {/* Giải Nhất */}
       <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFD600]/15 to-transparent border border-slate-200 space-y-1.5">
        <div className="flex items-center gap-2 font-heading font-bold text-sm text-slate-700">
         <Award className="w-4 h-4" /> GIẢI NHẤT
        </div>
        <p className="font-body text-xs text-slate-900 leading-relaxed">
         • <strong>01 vé tham dự lớp 3D Printed Technique</strong> (trị giá 3.000.000đ)<br/>
         • 01 Xi măng Beautilink SA + 01 Keo dán BeautiBond Xtreme
        </p>
       </div>

       {/* Giải Nhì */}
       <div className="p-3.5 rounded-xl bg-white shadow-sm border border-slate-200 space-y-1">
        <div className="flex items-center gap-2 font-heading font-semibold text-xs text-slate-700">
         <Star className="w-3.5 h-3.5 text-slate-700" /> GIẢI NHÌ
        </div>
        <p className="font-body text-xs text-slate-600 leading-relaxed">
         • <strong>Voucher giảm 30% lớp 3D</strong> (trị giá 900.000đ)<br/>
         • 01 Resin Cement Beautilink SA
        </p>
       </div>

       {/* Giải Ba */}
       <div className="p-3.5 rounded-xl bg-white shadow-sm border border-slate-200 space-y-1">
        <div className="flex items-center gap-2 font-heading font-semibold text-xs text-slate-700">
         <Award className="w-3.5 h-3.5 text-slate-700" /> GIẢI BA
        </div>
        <p className="font-body text-xs text-slate-600 leading-relaxed">
         • <strong>Voucher giảm 20% lớp 3D</strong> (trị giá 600.000đ)<br/>
         • 01 Keo dán BeautiBond Xtreme
        </p>
       </div>
      </div>
     </div>
    </div>

    {/* 3. Ưu đãi độc quyền & Interactive Quiz */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
     {/* Privilege 3 Card */}
     <div className="lg:col-span-5 glass-card rounded-2xl p-6 border border-sky-500/30 flex flex-col justify-between">
      <div>
       <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-500">
         <FileText className="w-5 h-5" />
        </div>
        <div>
         <h3 className="font-heading font-bold text-lg text-slate-900">3. Ưu Đãi Độc Quyền</h3>
         <span className="font-mono text-[11px] text-sky-500">Dành cho Khách Check-in</span>
        </div>
       </div>
       <p className="font-body text-sm text-slate-600 leading-relaxed mb-4">
        Nhận trọn bộ slide tài liệu bài báo cáo, catalogue chi tiết và đặc quyền mua hàng với <strong className="text-slate-900">mức giá ưu đãi đặc biệt</strong> trực tiếp tại sự kiện.
       </p>
      </div>
      <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 font-mono text-xs text-sky-500 flex items-center gap-2">
       <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
       <span>Gửi file HD bài giảng & Voucher giảm giá</span>
      </div>
     </div>

     {/* Interactive SHOFU Quiz Challenge Widget */}
     <div className="lg:col-span-7 rounded-2xl p-6 border-2 border-red-200 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-red-50 to-red-100/50 shadow-xl shadow-red-500/10 transform transition-transform hover:-translate-y-1">
      {/* Decorative background flare */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C43838]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      
      <div className="relative z-10">
       <div className="flex items-start sm:items-center justify-between gap-2.5 mb-3 flex-col sm:flex-row">
        <div className="flex items-center gap-2.5">
         <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 shadow-sm border border-red-200">
          <HelpCircle className="w-4 h-4 text-[#C43838]" />
         </div>
         <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
          Thử Thách Nhanh: Bác sĩ đã có thông tin về Công nghệ S-PRG chưa?
         </h3>
        </div>
        <div className="bg-red-100 text-[#C43838] border border-red-200 text-[10px] sm:text-xs font-mono px-2 py-1 rounded-md shrink-0 font-bold">
         {currentQuestionIndex + 1}/{quizData.length}
        </div>
       </div>

       <div className="mb-4">
        <div className="font-mono text-[10px] text-[#C43838]/70 font-semibold uppercase mb-1">{currentQuestion.title}</div>
        <p className="font-body text-sm text-slate-800 font-medium">
         {currentQuestion.question}
        </p>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 font-body text-xs">
        {currentQuestion.options.map((opt, idx) => (
         <button
          key={idx}
          onClick={() => handleQuizSubmit(idx)}
          disabled={showQuizResult}
          className={`p-3 rounded-xl text-left border transition-all ${
           quizAnswer === idx
            ? idx === currentQuestion.correctIndex
             ? 'bg-red-50 border-[#C43838] text-[#C43838] font-bold shadow-sm'
             : 'bg-slate-100 border-slate-200 text-slate-400'
            : showQuizResult && idx === currentQuestion.correctIndex
             ? 'bg-red-50/50 border-[#C43838]/50 text-[#C43838] font-bold shadow-sm'
             : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-red-200 disabled:hover:bg-white disabled:opacity-50'
          }`}
         >
          {opt}
         </button>
        ))}
       </div>
      </div>

      {showQuizResult && (
       <div className="relative z-10 mt-auto flex flex-col gap-3">
        <div className="p-3.5 rounded-xl font-body text-xs border bg-white border-red-200 text-slate-700 shadow-sm leading-relaxed">
         {quizAnswer === currentQuestion.correctIndex ? (
          <div className="font-bold text-[#C43838] mb-1">🎉 Chính xác!</div>
         ) : (
          <div className="font-bold text-[#C43838] mb-1">💡 Chưa chính xác. Đáp án đúng là {String.fromCharCode(65 + currentQuestion.correctIndex)}.</div>
         )}
         {currentQuestion.insight}
        </div>
        <button
         onClick={handleNextQuestion}
         className="self-end px-5 py-2 bg-[#C43838] text-white font-bold text-xs rounded-full shadow-md hover:bg-red-700 transition-colors"
        >
         {currentQuestionIndex < quizData.length - 1 ? 'Câu tiếp theo →' : 'Làm lại từ đầu ↺'}
        </button>
       </div>
      )}
     </div>
    </div>

   </div>
  </section>
 );
};

