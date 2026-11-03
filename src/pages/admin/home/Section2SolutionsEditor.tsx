import React, { useState } from 'react';
import { 
  Sparkles, 
  Bold, 
  Palette, 
  CornerDownLeft, 
  Eye, 
  Package, 
  Layers, 
  ArrowUpRight, 
  ImageIcon 
} from 'lucide-react';
import { SolutionCardItem, BestsellerProductItem, applyFormat } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section2SolutionsEditorProps {
  headline: string;
  setHeadline: (val: string) => void;
  subheadline: string;
  setSubheadline: (val: string) => void;
  solutions: SolutionCardItem[];
  setSolutions: React.Dispatch<React.SetStateAction<SolutionCardItem[]>>;
  bestsellersHeadline: string;
  setBestsellersHeadline: (val: string) => void;
  bestsellers: BestsellerProductItem[];
  setBestsellers: React.Dispatch<React.SetStateAction<BestsellerProductItem[]>>;
  ctaText: string;
  setCtaText: (val: string) => void;
  ctaFormTitle: string;
  setCtaFormTitle: (val: string) => void;
  ctaFormDesc: string;
  setCtaFormDesc: (val: string) => void;
  ctaFormExtraHtml: string;
  setCtaFormExtraHtml: (val: string) => void;
  ctaRedirectThanks: boolean;
  setCtaRedirectThanks: (val: boolean) => void;
  ctaTargetUrl: string;
  setCtaTargetUrl: (val: string) => void;
  ctaResourceTitle: string;
  setCtaResourceTitle: (val: string) => void;
}

