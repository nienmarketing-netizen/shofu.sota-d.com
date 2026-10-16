import React from 'react';
import { Bold, Plus, Trash2, HelpCircle, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { FaqItem, applyFormat } from './types';

interface Section6FaqEditorProps {
  faqs: FaqItem[];
  setFaqs: React.Dispatch<React.SetStateAction<FaqItem[]>>;
  ctaText?: string;
  setCtaText?: React.Dispatch<React.SetStateAction<string>>;
}

export const Section6FaqEditor: React.FC<Section6FaqEditorProps> = ({
  faqs,
  setFaqs,
  ctaText,
  setCtaText
}) => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const handleAddFaq = () => {
    const newId = `faq-${Date.now()}`;
    setFaqs([
      ...faqs,
      {
        id: newId,
        q: 'Nhập câu hỏi hoài nghi lâm sàng mới của Bác sĩ...',
        a: '<strong>Giải đáp lâm sàng:</strong> Nhập nội dung câu trả lời chi tiết...'
      }
    ]);
    setExpandedId(newId);
  };

  const handleDeleteFaq = (id: string) => {
    setFaqs(faqs.filter((f) => f.id !== id));
  };

  const handleUpdateFaq = (id: string, field: 'q' | 'a', val: string) => {
    setFaqs(faqs.map((f) => (f.id === id ? { ...f, [field]: val } : f)));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#00ADEF] flex items-center justify-center font-bold text-lg">
              06
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-xl text-slate-900">
                Section 6: FAQ (Giải đáp hoài nghi lâm sàng)
              </h2>
              <p className="text-slate-500 text-sm">
                Quản lý các câu hỏi thường gặp về kỹ thuật Handmix, HEMA-free, lực dán và bảo quản.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleAddFaq}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 text-[#00ADEF] hover:bg-blue-100 font-mono text-xs font-bold transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm câu hỏi</span>
          </button>
        </div>

        {ctaText !== undefined && setCtaText && (
          <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Chữ trên nút CTA cuối FAQ
            </label>
            <input
              type="text"
              value={ctaText}
              onChange={(e) => setCtaText(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-sm font-bold outline-none"
              placeholder="Bác sĩ còn câu hỏi? Nhận tư vấn ngay"
            />
          </div>
        )}

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isExpanded = expandedId === faq.id || expandedId === null;
            return (
              <div
                key={faq.id || index}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 hover:bg-white transition-all shadow-sm"
              >
                <div
                  className="px-5 py-4 flex items-center justify-between cursor-pointer bg-slate-50/80 hover:bg-slate-100/60 border-b border-slate-200/60"
                  onClick={() => setExpandedId(isExpanded ? '' : faq.id)}
                >
                  <div className="flex items-center gap-3 flex-1 pr-4">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#00ADEF] font-bold text-xs flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="font-heading font-bold text-sm text-slate-800 line-clamp-1">
                      {faq.q || 'Câu hỏi chưa có tiêu đề'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteFaq(faq.id);
                      }}
                      className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                      title="Xóa câu hỏi này"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-5 space-y-4 bg-white">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                        Câu hỏi (Question)
                      </label>
                      <input
                        type="text"
                        value={faq.q}
                        onChange={(e) => handleUpdateFaq(faq.id, 'q', e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:border-[#00ADEF]"
                        placeholder="Nội dung câu hỏi..."
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-[11px] font-bold text-slate-500 uppercase">
                          Câu trả lời giải đáp (Answer - Hỗ trợ HTML)
                        </label>
                      </div>
                      <textarea
                        rows={4}
                        value={faq.a}
                        onChange={(e) => handleUpdateFaq(faq.id, 'a', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 outline-none focus:border-[#00ADEF] font-mono leading-relaxed"
                        placeholder="Giải đáp lâm sàng..."
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. XEM TRƯỚC THÀNH PHẦN FAQ ACCORDION (LIVE COMPONENT PREVIEW) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#00ADEF] flex items-center justify-center font-bold">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Xem trước giao diện FAQ (Live Component Preview)
              </h3>
              <p className="text-slate-500 text-xs">
                Mô phỏng tương tác đóng/mở câu hỏi và câu trả lời giải đáp lâm sàng.
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Tương tác trực tiếp
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
          <div className="text-center pb-2">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#00ADEF] border border-blue-200 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              FAQ Lâm sàng
            </span>
            <h4 className="font-heading font-extrabold text-xl text-slate-900">Câu hỏi thường gặp của Bác sĩ</h4>
          </div>

          <div className="space-y-2.5 max-w-3xl mx-auto">
            {faqs.map((f, i) => {
              const isOpen = expandedId === f.id;
              return (
                <div key={f.id || i} className="rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setExpandedId(isOpen ? null : f.id)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                      <span className="text-[#00ADEF] font-mono">Q{i + 1}.</span>
                      <span>{f.q}</span>
                    </span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed font-body">
                      <div dangerouslySetInnerHTML={{ __html: f.a }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
