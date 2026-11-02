import React, { useState } from 'react';
import { Bold, List, Type, Palette, Sparkles, ExternalLink, Sliders, ChevronDown, ChevronUp, Eye } from 'lucide-react';

export interface CtaFormConfigEditorProps {
  label?: string;
  ctaText?: string;
  onChangeCtaText?: (val: string) => void;
  footerNote?: string;
  onChangeFooterNote?: (val: string) => void;
  formTitle?: string;
  onChangeFormTitle?: (val: string) => void;
  title?: string;
  setTitle?: (val: string) => void;
  formDesc?: string;
  onChangeFormDesc?: (val: string) => void;
  description?: string;
  setDescription?: (val: string) => void;
  formExtraHtml?: string;
  onChangeFormExtraHtml?: (val: string) => void;
  extraHtml?: string;
  setExtraHtml?: (val: string) => void;
  redirectThanks?: boolean;
  onChangeRedirectThanks?: (val: boolean) => void;
  setRedirectThanks?: (val: boolean) => void;
  targetUrl?: string;
  onChangeTargetUrl?: (val: string) => void;
  setTargetUrl?: (val: string) => void;
  resourceTitle?: string;
  onChangeResourceTitle?: (val: string) => void;
  setResourceTitle?: (val: string) => void;
}

