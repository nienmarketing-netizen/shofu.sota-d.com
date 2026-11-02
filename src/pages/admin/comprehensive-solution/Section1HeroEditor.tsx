import React, { useState } from 'react';
import { 
  Zap, 
  Upload, 
  RefreshCw, 
  Info, 
  Eye, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle, 
  Download, 
  Plus, 
  Trash2, 
  Microscope,
  Sparkles,
  Layers,
  Award
} from 'lucide-react';
import { UspItem, applyFormat } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section1HeroEditorProps {
  heroBadge: string;
  setHeroBadge: React.Dispatch<React.SetStateAction<string>>;
  heroHeadline: string;
  setHeroHeadline: React.Dispatch<React.SetStateAction<string>>;
  heroSubheadline: string;
  setHeroSubheadline: React.Dispatch<React.SetStateAction<string>>;
  heroImage: string;
  setHeroImage: React.Dispatch<React.SetStateAction<string>>;
  heroMobileImage?: string;
  setHeroMobileImage?: React.Dispatch<React.SetStateAction<string>>;
  heroUsps: UspItem[];
  handleAddUsp: () => void;
  handleDeleteUsp: (id: string) => void;
  handleUpdateUsp: (id: string, field: 'title' | 'description' | 'iconName', val: string) => void;
  heroCtaText: string;
  setHeroCtaText: React.Dispatch<React.SetStateAction<string>>;
  heroSecondaryCtaText?: string;
  setHeroSecondaryCtaText?: React.Dispatch<React.SetStateAction<string>>;
  heroSecondaryFormTitle?: string;
  setHeroSecondaryFormTitle?: React.Dispatch<React.SetStateAction<string>>;
  heroSecondaryFormDesc?: string;
  setHeroSecondaryFormDesc?: React.Dispatch<React.SetStateAction<string>>;
  heroSecondaryFormExtraHtml?: string;
  setHeroSecondaryFormExtraHtml?: React.Dispatch<React.SetStateAction<string>>;
  heroSecondaryRedirectThanks?: boolean;
  setHeroSecondaryRedirectThanks?: React.Dispatch<React.SetStateAction<boolean>>;
  heroSecondaryTargetUrl?: string;
  setHeroSecondaryTargetUrl?: React.Dispatch<React.SetStateAction<string>>;
  heroSecondaryResourceTitle?: string;
  setHeroSecondaryResourceTitle?: React.Dispatch<React.SetStateAction<string>>;
  heroFormTitle?: string;
  setHeroFormTitle?: React.Dispatch<React.SetStateAction<string>>;
  heroFormDesc?: string;
  setHeroFormDesc?: React.Dispatch<React.SetStateAction<string>>;
  heroFormExtraHtml?: string;
  setHeroFormExtraHtml?: React.Dispatch<React.SetStateAction<string>>;
  heroRedirectThanks?: boolean;
  setHeroRedirectThanks?: React.Dispatch<React.SetStateAction<boolean>>;
  heroTargetUrl?: string;
  setHeroTargetUrl?: React.Dispatch<React.SetStateAction<string>>;
  heroResourceTitle?: string;
  setHeroResourceTitle?: React.Dispatch<React.SetStateAction<string>>;
  uploadingTarget?: string;
  handleUploadImageFile?: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
}

export const renderUspIcon = (iconName: string) => {
  if (iconName === 'Microscope') return <Microscope className="w-4 h-4 text-emerald-600" />;
  if (iconName === 'ShieldCheck') return <ShieldCheck className="w-4 h-4 text-red-600" />;
  if (iconName === 'Layers') return <Layers className="w-4 h-4 text-blue-600" />;
  if (iconName === 'Sparkles') return <Sparkles className="w-4 h-4 text-amber-500" />;
  if (iconName === 'Award') return <Award className="w-4 h-4 text-purple-600" />;
  if (iconName?.startsWith('/') || iconName?.startsWith('http')) {
    return <img src={iconName} alt="icon" className="w-4 h-4 object-contain" />;
  }
  return <span className="text-base leading-none">{iconName || '🇯🇵'}</span>;
};

