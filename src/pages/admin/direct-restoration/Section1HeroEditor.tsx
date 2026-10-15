import React from 'react';
import { 
  Plus, 
  Trash2, 
  Upload, 
  RefreshCw, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Zap, 
  Award, 
  Info 
} from 'lucide-react';
import { UspItem, applyFormat } from './types';

interface Section1HeroEditorProps {
  heroBadge: string;
  setHeroBadge: React.Dispatch<React.SetStateAction<string>>;
  heroHeadline: string;
  setHeroHeadline: React.Dispatch<React.SetStateAction<string>>;
  heroBody: string;
  setHeroBody: React.Dispatch<React.SetStateAction<string>>;
  heroImage: string;
  setHeroImage: React.Dispatch<React.SetStateAction<string>>;
  heroImageSizeNote: string;
  heroUsps: UspItem[];
  handleAddUsp: () => void;
  handleDeleteUsp: (id: string) => void;
  handleUpdateUsp: (id: string, field: 'title' | 'description' | 'iconName', val: string) => void;
  heroCtaText: string;
  setHeroCtaText: React.Dispatch<React.SetStateAction<string>>;
  uploadingTarget: string;
  handleUploadImageFile: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
  handleUploadUspSvg: (file: File, uspId: string) => void;
}

export const Section1HeroEditor: React.FC<Section1HeroEditorProps> = ({
  heroBadge,
  setHeroBadge,
  heroHeadline,
  setHeroHeadline,
  heroBody,
  setHeroBody,
  heroImage,
  setHeroImage,
  heroImageSizeNote,
  heroUsps,
  handleAddUsp,
  handleDeleteUsp,
  handleUpdateUsp,
  heroCtaText,
  setHeroCtaText,
  uploadingTarget,
  handleUploadImageFile,
  handleUploadUspSvg
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
      <div className="border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#8C2828] font-mono text-xs font-bold mb-2">
          Section 1
        </div>
        <h2 className="font-heading font-extrabold text-2xl text-slate-900">
          Hero Section (Đầu trang)
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Chỉnh sửa huy hiệu, tiêu đề chính, hình ảnh minh họa, danh sách USPs và nút kêu gọi hành động.
        </p>
      </div>

      {/* 1. Badge Text */}
      <div className="space-y-2">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          1. Huy hiệu Badge
        </label>
        <input
          type="text"
          value={heroBadge}
          onChange={(e) => setHeroBadge(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-medium"
        />
      </div>

      {/* 2. Headline with Formatting Helper */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            2. Headline (Tiêu đề chính)
          </label>
          <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
            <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
            <button
              type="button"
              onClick={() => applyFormat('strong', setHeroHeadline)}
              title="In đậm chữ đang bôi đen"
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => applyFormat('cyan', setHeroHeadline)}
              title="Tô màu xanh Shofu"
              className="px-2 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
            >
              Xanh
            </button>
            <button
              type="button"
              onClick={() => applyFormat('red', setHeroHeadline)}
              title="Tô màu đỏ Shofu"
              className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold border border-red-200 text-xs"
            >
              Đỏ
            </button>
          </div>
        </div>

        <textarea
          rows={3}
          value={heroHeadline}
          onChange={(e) => setHeroHeadline(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-heading font-bold"
        />

        {/* Live Preview of Headline */}
        <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Xem trước Headline:</span>
          <div 
            className="font-heading font-extrabold text-xl text-slate-900 leading-snug"
            dangerouslySetInnerHTML={{ __html: heroHeadline }}
          />
        </div>
      </div>

      {/* 3. Hero Image Uploader & Suggested Size */}
      <div className="space-y-3 pt-2 border-t border-slate-100">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          3. Hình ảnh Hero Section
        </label>

        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Kích thước gợi ý:</strong> {heroImageSizeNote}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="w-36 h-36 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
            <img 
              src={heroImage} 
              alt="Hero preview" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1 space-y-3 w-full">
            <div>
              <span className="text-xs text-slate-500 font-medium block mb-1">Đường dẫn file ảnh hiện tại:</span>
              <input
                type="text"
                value={heroImage}
                onChange={(e) => setHeroImage(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-[#8C2828]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white text-xs font-mono font-bold cursor-pointer transition-colors shadow-sm ${uploadingTarget === 'hero' ? 'opacity-60 cursor-not-allowed' : ''}`}>
                {uploadingTarget === 'hero' ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Upload className="w-3.5 h-3.5" />
                )}
                <span>{uploadingTarget === 'hero' ? 'ĐANG TẢI LÊN GITHUB...' : 'Tải ảnh từ máy tính'}</span>
                <input
                  type="file"
                  accept="image/*"
                  disabled={uploadingTarget === 'hero'}
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleUploadImageFile(file, 'hero', (url) => setHeroImage(url));
                    }
                  }}
                />
              </label>
              <span className="text-xs text-slate-500 font-mono">Tự động nén & commit vào public/image/ trên GitHub</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Body Text */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            4. Đoạn văn mô tả (Body text)
          </label>
          <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => applyFormat('strong', setHeroBody)}
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => applyFormat('cyan', setHeroBody)}
              className="px-2 py-0.5 rounded bg-sky-50 text-[#00ADEF] font-bold border border-sky-200 text-xs"
            >
              Xanh
            </button>
          </div>
        </div>

        <textarea
          rows={4}
          value={heroBody}
          onChange={(e) => setHeroBody(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-body leading-relaxed"
        />

        <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Xem trước đoạn văn:</span>
          <div 
            className="font-body text-sm text-slate-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: heroBody }}
          />
        </div>
      </div>

      {/* 5. Box USPs (Add / Delete / Edit 3 parts per box) */}
      <div className="space-y-4 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              5. Danh sách Box USPs ({heroUsps.length} hộp)
            </label>
            <span className="text-xs text-slate-500">Mỗi box gồm: Icon SVG, Tiêu đề và Đoạn mô tả</span>
          </div>

          <button
            type="button"
            onClick={handleAddUsp}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold transition-colors shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm Box USP</span>
          </button>
        </div>

        <div className="space-y-4">
          {heroUsps.map((usp, idx) => (
            <div 
              key={usp.id}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative group"
            >
              <div className="flex items-center justify-between gap-4 border-b border-slate-200/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#8C2828] text-white flex items-center justify-center font-mono font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                    Box USP {idx + 1}
                  </span>
                </div>

                {heroUsps.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleDeleteUsp(usp.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-lg transition-colors"
                    title="Xóa box này"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                {/* Icon SVG */}
                <div className="sm:col-span-5 space-y-1.5">
                  <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                    Icon SVG
                  </label>

                  <div className="flex items-center gap-2">
                    {/* Preview box */}
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs text-sky-600 overflow-hidden">
                      {usp.iconName?.includes('.svg') || usp.iconName?.startsWith('/') || usp.iconName?.startsWith('http') ? (
                        <img src={usp.iconName} alt="Icon" className="w-5 h-5 object-contain" />
                      ) : usp.iconName === 'Layers' ? (
                        <Layers className="w-5 h-5" />
                      ) : usp.iconName === 'Sparkles' ? (
                        <Sparkles className="w-5 h-5" />
                      ) : usp.iconName === 'Zap' ? (
                        <Zap className="w-5 h-5" />
                      ) : usp.iconName === 'Award' ? (
                        <Award className="w-5 h-5" />
                      ) : (
                        <ShieldCheck className="w-5 h-5" />
                      )}
                    </div>

                    {/* Select default icon or show custom */}
                    <div className="flex-1 min-w-0">
                      <select
                        value={usp.iconName?.includes('.svg') || usp.iconName?.startsWith('/') ? 'CUSTOM_SVG' : usp.iconName}
                        onChange={(e) => {
                          if (e.target.value !== 'CUSTOM_SVG') {
                            handleUpdateUsp(usp.id, 'iconName', e.target.value);
                          }
                        }}
                        className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-2 text-xs text-slate-800 font-medium truncate"
                      >
                        <option value="ShieldCheck">ShieldCheck (Khiên)</option>
                        <option value="Layers">Layers (Lớp)</option>
                        <option value="Sparkles">Sparkles (Lấp lánh)</option>
                        <option value="Zap">Zap (Tia chớp)</option>
                        <option value="Award">Award (Chứng nhận)</option>
                        {(usp.iconName?.includes('.svg') || usp.iconName?.startsWith('/')) && (
                          <option value="CUSTOM_SVG">SVG đã tải lên (Tùy chỉnh)</option>
                        )}
                      </select>
                    </div>
                  </div>

                  {/* Upload SVG button */}
                  <div className="flex items-center justify-between gap-2 pt-0.5">
                    <label className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-mono font-semibold cursor-pointer border border-slate-200 transition-colors ${uploadingTarget === `usp-icon-${usp.id}` ? 'opacity-50 cursor-not-allowed' : ''}`}>
                      {uploadingTarget === `usp-icon-${usp.id}` ? (
                        <RefreshCw className="w-3 h-3 animate-spin text-sky-600" />
                      ) : (
                        <Upload className="w-3 h-3 text-slate-600" />
                      )}
                      <span>{uploadingTarget === `usp-icon-${usp.id}` ? 'Đang tải...' : 'Tải lên SVG'}</span>
                      <input
                        type="file"
                        accept=".svg,image/svg+xml"
                        disabled={uploadingTarget === `usp-icon-${usp.id}`}
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleUploadUspSvg(file, usp.id);
                          }
                        }}
                      />
                    </label>

                    {(usp.iconName?.includes('.svg') || usp.iconName?.startsWith('/')) && (
                      <button
                        type="button"
                        onClick={() => handleUpdateUsp(usp.id, 'iconName', 'ShieldCheck')}
                        className="text-[10px] text-slate-400 hover:text-slate-600 underline cursor-pointer"
                      >
                        Về mặc định
                      </button>
                    )}
                  </div>
                </div>

                {/* Title */}
                <div className="sm:col-span-7 space-y-1">
                  <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                    Tiêu đề USP
                  </label>
                  <input
                    type="text"
                    value={usp.title}
                    onChange={(e) => handleUpdateUsp(usp.id, 'title', e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                  Đoạn mô tả chi tiết
                </label>
                <textarea
                  rows={2}
                  value={usp.description}
                  onChange={(e) => handleUpdateUsp(usp.id, 'description', e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-600 leading-relaxed font-body"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. CTA Button */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          6. Text nút CTA Button
        </label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={heroCtaText}
            onChange={(e) => setHeroCtaText(e.target.value)}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-mono font-bold"
          />
          <div className="px-5 py-3 rounded-xl bg-[#00ADEF] text-white text-xs font-mono font-bold whitespace-nowrap shadow-sm">
            {heroCtaText}
          </div>
        </div>
      </div>
    </div>
  );
};
