import React from 'react';
import { Bold, Plus, Trash2, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
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
    </div>
  );
};
