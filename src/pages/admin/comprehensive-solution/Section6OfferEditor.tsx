import React, { useState } from 'react';
import { 
  Gift, 
  Package, 
  DollarSign, 
  ShieldCheck, 
  Clock, 
  Upload, 
  RefreshCw, 
  Plus, 
  Trash2, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Sliders,
  FileText
} from 'lucide-react';
import { CommitmentItem, applyFormat } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface BoxConfig {
  badge?: string;
  title: string;
  image: string;
  items: string[];
}

interface Section6OfferEditorProps {
  // Offer info
  offerBadge: string;
  setOfferBadge: React.Dispatch<React.SetStateAction<string>>;
  offerHeadline: string;
  setOfferHeadline: React.Dispatch<React.SetStateAction<string>>;
  offerSubheadline: string;
  setOfferSubheadline: React.Dispatch<React.SetStateAction<string>>;
  countdownNotice?: string;
  setCountdownNotice?: React.Dispatch<React.SetStateAction<string>>;

  // Pricing
  offerOriginalPrice: string;
  setOfferOriginalPrice: React.Dispatch<React.SetStateAction<string>>;
  offerSalePrice: string;
  setOfferSalePrice: React.Dispatch<React.SetStateAction<string>>;
  savingsPercent?: string;
  setSavingsPercent?: React.Dispatch<React.SetStateAction<string>>;

  // Box 1: Core Box
  offerCoreBox: BoxConfig;
  setOfferCoreBox: React.Dispatch<React.SetStateAction<BoxConfig>>;

  // Box 2: Gift Box
  offerGiftBox: BoxConfig;
  setOfferGiftBox: React.Dispatch<React.SetStateAction<BoxConfig>>;

  // Commitments
  commitments: CommitmentItem[];
  setCommitments: React.Dispatch<React.SetStateAction<CommitmentItem[]>>;

  // CTA Form
  offerCtaText: string;
  setOfferCtaText: React.Dispatch<React.SetStateAction<string>>;
  offerFormTitle?: string;
  setOfferFormTitle?: React.Dispatch<React.SetStateAction<string>>;
  offerFormDesc?: string;
  setOfferFormDesc?: React.Dispatch<React.SetStateAction<string>>;
  offerFormExtraHtml?: string;
  setOfferFormExtraHtml?: React.Dispatch<React.SetStateAction<string>>;
  offerRedirectThanks?: boolean;
  setOfferRedirectThanks?: React.Dispatch<React.SetStateAction<boolean>>;
  offerTargetUrl?: string;
  setOfferTargetUrl?: React.Dispatch<React.SetStateAction<string>>;
  offerResourceTitle?: string;
  setOfferResourceTitle?: React.Dispatch<React.SetStateAction<string>>;

  // Upload helper
  uploadingTarget: string;
  handleUploadImageFile: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
}

