import React, { useState } from 'react';
import { 
  HelpCircle, 
  Plus, 
  Trash2, 
  Eye, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { FaqItem, applyFormat } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section7FaqEditorProps {
  faqHeadline: string;
  setFaqHeadline: React.Dispatch<React.SetStateAction<string>>;
  faqs: FaqItem[];
  setFaqs: React.Dispatch<React.SetStateAction<FaqItem[]>>;
  faqCtaText: string;
  setFaqCtaText: React.Dispatch<React.SetStateAction<string>>;
  faqFormTitle?: string;
  setFaqFormTitle?: React.Dispatch<React.SetStateAction<string>>;
  faqFormDesc?: string;
  setFaqFormDesc?: React.Dispatch<React.SetStateAction<string>>;
  faqFormExtraHtml?: string;
  setFaqFormExtraHtml?: React.Dispatch<React.SetStateAction<string>>;
  faqRedirectThanks?: boolean;
  setFaqRedirectThanks?: React.Dispatch<React.SetStateAction<boolean>>;
  faqTargetUrl?: string;
  setFaqTargetUrl?: React.Dispatch<React.SetStateAction<string>>;
  faqResourceTitle?: string;
  setFaqResourceTitle?: React.Dispatch<React.SetStateAction<string>>;
}

export const Section7FaqEditor: React.FC<Section7FaqEditorProps> = ({
  faqHeadline,
  setFaqHeadline,
  faqs,
  setFaqs,
  faqCtaText,
  setFaqCtaText,
  faqFormTitle = '',
  setFaqFormTitle = () => {},
  faqFormDesc = '',
  setFaqFormDesc = () => {},
  faqFormExtraHtml = '',
  setFaqFormExtraHtml = () => {},
  faqRedirectThanks = false,
  setFaqRedirectThanks = () => {},
  faqTargetUrl = '',
  setFaqTargetUrl = () => {},
  faqResourceTitle = '',
  setFaqResourceTitle = () => {}
}) => {
  const [showLivePreview, setShowLivePreview] = useState(true);
  const [previewOpenIdx, setPreviewOpenIdx] = useState<number | null>(0);

  const handleAddFaq = () => {
    setFaqs((prev) => [
      ...prev,
      {
        id: `faq-${Date.now()}`,
        q: 'Câu hỏi thắc mắc mới của Bác sĩ?',
        a: 'Câu trả lời giải thích chi tiết về quy trình kỹ thuật hoặc đặc tính sinh học...'
      }
    ]);
  };

  const handleRemoveFaq = (index: number) => {
    if (confirm('Bác sĩ có chắc chắn muốn xóa câu hỏi này?')) {
      setFaqs((prev) => prev.filter((_, idx) => idx !== index));
    }
  };

  const handleFaqChange = (index: number, field: 'q' | 'a', val: string) => {
    setFaqs((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: val };
      return next;
    });
  };

  const handleMoveFaq = (index: number, direction: 'up' | 'down') => {
    setFaqs((prev) => {
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= prev.length) return prev;
      const next = [...prev];
      const temp = next[index];
      next[index] = next[targetIndex];
      next[targetIndex] = temp;
      return next;
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
      {/* 1. Header Banner */}
      <div className="border-b border-slate-100 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-mono text-xs font-bold mb-2 border border-blue-200">
            Section 7
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">
            Section 7: Giải Đáp Hoài Nghi Lâm Sàng (FAQ)
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Biên tập Tiêu đề H2, danh sách câu hỏi Q&amp;A mở/gập (Accordion) và Cấu hình Nút CTA tư vấn.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowLivePreview(!showLivePreview)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors self-start sm:self-auto"
        >
          <Eye className="w-3.5 h-3.5 text-blue-600" />
          <span>{showLivePreview ? 'Thu gọn Live Preview' : 'Mở Live Preview'}</span>
        </button>
      </div>

      {/* 2. Tiêu đề Section H2 với Toolbar */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            1. Tiêu đề chính H2 (HTML Textarea)
          </label>
          <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
            <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
            <button
              type="button"
              onClick={() => applyFormat('strong', setFaqHeadline, 'faq-headline-input')}
              title="In đậm chữ đang bôi đen"
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
            >
              <strong>B</strong>
            </button>
            <button
              type="button"
              onClick={() => applyFormat('cyan', setFaqHeadline, 'faq-headline-input')}
              title="Tô màu xanh Gradient/Cyan (#00ADEF)"
              className="px-2 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
            >
              Xanh Shofu
            </button>
            <button
              type="button"
              onClick={() => applyFormat('red', setFaqHeadline, 'faq-headline-input')}
              title="Tô màu đỏ Shofu (#8C2828)"
              className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold border border-red-200 text-xs"
            >
              Đỏ Shofu
            </button>
            <button
              type="button"
              onClick={() => applyFormat('amber', setFaqHeadline, 'faq-headline-input')}
              title="Highlight vàng Amber"
              className="px-2 py-0.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold border border-amber-300 text-xs"
            >
              Vàng Amber
            </button>
            <button
              type="button"
              onClick={() => applyFormat('br', setFaqHeadline, 'faq-headline-input')}
              title="Xuống dòng (<br/>)"
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-700 font-mono font-bold border border-slate-200 text-xs"
            >
              &lt;br/&gt;
            </button>
          </div>
        </div>

        <textarea
          id="faq-headline-input"
          rows={2}
          value={faqHeadline}
          onChange={(e) => setFaqHeadline(e.target.value)}
          placeholder='Giải đáp <span class="text-[#00ADEF]">hoài nghi lâm sàng</span>'
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 font-bold focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all leading-snug"
        />

        {faqHeadline && (
          <div className="p-3 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block mb-1">Hiển thị trước tiêu đề:</span>
            <div 
              className="font-heading font-extrabold text-xl text-slate-900"
              dangerouslySetInnerHTML={{ __html: faqHeadline }}
            />
          </div>
        )}
      </div>

      {/* 3. Danh sách Accordion Q&A */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              2. Danh sách câu hỏi &amp; câu trả lời ({faqs.length} câu)
            </label>
            <p className="text-xs text-slate-500 mt-0.5">
              Hỗ trợ mã HTML thẻ &lt;strong&gt;, &lt;p&gt;, &lt;span&gt;... bên trong câu trả lời.
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddFaq}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold transition-all shadow-sm active:scale-95 self-start sm:self-auto"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm câu hỏi mới</span>
          </button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={faq.id || idx} 
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 space-y-4 transition-all"
            >
              {/* Item Header & actions */}
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-mono font-extrabold text-xs flex items-center justify-center">
                    Q{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    Câu hỏi #{idx + 1}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleMoveFaq(idx, 'up')}
                    disabled={idx === 0}
                    className="p-1 rounded text-slate-400 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Di chuyển lên"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveFaq(idx, 'down')}
                    disabled={idx === faqs.length - 1}
                    className="p-1 rounded text-slate-400 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Di chuyển xuống"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {faqs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveFaq(idx)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors ml-1"
                      title="Xóa câu hỏi này"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Question */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                  <span>Câu hỏi (Question)</span>
                </label>
                <input
                  type="text"
                  value={faq.q}
                  onChange={(e) => handleFaqChange(idx, 'q', e.target.value)}
                  placeholder="Nhập nội dung câu hỏi..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#8C2828] focus:ring-1 focus:ring-[#8C2828]"
                />
              </div>

              {/* Answer */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Câu trả lời (Answer - Hỗ trợ HTML)
                  </label>
                  <div className="flex items-center gap-1 text-[11px]">
                    <button
                      type="button"
                      onClick={() => {
                        const next = [...faqs];
                        next[idx].a = next[idx].a + ' <strong>Nội dung in đậm</strong>';
                        setFaqs(next);
                      }}
                      className="px-1.5 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-700 font-bold border border-slate-200"
                    >
                      + &lt;strong&gt;
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const next = [...faqs];
                        next[idx].a = next[idx].a + '<br/>\n';
                        setFaqs(next);
                      }}
                      className="px-1.5 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-700 font-mono border border-slate-200"
                    >
                      + &lt;br/&gt;
                    </button>
                  </div>
                </div>

                <textarea
                  rows={4}
                  value={faq.a}
                  onChange={(e) => handleFaqChange(idx, 'a', e.target.value)}
                  placeholder="Nhập câu trả lời giải thích chi tiết..."
                  className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-xs text-slate-800 leading-relaxed font-body focus:outline-none focus:border-[#8C2828] focus:ring-1 focus:ring-[#8C2828]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Live Preview Accordion */}
      {showLivePreview && (
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Live Preview Accordion (Xem thử giao diện thật)</span>
            </label>
            <span className="text-[11px] text-slate-500 font-mono">
              Bấm vào câu hỏi để mở/gập xem thử
            </span>
          </div>

          <div className="bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
            <div className="text-center mb-8">
              <h3 
                className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight"
                dangerouslySetInnerHTML={{ __html: faqHeadline || 'Giải đáp hoài nghi lâm sàng' }}
              />
            </div>

            <div className="space-y-3 max-w-3xl mx-auto">
              {faqs.map((faq, index) => {
                const isOpen = previewOpenIdx === index;
                return (
                  <div 
                    key={faq.id || index}
                    className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-[#8C2828]/30"
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none group"
                      onClick={() => setPreviewOpenIdx(isOpen ? null : index)}
                    >
                      <span 
                        className="font-heading font-bold text-slate-900 text-sm sm:text-base group-hover:text-[#8C2828] transition-colors pr-4"
                        dangerouslySetInnerHTML={{ __html: faq.q }}
                      />
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#8C2828] text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-[#8C2828]'}`}>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-slate-600 font-body text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3.5 bg-slate-50/30">
                        <div dangerouslySetInnerHTML={{ __html: faq.a }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA preview in Live Preview */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-6 py-3 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wide shadow-md">
                <span>{faqCtaText || 'Bác sĩ còn câu hỏi? Nhận tư vấn ngay'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Cấu hình Nút CTA & Form */}
      <div className="pt-6 border-t border-slate-100 space-y-6">
        <div>
          <h3 className="text-base font-heading font-bold text-slate-900">
            3. Cấu hình Nút CTA &amp; Popup Form Section 7
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Tùy biến chữ nút bấm, tiêu đề form, mô tả và hành vi chuyển hướng sau khi đăng ký.
          </p>
        </div>

        <div>
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
            Chữ hiển thị trên nút CTA
          </label>
          <input
            type="text"
            value={faqCtaText}
            onChange={(e) => setFaqCtaText(e.target.value)}
            placeholder="Bác sĩ còn câu hỏi? Nhận tư vấn ngay"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-1 focus:ring-[#8C2828]"
          />
        </div>

        <CtaFormConfigEditor
          label="Cấu hình Popup Form - Section 7 FAQ"
          ctaText={faqCtaText}
          onChangeCtaText={setFaqCtaText}
          formTitle={faqFormTitle}
          onChangeFormTitle={setFaqFormTitle}
          setTitle={setFaqFormTitle}
          formDesc={faqFormDesc}
          onChangeFormDesc={setFaqFormDesc}
          setDescription={setFaqFormDesc}
          formExtraHtml={faqFormExtraHtml}
          onChangeFormExtraHtml={setFaqFormExtraHtml}
          setExtraHtml={setFaqFormExtraHtml}
          redirectThanks={faqRedirectThanks}
          onChangeRedirectThanks={setFaqRedirectThanks}
          setRedirectThanks={setFaqRedirectThanks}
          targetUrl={faqTargetUrl}
          onChangeTargetUrl={setFaqTargetUrl}
          setTargetUrl={setFaqTargetUrl}
          resourceTitle={faqResourceTitle}
          onChangeResourceTitle={setFaqResourceTitle}
          setResourceTitle={setFaqResourceTitle}
        />
      </div>
    </div>
  );
};
