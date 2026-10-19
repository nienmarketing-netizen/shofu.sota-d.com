import React from 'react';
import { Bold, Plus, Trash2, Upload, Gift, DollarSign, ShieldCheck, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { applyFormat } from './types';

interface Section5OfferEditorProps {
  badge: string;
  setBadge: React.Dispatch<React.SetStateAction<string>>;
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  comboTitle: string;
  setComboTitle: React.Dispatch<React.SetStateAction<string>>;
  comboImage: string;
  setComboImage: React.Dispatch<React.SetStateAction<string>>;
  comboItems: string[];
  setComboItems: React.Dispatch<React.SetStateAction<string[]>>;
  giftsTitle: string;
  setGiftsTitle: React.Dispatch<React.SetStateAction<string>>;
  giftImage: string;
  setGiftImage: React.Dispatch<React.SetStateAction<string>>;
  gifts: string[];
  setGifts: React.Dispatch<React.SetStateAction<string[]>>;
  originalPrice: string;
  setOriginalPrice: React.Dispatch<React.SetStateAction<string>>;
  offerPrice: string;
  setOfferPrice: React.Dispatch<React.SetStateAction<string>>;
  ctaText: string;
  setCtaText: React.Dispatch<React.SetStateAction<string>>;
  guarantee: string;
  setGuarantee: React.Dispatch<React.SetStateAction<string>>;
  onUploadImage: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
  isUploadingImage: boolean;
  uploadingTarget: string;
}

export const Section5OfferEditor: React.FC<Section5OfferEditorProps> = ({
  badge,
  setBadge,
  headline,
  setHeadline,
  comboTitle,
  setComboTitle,
  comboImage,
  setComboImage,
  comboItems,
  setComboItems,
  giftsTitle,
  setGiftsTitle,
  giftImage,
  setGiftImage,
  gifts,
  setGifts,
  originalPrice,
  setOriginalPrice,
  offerPrice,
  setOfferPrice,
  ctaText,
  setCtaText,
  guarantee,
  setGuarantee,
  onUploadImage,
  isUploadingImage,
  uploadingTarget
}) => {
  // Combo items
  const handleAddComboItem = () => {
    setComboItems([...comboItems, 'Sản phẩm mới kèm quy cách đóng gói...']);
  };
  const handleDeleteComboItem = (index: number) => {
    setComboItems(comboItems.filter((_, i) => i !== index));
  };
  const handleUpdateComboItem = (index: number, val: string) => {
    const updated = [...comboItems];
    updated[index] = val;
    setComboItems(updated);
  };

  // Gift items
  const handleAddGift = () => {
    setGifts([...gifts, '<strong class="text-white">Quà tặng mới:</strong> Mô tả phần quà tặng...']);
  };
  const handleDeleteGift = (index: number) => {
    setGifts(gifts.filter((_, i) => i !== index));
  };
  const handleUpdateGift = (index: number, val: string) => {
    const updated = [...gifts];
    updated[index] = val;
    setGifts(updated);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg">
            05
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-xl text-slate-900">
              Section 5: The Core Offer (Gói ưu đãi "Giomer không ê buốt")
            </h2>
            <p className="text-slate-500 text-sm">
              Cấu hình combo sản phẩm, bộ quà tặng đính kèm, bảng giá và cam kết hoàn tiền.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Badge nổi bật
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-amber-500 text-sm outline-none font-medium"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Tiêu đề gói ưu đãi
              </label>
              <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => applyFormat('strong', setHeadline)}
                  className="px-2 py-0.5 rounded text-xs font-bold text-slate-700 hover:bg-white transition-colors"
                >
                  <Bold className="w-3.5 h-3.5 inline mr-0.5" /> Bold
                </button>
              </div>
            </div>
            <textarea
              rows={2}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 text-sm font-medium outline-none font-mono"
            />
            {/* Live Preview of Headline */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mt-2">
              <span className="text-[10.5px] font-mono text-slate-500 font-bold uppercase tracking-wider block mb-1">
                Xem trước Tiêu đề Gói ưu đãi:
              </span>
              <div 
                className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 leading-snug"
                dangerouslySetInnerHTML={{ __html: headline || '<span class="text-slate-400 italic text-sm">Chưa nhập tiêu đề...</span>' }}
              />
            </div>
          </div>

          {/* Pricing Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-amber-50/50 border border-amber-200">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Tổng giá trị gốc (Gạch ngang)
              </label>
              <input
                type="text"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-base font-bold text-slate-500 outline-none"
                placeholder="3.250.000đ"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                Mức đầu tư ưu đãi (Nổi bật)
              </label>
              <input
                type="text"
                value={offerPrice}
                onChange={(e) => setOfferPrice(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white text-base font-black text-amber-600 outline-none"
                placeholder="1.497.000vnđ"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Chữ nút đăng ký
              </label>
              <input
                type="text"
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#00ADEF] text-sm font-bold outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Cam kết bảo chứng
              </label>
              <input
                type="text"
                value={guarantee}
                onChange={(e) => setGuarantee(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#00ADEF] text-sm outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Combo Box 1: Sản phẩm cốt lõi */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <h3 className="font-heading font-bold text-lg text-slate-900">
            Khối 1: Combo Dán - Gắn đồng bộ
          </h3>
          <button
            type="button"
            onClick={handleAddComboItem}
            className="text-xs font-bold text-[#00ADEF] hover:underline inline-flex items-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" /> Thêm sản phẩm
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tiêu đề khối
            </label>
            <input
              type="text"
              value={comboTitle}
              onChange={(e) => setComboTitle(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Ảnh combo sản phẩm
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={comboImage}
                onChange={(e) => setComboImage(e.target.value)}
                className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono outline-none"
              />
              <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold cursor-pointer hover:bg-slate-50 shadow-sm shrink-0">
                <Upload className="w-3.5 h-3.5 text-[#00ADEF]" />
                <span>Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) onUploadImage(f, 'combo', (url) => setComboImage(url));
                  }}
                />
              </label>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label className="block text-xs font-bold text-slate-500 uppercase">
              Danh sách sản phẩm trong combo
            </label>
            {comboItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleUpdateComboItem(idx, e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-800 outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteComboItem(idx)}
                  className="p-1.5 text-slate-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Combo Box 2: Quà tặng đặc quyền */}
      <div className="bg-white rounded-2xl border border-amber-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <h3 className="font-heading font-bold text-lg text-amber-900">
            Khối 2: Bộ Quà Tặng Đặc Quyền
          </h3>
          <button
            type="button"
            onClick={handleAddGift}
            className="text-xs font-bold text-amber-600 hover:underline inline-flex items-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" /> Thêm quà tặng
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tiêu đề khối quà tặng
            </label>
            <input
              type="text"
              value={giftsTitle}
              onChange={(e) => setGiftsTitle(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Ảnh quà tặng
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={giftImage}
                onChange={(e) => setGiftImage(e.target.value)}
                className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono outline-none"
              />
              <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold cursor-pointer hover:bg-slate-50 shadow-sm shrink-0">
                <Upload className="w-3.5 h-3.5 text-amber-600" />
                <span>Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) onUploadImage(f, 'gift', (url) => setGiftImage(url));
                  }}
                />
              </label>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label className="block text-xs font-bold text-slate-500 uppercase">
              Danh sách quà tặng (Hỗ trợ HTML tag)
            </label>
            {gifts.map((gift, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={gift}
                  onChange={(e) => handleUpdateGift(idx, e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-800 outline-none font-mono"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteGift(idx)}
                  className="p-1.5 text-slate-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. XEM TRƯỚC THÀNH PHẦN GÓI ƯU ĐÃI (LIVE COMPONENT PREVIEW) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Xem trước giao diện Gói ưu đãi (Live Component Preview)
              </h3>
              <p className="text-slate-500 text-xs">
                Mô phỏng box quà tặng, bảng giá ưu đãi, cam kết và nút đặt mua.
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Trực quan tức thì
          </span>
        </div>

        {/* Mock Offer Box */}
        <div className="rounded-2xl border-2 border-amber-400/80 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            {badge && (
              <span className="inline-block px-3.5 py-1 rounded-full bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm">
                {badge}
              </span>
            )}
            <div
              className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 leading-snug"
              dangerouslySetInnerHTML={{ __html: headline || '' }}
            />
          </div>

          {/* 2 Cols: Combo Products vs Free Gifts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Left: Combo */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
              <div className="font-heading font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
                {comboTitle}
              </div>
              <div className="h-32 rounded-lg bg-slate-50 flex items-center justify-center p-2 border border-slate-100 overflow-hidden">
                {comboImage ? (
                  <img src={comboImage} alt="Combo" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xs text-slate-400">Chưa có ảnh combo</span>
                )}
              </div>
              <ul className="space-y-1.5 pt-1">
                {comboItems.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Gifts */}
            <div className="rounded-xl border border-amber-300 bg-amber-500/10 p-5 space-y-3">
              <div className="font-heading font-bold text-sm text-amber-900 pb-2 border-b border-amber-200 flex items-center gap-2">
                <Gift className="w-4 h-4 text-amber-600" />
                <span>{giftsTitle}</span>
              </div>
              <div className="h-32 rounded-lg bg-white/70 flex items-center justify-center p-2 border border-amber-200 overflow-hidden">
                {giftImage ? (
                  <img src={giftImage} alt="Gifts" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xs text-slate-400">Chưa có ảnh quà tặng</span>
                )}
              </div>
              <ul className="space-y-1.5 pt-1">
                {gifts.map((g, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-800">
                    <span className="text-amber-600 font-bold">🎁</span>
                    <span dangerouslySetInnerHTML={{ __html: g }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="rounded-2xl bg-white border border-slate-200 p-5 text-center space-y-3">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="text-xs text-slate-400">
                Giá gốc: <span className="line-through font-mono font-bold text-slate-500">{originalPrice}</span>
              </div>
              <div className="text-lg sm:text-2xl font-mono font-extrabold text-red-600">
                Ưu đãi chỉ: <span>{offerPrice}</span>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00ADEF] hover:bg-sky-500 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-sky-500/25">
                <Gift className="w-4 h-4" />
                <span>{ctaText || 'ĐĂNG KÝ NHẬN COMBO ƯU ĐÃI'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {guarantee && (
              <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{guarantee}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