export const Section2SolutionsEditor: React.FC<Section2SolutionsEditorProps> = ({
  headline,
  setHeadline,
  subheadline,
  setSubheadline,
  solutions,
  setSolutions,
  bestsellersHeadline,
  setBestsellersHeadline,
  bestsellers,
  setBestsellers,
  ctaText,
  setCtaText,
  ctaFormTitle,
  setCtaFormTitle,
  ctaFormDesc,
  setCtaFormDesc,
  ctaFormExtraHtml,
  setCtaFormExtraHtml,
  ctaRedirectThanks,
  setCtaRedirectThanks,
  ctaTargetUrl,
  setCtaTargetUrl,
  ctaResourceTitle,
  setCtaResourceTitle,
}) => {
  const [showLivePreview, setShowLivePreview] = useState(true);

  const handleUpdateSolution = (id: string, field: 'title' | 'badge', val: string) => {
    setSolutions(prev => prev.map(s => s.id === id ? { ...s, [field]: val } : s));
  };

  const handleUpdateProduct = (id: string, field: keyof BestsellerProductItem, val: string) => {
    setBestsellers(prev => prev.map(p => p.id === id ? { ...p, [field]: val } : p));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section info */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-sky-100 text-[#00ADEF] font-bold flex items-center justify-center text-xs font-mono">
              02
            </span>
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Hệ Sinh Thái Giải Pháp & Sản Phẩm Bán Chạy
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setShowLivePreview(!showLivePreview)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00ADEF] bg-sky-50 hover:bg-sky-100 border border-sky-200 px-3 py-1.5 rounded-xl transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{showLivePreview ? 'Ẩn Preview' : 'Xem Live Preview'}</span>
          </button>
        </div>
        <p className="text-xs text-slate-500">
          Quản lý 4 thẻ giải pháp điều hướng chuyên sâu và 4 sản phẩm bán chạy nhất kèm CTA mở khóa ưu đãi.
        </p>
      </div>

      {/* 1. Headline & Subheadline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <Bold className="w-4 h-4 text-[#00ADEF]" />
          <span>1. Tiêu đề & Thông điệp Section (Hỗ trợ HTML)</span>
        </h4>

        {/* Headline */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Tiêu đề Section
            </label>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => applyFormat('strong', setHeadline, 'solutions-headline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-slate-700 transition-colors flex items-center gap-1"
              >
                <Bold className="w-3 h-3" /> Bold
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setHeadline, 'solutions-headline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-[#00ADEF] transition-colors flex items-center gap-1"
              >
                <Palette className="w-3 h-3" /> Xanh
              </button>
            </div>
          </div>
          <textarea
            id="solutions-headline-input"
            rows={2}
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-xs text-slate-900 focus:border-[#00ADEF] outline-none leading-relaxed"
            placeholder="Giải Pháp Lâm Sàng Trọng Tâm"
          />
        </div>

        {/* Subheadline */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Đoạn văn giới thiệu
            </label>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => applyFormat('strong', setSubheadline, 'solutions-subheadline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-slate-700 transition-colors flex items-center gap-1"
              >
                <Bold className="w-3 h-3" /> Bold
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setSubheadline, 'solutions-subheadline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-[#00ADEF] transition-colors flex items-center gap-1"
              >
                <Palette className="w-3 h-3" /> Xanh
              </button>
            </div>
          </div>
          <textarea
            id="solutions-subheadline-input"
            rows={3}
            value={subheadline}
            onChange={(e) => setSubheadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-xs text-slate-900 focus:border-[#00ADEF] outline-none leading-relaxed"
            placeholder="Khám phá hệ sinh thái sản phẩm Shofu..."
          />
        </div>

        {/* Live Preview */}
        {showLivePreview && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Xem trước Tiêu đề & Giới thiệu:
            </span>
            <h2 
              className="font-heading font-extrabold text-2xl text-slate-900 uppercase"
              dangerouslySetInnerHTML={{ __html: headline || 'Tiêu đề' }}
            />
            <p 
              className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed"
              dangerouslySetInnerHTML={{ __html: subheadline || 'Mô tả' }}
            />
          </div>
        )}
      </div>

      {/* 2. 4 Clinical Solution Cards */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#00ADEF]" />
          <span>2. 4 Thẻ Giải Pháp Lâm Sàng (Điều hướng trang con)</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((sol) => (
            <div key={sol.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase truncate max-w-[130px]">
                  /{sol.slug}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 font-bold">
                  {sol.id}
                </span>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Tên giải pháp
                </label>
                <input
                  type="text"
                  value={sol.title}
                  onChange={(e) => handleUpdateSolution(sol.id, 'title', e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Huy hiệu nhỏ
                </label>
                <input
                  type="text"
                  value={sol.badge || ''}
                  onChange={(e) => handleUpdateSolution(sol.id, 'badge', e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-800 bg-white focus:border-[#00ADEF] outline-none"
                  placeholder="Chủ động / Thẩm mỹ..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 4 Bestseller Products */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
            <Package className="w-4 h-4 text-emerald-600" />
            <span>3. Sản Phẩm Bán Chạy (Bestsellers Showcase)</span>
          </h4>
        </div>

        <div className="mb-3">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Tiêu đề khối sản phẩm
          </label>
          <input
            type="text"
            value={bestsellersHeadline}
            onChange={(e) => setBestsellersHeadline(e.target.value)}
            className="w-full max-w-md px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:border-[#00ADEF] outline-none"
            placeholder="Sản phẩm bán chạy"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bestsellers.map((prod) => (
            <div key={prod.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-full aspect-[16/9] rounded-lg bg-white border border-slate-200 overflow-hidden flex items-center justify-center p-1">
                  {prod.image ? (
                    <img src={prod.image} alt={prod.name} className="max-h-full object-contain" />
                  ) : (
                    <ImageIcon className="w-6 h-6 text-slate-300" />
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Nhóm phân loại
                  </label>
                  <input
                    type="text"
                    value={prod.category}
                    onChange={(e) => handleUpdateProduct(prod.id, 'category', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-[11px] font-bold text-[#00ADEF] bg-white focus:border-[#00ADEF] outline-none uppercase"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Tên sản phẩm
                  </label>
                  <input
                    type="text"
                    value={prod.name}
                    onChange={(e) => handleUpdateProduct(prod.id, 'name', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Câu định vị / Tagline
                  </label>
                  <input
                    type="text"
                    value={prod.tagline}
                    onChange={(e) => handleUpdateProduct(prod.id, 'tagline', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-[11px] text-slate-600 bg-white focus:border-[#00ADEF] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    URL hình ảnh
                  </label>
                  <input
                    type="text"
                    value={prod.image}
                    onChange={(e) => handleUpdateProduct(prod.id, 'image', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 font-mono text-[10px] text-slate-700 bg-white focus:border-[#00ADEF] outline-none"
                    placeholder="URL ảnh sản phẩm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CTA Button & Popup / Thanks Page Config */}
      <CtaFormConfigEditor
        label="Nút CTA Dưới Khối Sản Phẩm (Xem ưu đãi & Đặt hàng)"
        ctaText={ctaText}
        onChangeCtaText={setCtaText}
        formTitle={ctaFormTitle}
        onChangeFormTitle={setCtaFormTitle}
        formDesc={ctaFormDesc}
        onChangeFormDesc={setCtaFormDesc}
        formExtraHtml={ctaFormExtraHtml}
        onChangeFormExtraHtml={setCtaFormExtraHtml}
        redirectThanks={ctaRedirectThanks}
        onChangeRedirectThanks={setCtaRedirectThanks}
        targetUrl={ctaTargetUrl}
        onChangeTargetUrl={setCtaTargetUrl}
        resourceTitle={ctaResourceTitle}
        onChangeResourceTitle={setCtaResourceTitle}
      />
    </div>
  );
};