export const CtaFormConfigEditor: React.FC<CtaFormConfigEditorProps> = ({
  label = 'Cấu hình Nút CTA & Form Popup',
  ctaText = '',
  onChangeCtaText = (_val: string) => {},
  footerNote,
  onChangeFooterNote,
  formTitle = '',
  onChangeFormTitle,
  title = '',
  setTitle,
  formDesc = '',
  onChangeFormDesc,
  description = '',
  setDescription,
  formExtraHtml = '',
  onChangeFormExtraHtml,
  extraHtml = '',
  setExtraHtml,
  redirectThanks = false,
  onChangeRedirectThanks,
  setRedirectThanks,
  targetUrl = '',
  onChangeTargetUrl,
  setTargetUrl,
  resourceTitle = '',
  onChangeResourceTitle,
  setResourceTitle,
}) => {
  const [isOpenAdvanced, setIsOpenAdvanced] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Resolved values and setters supporting both prop patterns
  const effectiveFormTitle = formTitle || title;
  const handleFormTitleChange = (val: string) => {
    if (onChangeFormTitle) onChangeFormTitle(val);
    if (setTitle) setTitle(val);
  };

  const effectiveFormDesc = formDesc || description;
  const handleFormDescChange = (val: string) => {
    if (onChangeFormDesc) onChangeFormDesc(val);
    if (setDescription) setDescription(val);
  };

  const effectiveFormExtraHtml = formExtraHtml || extraHtml;
  const handleFormExtraHtmlChange = (val: string) => {
    if (onChangeFormExtraHtml) onChangeFormExtraHtml(val);
    if (setExtraHtml) setExtraHtml(val);
  };

  const handleToggleRedirectThanks = (checked: boolean) => {
    if (onChangeRedirectThanks) onChangeRedirectThanks(checked);
    if (setRedirectThanks) setRedirectThanks(checked);
  };

  const handleTargetUrlChange = (val: string) => {
    if (onChangeTargetUrl) onChangeTargetUrl(val);
    if (setTargetUrl) setTargetUrl(val);
  };

  const handleResourceTitleChange = (val: string) => {
    if (onChangeResourceTitle) onChangeResourceTitle(val);
    if (setResourceTitle) setResourceTitle(val);
  };

  // Helper formatting for HTML textarea
  const insertSnippet = (tagOpen: string, tagClose: string, defaultPlaceholder: string = '') => {
    const textarea = document.getElementById(`cta-extra-html-${label}`) as HTMLTextAreaElement | null;
    if (!textarea) {
      onChangeFormExtraHtml((formExtraHtml || '') + `${tagOpen}${defaultPlaceholder}${tagClose}`);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentText = textarea.value;
    const selectedText = currentText.substring(start, end) || defaultPlaceholder;

    const newText = currentText.substring(0, start) + `${tagOpen}${selectedText}${tagClose}` + currentText.substring(end);
    onChangeFormExtraHtml(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + tagOpen.length, start + tagOpen.length + selectedText.length);
    }, 50);
  };

  // Mẫu nội dung chuyên sâu nhanh chuẩn theo hình ảnh đính kèm
  const insertClinicalVideoTemplate = () => {
    const sample = `<div class="mt-4 pt-4 border-t border-slate-200">
  <h4 class="font-bold text-slate-900 text-sm tracking-wider uppercase mb-3">KHÁM PHÁ 3 NỘI DUNG CHUYÊN SÂU</h4>
  <div class="space-y-2.5 text-xs text-slate-700">
    <p><strong class="text-slate-900 block text-sm">01. CƠ CHẾ</strong>Sự khác biệt của công nghệ S-PRG giải phóng 6 Ion sinh học.</p>
    <p><strong class="text-slate-900 block text-sm">02. ỨNG DỤNG</strong>Quy trình dán - gắn tối ưu trên các loại phục hình Zirconia & Sứ thủy tinh.</p>
    <p><strong class="text-slate-900 block text-sm">03. LÂM SÀNG</strong>Tổng hợp các case lâm sàng thực tế và giải pháp triệt tiêu ê buốt.</p>
  </div>
</div>`;
    onChangeFormExtraHtml(sample);
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm space-y-5">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold text-[#00ADEF] uppercase tracking-wider block">Nút Kêu Gọi Hành Động</span>
          <h4 className="font-heading font-bold text-slate-900 text-base">{label}</h4>
        </div>
        <button
          type="button"
          onClick={() => setIsOpenAdvanced(!isOpenAdvanced)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            isOpenAdvanced || redirectThanks || formTitle || formExtraHtml
              ? 'bg-[#00ADEF] text-white shadow-sm' 
              : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>{isOpenAdvanced ? 'Thu gọn tùy biến Form' : 'Tùy biến Form Popup & Thanks Page'}</span>
          {isOpenAdvanced ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Row 1: CTA Button text & Footer note */}
      <div className={`grid grid-cols-1 ${onChangeFooterNote ? 'sm:grid-cols-2' : ''} gap-4`}>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Chữ trên nút CTA chính <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={ctaText}
            onChange={(e) => onChangeCtaText(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-[#00ADEF] focus:ring-2 focus:ring-[#00ADEF]/20 text-sm font-bold outline-none transition-all"
            placeholder="NHẬN MẪU THỬ BBX 2ml & ƯU ĐÃI"
          />
        </div>

        {onChangeFooterNote && (
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Dòng ghi chú dưới CTA
            </label>
            <input
              type="text"
              value={footerNote || ''}
              onChange={(e) => onChangeFooterNote(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-[#00ADEF] focus:ring-2 focus:ring-[#00ADEF]/20 text-sm outline-none transition-all"
              placeholder="Trọn gói giải pháp bảo chứng bởi JADA & Dental Advisor"
            />
          </div>
        )}
      </div>

      {/* Advanced Drawer: Form Popup Config & Thanks Page Config */}
      {isOpenAdvanced && (
        <div className="pt-4 border-t border-slate-200/80 space-y-6 animate-in fade-in duration-200">
          
          {/* PHẦN 1: CẤU HÌNH FORM POPUP */}
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-bold text-sm text-slate-900">1. Cấu hình Form Popup khi Bác sĩ click</h5>
                <p className="text-xs text-slate-500">Tùy biến tiêu đề, mô tả và nội dung mở rộng sau các ô nhập thông tin.</p>
              </div>
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="text-xs font-bold text-[#00ADEF] hover:underline inline-flex items-center gap-1"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{showPreview ? 'Ẩn xem trước' : 'Xem trước Form'}</span>
              </button>
            </div>

            {/* Tiêu đề Form */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Tiêu đề trên cùng của Form Popup
              </label>
              <input
                type="text"
                value={effectiveFormTitle}
                onChange={(e) => handleFormTitleChange(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#00ADEF] outline-none"
                placeholder={`Mặc định theo chữ nút: "${ctaText || 'Nhận ưu đãi'}"`}
              />
              <p className="text-[11px] text-slate-400 mt-1">
                *Để trống nếu muốn tiêu đề Form tự động khớp với chữ trên nút CTA.
              </p>
            </div>

            {/* Mô tả ngắn của Form */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Mô tả ngắn dưới tiêu đề Form
              </label>
              <input
                type="text"
                value={effectiveFormDesc}
                onChange={(e) => handleFormDescChange(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#00ADEF] outline-none"
                placeholder="Ví dụ: Quý Bác sĩ vui lòng điền thông tin bên dưới để mở khóa kho video lâm sàng"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                *Để trống sẽ hiển thị câu mặc định: "Quý Bác sĩ vui lòng dành thời gian điền thông tin bên dưới:"
              </p>
            </div>

            {/* Nội dung bổ sung sau các trường nhập (HTML) */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Nội dung bổ sung sau các trường điền (Định dạng HTML)
                </label>
                
                {/* Toolbar mini cho Non-tech editor */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => insertSnippet('<strong>', '</strong>', 'Chữ in đậm')}
                    title="In đậm chữ"
                    className="p-1.5 rounded hover:bg-white text-slate-700 hover:text-slate-900 transition-colors text-xs font-bold flex items-center gap-0.5"
                  >
                    <Bold className="w-3.5 h-3.5" /> Bold
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet('<ul>\n  <li>', '</li>\n</ul>', 'Ý gạch đầu dòng')}
                    title="Chèn danh sách bullet"
                    className="p-1.5 rounded hover:bg-white text-slate-700 hover:text-slate-900 transition-colors text-xs font-bold flex items-center gap-0.5"
                  >
                    <List className="w-3.5 h-3.5" /> Bullet
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet('<span class="text-[#00ADEF] font-bold">', '</span>', 'chữ xanh')}
                    title="Đổi màu chữ sang xanh Shofu"
                    className="p-1.5 rounded hover:bg-white text-[#00ADEF] hover:text-[#00ADEF] transition-colors text-xs font-bold flex items-center gap-0.5"
                  >
                    <Palette className="w-3.5 h-3.5" /> Xanh
                  </button>
                  <button
                    type="button"
                    onClick={insertClinicalVideoTemplate}
                    title="Chèn nhanh mẫu Khám phá 3 nội dung chuyên sâu"
                    className="px-2 py-1 rounded bg-[#00ADEF]/10 hover:bg-[#00ADEF] text-[#00ADEF] hover:text-white transition-all text-xs font-bold flex items-center gap-1"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Chèn mẫu 3 nội dung
                  </button>
                </div>
              </div>

              <textarea
                id={`cta-extra-html-${label}`}
                rows={4}
                value={effectiveFormExtraHtml}
                onChange={(e) => handleFormExtraHtmlChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono text-slate-900 focus:border-[#00ADEF] outline-none leading-relaxed"
                placeholder="Nhập nội dung HTML hoặc bấm các nút phía trên để chèn nhanh..."
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Phần này hiển thị ngay sau các ô nhập thông tin (Tên, SĐT, Phòng khám...) và trước Hotline / Nút gửi.
              </p>
            </div>

            {/* Live Preview of Form Popup */}
            {showPreview && (
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Xem trước mô phỏng giao diện Form:
                </span>
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm max-w-sm mx-auto text-center space-y-3">
                  <h6 className="font-heading font-bold text-lg text-slate-900">
                    {effectiveFormTitle || ctaText || 'Tiêu đề Form'}
                  </h6>
                  <p className="text-xs text-slate-600">
                    {effectiveFormDesc || 'Quý Bác sĩ vui lòng dành thời gian điền thông tin bên dưới:'}
                  </p>
                  <div className="space-y-2 text-left opacity-60 pointer-events-none">
                    <div className="h-7 bg-slate-100 rounded border border-slate-200 text-[11px] px-2 flex items-center text-slate-400">Tên Bác sĩ *</div>
                    <div className="h-7 bg-slate-100 rounded border border-slate-200 text-[11px] px-2 flex items-center text-slate-400">Số điện thoại (Zalo) *</div>
                  </div>
                  {effectiveFormExtraHtml && (
                    <div 
                      className="text-left text-xs pt-2 border-t border-slate-100 space-y-1.5"
                      dangerouslySetInnerHTML={{ __html: effectiveFormExtraHtml }}
                    />
                  )}
                  <div className="pt-2">
                    <div className="h-8 bg-[#00ADEF] rounded-lg text-white text-xs font-bold flex items-center justify-center uppercase tracking-wider">
                      Gửi Yêu Cầu
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PHẦN 2: CẤU HÌNH ĐIỀU HƯỚNG THANKS PAGE */}
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 space-y-4">
            <div>
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={Boolean(redirectThanks)}
                  onChange={(e) => handleToggleRedirectThanks(e.target.checked)}
                  className="w-4 h-4 rounded text-[#00ADEF] focus:ring-[#00ADEF] border-slate-300 accent-[#00ADEF]"
                />
                <div>
                  <span className="font-bold text-sm text-slate-900 block">
                    Chuyển hướng đến Trang Cảm Ơn (/thanks) sau khi gửi form
                  </span>
                  <span className="text-xs text-slate-500">
                    Tự động điều hướng Bác sĩ sang trang cảm ơn để tải tài liệu, video hoặc tài nguyên riêng.
                  </span>
                </div>
              </label>
            </div>

            {Boolean(redirectThanks) && (
              <div className="pt-3 border-t border-slate-100 space-y-3 animate-in fade-in duration-200">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Đường dẫn tải tài liệu / truy cập tài nguyên (URL)
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      value={targetUrl}
                      onChange={(e) => handleTargetUrlChange(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-mono text-slate-900 focus:border-[#00ADEF] outline-none"
                      placeholder="https://drive.google.com/... hoặc link tải file"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Trang Thanks Page sẽ hiển thị nút bấm nổi bật mở đường dẫn này cho Bác sĩ.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Chữ hiển thị trên nút tải tài nguyên ở Trang Cảm Ơn
                  </label>
                  <input
                    type="text"
                    value={resourceTitle}
                    onChange={(e) => handleResourceTitleChange(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#00ADEF] outline-none"
                    placeholder="Mặc định: Truy Cập / Tải Tài Liệu Ngay (VD: Mở Kho Video Lâm Sàng Ngay)"
                  />
                </div>
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
};
