import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';

import { UserCheck, QrCode, CheckCircle2, AlertCircle, Building, Phone, User, Loader2, X, Download } from 'lucide-react';
import { Button } from './ui/Button';
import { toPng } from 'html-to-image';

export const RegistrationForm: React.FC = () => {
 const [fullName, setFullName] = useState('');
 const [phone, setPhone] = useState('');
 const [workplace, setWorkplace] = useState('');
 const [sessionOption, setSessionOption] = useState<string>('');
 const [agreedTerms, setAgreedTerms] = useState(false);
 const [formSubmitted, setFormSubmitted] = useState(false);
 const [showPopup, setShowPopup] = useState(false);
 const ticketRef = useRef<HTMLDivElement>(null);
 const [isDownloading, setIsDownloading] = useState(false);
 const [errorMsg, setErrorMsg] = useState('');
 const [isSubmitting, setIsSubmitting] = useState(false);

 

 const handleDownloadTicket = async () => {
   if (!ticketRef.current) return;
   setIsDownloading(true);
   try {
     const el = ticketRef.current;
     const image = await toPng(el, { 
       pixelRatio: 2, 
       backgroundColor: '#ffffff',
       style: { margin: '0' }
     });
     const link = document.createElement('a');
     link.href = image;
     link.download = `Ve_VIDEC2026_${fullName.replace(/\s+/g, '_')}.png`;
     link.click();
   } catch (error) {
     console.error('Lỗi khi tải ảnh:', error);
   } finally {
     setIsDownloading(false);
   }
 };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!fullName.trim() || !phone.trim() || !workplace.trim()) {
   setErrorMsg('Bác sĩ vui lòng điền đầy đủ các thông tin bắt buộc (*)');
   return;
  }
  if (!sessionOption) {
   setErrorMsg('Quý Bác sĩ vui lòng lựa chọn phiên tham dự');
   return;
  }
  if (!agreedTerms) {
   setErrorMsg('Quý Bác sĩ vui lòng tick chọn đồng ý với quy định Check-in & giữ suất Waitlist.');
   return;
  }

  setErrorMsg('');
  setIsSubmitting(true);
  
  try {
    let sessionValue = 'Cả 2';
    if (sessionOption === 'morning') sessionValue = 'Sáng';
    if (sessionOption === 'afternoon') sessionValue = 'Chiều';
    
    const payload = {
      timestamp: new Date().toLocaleString('vi-VN'),
      fullName,
      phone,
      workplace,
      sessionValue,
      agreedTerms: ''
    };

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzhpCgo06Y1GgAcC73wuOFeAF1VC1VXh9nGDKN49tMGMywlE-zIqsrDr1htrtTQtvHsmw/exec';

    // Sending as text/plain avoids CORS preflight requests in browsers for Apps Script
    await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload)
    });

    setFormSubmitted(true);
    setShowPopup(true);
  } catch (err: any) {
    console.error(err);
    setErrorMsg('Có lỗi xảy ra khi gửi đăng ký. Vui lòng thử lại.');
  } finally {
    setIsSubmitting(false);
  }
 };

 const getSessionText = () => {
  if (sessionOption === 'morning') return 'Sáng (10:30 - 11:15): Demo 3D Printed Technique';
  if (sessionOption === 'afternoon') return 'Chiều (14:15 - 15:00): Resin Cement & Công nghệ S-PRG';
  return 'Cả 2 chương trình (Sáng 10:30 & Chiều 14:15)';
 };

 const handleResetForm = () => {
  setFullName('');
  setPhone('');
  setWorkplace('');
  setSessionOption('');
  setAgreedTerms(false);
  setErrorMsg('');
  setFormSubmitted(false);
 };

 return (
  <section id="dang-ky" className="py-16 md:py-24 relative border-b border-slate-200 overflow-hidden max-w-full w-full bg-slate-100 bg-grid-pattern">
   {/* Background glow */}
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[600px] h-[280px] sm:h-[600px] bg-[#00ADEF] opacity-10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

   <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
    
    {/* Form Container Card */}
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-sky-300 relative overflow-hidden">
     
     {/* Header */}
     <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-300 mb-3">
       <span className="w-2 h-2 rounded-full bg-[#00ADEF] animate-pulse" />
       <span className="font-mono text-xs font-bold text-[#00ADEF] uppercase tracking-wider">
        CHỈ 15 SUẤT / PHIÊN BÁO CÁO
       </span>
      </div>
      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 uppercase tracking-tight">
       ĐĂNG KÝ THAM DỰ
      </h2>
      <p className="font-body text-slate-600 text-sm sm:text-base mt-2">
       Quý Bác sĩ vui lòng điền thông tin để Ban Tổ Chức Sota-D xác nhận giữ suất tham dự phiên Báo cáo khoa học, Hands-on, đồng thời chuẩn bị bộ quà tặng và chuẩn bị đón tiếp chu đáo.
      </p>
     </div>

     {!formSubmitted ? (
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
       
       {/* Input 1: Họ và tên */}
       <div>
        <label className="block font-mono text-xs uppercase text-slate-600 mb-2 font-semibold">
         Họ và tên <span className="text-[#C43838]">*</span>
        </label>
        <div className="relative">
         <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-600">
          <User className="w-4 h-4" />
         </div>
         <input
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="VD: BS. Nguyễn Văn A"
          className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-body text-base md:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF] transition-all"
         />
        </div>
       </div>

       {/* Input 2: Số điện thoại (Zalo) */}
       <div>
        <label className="block font-mono text-xs uppercase text-slate-600 mb-2 font-semibold">
         Số điện thoại (Zalo) <span className="text-[#C43838]">*</span>
        </label>
        <div className="relative">
         <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-600">
          <Phone className="w-4 h-4" />
         </div>
         <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="VD: 0901234567"
          className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-body text-base md:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF] transition-all"
         />
        </div>
       </div>

       {/* Input 3: Nơi công tác */}
       <div>
        <label className="block font-mono text-xs uppercase text-slate-600 mb-2 font-semibold">
         Nơi công tác (Nha khoa/Phòng khám) <span className="text-[#C43838]">*</span>
        </label>
        <div className="relative">
         <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-600">
          <Building className="w-4 h-4" />
         </div>
         <input
          type="text"
          required
          value={workplace}
          onChange={(e) => setWorkplace(e.target.value)}
          placeholder="VD: Nha khoa Sota Dental - Q.1, TP.HCM"
          className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-body text-base md:text-sm placeholder-[#64748B] focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF] transition-all"
         />
        </div>
       </div>

       {/* Radio Group: Trường chọn (Chọn 1) */}
       <div>
        <label className="block font-mono text-xs uppercase text-slate-600 mb-3 font-semibold">
         Chọn phiên tham dự <span className="text-[#C43838]">*</span>
        </label>
        <div className="space-y-3 font-body text-xs sm:text-sm">
         
         <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
          sessionOption === 'morning'
           ? 'bg-[#00ADEF]/15 border-[#00ADEF] text-slate-900'
           : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
         }`}>
          <input
           type="radio"
           name="session"
           value="morning"
           checked={sessionOption === 'morning'}
           onChange={() => setSessionOption('morning')}
           className="mt-0.5 accent-[#00ADEF]"
          />
          <div>
           <strong className="text-slate-900 block font-heading text-sm mb-0.5">Sáng (10:30 - 11:15): Demo 3D Printed Technique</strong>
           <span className="text-xs text-slate-600">Báo cáo viên BS. Dương Bảo Ngọc • Tối ưu phục hồi răng sau</span>
          </div>
         </label>

         <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
          sessionOption === 'afternoon'
           ? 'bg-red-100 border-[#C43838] text-slate-900'
           : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
         }`}>
          <input
           type="radio"
           name="session"
           value="afternoon"
           checked={sessionOption === 'afternoon'}
           onChange={() => setSessionOption('afternoon')}
           className="mt-0.5 accent-[#FF5252]"
          />
          <div>
           <strong className="text-slate-900 block font-heading text-sm mb-0.5">Chiều (14:15 – 15:00): Resin Cement & Công nghệ S-PRG</strong>
           <span className="text-xs text-slate-600">Báo cáo viên ThS.BS Trần Quang Khánh • Tái khoáng & Triệt tiêu ê buốt</span>
          </div>
         </label>

         <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
          sessionOption === 'both'
           ? 'bg-gradient-to-r from-[#C43838]/20 to-[#00ADEF]/20 border-[#00ADEF] text-slate-900'
           : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
         }`}>
          <input
           type="radio"
           name="session"
           value="both"
           checked={sessionOption === 'both'}
           onChange={() => setSessionOption('both')}
           className="mt-0.5 accent-[#00ADEF]"
          />
          <div>
           <strong className="text-slate-900 block font-heading text-sm mb-0.5">Cả 2 chương trình (Sáng & Chiều)</strong>
           <span className="text-xs text-slate-600">Trải nghiệm trọn vẹn 2 chuyên đề khoa học đặc sắc tại gian hàng Sota-D</span>
          </div>
         </label>

        </div>
       </div>

       {/* Checkbox: Quy định bắt buộc */}
       <div className="pt-2">
        <label className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
         <input
          type="checkbox"
          required
          checked={agreedTerms}
          onChange={(e) => setAgreedTerms(e.target.checked)}
          className="mt-1 accent-[#00ADEF] w-4 h-4 shrink-0"
         />
         <span className="font-body text-xs text-slate-600 leading-relaxed">
          <strong className="text-slate-900">Tôi đã hiểu và đồng ý với quy định Check-in & giữ suất Waitlist.</strong> (Quý Bác sĩ vui lòng quét QR đúng giờ, nếu đến trễ 5-10 phút BTC sẽ nhường suất cho Waitlist).
         </span>
        </label>
       </div>

       {/* Error Message Alert */}
       {errorMsg && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 font-body text-[13px] leading-tight flex items-start gap-2.5 shadow-sm">
         <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
         <span className="font-medium">{errorMsg}</span>
        </div>
       )}

       {/* CTA 2 Button */}
       <div className="pt-4">
        <Button
         type="submit"
         variant="primary"
         size="lg"
         disabled={isSubmitting}
         className="w-full sota-gradient font-heading font-extrabold text-base py-4 uppercase tracking-wider text-white hover:scale-[1.01] transition-all"
         icon={isSubmitting ? <Loader2 className="w-5 h-5 text-white animate-spin" /> : <UserCheck className="w-5 h-5 text-white" />}
        >
         {isSubmitting ? 'ĐANG XỬ LÝ...' : 'XÁC NHẬN ĐĂNG KÝ'}
        </Button>
       </div>

      </form>
     ) : (
      /* Confirmation Pass Ticket Result */
      <div className="text-center py-6 space-y-6">
       <div className="w-16 h-16 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-500 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-10 h-10" />
       </div>

       <div>
        <h3 className="font-heading font-bold text-2xl text-slate-900">XÁC NHẬN GIỮ SUẤT THÀNH CÔNG!</h3>
        <p className="font-body text-slate-600 text-sm mt-1">
         Cảm ơn Quý Bác sĩ <strong className="text-slate-900">{fullName}</strong> đã hoàn tất đăng ký.
        </p>
       </div>

       {/* Digital Pass Ticket Box */}
       <div className="max-w-md mx-auto w-full">
        <div ref={ticketRef} className="p-6 rounded-2xl bg-white border border-slate-200 text-slate-900 text-left shadow-xl w-full space-y-4 shadow-2xl relative overflow-hidden m-0">
        <div className="flex justify-between items-center border-b border-slate-200 pb-3">
         <div>
          <span className="font-mono text-[10px] text-[#00ADEF] uppercase font-bold">VÉ THAM DỰ ĐIỆN TỬ</span>
          <h3 className="font-heading font-extrabold text-lg text-slate-900 mt-0.5">SOTA-D</h3>
          <h4 className="font-heading font-bold text-sm text-slate-600">VIDEC 2026 • BOOTH B75–B77</h4>
         </div>
        </div>

        <div className="space-y-2 font-mono text-xs">
         <div>
          <span className="text-slate-600 block text-[10px] uppercase">Họ và tên Bác sĩ:</span>
          <span className="text-slate-900 font-bold">{fullName}</span>
         </div>
         <div>
          <span className="text-slate-600 block text-[10px] uppercase">Số điện thoại Zalo:</span>
          <span className="text-[#00ADEF] font-bold">{phone}</span>
         </div>
         <div>
          <span className="text-slate-600 block text-[10px] uppercase">Nơi công tác:</span>
          <span className="text-slate-900">{workplace}</span>
         </div>
         <div>
          <span className="text-slate-600 block text-[10px] uppercase">Phiên đăng ký tham dự:</span>
          <span className="text-[#00ADEF] font-bold">{getSessionText()}</span>
         </div>
         <div>
          <span className="text-slate-600 block text-[10px] uppercase">Địa điểm Check-in:</span>
          <span className="text-slate-900">Booth B75-B77 (SOTA-D) | VIDEC2026 - 135 Nam Kỳ Khởi Nghĩa, P. Bến Thành, TP.HCM</span>
         </div>
         <div className="pt-2 mt-2 border-t border-slate-100">
          <span className="text-slate-600 block text-[10px] uppercase">Liên hệ hỗ trợ:</span>
          <span className="text-slate-900 font-bold">0967 287 139</span>
         </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-body text-[11px] text-slate-600">
         💡 <strong>Lưu ý:</strong> Quý Bác sĩ vui lòng xuất trình vé điện tử này hoặc thông báo SĐT tại quầy lễ tân B75–B77 trước 10 phút.
        </div>
       </div>

       
       </div>
       <div className="flex justify-center gap-3 pt-2">
        <Button
         onClick={handleDownloadTicket}
         disabled={isDownloading}
         className="font-mono text-xs bg-[#00ADEF] hover:bg-sky-600 text-white gap-2"
        >
         {isDownloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
         Tải vé về máy
        </Button>
        <Button
         variant="outline"

         size="sm"
         onClick={handleResetForm}
         className="font-mono text-xs"
        >
         Đăng ký cho đồng nghiệp khác
        </Button>
       </div>
      </div>
     )}

    </div>
   </div>

      {/* Success Modal Popup */}
      {showPopup && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-4 pt-4">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 leading-tight">
                Cảm ơn Quý Bác sĩ đã đăng ký tham dự cùng Sota-D!
              </h3>
              <p className="font-body text-slate-600">
                Hẹn gặp lại Quý Bác sĩ tại VIDEC 2026 gian hàng B75-B77 vào 27/08/2026!
              </p>
              <p className="font-body font-semibold text-slate-800">
                Rất hân hạnh được đón tiếp!
              </p>
              <div className="pt-4">
                <Button 
                  onClick={() => setShowPopup(false)}
                  className="w-full font-heading uppercase"
                >
                  Đóng thông báo
                </Button>
              </div>
            </div>
          </div>
        </div>
      , document.body)}
  </section>
 );
};
