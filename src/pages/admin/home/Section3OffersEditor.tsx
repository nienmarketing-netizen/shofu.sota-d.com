import React, { useState } from 'react';
import { 
  Timer, 
  Bold, 
  Palette, 
  CornerDownLeft, 
  Eye, 
  Gift, 
  DollarSign, 
  ShieldCheck 
} from 'lucide-react';
import { OfferPackageItem, applyFormat } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section3OffersEditorProps {
  badge: string;
  setBadge: (val: string) => void;
  headline: string;
  setHeadline: (val: string) => void;
  countdownDays: number;
  setCountdownDays: (val: number) => void;
  countdownHours: number;
  setCountdownHours: (val: number) => void;
  countdownMinutes: number;
  setCountdownMinutes: (val: number) => void;
  countdownSeconds: number;
  setCountdownSeconds: (val: number) => void;
  packages: OfferPackageItem[];
  setPackages: React.Dispatch<React.SetStateAction<OfferPackageItem[]>>;
}

export const Section3OffersEditor: React.FC<Section3OffersEditorProps> = ({
  badge,
  setBadge,
  headline,
  setHeadline,
  countdownDays,
  setCountdownDays,
  countdownHours,
  setCountdownHours,
  countdownMinutes,
  setCountdownMinutes,
  countdownSeconds,
  setCountdownSeconds,
  packages,
  setPackages,
}) => {
  const [showLivePreview, setShowLivePreview] = useState(true);

  const handleUpdatePackage = (id: number, field: keyof OfferPackageItem, val: any) => {
    setPackages(prev => prev.map(p => p.id === id ? { ...p, [field]: val } : p));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section info */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs font-mono">
              03
            </span>
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Gói Ưu Đãi Mua Hàng Không Rủi Ro & Đồng Hồ Đếm Ngược
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
          Chỉnh sửa thông điệp bán hàng không rủi ro, thời gian đếm ngược và chi tiết 2 gói combo ưu đãi.
        </p>
      </div>

      {/* 1. Badge & Headline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <Timer className="w-4 h-4 text-red-500" />
          <span>1. Tiêu đề khối ưu đãi & Đồng hồ đếm ngược</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Huy hiệu trên cùng
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#00ADEF] outline-none"
              placeholder="Ưu đãi giới hạn số lượng"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Thời gian đếm ngược (Ngày / Giờ / Phút / Giây)
            </label>
            <div className="grid grid-cols-4 gap-2">
              <div>
                <input
                  type="number"
                  min="0"
                  value={countdownDays}
                  onChange={(e) => setCountdownDays(Number(e.target.value) || 0)}
                  className="w-full px-2 py-2 rounded-lg border border-slate-300 text-xs text-center font-bold"
                  placeholder="Ngày"
                />
                <span className="text-[10px] text-slate-400 block text-center mt-0.5">Ngày</span>
              </div>
              <div>
                <input
                  type="number"
                  min="0"
                  max="23"
                  value={countdownHours}
                  onChange={(e) => setCountdownHours(Number(e.target.value) || 0)}
                  className="w-full px-2 py-2 rounded-lg border border-slate-300 text-xs text-center font-bold"
                  placeholder="Giờ"
                />
                <span className="text-[10px] text-slate-400 block text-center mt-0.5">Giờ</span>
              </div>
              <div>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={countdownMinutes}
                  onChange={(e) => setCountdownMinutes(Number(e.target.value) || 0)}
                  className="w-full px-2 py-2 rounded-lg border border-slate-300 text-xs text-center font-bold"
                  placeholder="Phút"
                />
                <span className="text-[10px] text-slate-400 block text-center mt-0.5">Phút</span>
              </div>
              <div>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={countdownSeconds}
                  onChange={(e) => setCountdownSeconds(Number(e.target.value) || 0)}
                  className="w-full px-2 py-2 rounded-lg border border-slate-300 text-xs text-center font-bold"
                  placeholder="Giây"
                />
                <span className="text-[10px] text-slate-400 block text-center mt-0.5">Giây</span>
              </div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Tiêu đề chính Section
            </label>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => applyFormat('strong', setHeadline, 'offers-headline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-slate-700 transition-colors flex items-center gap-1"
              >
                <Bold className="w-3 h-3" /> Bold
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setHeadline, 'offers-headline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-[#00ADEF] transition-colors flex items-center gap-1"
              >
                <Palette className="w-3 h-3" /> Xanh
              </button>
            </div>
          </div>
          <textarea
            id="offers-headline-input"
            rows={2}
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-xs text-slate-900 focus:border-[#00ADEF] outline-none leading-relaxed"
            placeholder="MUA HÀNG <span class='text-[#00ADEF]'>KHÔNG RỦI RO</span>"
          />
        </div>

        {/* Live Preview */}
        {showLivePreview && (
          <div className="p-4 rounded-xl bg-slate-900 text-white text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold">
              <Timer className="w-3 h-3" />
              <span>{badge || 'Ưu đãi giới hạn'}</span>
            </div>
            <h3 
              className="font-heading font-extrabold text-2xl uppercase tracking-tight"
              dangerouslySetInnerHTML={{ __html: headline || 'Tiêu đề' }}
            />
            <div className="flex justify-center items-center gap-4 font-mono text-lg font-bold text-[#00ADEF]">
              <span>{String(countdownDays).padStart(2, '0')} ngày</span> :
              <span>{String(countdownHours).padStart(2, '0')} giờ</span> :
              <span>{String(countdownMinutes).padStart(2, '0')} phút</span>
            </div>
          </div>
        )}
      </div>

      {/* 2. 2 Offer Packages */}
      <div className="space-y-6">
        {packages.map((pkg, idx) => (
          <div key={pkg.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div 
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: pkg.accentColor || '#00ADEF' }}
                >
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base">
                    Gói ưu đãi số {idx + 1}: {pkg.title1}
                  </h4>
                  <span className="text-xs text-slate-500">{pkg.title2}</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-100 text-slate-700">
                {pkg.spotsLeftText}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tiêu đề dòng 1 (Tên gói)
                </label>
                <input
                  type="text"
                  value={pkg.title1}
                  onChange={(e) => handleUpdatePackage(pkg.id, 'title1', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:border-[#00ADEF] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tiêu đề dòng 2 (Màu nhấn)
                </label>
                <input
                  type="text"
                  value={pkg.title2}
                  onChange={(e) => handleUpdatePackage(pkg.id, 'title2', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#00ADEF] outline-none"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Nội dung chi tiết giải pháp (Hỗ trợ HTML)
                </label>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => {
                      const desc = pkg.description;
                      handleUpdatePackage(pkg.id, 'description', desc + '<strong>Điểm nhấn</strong>');
                    }}
                    className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-slate-700 transition-colors flex items-center gap-1"
                  >
                    <Bold className="w-3 h-3" /> Bold
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const desc = pkg.description;
                      handleUpdatePackage(pkg.id, 'description', desc + '<strong class="text-[#00ADEF]">Chữ xanh</strong>');
                    }}
                    className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-[#00ADEF] transition-colors flex items-center gap-1"
                  >
                    <Palette className="w-3 h-3" /> Xanh
                  </button>
                </div>
              </div>
              <textarea
                rows={3}
                value={pkg.description}
                onChange={(e) => handleUpdatePackage(pkg.id, 'description', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-xs text-slate-900 focus:border-[#00ADEF] outline-none leading-relaxed"
              />
            </div>

            {/* Price & Guarantee */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Giá gốc
                </label>
                <input
                  type="text"
                  value={pkg.originalPrice}
                  onChange={(e) => handleUpdatePackage(pkg.id, 'originalPrice', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-700 focus:border-[#00ADEF] outline-none"
                  placeholder="3.250.000đ"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Giá ưu đãi
                </label>
                <input
                  type="text"
                  value={pkg.salePrice}
                  onChange={(e) => handleUpdatePackage(pkg.id, 'salePrice', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-[#00ADEF] focus:border-[#00ADEF] outline-none"
                  placeholder="1.497.000vnđ"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Số suất còn lại
                </label>
                <input
                  type="text"
                  value={pkg.spotsLeftText}
                  onChange={(e) => handleUpdatePackage(pkg.id, 'spotsLeftText', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-red-600 font-bold focus:border-[#00ADEF] outline-none"
                  placeholder="Chỉ còn 15 suất"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Cam kết bảo hành
                </label>
                <input
                  type="text"
                  value={pkg.refundBadge}
                  onChange={(e) => handleUpdatePackage(pkg.id, 'refundBadge', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-emerald-700 font-bold focus:border-[#00ADEF] outline-none"
                  placeholder="Hoàn tiền 100%..."
                />
              </div>
            </div>

            {/* CTA & Popup for this specific package */}
            <CtaFormConfigEditor
              label={`Cấu hình Nút & Popup cho Gói ${pkg.title1}`}
              ctaText={pkg.ctaText}
              onChangeCtaText={(val) => handleUpdatePackage(pkg.id, 'ctaText', val)}
              formTitle={pkg.ctaFormTitle}
              onChangeFormTitle={(val) => handleUpdatePackage(pkg.id, 'ctaFormTitle', val)}
              formDesc={pkg.ctaFormDesc}
              onChangeFormDesc={(val) => handleUpdatePackage(pkg.id, 'ctaFormDesc', val)}
              formExtraHtml={pkg.ctaFormExtraHtml}
              onChangeFormExtraHtml={(val) => handleUpdatePackage(pkg.id, 'ctaFormExtraHtml', val)}
              redirectThanks={pkg.ctaRedirectThanks}
              onChangeRedirectThanks={(val) => handleUpdatePackage(pkg.id, 'ctaRedirectThanks', val)}
              targetUrl={pkg.ctaTargetUrl}
              onChangeTargetUrl={(val) => handleUpdatePackage(pkg.id, 'ctaTargetUrl', val)}
              resourceTitle={pkg.ctaResourceTitle}
              onChangeResourceTitle={(val) => handleUpdatePackage(pkg.id, 'ctaResourceTitle', val)}
            />
          </div>
        ))}

        {/* Live Preview of Package Cards */}
        {showLivePreview && (
          <div className="bg-slate-900 rounded-2xl p-6 text-white space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Xem trước 2 Thẻ Combo Ưu đãi:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packages.map((pkg) => (
                <div key={pkg.id} className="bg-slate-800 rounded-2xl p-5 border border-slate-700 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                        {pkg.badge}
                      </span>
                      <span className="text-[11px] font-mono text-amber-400 font-bold">
                        {pkg.spotsLeftText}
                      </span>
                    </div>
                    <h5 className="font-heading font-bold text-lg text-white">
                      {pkg.title1}
                    </h5>
                    <p className="text-xs text-slate-400">
                      {pkg.title2}
                    </p>
                    <p 
                      className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-700/60"
                      dangerouslySetInnerHTML={{ __html: pkg.description }}
                    />
                  </div>

                  <div className="pt-3 border-t border-slate-700/80 space-y-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-extrabold text-[#00ADEF]">
                        {pkg.salePrice}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-xs text-slate-500 line-through">
                          {pkg.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{pkg.refundBadge}</span>
                    </div>
                    <button 
                      type="button"
                      className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white uppercase tracking-wider"
                      style={{ backgroundColor: pkg.accentColor || '#00ADEF' }}
                    >
                      {pkg.ctaText || 'Đặt mua ngay'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