export const Section1HeroEditor: React.FC<Section1HeroEditorProps> = ({
  heroBadge,
  setHeroBadge,
  heroHeadline,
  setHeroHeadline,
  heroSubheadline,
  setHeroSubheadline,
  heroImage,
  setHeroImage,
  heroMobileImage = '/image/shofu-giai-phap-toan-dien-5-san-pham.webp',
  setHeroMobileImage,
  heroUsps,
  handleAddUsp,
  handleDeleteUsp,
  handleUpdateUsp,
  heroCtaText,
  setHeroCtaText,
  heroSecondaryCtaText = 'Nhận E-Guide triệt tiêu ê buốt',
  setHeroSecondaryCtaText,
  heroSecondaryFormTitle,
  setHeroSecondaryFormTitle,
  heroSecondaryFormDesc,
  setHeroSecondaryFormDesc,
  heroSecondaryFormExtraHtml,
  setHeroSecondaryFormExtraHtml,
  heroSecondaryRedirectThanks = false,
  setHeroSecondaryRedirectThanks,
  heroSecondaryTargetUrl,
  setHeroSecondaryTargetUrl,
  heroSecondaryResourceTitle,
  setHeroSecondaryResourceTitle,
  heroFormTitle,
  setHeroFormTitle,
  heroFormDesc,
  setHeroFormDesc,
  heroFormExtraHtml,
  setHeroFormExtraHtml,
  heroRedirectThanks = false,
  setHeroRedirectThanks,
  heroTargetUrl,
  setHeroTargetUrl,
  heroResourceTitle,
  setHeroResourceTitle,
  uploadingTarget = '',
  handleUploadImageFile
}) => {
  const [showLivePreview, setShowLivePreview] = useState(true);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
      {/* Header Info */}
      <div className="border-b border-slate-100 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#8C2828] font-mono text-xs font-bold mb-2">
            Section 1
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">
            Hero Section (Đầu trang - Master Ecosystem)
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Biên tập Huy hiệu Marquee, Tiêu đề chính H1, Đoạn văn dẫn dắt, Hình ảnh Hero, 3 USPs và Nút CTA chính.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowLivePreview(!showLivePreview)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors self-start sm:self-auto"
        >
          <Eye className="w-3.5 h-3.5 text-[#8C2828]" />
          <span>{showLivePreview ? 'Thu gọn Live Preview' : 'Mở Live Preview'}</span>
        </button>
      </div>

      {/* 1. Badge chạy chữ Marquee */}
      <div className="space-y-2">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          1. Huy hiệu Badge chạy chữ Marquee
        </label>
        <input
          type="text"
          value={heroBadge}
          onChange={(e) => setHeroBadge(e.target.value)}
          placeholder="Chuẩn hóa lâm sàng cùng hệ sinh thái Giomer 360°..."
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-medium"
        />
      </div>

      {/* 2. Tiêu đề chính H1 với Toolbar HTML */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            2. Tiêu đề chính H1 (HTML Textarea)
          </label>
          <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
            <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
            <button
              type="button"
              onClick={() => applyFormat('strong', setHeroHeadline, 'hero-headline-input')}
              title="In đậm chữ đang bôi đen"
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
            >
              <strong>B</strong>
            </button>
            <button
              type="button"
              onClick={() => applyFormat('red', setHeroHeadline, 'hero-headline-input')}
              title="Tô màu đỏ Shofu (#8C2828)"
              className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold border border-red-200 text-xs"
            >
              Đỏ Shofu
            </button>
            <button
              type="button"
              onClick={() => applyFormat('cyan', setHeroHeadline, 'hero-headline-input')}
              title="Tô màu xanh Shofu (#00ADEF)"
              className="px-2 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
            >
              Xanh
            </button>
            <button
              type="button"
              onClick={() => applyFormat('br', setHeroHeadline, 'hero-headline-input')}
              title="Xuống dòng (<br/>)"
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-700 font-mono font-bold border border-slate-200 text-xs"
            >
              &lt;br/&gt;
            </button>
          </div>
        </div>

        <textarea
          id="hero-headline-input"
          rows={3}
          value={heroHeadline}
          onChange={(e) => setHeroHeadline(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-heading font-bold"
          placeholder="Nhập tiêu đề H1... Bôi đen từ khóa và bấm nút phía trên để tô màu hoặc in đậm"
        />
      </div>

      {/* 3. Đoạn văn giới thiệu dẫn dắt với Toolbar HTML */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            3. Đoạn giới thiệu dẫn dắt (Subheadline / Body HTML)
          </label>
          <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
            <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
            <button
              type="button"
              onClick={() => applyFormat('strong', setHeroSubheadline, 'hero-subheadline-input')}
              title="In đậm chữ đang bôi đen"
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
            >
              <strong>B</strong>
            </button>
            <button
              type="button"
              onClick={() => applyFormat('red', setHeroSubheadline, 'hero-subheadline-input')}
              title="Tô màu đỏ Shofu (#8C2828)"
              className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold border border-red-200 text-xs"
            >
              Đỏ Shofu
            </button>
            <button
              type="button"
              onClick={() => applyFormat('cyan', setHeroSubheadline, 'hero-subheadline-input')}
              title="Tô màu xanh (#00ADEF)"
              className="px-2 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
            >
              Xanh
            </button>
            <button
              type="button"
              onClick={() => applyFormat('br', setHeroSubheadline, 'hero-subheadline-input')}
              title="Xuống dòng (<br/>)"
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-700 font-mono font-bold border border-slate-200 text-xs"
            >
              &lt;br/&gt;
            </button>
          </div>
        </div>

        <textarea
          id="hero-subheadline-input"
          rows={5}
          value={heroSubheadline}
          onChange={(e) => setHeroSubheadline(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-body leading-relaxed"
          placeholder="Nhập đoạn văn dẫn nhập..."
        />
      </div>

      {/* 4. Hình ảnh Hero (PC & Mobile) + Uploader */}
      <div className="space-y-4 pt-2 border-t border-slate-100">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          4. Hình ảnh minh họa Hero Section
        </label>

        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Gợi ý kích thước:</strong> Ảnh PC hiển thị tối ưu dạng PNG/WebP trong suốt tách nền (~1000x800px). Ảnh Mobile (~600x500px).
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ảnh PC */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Ảnh Hero PC (Màn hình lớn)</span>
              <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-500">Desktop</span>
            </div>

            <div className="w-full h-44 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center overflow-hidden shadow-xs">
              <img
                src={heroImage}
                alt="Hero PC Preview"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/image/shofu-giai-phap-toan-dien-5-san-pham-pc.webp';
                }}
              />
            </div>

            <input
              type="text"
              value={heroImage}
              onChange={(e) => setHeroImage(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-[#8C2828]"
              placeholder="Đường dẫn ảnh PC..."
            />

            {handleUploadImageFile && (
              <label className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white text-xs font-mono font-bold cursor-pointer transition-colors shadow-sm w-full justify-center ${uploadingTarget === 'hero-pc' ? 'opacity-60 cursor-not-allowed' : ''}`}>
                {uploadingTarget === 'hero-pc' ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Upload className="w-3.5 h-3.5" />
                )}
                <span>{uploadingTarget === 'hero-pc' ? 'Đang tải lên...' : 'Tải ảnh PC từ máy tính'}</span>
                <input
                  type="file"
                  accept="image/*"
                  disabled={uploadingTarget === 'hero-pc'}
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleUploadImageFile(file, 'hero-pc', (url) => setHeroImage(url));
                    }
                  }}
                />
              </label>
            )}
          </div>

          {/* Ảnh Mobile */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Ảnh Hero Mobile (Điện thoại)</span>
              <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-500">Mobile</span>
            </div>

            <div className="w-full h-44 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center overflow-hidden shadow-xs">
              <img
                src={heroMobileImage}
                alt="Hero Mobile Preview"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/image/shofu-giai-phap-toan-dien-5-san-pham.webp';
                }}
              />
            </div>

            <input
              type="text"
              value={heroMobileImage}
              onChange={(e) => setHeroMobileImage && setHeroMobileImage(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-[#8C2828]"
              placeholder="Đường dẫn ảnh Mobile..."
            />

            {handleUploadImageFile && setHeroMobileImage && (
              <label className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-mono font-bold cursor-pointer transition-colors shadow-sm w-full justify-center ${uploadingTarget === 'hero-mobile' ? 'opacity-60 cursor-not-allowed' : ''}`}>
                {uploadingTarget === 'hero-mobile' ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Upload className="w-3.5 h-3.5" />
                )}
                <span>{uploadingTarget === 'hero-mobile' ? 'Đang tải lên...' : 'Tải ảnh Mobile từ máy'}</span>
                <input
                  type="file"
                  accept="image/*"
                  disabled={uploadingTarget === 'hero-mobile'}
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleUploadImageFile(file, 'hero-mobile', (url) => setHeroMobileImage(url));
                    }
                  }}
                />
              </label>
            )}
          </div>
        </div>
      </div>

      {/* 5. Danh sách 3 USPs */}
      <div className="space-y-4 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              5. Danh sách 3 Điểm nhấn bảo chứng (USPs)
            </label>
            <span className="text-xs text-slate-500">Mỗi mục gồm: Icon, Tiêu đề nổi bật và Mô tả dẫn chứng</span>
          </div>

          <button
            type="button"
            onClick={handleAddUsp}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold transition-colors shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm USP</span>
          </button>
        </div>

        <div className="space-y-3">
          {heroUsps.map((usp, idx) => (
            <div key={usp.id || idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200/70 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#8C2828] text-white flex items-center justify-center font-mono font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700">Điểm nhấn #{idx + 1}</span>
                </div>
                {heroUsps.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleDeleteUsp(usp.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-lg transition-colors"
                    title="Xóa USP này"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-3 space-y-1">
                  <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                    Icon / Emoji
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                      {renderUspIcon(usp.iconName)}
                    </div>
                    <input
                      type="text"
                      value={usp.iconName}
                      onChange={(e) => handleUpdateUsp(usp.id, 'iconName', e.target.value)}
                      placeholder="🇯🇵 hoặc Microscope"
                      className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-medium"
                    />
                  </div>
                </div>

                <div className="sm:col-span-9 space-y-1">
                  <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                    Tiêu đề USP
                  </label>
                  <input
                    type="text"
                    value={usp.title}
                    onChange={(e) => handleUpdateUsp(usp.id, 'title', e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                  Mô tả chi tiết
                </label>
                <textarea
                  rows={2}
                  value={usp.description}
                  onChange={(e) => handleUpdateUsp(usp.id, 'description', e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-600 leading-relaxed font-body"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Nút CTA phụ (Tải E-Guide / Tài liệu) & Form Popup Config */}
      {setHeroSecondaryCtaText && (
        <div className="pt-2 border-t border-slate-100">
          <CtaFormConfigEditor
            label="6. Nút CTA phụ (Tải E-Guide / Tài liệu)"
            ctaText={heroSecondaryCtaText}
            onChangeCtaText={setHeroSecondaryCtaText}
            formTitle={heroSecondaryFormTitle || ''}
            onChangeFormTitle={(val) => setHeroSecondaryFormTitle && setHeroSecondaryFormTitle(val)}
            formDesc={heroSecondaryFormDesc || ''}
            onChangeFormDesc={(val) => setHeroSecondaryFormDesc && setHeroSecondaryFormDesc(val)}
            formExtraHtml={heroSecondaryFormExtraHtml || ''}
            onChangeFormExtraHtml={(val) => setHeroSecondaryFormExtraHtml && setHeroSecondaryFormExtraHtml(val)}
            redirectThanks={heroSecondaryRedirectThanks}
            onChangeRedirectThanks={(val) => setHeroSecondaryRedirectThanks && setHeroSecondaryRedirectThanks(val)}
            targetUrl={heroSecondaryTargetUrl || ''}
            onChangeTargetUrl={(val) => setHeroSecondaryTargetUrl && setHeroSecondaryTargetUrl(val)}
            resourceTitle={heroSecondaryResourceTitle || ''}
            onChangeResourceTitle={(val) => setHeroSecondaryResourceTitle && setHeroSecondaryResourceTitle(val)}
          />
        </div>
      )}

      {/* 7. Nút CTA chính & Form Popup Config qua CtaFormConfigEditor */}
      <div className="pt-2 border-t border-slate-100">
        <CtaFormConfigEditor
          label="7. Nút CTA chính Hero (Sở hữu gói Master Ecosystem)"
          ctaText={heroCtaText}
          onChangeCtaText={setHeroCtaText}
          formTitle={heroFormTitle || ''}
          onChangeFormTitle={(val) => setHeroFormTitle && setHeroFormTitle(val)}
          formDesc={heroFormDesc || ''}
          onChangeFormDesc={(val) => setHeroFormDesc && setHeroFormDesc(val)}
          formExtraHtml={heroFormExtraHtml || ''}
          onChangeFormExtraHtml={(val) => setHeroFormExtraHtml && setHeroFormExtraHtml(val)}
          redirectThanks={heroRedirectThanks}
          onChangeRedirectThanks={(val) => setHeroRedirectThanks && setHeroRedirectThanks(val)}
          targetUrl={heroTargetUrl || ''}
          onChangeTargetUrl={(val) => setHeroTargetUrl && setHeroTargetUrl(val)}
          resourceTitle={heroResourceTitle || ''}
          onChangeResourceTitle={(val) => setHeroResourceTitle && setHeroResourceTitle(val)}
        />
      </div>

      {/* 8. KHUNG LIVE PREVIEW CHÍNH XÁC PHONG CÁCH HERO */}
      {showLivePreview && (
        <div className="pt-6 border-t border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-[#8C2828]" />
              Khung Live Preview: Hero Section thực tế
            </span>
            <span className="text-[11px] font-mono text-slate-400">Xem giao diện trước khi xuất bản</span>
          </div>

          <div className="relative bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 overflow-hidden shadow-inner">
            {/* Background gradient decorative glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-tr from-[#8C2828]/10 via-[#8C2828]/5 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center lg:items-start">
              {/* Left Column Preview */}
              <div className="w-full lg:w-3/5 text-center lg:text-left space-y-5">
                {/* Badge Marquee Preview */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-[#8C2828] font-mono text-xs font-bold tracking-wider shadow-xs max-w-full truncate">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8C2828]"></span>
                  </span>
                  <span className="truncate">{heroBadge || 'Chuẩn hóa lâm sàng cùng hệ sinh thái Giomer 360°'}</span>
                </div>

                {/* H1 Preview */}
                <h1 
                  className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-tight tracking-tight"
                  dangerouslySetInnerHTML={{ __html: heroHeadline || 'Tiêu đề chính Hero' }}
                />

                {/* Subheadline Preview */}
                <div 
                  className="font-body text-sm sm:text-base text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: heroSubheadline || 'Đoạn văn giới thiệu dẫn dắt...' }}
                />

                {/* 3 USPs Preview */}
                <div className="space-y-2.5 pt-2">
                  {heroUsps.map((usp, idx) => (
                    <div key={usp.id || idx} className="flex items-start gap-3 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/60 shadow-xs text-left">
                      <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                        {renderUspIcon(usp.iconName)}
                      </div>
                      <p className="font-body text-xs sm:text-sm text-slate-700 leading-tight">
                        <strong className="text-slate-900 font-bold">{usp.title}</strong> – {usp.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons Preview */}
                <div className="flex flex-wrap gap-3 pt-3 justify-center lg:justify-start">
                  <div className="inline-flex items-center gap-2 bg-[#8C2828] text-white px-5 py-3 rounded-full font-mono text-xs sm:text-sm font-bold shadow-md shadow-red-900/20 cursor-default">
                    <span>{heroCtaText || 'Sở hữu gói Master Ecosystem'}</span>
                    <ArrowRight className="w-4 h-4 opacity-75" />
                  </div>
                  {heroSecondaryCtaText && (
                    <div className="inline-flex items-center gap-1.5 bg-white text-[#8C2828] border-2 border-[#8C2828] px-4 py-3 rounded-full font-mono text-xs sm:text-sm font-bold shadow-xs cursor-default">
                      <Download className="w-4 h-4" />
                      <span>{heroSecondaryCtaText}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column Preview (Image + Floating Badges) */}
              <div className="w-full lg:w-2/5 relative flex items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <img
                    src={heroImage}
                    alt="Hero Preview"
                    className="w-full h-auto max-h-[360px] object-contain drop-shadow-xl"
                  />

                  {/* Floating Bioactive Badge */}
                  <div className="absolute -left-3 top-2 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg border border-slate-200/90 flex items-center gap-2">
                    <div className="w-7 h-7 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-xs">Bioactive</div>
                      <div className="text-[10px] text-slate-500">Trị liệu sinh học</div>
                    </div>
                  </div>

                  {/* Floating HEMA-Free Badge */}
                  <div className="absolute -right-2 bottom-4 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg border border-slate-200/90 flex items-center gap-2">
                    <div className="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-xs">HEMA-Free</div>
                      <div className="text-[10px] text-slate-500">Kháng nước 100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
