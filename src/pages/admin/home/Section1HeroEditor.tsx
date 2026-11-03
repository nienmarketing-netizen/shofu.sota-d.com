import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  Bold, 
  Palette, 
  CornerDownLeft, 
  Atom, 
  ShieldCheck, 
  Feather, 
  Zap, 
  ImageIcon, 
  Plus, 
  Trash2, 
  Layers 
} from 'lucide-react';
import { UspItem, applyFormat } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';
import { ImageUploaderField } from '../components/ImageUploaderField';

interface Section1HeroEditorProps {
  badgePrefix: string;
  setBadgePrefix: (val: string) => void;
  badgeHighlight: string;
  setBadgeHighlight: (val: string) => void;
  headline: string;
  setHeadline: (val: string) => void;
  subheadline: string;
  setSubheadline: (val: string) => void;
  image: string;
  setImage: (val: string) => void;
  mobileImage: string;
  setMobileImage: (val: string) => void;
  usps: UspItem[];
  setUsps: React.Dispatch<React.SetStateAction<UspItem[]>>;
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

export const renderHeroUspIcon = (icon: string) => {
  switch (icon) {
    case 'Atom': return <Atom className="w-5 h-5 text-[#00ADEF]" />;
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#C43838]" />;
    case 'Feather': return <Feather className="w-5 h-5 text-[#00ADEF]" />;
    case 'Zap': return <Zap className="w-5 h-5 text-[#C43838]" />;
    default: return <Sparkles className="w-5 h-5 text-amber-500" />;
  }
};

export const Section1HeroEditor: React.FC<Section1HeroEditorProps> = ({
  badgePrefix,
  setBadgePrefix,
  badgeHighlight,
  setBadgeHighlight,
  headline,
  setHeadline,
  subheadline,
  setSubheadline,
  image,
  setImage,
  mobileImage,
  setMobileImage,
  usps,
  setUsps,
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

  const handleUpdateUsp = (id: string, field: 'title' | 'icon', val: string) => {
    setUsps(prev => prev.map(u => u.id === id ? { ...u, [field]: val } : u));
  };

  const handleAddUsp = () => {
    const newId = String(Date.now());
    setUsps(prev => [...prev, { id: newId, icon: 'Atom', title: 'TIÊU CHUẨN MỚI' }]);
  };

  const handleDeleteUsp = (id: string) => {
    setUsps(prev => prev.filter(u => u.id !== id));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section info */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-red-100 text-[#8C2828] font-bold flex items-center justify-center text-xs font-mono">
              01
            </span>
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Hero Section (Đầu trang & Di sản Shofu)
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
          Chỉnh sửa huy hiệu đối tác, tiêu đề chính chuẩn SEO, thông điệp sinh học và nút tư vấn đầu trang.
        </p>
      </div>

      {/* 1. Badge Pill */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#00ADEF]" />
          <span>1. Huy hiệu đầu trang (Badge Pill)</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Thương hiệu nhấn mạnh (Đỏ)
            </label>
            <input
              type="text"
              value={badgePrefix}
              onChange={(e) => setBadgePrefix(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#00ADEF] outline-none"
              placeholder="Sota-D"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Nội dung mô tả đối tác
            </label>
            <input
              type="text"
              value={badgeHighlight}
              onChange={(e) => setBadgeHighlight(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#00ADEF] outline-none"
              placeholder="Đối tác phân phối chính thức Shofu tại Việt Nam"
            />
          </div>
        </div>
      </div>

      {/* 2. Headline & Subheadline with HTML Toolbars */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <Bold className="w-4 h-4 text-[#8C2828]" />
          <span>2. Tiêu đề H1 & Thông điệp giải pháp (Hỗ trợ HTML)</span>
        </h4>

        {/* Headline */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Tiêu đề chính H1 (Headline)
            </label>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => applyFormat('strong', setHeadline, 'hero-headline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-slate-700 transition-colors flex items-center gap-1"
              >
                <Bold className="w-3 h-3" /> Bold
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setHeadline, 'hero-headline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-[#00ADEF] transition-colors flex items-center gap-1"
              >
                <Palette className="w-3 h-3" /> Xanh
              </button>
              <button
                type="button"
                onClick={() => applyFormat('red', setHeadline, 'hero-headline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-[#8C2828] transition-colors flex items-center gap-1"
              >
                <Palette className="w-3 h-3" /> Đỏ
              </button>
              <button
                type="button"
                onClick={() => applyFormat('br', setHeadline, 'hero-headline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-slate-700 transition-colors flex items-center gap-1"
              >
                <CornerDownLeft className="w-3 h-3" /> Xuống dòng
              </button>
            </div>
          </div>
          <textarea
            id="hero-headline-input"
            rows={3}
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-xs text-slate-900 focus:border-[#00ADEF] outline-none leading-relaxed"
            placeholder="GIẢI PHÁP NHA KHOA <br/> CHUẨN MỰC NHẬT BẢN"
          />
        </div>

        {/* Subheadline */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Đoạn văn mô tả (Subheadline)
            </label>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => applyFormat('strong', setSubheadline, 'hero-subheadline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-slate-700 transition-colors flex items-center gap-1"
              >
                <Bold className="w-3 h-3" /> Bold
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setSubheadline, 'hero-subheadline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-[#00ADEF] transition-colors flex items-center gap-1"
              >
                <Palette className="w-3 h-3" /> Xanh
              </button>
              <button
                type="button"
                onClick={() => applyFormat('br', setSubheadline, 'hero-subheadline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-slate-700 transition-colors flex items-center gap-1"
              >
                <CornerDownLeft className="w-3 h-3" /> Xuống dòng
              </button>
            </div>
          </div>
          <textarea
            id="hero-subheadline-input"
            rows={4}
            value={subheadline}
            onChange={(e) => setSubheadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-xs text-slate-900 focus:border-[#00ADEF] outline-none leading-relaxed"
            placeholder="Hệ sinh thái vật liệu nha khoa tiên tiến..."
          />
        </div>

        {/* Live Preview Box */}
        {showLivePreview && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span>Mô phỏng hiển thị trên Website:</span>
              <span className="text-[#00ADEF]">Live Preview</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <span className="w-2 h-2 rounded-full bg-[#00ADEF]"></span>
                <span>
                  <strong className="text-[#C43838] font-bold">{badgePrefix || 'Sota-D'}</strong> - {badgeHighlight}
                </span>
              </div>
              <h1 
                className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-snug uppercase tracking-tight"
                dangerouslySetInnerHTML={{ __html: headline || 'Tiêu đề' }}
              />
              <p 
                className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto"
                dangerouslySetInnerHTML={{ __html: subheadline || 'Mô tả' }}
              />
            </div>
          </div>
        )}
      </div>

      {/* 3. Hero Images (Desktop / Mobile) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-emerald-600" />
          <span>3. Hình ảnh Banner Hero</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ImageUploaderField
            label="Ảnh chính (Desktop PC)"
            badge="Khuyên dùng 1200x800px"
            value={image}
            onChange={setImage}
            targetKey="hero-desktop"
            folder="images"
            aspectRatio="h-36"
            recommendation="Ảnh PNG/WebP trong suốt tách nền hoặc banner ngang độ phân giải cao"
          />
          <ImageUploaderField
            label="Ảnh phụ (Mobile / Thu gọn)"
            badge="Khuyên dùng 600x500px"
            value={mobileImage}
            onChange={setMobileImage}
            targetKey="hero-mobile"
            folder="images"
            aspectRatio="h-36"
            recommendation="Ảnh tối ưu cho khung nhìn điện thoại di động"
          />
        </div>
      </div>

      {/* 4. 4 USPs Items */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-600" />
            <span>4. Các thanh giá trị cốt lõi (4 USPs Bar)</span>
          </h4>
          <button
            type="button"
            onClick={handleAddUsp}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-xl transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm USP</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {usps.map((usp, idx) => (
            <div key={usp.id || idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 relative group">
              <button
                type="button"
                onClick={() => handleDeleteUsp(usp.id)}
                title="Xóa USP"
                className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                  {renderHeroUspIcon(usp.icon)}
                </div>
                <select
                  value={usp.icon}
                  onChange={(e) => handleUpdateUsp(usp.id, 'icon', e.target.value)}
                  className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-1 font-bold text-slate-700 outline-none"
                >
                  <option value="Atom">Atom (Sinh học)</option>
                  <option value="ShieldCheck">ShieldCheck (Bảo vệ)</option>
                  <option value="Feather">Feather (Tối thiểu)</option>
                  <option value="Zap">Zap (Tối giản)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Tiêu đề USP
                </label>
                <input
                  type="text"
                  value={usp.title}
                  onChange={(e) => handleUpdateUsp(usp.id, 'title', e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-900 bg-white focus:border-[#00ADEF] outline-none uppercase"
                  placeholder="VẬT LIỆU SINH HỌC"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CTA Button & Popup / Thanks Page Config */}
      <CtaFormConfigEditor
        label="Nút CTA Chính Đầu Trang (Hero CTA)"
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
