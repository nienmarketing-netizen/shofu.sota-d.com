import React from 'react';
import { Bold, Sparkles, Plus, Trash2, Upload, ShieldCheck, Zap, Coins } from 'lucide-react';
import { UspItem, applyFormat } from './types';

interface Section1HeroEditorProps {
  badge: string;
  setBadge: React.Dispatch<React.SetStateAction<string>>;
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  body: string;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  imageSizeNote: string;
  usps: UspItem[];
  setUsps: React.Dispatch<React.SetStateAction<UspItem[]>>;
  ctaText: string;
  setCtaText: React.Dispatch<React.SetStateAction<string>>;
  footerNote: string;
  setFooterNote: React.Dispatch<React.SetStateAction<string>>;
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
  imageSizeNote,
  usps,
  setUsps,
  ctaText,
  setCtaText,
  footerNote,
  setFooterNote,
  onUploadImage,
  isUploadingImage,
  uploadingTarget
}) => {
  const handleAddUsp = () => {
    const newId = `usp-${Date.now()}`;
    setUsps([
      ...usps,
      {
        id: newId,
        iconName: 'ShieldCheck',
        title: 'Lợi ích lâm sàng mới',
        description: 'Mô tả ngắn gọn về ưu điểm và lợi ích đột phá.'
      }
    ]);
  };

  const handleDeleteUsp = (id: string) => {
    setUsps(usps.filter((item) => item.id !== id));
  };

  const handleUpdateUsp = (id: string, field: 'title' | 'description' | 'iconName', val: string) => {
    setUsps(
      usps.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#00ADEF] flex items-center justify-center font-bold text-lg">
            01
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-xl text-slate-900">
              Section 1: Hero Section (Đầu trang)
            </h2>
            <p className="text-slate-500 text-sm">
              Cấu hình thông điệp cốt lõi, tiêu đề chính, mô tả và hình ảnh Hero đại diện.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Badge */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Badge nổi bật (Pill tag)
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-[#00ADEF] focus:ring-2 focus:ring-[#00ADEF]/20 text-sm font-medium outline-none transition-all"
              placeholder="Nhập nội dung badge..."
            />
          </div>

          {/* Headline */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Tiêu đề chính (Headline)
              </label>
              <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-400 px-1 font-medium">Bôi đen chữ:</span>
                <button
                  type="button"
                  onClick={() => applyFormat('strong', setHeadline)}
                  title="In đậm chữ"
                  className="px-2 py-0.5 rounded text-xs font-bold text-slate-700 hover:bg-white transition-colors"
                >
                  <Bold className="w-3.5 h-3.5 inline mr-0.5" /> Bold
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('cyan', setHeadline)}
                  title="Đổi chữ sang màu Xanh Shofu"
                  className="px-2 py-0.5 rounded text-xs font-bold text-[#00ADEF] hover:bg-white transition-colors"
                >
                  Cyan
                </button>
              </div>
            </div>
            <textarea
              rows={3}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-[#00ADEF] focus:ring-2 focus:ring-[#00ADEF]/20 text-sm font-medium outline-none transition-all font-mono"
              placeholder="Nhập tiêu đề HTML..."
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Hỗ trợ tag HTML: &lt;span class="text-[#00ADEF]"&gt;chữ nổi bật&lt;/span&gt;, &lt;br /&gt;
            </p>
          </div>

          {/* Body */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Đoạn văn mô tả (Lead paragraph)
              </label>
              <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => applyFormat('strong', setBody)}
                  className="px-2 py-0.5 rounded text-xs font-bold text-slate-700 hover:bg-white transition-colors"
                >
                  <Bold className="w-3.5 h-3.5 inline mr-0.5" /> Bold
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('cyan', setBody)}
                  className="px-2 py-0.5 rounded text-xs font-bold text-[#00ADEF] hover:bg-white transition-colors"
                >
                  Cyan
                </button>
              </div>
            </div>
            <textarea
              rows={4}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-[#00ADEF] focus:ring-2 focus:ring-[#00ADEF]/20 text-sm font-medium outline-none transition-all font-mono"
              placeholder="Nhập nội dung mô tả..."
            />
          </div>

          {/* Hero Image */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Ảnh Hero đại diện (BBX & BeautiLink SA)
            </label>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-28 h-28 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-2 shrink-0 overflow-hidden shadow-inner">
                {image ? (
                  <img src={image} alt="Hero preview" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xs text-slate-400 text-center">Chưa có ảnh</span>
                )}
              </div>
              <div className="flex-1 space-y-2 w-full">
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs font-mono focus:border-[#00ADEF] outline-none"
                  placeholder="/image/beautilink-bbx-new.webp"
                />
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold cursor-pointer transition-colors shadow-sm">
                    <Upload className="w-3.5 h-3.5 text-[#00ADEF]" />
                    <span>{isUploadingImage && uploadingTarget === 'hero' ? 'Đang tải lên...' : 'Tải ảnh mới'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          onUploadImage(file, 'hero', (url) => setImage(url));
                        }
                      }}
                      disabled={isUploadingImage}
                    />
                  </label>
                  <span className="text-[11px] text-slate-500">{imageSizeNote}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button text & Footer note */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Chữ trên nút CTA chính
              </label>
              <input
                type="text"
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-[#00ADEF] text-sm font-bold outline-none"
                placeholder="NHẬN MẪU THỬ BBX 2ml & ƯU ĐÃI"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Dòng ghi chú dưới CTA
              </label>
              <input
                type="text"
                value={footerNote}
                onChange={(e) => setFooterNote(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-[#00ADEF] text-sm outline-none"
                placeholder="Trọn gói giải pháp bảo chứng bởi JADA & Dental Advisor"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero USPs list */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              3 Điểm cốt lõi nổi bật (Hero USPs)
            </h3>
            <p className="text-slate-500 text-xs mt-0.5">
              Hiển thị dạng thẻ danh sách ngay dưới phần mô tả Hero.
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddUsp}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-[#00ADEF] hover:bg-blue-100 font-mono text-xs font-bold transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm USP</span>
          </button>
        </div>

        <div className="space-y-4">
          {usps.map((usp, idx) => (
            <div
              key={usp.id || idx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-200 transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#00ADEF] flex items-center justify-center font-bold text-xs shrink-0">
                {idx + 1}
              </div>
              <div className="w-36 shrink-0">
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                  Icon đại diện
                </label>
                <select
                  value={usp.iconName}
                  onChange={(e) => handleUpdateUsp(usp.id, 'iconName', e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs font-medium outline-none"
                >
                  <option value="ShieldCheck">ShieldCheck</option>
                  <option value="Zap">Zap</option>
                  <option value="Coins">Coins</option>
                  <option value="Clock">Clock</option>
                  <option value="Microscope">Microscope</option>
                  <option value="Sparkles">Sparkles</option>
                </select>
              </div>
              <div className="flex-1 space-y-2 w-full">
                <input
                  type="text"
                  value={usp.title}
                  onChange={(e) => handleUpdateUsp(usp.id, 'title', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-bold text-slate-900 focus:border-[#00ADEF] outline-none"
                  placeholder="Tiêu đề USP..."
                />
                <input
                  type="text"
                  value={usp.description}
                  onChange={(e) => handleUpdateUsp(usp.id, 'description', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-900 focus:border-[#00ADEF] outline-none"
                  placeholder="Mô tả lợi ích..."
                />
              </div>
              <button
                type="button"
                onClick={() => handleDeleteUsp(usp.id)}
                className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors shrink-0"
                title="Xóa USP này"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