export const Section6OfferEditor: React.FC<Section6OfferEditorProps> = ({
  offerBadge,
  setOfferBadge,
  offerHeadline,
  setOfferHeadline,
  offerSubheadline,
  setOfferSubheadline,
  countdownNotice = 'Giới hạn đúng 15 phòng khám đăng ký sớm nhất trong tháng',
  setCountdownNotice,
  offerOriginalPrice,
  setOfferOriginalPrice,
  offerSalePrice,
  setOfferSalePrice,
  savingsPercent = 'Tiết kiệm 60%',
  setSavingsPercent,
  offerCoreBox,
  setOfferCoreBox,
  offerGiftBox,
  setOfferGiftBox,
  commitments,
  setCommitments,
  offerCtaText,
  setOfferCtaText,
  offerFormTitle,
  setOfferFormTitle,
  offerFormDesc,
  setOfferFormDesc,
  offerFormExtraHtml,
  setOfferFormExtraHtml,
  offerRedirectThanks,
  setOfferRedirectThanks,
  offerTargetUrl,
  setOfferTargetUrl,
  offerResourceTitle,
  setOfferResourceTitle,
  uploadingTarget,
  handleUploadImageFile
}) => {
  const [showLivePreview, setShowLivePreview] = useState<boolean>(true);

  // Core box handlers
  const handleAddCoreItem = () => {
    setOfferCoreBox(prev => ({
      ...prev,
      items: [...prev.items, '01 Sản phẩm mới...']
    }));
  };

  const handleDeleteCoreItem = (idx: number) => {
    setOfferCoreBox(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== idx)
    }));
  };

  const handleUpdateCoreItem = (idx: number, val: string) => {
    setOfferCoreBox(prev => ({
      ...prev,
      items: prev.items.map((it, i) => i === idx ? val : it)
    }));
  };

  // Gift box handlers
  const handleAddGiftItem = () => {
    setOfferGiftBox(prev => ({
      ...prev,
      items: [...prev.items, 'Quà tặng / Voucher / Khóa học mới...']
    }));
  };

  const handleDeleteGiftItem = (idx: number) => {
    setOfferGiftBox(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== idx)
    }));
  };

  const handleUpdateGiftItem = (idx: number, val: string) => {
    setOfferGiftBox(prev => ({
      ...prev,
      items: prev.items.map((it, i) => i === idx ? val : it)
    }));
  };

  // Commitment handlers
  const handleAddCommitment = () => {
    setCommitments(prev => [
      ...prev,
      {
        title: 'Cam kết hỗ trợ lâm sàng mới',
        desc: 'Mô tả chi tiết quyền lợi phòng khám...'
      }
    ]);
  };

  const handleDeleteCommitment = (idx: number) => {
    setCommitments(prev => prev.filter((_, i) => i !== idx));
  };

  const handleUpdateCommitment = (idx: number, field: 'title' | 'desc', val: string) => {
    setCommitments(prev => prev.map((item, i) => i === idx ? { ...item, [field]: val } : item));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Info */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#8C2828] flex items-center justify-center shrink-0 border border-red-100">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-red-50 text-[#8C2828] border border-red-200 mb-1">
                Section 6
              </div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                Gói Khởi Động & Ưu Đãi Tháng (Master Ecosystem)
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowLivePreview(!showLivePreview)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
              showLivePreview
                ? 'bg-[#8C2828] text-white border-[#8C2828] shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Eye className="w-4 h-4 text-amber-300" />
            <span>{showLivePreview ? 'Ẩn Live Preview' : 'Xem Live Preview Thẻ Đỏ'}</span>
          </button>
        </div>

        {/* 1. Tiêu đề gói giải pháp & Badge thông báo */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                Badge thông báo trên cùng
              </label>
              <input
                type="text"
                value={offerBadge}
                onChange={(e) => setOfferBadge(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 font-bold focus:outline-none focus:border-[#8C2828]"
                placeholder="vd: Ưu đãi độc quyền trong tháng này"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                Thông báo giới hạn & Đếm ngược
              </label>
              <input
                type="text"
                value={countdownNotice}
                onChange={(e) => setCountdownNotice && setCountdownNotice(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 font-medium focus:outline-none focus:border-[#8C2828]"
                placeholder="vd: Giới hạn đúng 15 phòng khám đăng ký sớm nhất..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#8C2828]" />
                Tiêu đề gói giải pháp (H2)
              </label>
              <div className="flex items-center gap-1 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => applyFormat('strong', setOfferHeadline, 'offer-headline-input')}
                  className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 font-bold"
                >
                  B
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('cyan', setOfferHeadline, 'offer-headline-input')}
                  className="px-2 py-0.5 rounded bg-cyan-50 hover:bg-cyan-100 text-[#00ADEF] font-bold"
                >
                  Cyan
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('amber', setOfferHeadline, 'offer-headline-input')}
                  className="px-2 py-0.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold"
                >
                  Amber
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('br', setOfferHeadline, 'offer-headline-input')}
                  className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 font-mono text-[10px]"
                >
                  &lt;br/&gt;
                </button>
              </div>
            </div>
            <textarea
              id="offer-headline-input"
              rows={2}
              value={offerHeadline}
              onChange={(e) => setOfferHeadline(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-bold focus:outline-none focus:border-[#8C2828]"
              placeholder="Gói chuyển đổi: Master Ecosystem..."
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              Mô tả phụ / Dòng chú thích
            </label>
            <input
              type="text"
              value={offerSubheadline}
              onChange={(e) => setOfferSubheadline(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 font-medium focus:outline-none focus:border-[#8C2828]"
            />
          </div>
        </div>
      </div>

      {/* 2. Cấu hình Giá: Niêm yết, Ưu đãi, Tiết kiệm */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-4">
        <h3 className="font-heading font-extrabold text-lg text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
          <DollarSign className="w-5 h-5 text-emerald-600" />
          Cấu hình Mức giá & Tỷ lệ Tiết kiệm
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <label className="block text-[11px] font-mono font-bold text-slate-500 uppercase mb-1">
              Giá niêm yết (Gạch ngang)
            </label>
            <input
              type="text"
              value={offerOriginalPrice}
              onChange={(e) => setOfferOriginalPrice(e.target.value)}
              className="w-full text-base font-bold text-slate-500 bg-white border border-slate-200 rounded-xl px-3 py-2 line-through focus:outline-none focus:border-[#8C2828]"
              placeholder="13.735.000đ"
            />
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200">
            <label className="block text-[11px] font-mono font-bold text-emerald-800 uppercase mb-1">
              Giá ưu đãi trải nghiệm
            </label>
            <input
              type="text"
              value={offerSalePrice}
              onChange={(e) => setOfferSalePrice(e.target.value)}
              className="w-full text-base font-extrabold text-emerald-700 bg-white border border-emerald-300 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-600"
              placeholder="5.450.000đ"
            />
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200">
            <label className="block text-[11px] font-mono font-bold text-amber-900 uppercase mb-1">
              Mức tiết kiệm / Ưu đãi
            </label>
            <input
              type="text"
              value={savingsPercent}
              onChange={(e) => setSavingsPercent && setSavingsPercent(e.target.value)}
              className="w-full text-base font-extrabold text-amber-800 bg-white border border-amber-300 rounded-xl px-3 py-2 focus:outline-none focus:border-amber-600"
              placeholder="Tiết kiệm 60%"
            />
          </div>
        </div>
      </div>

      {/* 3. Danh sách Quà tặng kèm & Sản phẩm cốt lõi (2 Box) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Box 1: Core Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h4 className="font-heading font-extrabold text-base text-[#8C2828] flex items-center gap-2">
              <Package className="w-5 h-5 text-[#8C2828]" />
              Hộp 1: Bộ 5 sản phẩm cốt lõi
            </h4>
            <span className="text-xs font-mono font-bold text-slate-500">
              {offerCoreBox.items.length} món
            </span>
          </div>

          <div>
            <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
              Tiêu đề Hộp sản phẩm
            </label>
            <input
              type="text"
              value={offerCoreBox.title}
              onChange={(e) => setOfferCoreBox(prev => ({ ...prev, title: e.target.value }))}
              className="w-full text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-[#8C2828]"
            />
          </div>

          {/* Core Box Image */}
          <div>
            <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
              Hình ảnh bộ sản phẩm
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={offerCoreBox.image}
                onChange={(e) => setOfferCoreBox(prev => ({ ...prev, image: e.target.value }))}
                className="flex-1 text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-[#8C2828]"
              />
              <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors shrink-0">
                {uploadingTarget === 'core-box' ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
                <span>{uploadingTarget === 'core-box' ? 'Đang tải...' : 'Upload'}</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) {
                      handleUploadImageFile(f, 'core-box', (url) => {
                        setOfferCoreBox(prev => ({ ...prev, image: url }));
                      });
                    }
                  }}
                />
              </label>
            </div>
            {offerCoreBox.image && (
              <div className="mt-2 w-full h-24 bg-slate-50 rounded-xl p-2 flex items-center justify-center border border-slate-200">
                <img src={offerCoreBox.image} alt="Preview" className="h-full object-contain" />
              </div>
            )}
          </div>

          {/* Core items list */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                Danh sách chi tiết ({offerCoreBox.items.length})
              </label>
              <button
                type="button"
                onClick={handleAddCoreItem}
                className="text-xs font-bold text-[#8C2828] hover:text-red-900 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Thêm món</span>
              </button>
            </div>

            {offerCoreBox.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-red-50 text-[#8C2828] text-[10px] font-mono flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleUpdateCoreItem(idx, e.target.value)}
                  className="flex-1 text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#8C2828]"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteCoreItem(idx)}
                  className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Box 2: Gift Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h4 className="font-heading font-extrabold text-base text-amber-700 flex items-center gap-2">
              <Gift className="w-5 h-5 text-amber-600" />
              Hộp 2: Quà tặng & Đặc quyền VIP
            </h4>
            <span className="text-xs font-mono font-bold text-slate-500">
              {offerGiftBox.items.length} món
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                Badge tài trợ
              </label>
              <input
                type="text"
                value={offerGiftBox.badge || 'Tài trợ 100%'}
                onChange={(e) => setOfferGiftBox(prev => ({ ...prev, badge: e.target.value }))}
                className="w-full text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 focus:outline-none focus:border-amber-600"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                Tiêu đề Hộp Quà
              </label>
              <input
                type="text"
                value={offerGiftBox.title}
                onChange={(e) => setOfferGiftBox(prev => ({ ...prev, title: e.target.value }))}
                className="w-full text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-amber-600"
              />
            </div>
          </div>

          {/* Gift Box Image */}
          <div>
            <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
              Hình ảnh bộ quà tặng
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={offerGiftBox.image}
                onChange={(e) => setOfferGiftBox(prev => ({ ...prev, image: e.target.value }))}
                className="flex-1 text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-amber-600"
              />
              <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors shrink-0">
                {uploadingTarget === 'gift-box' ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
                <span>{uploadingTarget === 'gift-box' ? 'Đang tải...' : 'Upload'}</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) {
                      handleUploadImageFile(f, 'gift-box', (url) => {
                        setOfferGiftBox(prev => ({ ...prev, image: url }));
                      });
                    }
                  }}
                />
              </label>
            </div>
            {offerGiftBox.image && (
              <div className="mt-2 w-full h-24 bg-slate-50 rounded-xl p-2 flex items-center justify-center border border-slate-200">
                <img src={offerGiftBox.image} alt="Preview" className="h-full object-contain" />
              </div>
            )}
          </div>

          {/* Gift items list */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                Danh sách chi tiết quà tặng ({offerGiftBox.items.length})
              </label>
              <button
                type="button"
                onClick={handleAddGiftItem}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Thêm quà</span>
              </button>
            </div>

            {offerGiftBox.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-mono flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleUpdateGiftItem(idx, e.target.value)}
                  className="flex-1 text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-amber-600"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteGiftItem(idx)}
                  className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Khối Cam kết lâm sàng (3 Commitments) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-heading font-extrabold text-lg text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Cam kết lâm sàng bảo vệ quyền lợi phòng khám
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Dùng thử an tâm 30 ngày, bảo hiểm thói quen, minh bạch chất lượng 90 ngày
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddCommitment}
            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm cam kết</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {commitments.map((commit, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 relative group">
              <button
                type="button"
                onClick={() => handleDeleteCommitment(idx)}
                className="absolute top-2.5 right-2.5 p-1 text-slate-400 hover:text-red-600 rounded transition-colors"
                title="Xóa cam kết"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                  Tiêu đề cam kết #{idx + 1}
                </label>
                <input
                  type="text"
                  value={commit.title}
                  onChange={(e) => handleUpdateCommitment(idx, 'title', e.target.value)}
                  className="w-full text-xs font-bold text-slate-900 bg-white border border-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                  Nội dung chi tiết
                </label>
                <textarea
                  rows={3}
                  value={commit.desc}
                  onChange={(e) => handleUpdateCommitment(idx, 'desc', e.target.value)}
                  className="w-full text-xs text-slate-600 bg-white border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Cấu hình Nút CTA & Form Đăng ký gói (CtaFormConfigEditor) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
        <CtaFormConfigEditor
          label="Cấu hình Nút CTA & Form Đăng ký Gói Master Ecosystem (Section 6)"
          ctaText={offerCtaText}
          onChangeCtaText={setOfferCtaText}
          formTitle={offerFormTitle}
          onChangeFormTitle={setOfferFormTitle}
          formDesc={offerFormDesc}
          onChangeFormDesc={setOfferFormDesc}
          formExtraHtml={offerFormExtraHtml}
          onChangeFormExtraHtml={setOfferFormExtraHtml}
          redirectThanks={offerRedirectThanks ?? false}
          onChangeRedirectThanks={setOfferRedirectThanks}
          targetUrl={offerTargetUrl}
          onChangeTargetUrl={setOfferTargetUrl}
          resourceTitle={offerResourceTitle}
          onChangeResourceTitle={setOfferResourceTitle}
        />
      </div>

      {/* 6. Live Preview Thẻ Đỏ Đặc Trưng #8C2828 */}
      {showLivePreview && (
        <div className="bg-[#8C2828] text-white rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 border border-white/20 font-mono text-xs font-bold tracking-wider">
              <Gift className="w-4 h-4 text-amber-300" />
              <span>{offerBadge || 'Ưu đãi độc quyền trong tháng này'}</span>
            </div>
            <h2 
              className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight"
              dangerouslySetInnerHTML={{ __html: offerHeadline || 'Gói chuyển đổi: Master Ecosystem' }}
            />
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              {offerSubheadline}
            </p>
          </div>

          {/* 2 Box Side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {/* Box 1: Core */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-slate-800 shadow-xl border border-white/60 flex flex-col">
              {offerCoreBox.image && (
                <div className="mb-4 flex items-center justify-center h-44">
                  <img src={offerCoreBox.image} alt={offerCoreBox.title} className="max-h-full object-contain" />
                </div>
              )}
              <h4 className="font-heading font-extrabold text-xl text-[#8C2828] mb-4 text-center">
                {offerCoreBox.title}
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 flex-1">
                {offerCoreBox.items.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: Gifts */}
            <div className="bg-[#6A1A1A]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-amber-400/30 flex flex-col relative">
              <div className="absolute top-4 right-4 bg-amber-400 text-amber-950 font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                {offerGiftBox.badge || 'Tài trợ 100%'}
              </div>
              {offerGiftBox.image && (
                <div className="mb-4 flex items-center justify-center h-44">
                  <img src={offerGiftBox.image} alt={offerGiftBox.title} className="max-h-full object-contain" />
                </div>
              )}
              <h4 className="font-heading font-extrabold text-xl text-amber-300 mb-4 text-center">
                {offerGiftBox.title}
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-amber-50/90 flex-1">
                {offerGiftBox.items.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Gift className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Price Bar Preview */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <span className="text-white/60 text-xs uppercase tracking-wider block mb-1">
                Tổng giá trị gói
              </span>
              <span className="text-white/60 text-xl font-bold line-through decoration-red-400">
                {offerOriginalPrice}
              </span>
            </div>
            <div className="text-center sm:text-right">
              <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block mb-1">
                Mức đầu tư trải nghiệm ({savingsPercent})
              </span>
              <span className="text-3xl sm:text-4xl font-heading font-black text-amber-300">
                {offerSalePrice}
              </span>
            </div>
          </div>

          {/* Commitments Live Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
            {commitments.map((c, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/15">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
                  <h5 className="font-heading font-bold text-xs sm:text-sm text-white">
                    {c.title}
                  </h5>
                </div>
                <p className="text-[11px] text-white/80 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button Live */}
          <div className="text-center relative z-10 pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-mono text-sm font-extrabold shadow-xl shadow-black/20 hover:scale-105 transition-all"
            >
              <span>{offerCtaText || 'Đăng ký giữ chỗ Ưu đãi ngay'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
