import React from 'react';
import { Sparkles, Upload, ArrowRight, Bold } from 'lucide-react';
import { UspItem, applyFormat } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section1HeroEditorProps {
  badge: string;
  setBadge: React.Dispatch<React.SetStateAction<string>>;
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  body: string;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  imageSizeNote?: string;
  usps: UspItem[];
  setUsps: React.Dispatch<React.SetStateAction<UspItem[]>>;
  ctaText: string;
  setCtaText: React.Dispatch<React.SetStateAction<string>>;
  secondaryCtaText: string;
  setSecondaryCtaText: React.Dispatch<React.SetStateAction<string>>;
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
  onUploadImage: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
  isUploadingImage: boolean;
  uploadingTarget: string;
}

export const Section1HeroEditor: React.FC<Section1HeroEditorProps> = ({
  badge,
  setBadge,
  headline,
  setHeadline,
  body,
  setBody,
  image,
  setImage,
  imageSizeNote = "Khuyến nghị: 1100 × 900 px (PNG / WebP tách nền, dung lượng < 350KB)",
  usps,
  setUsps,
  ctaText,
  setCtaText,
  secondaryCtaText,
  setSecondaryCtaText,
  formTitle = '',
  setFormTitle = () => {},
  formDesc = '',
  setFormDesc = () => {},
  formExtraHtml = '',
  setFormExtraHtml = () => {},
  redirectThanks = true,
  setRedirectThanks = () => {},
  targetUrl = '',
  setTargetUrl = () => {},
  resourceTitle = '',
  setResourceTitle = () => {},
  onUploadImage,
  isUploadingImage,
  uploadingTarget
}) => {
  const handleUspChange = (id: string, field: 'title' | 'description' | 'iconName', val: string) => {
    setUsps((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-extrabold text-slate-900">
              Section 1: Hero & Thông điệp đầu trang
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Badge chạy chữ, Tiêu đề chính H1, Đoạn mở đầu và Ảnh sản phẩm đại diện
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-6">
          {/* Badge */}
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              1.1. Dòng chữ chạy nổi bật (Marquee Badge)
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              placeholder="Nhập thông điệp badge..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10"
            />
          </div>

          {/* Headline */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                1.2. Tiêu đề chính (H1)
              </label>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span>Định dạng:</span>
                <button
                  type="button"
                  onClick={() => applyFormat('strong', setHeadline)}
                  className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-700 font-bold"
                  title="In đậm (B)"
                >
                  <Bold className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('red', setHeadline)}
                  className="px-2 py-0.5 bg-red-100 hover:bg-red-200 rounded text-red-600 font-bold text-[11px]"
                >
                  Đỏ Shofu
                </button>
              </div>
            </div>
            <textarea
              rows={2}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 leading-relaxed"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Mẹo: Chấp nhận thẻ HTML như &lt;br/&gt; để ngắt dòng hiển thị đẹp hơn.
            </p>
          </div>

          {/* Body */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                1.3. Đoạn mô tả giải pháp (Body Text)
              </label>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <button
                  type="button"
                  onClick={() => applyFormat('strong', setBody)}
                  className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-700 font-bold"
                >
                  <Bold className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('red', setBody)}
                  className="px-2 py-0.5 bg-red-100 hover:bg-red-200 rounded text-red-600 font-bold text-[11px]"
                >
                  Đỏ Shofu
                </button>
              </div>
            </div>
            <textarea
              rows={4}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 leading-relaxed"
            />
          </div>

          {/* Hero Image */}
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              1.4. Hình ảnh minh họa Hero
            </label>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-28 h-28 rounded-xl border border-slate-200 bg-slate-50 p-2 flex items-center justify-center overflow-hidden shrink-0">
                {image ? (
                  <img src={image} alt="Hero preview" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xs text-slate-400">Chưa có ảnh</span>
                )}
              </div>
              <div className="flex-1 w-full space-y-2">
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="/image/Shofu-giai-phap-nha-khoa-phong-ngua.webp"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-800"
                />
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>
                      {isUploadingImage && uploadingTarget === 'hero_img' ? 'Đang tải lên...' : 'Tải ảnh mới từ máy'}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          onUploadImage(file, 'hero_img', (newUrl) => setImage(newUrl));
                        }
                      }}
                    />
                  </label>
                  <span className="text-[11px] text-slate-400">{imageSizeNote}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 3 USPs Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            1.5. Bộ 3 Điểm nổi bật (3 Key USPs)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Hiển thị dạng 3 thẻ dưới tiêu đề Hero (Made in Japan, Chứng nhận y văn, Màng phủ HEMA-Free)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          {usps.map((item, idx) => (
            <div key={item.id || idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-600">Thẻ {idx + 1}</span>
                <input
                  type="text"
                  value={item.iconName}
                  onChange={(e) => handleUspChange(item.id, 'iconName', e.target.value)}
                  className="w-12 text-center py-1 text-sm bg-white border border-slate-200 rounded-lg"
                  placeholder="Emoji / Icon"
                  title="Emoji hoặc Icon"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-500 font-semibold mb-1">Tiêu đề</label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleUspChange(item.id, 'title', e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-500 font-semibold mb-1">Mô tả ngắn</label>
                <textarea
                  rows={2}
                  value={item.description}
                  onChange={(e) => handleUspChange(item.id, 'description', e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CTA Buttons & Modal Lead Form */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            1.6. Cấu hình Nút bấm & Form chuyển đổi
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Cấu hình chữ trên nút CTA và nội dung form pop-up thu thập thông tin khách hàng
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              Chữ trên Nút CTA chính (Cuộn xuống Ưu đãi)
            </label>
            <input
              type="text"
              value={ctaText}
              onChange={(e) => setCtaText(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              Chữ trên Nút CTA phụ (Cuộn xuống Lead Magnet)
            </label>
            <input
              type="text"
              value={secondaryCtaText}
              onChange={(e) => setSecondaryCtaText(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
            />
          </div>
        </div>

        {/* Reusable Form Lead Editor */}
        <div className="pt-2">
          <CtaFormConfigEditor
            title={formTitle}
            setTitle={setFormTitle}
            description={formDesc}
            setDescription={setFormDesc}
            extraHtml={formExtraHtml}
            setExtraHtml={setFormExtraHtml}
            redirectThanks={redirectThanks}
            setRedirectThanks={setRedirectThanks}
            targetUrl={targetUrl}
            setTargetUrl={setTargetUrl}
            resourceTitle={resourceTitle}
            setResourceTitle={setResourceTitle}
          />
        </div>
      </div>
    </div>
  );
};
