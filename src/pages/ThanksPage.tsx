import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, Download, ArrowLeft, Phone, ExternalLink } from 'lucide-react';

export default function ThanksPage() {
  const [searchParams] = useSearchParams();
  const ctaId = searchParams.get('cta_id') || '';
  const ctaName = searchParams.get('cta_name') || 'Yêu cầu của Quý Bác sĩ';
  const targetUrl = searchParams.get('target_url') || '';
  const resourceTitle = searchParams.get('resource_title') || 'Truy Cập / Tải Tài Liệu Ngay';

  useEffect(() => {
    // Tracking lượt truy cập Thanks Page
    if (typeof window !== 'undefined') {
      const win = window as any;
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: 'thank_you_view',
        cta_id: ctaId,
        cta_name: ctaName,
        target_url: targetUrl
      });
    }
  }, [ctaId, ctaName, targetUrl]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans selection:bg-[#00ADEF] selection:text-white">
      {/* Header bar */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm sticky top-0 z-50">
        <div className="w-[90%] lg:w-[80%] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img referrerPolicy="no-referrer" src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/Sota-D%20logo%20(1).png" alt="Sota-D" className="h-6 sm:h-8 object-contain" />
            </Link>
            <div className="w-[1px] h-5 sm:h-6 bg-slate-300"></div>
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img referrerPolicy="no-referrer" src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/Logo_Shofu%20(1).png" alt="Shofu" className="h-6 sm:h-8 object-contain" />
            </Link>
          </div>

          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-100 text-slate-700 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>TRỞ VỀ TRANG CHỦ</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-10 sm:py-16 flex flex-col items-center justify-center text-center">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-6 sm:p-10 w-full animate-in fade-in zoom-in-95 duration-300">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-6 text-emerald-600 shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          {/* Heading */}
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-sky-50 text-[#00ADEF] text-xs sm:text-sm font-semibold tracking-wide mb-3">
            Sota-D đã nhận được thông tin của Quý Bác sĩ
          </span>
          <h1 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mb-3 tracking-tight uppercase">
            CẢM ƠN QUÝ BÁC SĨ!
          </h1>
          <p className="font-body text-slate-600 text-sm sm:text-base mb-6 max-w-lg mx-auto leading-relaxed">
            Hệ thống đã ghi nhận thông tin đăng ký cho mục <strong className="text-slate-900 font-semibold">"{ctaName}"</strong>. Đội ngũ chuyên môn Sota-D sẽ liên hệ hỗ trợ Bác sĩ trong thời gian sớm nhất.
          </p>

          {/* Target Resource Button if configured */}
          {targetUrl ? (
            <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-5 sm:p-6 mb-8 text-center">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#007EA7] mb-2">
                Tài nguyên dành riêng cho Bác sĩ
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mb-5">
                Bác sĩ vui lòng bấm vào nút bên dưới để mở hoặc tải tài liệu:
              </p>
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00ADEF] hover:bg-sky-500 text-white font-mono text-sm sm:text-base font-bold uppercase tracking-wider shadow-lg shadow-sky-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-5 h-5" />
                <span>{resourceTitle}</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              </a>
            </div>
          ) : (
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-8 text-xs sm:text-sm text-slate-500">
              Chuyên viên Sota-D sẽ liên lạc trực tiếp qua số Zalo Bác sĩ vừa cung cấp.
            </div>
          )}

          {/* Hotline Box */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Phone className="w-4 h-4 text-[#00ADEF]" />
              Hotline hỗ trợ kỹ thuật & lâm sàng:
            </span>
            <div className="flex items-center gap-3">
              <a href="tel:0967287139" className="font-bold text-[#00ADEF] hover:underline">
                0967 287 139
              </a>
              <span className="text-slate-300">|</span>
              <a href="tel:0901769510" className="font-bold text-[#00ADEF] hover:underline">
                0901 769 510
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-400">
        © 2026 Sota-D & Shofu Dental. Bản quyền thuộc về Sota-D.
      </footer>
    </div>
  );
}
