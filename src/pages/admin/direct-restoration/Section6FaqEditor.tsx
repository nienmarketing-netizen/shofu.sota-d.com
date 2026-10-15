import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { FaqItem } from './types';

interface Section6FaqEditorProps {
  faqsList: FaqItem[];
  setFaqsList: React.Dispatch<React.SetStateAction<FaqItem[]>>;
  handleAddFaq: () => void;
  handleDeleteFaq: (id: string) => void;
}

export const Section6FaqEditor: React.FC<Section6FaqEditorProps> = ({
  faqsList,
  setFaqsList,
  handleAddFaq,
  handleDeleteFaq
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold mb-2">
            Section 6
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">
            Câu hỏi thường gặp (FAQ)
          </h2>
        </div>

        <button
          type="button"
          onClick={handleAddFaq}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Thêm câu hỏi mới</span>
        </button>
      </div>

      <div className="space-y-5">
        {faqsList.map((faq, idx) => (
          <div key={faq.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-slate-600">Câu hỏi #{idx + 1}</span>
              {faqsList.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleDeleteFaq(faq.id)}
                  className="text-red-500 hover:text-red-700 p-1 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            <input
              type="text"
              value={faq.q}
              onChange={(e) => {
                const updated = faqsList.map((f) => (f.id === faq.id ? { ...f, q: e.target.value } : f));
                setFaqsList(updated);
              }}
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
            />

            <textarea
              rows={3}
              value={faq.a}
              onChange={(e) => {
                const updated = faqsList.map((f) => (f.id === faq.id ? { ...f, a: e.target.value } : f));
                setFaqsList(updated);
              }}
              className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-600 leading-relaxed"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
