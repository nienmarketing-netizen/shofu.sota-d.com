import React from 'react';
import { HelpCircle, Plus, Trash2 } from 'lucide-react';
import { FaqItem } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section8FaqEditorProps {
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  faqs: FaqItem[];
  setFaqs: React.Dispatch<React.SetStateAction<FaqItem[]>>;
  ctaText: string;
  setCtaText: React.Dispatch<React.SetStateAction<string>>;
  formTitle?: string;
  setFormTitle?: React.Dispatch<React.SetStateAction<string>>;
  formDesc?: string;
  setFormDesc?: React.Dispatch<React.SetStateAction<string>>;
  formExtraHtml?: string;
  setFormExtraHtml?: React.Dispatch<React.SetStateAction<string>>;
  redirectThanks?: boolean;
  setRedirectThanks?: React.Dispatch<React.SetStateAction<boolean>>;
  targetUrl?: string;
  setTargetUrl?: React.Dispatch<React.SetStateAction<string>>;
  resourceTitle?: string;
  setResourceTitle?: React.Dispatch<React.SetStateAction<string>>;
}

export const Section8FaqEditor: React.FC<Section8FaqEditorProps> = ({
  headline,
  setHeadline,
  faqs,
  setFaqs,
  ctaText,
  setCtaText,
  formTitle = '',
  setFormTitle = () => {},
  formDesc = '',
  setFormDesc = () => {},
  formExtraHtml = '',
  setFormExtraHtml = () => {},
  redirectThanks = false,
  setRedirectThanks = () => {},
  targetUrl = '',
  setTargetUrl = () => {},
  resourceTitle = '',
  setResourceTitle = () => {},
}) => {
  const handleAddFaq = () => {
    setFaqs((prev) => [
      ...prev,
      {
        id: `faq-${Date.now()}`,
        q: 'Câu hỏi mới?',
        a: 'Câu trả lời giải thích chi tiết...'
      }
    ]);
  };

  const handleRemoveFaq = (index: number) => {
    setFaqs((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleFaqChange = (index: number, field: 'q' | 'a', val: string) => {
    setFaqs((prev) => {
      const next = [...prev];
      next[index][field] = val;
      return next;
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-extrabold text-slate-900">
              Section 8: Giải Đáp Hoài Nghi Lâm Sàng (FAQ)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Các câu hỏi thường gặp về độ dán dính, màng phủ kỵ nước, cơ chế phóng ion...
            </p>
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
            Tiêu đề Section H2
          </label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
          />
        </div>
      </div>

      {/* 2. FAQ Items List */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            Danh sách câu hỏi & câu trả lời ({faqs.length})
          </h3>
          <button
            type="button"
            onClick={handleAddFaq}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-xl text-xs font-bold transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm câu hỏi mới</span>
          </button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={faq.id || idx} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3 relative group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-600">
                  Câu hỏi {idx + 1}
                </span>
                {faqs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveFaq(idx)}
                    className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                    title="Xóa câu hỏi này"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Câu hỏi (Q):</label>
                <input
                  type="text"
                  value={faq.q}
                  onChange={(e) => handleFaqChange(idx, 'q', e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Câu trả lời (A):</label>
                <textarea
                  rows={3}
                  value={faq.a}
                  onChange={(e) => handleFaqChange(idx, 'a', e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CTA & Form */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            8.3. Cấu hình Nút CTA & Form
          </h3>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
            Chữ trên nút CTA
          </label>
          <input
            type="text"
            value={ctaText}
            onChange={(e) => setCtaText(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
          />
        </div>

        <CtaFormConfigEditor
          label="CTA & Form Section 8 FAQ"
          ctaText={ctaText}
          onChangeCtaText={setCtaText}
          formTitle={formTitle}
          onChangeFormTitle={setFormTitle}
          setTitle={setFormTitle}
          formDesc={formDesc}
          onChangeFormDesc={setFormDesc}
          setDescription={setFormDesc}
          formExtraHtml={formExtraHtml}
          onChangeFormExtraHtml={setFormExtraHtml}
          setExtraHtml={setFormExtraHtml}
          redirectThanks={redirectThanks}
          onChangeRedirectThanks={setRedirectThanks}
          setRedirectThanks={setRedirectThanks}
          targetUrl={targetUrl}
          onChangeTargetUrl={setTargetUrl}
          setTargetUrl={setTargetUrl}
          resourceTitle={resourceTitle}
          onChangeResourceTitle={setResourceTitle}
          setResourceTitle={setResourceTitle}
        />
      </div>
    </div>
  );
};
