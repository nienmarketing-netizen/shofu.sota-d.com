import React from 'react';
import { BookOpen, Gift } from 'lucide-react';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface LeadMagnetCardData {
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  ctaFormTitle?: string;
  ctaFormDesc?: string;
  ctaFormExtraHtml?: string;
  ctaRedirectThanks?: boolean;
  ctaTargetUrl?: string;
  ctaResourceTitle?: string;
}

interface Section7LeadMagnetEditorProps {
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  ebookCard: LeadMagnetCardData;
  setEbookCard: React.Dispatch<React.SetStateAction<LeadMagnetCardData>>;
  sampleCard: LeadMagnetCardData;
  setSampleCard: React.Dispatch<React.SetStateAction<LeadMagnetCardData>>;
}

export const Section7LeadMagnetEditor: React.FC<Section7LeadMagnetEditorProps> = ({
  headline,
  setHeadline,
  description,
  setDescription,
  ebookCard,
  setEbookCard,
  sampleCard,
  setSampleCard,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#00ADEF] flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-extrabold text-slate-900">
              Section 7: Tài Liệu Lâm Sàng & Đăng Ký Mẫu Thử
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Cung cấp Ebook Phác đồ MiCD và Sample Kit PRG Barrier Coat miễn phí
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              7.1. Tiêu đề chính Section H2
            </label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              7.2. Đoạn văn mô tả
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700"
            />
          </div>
        </div>
      </div>

      {/* 2. Ebook Card & Form */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-sky-500"></span>
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            Card 1: Sổ tay lâm sàng (Ebook qua Zalo)
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Badge</label>
            <input
              type="text"
              value={ebookCard.badge}
              onChange={(e) => setEbookCard({ ...ebookCard, badge: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-sky-700"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Tên tài liệu Ebook</label>
            <input
              type="text"
              value={ebookCard.title}
              onChange={(e) => setEbookCard({ ...ebookCard, title: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Mô tả nội dung Ebook</label>
            <textarea
              rows={2}
              value={ebookCard.description}
              onChange={(e) => setEbookCard({ ...ebookCard, description: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-700"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Chữ trên nút CTA</label>
            <input
              type="text"
              value={ebookCard.ctaText}
              onChange={(e) => setEbookCard({ ...ebookCard, ctaText: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
            />
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100">
          <CtaFormConfigEditor
            title={ebookCard.ctaFormTitle || ''}
            setTitle={(val) => setEbookCard((prev) => ({ ...prev, ctaFormTitle: typeof val === 'function' ? val(prev.ctaFormTitle || '') : val }))}
            description={ebookCard.ctaFormDesc || ''}
            setDescription={(val) => setEbookCard((prev) => ({ ...prev, ctaFormDesc: typeof val === 'function' ? val(prev.ctaFormDesc || '') : val }))}
            extraHtml={ebookCard.ctaFormExtraHtml || ''}
            setExtraHtml={(val) => setEbookCard((prev) => ({ ...prev, ctaFormExtraHtml: typeof val === 'function' ? val(prev.ctaFormExtraHtml || '') : val }))}
            redirectThanks={ebookCard.ctaRedirectThanks}
            setRedirectThanks={(val) => setEbookCard((prev) => ({ ...prev, ctaRedirectThanks: typeof val === 'function' ? val(Boolean(prev.ctaRedirectThanks)) : val }))}
            targetUrl={ebookCard.ctaTargetUrl || ''}
            setTargetUrl={(val) => setEbookCard((prev) => ({ ...prev, ctaTargetUrl: typeof val === 'function' ? val(prev.ctaTargetUrl || '') : val }))}
            resourceTitle={ebookCard.ctaResourceTitle || ''}
            setResourceTitle={(val) => setEbookCard((prev) => ({ ...prev, ctaResourceTitle: typeof val === 'function' ? val(prev.ctaResourceTitle || '') : val }))}
          />
        </div>
      </div>

      {/* 3. Sample Kit Card & Form */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            Card 2: Đăng ký nhận Kit Mẫu thử PRG Barrier Coat
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Badge</label>
            <input
              type="text"
              value={sampleCard.badge}
              onChange={(e) => setSampleCard({ ...sampleCard, badge: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-emerald-700"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Tiêu đề Card</label>
            <input
              type="text"
              value={sampleCard.title}
              onChange={(e) => setSampleCard({ ...sampleCard, title: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Mô tả chương trình mẫu thử</label>
            <textarea
              rows={2}
              value={sampleCard.description}
              onChange={(e) => setSampleCard({ ...sampleCard, description: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-700"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Chữ trên nút CTA</label>
            <input
              type="text"
              value={sampleCard.ctaText}
              onChange={(e) => setSampleCard({ ...sampleCard, ctaText: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
            />
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100">
          <CtaFormConfigEditor
            title={sampleCard.ctaFormTitle || ''}
            setTitle={(val) => setSampleCard((prev) => ({ ...prev, ctaFormTitle: typeof val === 'function' ? val(prev.ctaFormTitle || '') : val }))}
            description={sampleCard.ctaFormDesc || ''}
            setDescription={(val) => setSampleCard((prev) => ({ ...prev, ctaFormDesc: typeof val === 'function' ? val(prev.ctaFormDesc || '') : val }))}
            extraHtml={sampleCard.ctaFormExtraHtml || ''}
            setExtraHtml={(val) => setSampleCard((prev) => ({ ...prev, ctaFormExtraHtml: typeof val === 'function' ? val(prev.ctaFormExtraHtml || '') : val }))}
            redirectThanks={sampleCard.ctaRedirectThanks}
            setRedirectThanks={(val) => setSampleCard((prev) => ({ ...prev, ctaRedirectThanks: typeof val === 'function' ? val(Boolean(prev.ctaRedirectThanks)) : val }))}
            targetUrl={sampleCard.ctaTargetUrl || ''}
            setTargetUrl={(val) => setSampleCard((prev) => ({ ...prev, ctaTargetUrl: typeof val === 'function' ? val(prev.ctaTargetUrl || '') : val }))}
            resourceTitle={sampleCard.ctaResourceTitle || ''}
            setResourceTitle={(val) => setSampleCard((prev) => ({ ...prev, ctaResourceTitle: typeof val === 'function' ? val(prev.ctaResourceTitle || '') : val }))}
          />
        </div>
      </div>
    </div>
  );
};
