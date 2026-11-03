import React, { useState } from 'react';
import { 
  Sparkles, 
  Bold, 
  Palette, 
  Eye, 
  Package, 
  Layers, 
  ArrowUpRight, 
  ImageIcon,
  ShieldPlus,
  Syringe,
  Gem,
  ShieldCheck,
  Activity,
  HeartPulse,
  Stethoscope,
  Zap,
  Award,
  Microscope,
  Smile,
  CircleDot,
  Upload,
  Gift,
  CheckCircle2,
  ShoppingCart,
  Check,
  Info
} from 'lucide-react';
import { 
  SolutionCardItem, 
  BestsellerProductItem, 
  SpecialOfferItem, 
  applyFormat 
} from './types';
import { ImageUploaderField } from '../components/ImageUploaderField';

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
  offerModalFormTitle: string;
  setOfferModalFormTitle: (val: string) => void;
  offerModalFormDesc: string;
  setOfferModalFormDesc: (val: string) => void;
  specialOffers: SpecialOfferItem[];
  setSpecialOffers: React.Dispatch<React.SetStateAction<SpecialOfferItem[]>>;
}

const ICON_LIBRARY = [
  { name: 'ShieldPlus', label: 'Phòng ngừa', icon: ShieldPlus },
  { name: 'Syringe', label: 'Trực tiếp / Tiêm', icon: Syringe },
  { name: 'Gem', label: 'Gián tiếp / Kim cương', icon: Gem },
  { name: 'Layers', label: 'Toàn diện / Lớp', icon: Layers },
  { name: 'Sparkles', label: 'Thẩm mỹ / Tỏa sáng', icon: Sparkles },
  { name: 'ShieldCheck', label: 'Bảo vệ / An toàn', icon: ShieldCheck },
  { name: 'HeartPulse', label: 'Sinh học / Sức khỏe', icon: HeartPulse },
  { name: 'Stethoscope', label: 'Lâm sàng', icon: Stethoscope },
  { name: 'Activity', label: 'Tương tác', icon: Activity },
  { name: 'Award', label: 'Tiêu chuẩn cao', icon: Award },
  { name: 'Zap', label: 'Nhanh / Tối giản', icon: Zap },
  { name: 'Package', label: 'Bộ sản phẩm', icon: Package },
  { name: 'Microscope', label: 'Nghiên cứu', icon: Microscope },
  { name: 'Smile', label: 'Nụ cười', icon: Smile },
];

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
  offerModalFormTitle,
  setOfferModalFormTitle,
  offerModalFormDesc,
  setOfferModalFormDesc,
  specialOffers,
  setSpecialOffers,
}) => {
  const [showLivePreview, setShowLivePreview] = useState(true);
  const [activeIconPickerId, setActiveIconPickerId] = useState<string | null>(null);

  const handleUpdateSolution = (id: string, field: 'title' | 'icon', val: string) => {
    setSolutions(prev => prev.map(s => s.id === id ? { ...s, [field]: val } : s));
  };

  const handleUpdateProduct = (id: string, field: keyof BestsellerProductItem, val: string) => {
    setBestsellers(prev => prev.map(p => p.id === id ? { ...p, [field]: val } : p));
  };

  const handleUpdateOffer = (id: number, field: keyof SpecialOfferItem, val: string) => {
    setSpecialOffers(prev => prev.map(o => o.id === id ? { ...o, [field]: val } : o));
  };

  const renderIconPreview = (iconVal: string) => {
    if (!iconVal) return <Sparkles className="w-6 h-6 text-white" />;
    if (iconVal.startsWith('http') || iconVal.startsWith('/') || iconVal.startsWith('data:')) {
      return <img src={iconVal} alt="Icon" className="w-6 h-6 object-contain filter brightness-0 invert" />;
    }
    const found = ICON_LIBRARY.find(item => item.name === iconVal);
    if (found) {
      const Comp = found.icon;
      return <Comp className="w-6 h-6 text-white stroke-[1.75]" />;
    }
    return <Sparkles className="w-6 h-6 text-white" />;
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
          Quản lý 4 thẻ giải pháp điều hướng chuyên sâu, khối sản phẩm bán chạy, và popup ưu đãi đặc biệt 2 khung khi click CTA.
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#00ADEF]" />
            <span>2. 4 Thẻ Giải Pháp Lâm Sàng (Điều hướng trang con)</span>
          </h4>
          <span className="text-xs text-slate-500">
            Hỗ trợ chọn icon thư viện hoặc tải lên/nhập link file SVG
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((sol) => (
            <div key={sol.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3.5 flex flex-col justify-between">
              <div className="space-y-3">
                {/* Header card: ID & slug */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase truncate max-w-[130px]">
                    /{sol.slug}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 font-bold">
                    {sol.id}
                  </span>
                </div>

                {/* Card Title */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Tên giải pháp
                  </label>
                  <input
                    type="text"
                    value={sol.title}
                    onChange={(e) => handleUpdateSolution(sol.id, 'title', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
                  />
                </div>

                {/* Representative Icon Picker */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                      Icon đại diện thẻ
                    </label>
                    <button
                      type="button"
                      onClick={() => setActiveIconPickerId(activeIconPickerId === sol.id ? null : sol.id)}
                      className="text-[10px] font-bold text-[#00ADEF] hover:underline"
                    >
                      {activeIconPickerId === sol.id ? 'Đóng thư viện' : 'Chọn từ thư viện'}
                    </button>
                  </div>

                  {/* Current Icon Preview Box */}
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-slate-200">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-xs ${sol.bgClass || 'bg-[#00ADEF]'}`}>
                      {renderIconPreview(sol.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 block truncate">
                        {sol.icon.startsWith('http') || sol.icon.startsWith('/') ? 'Tệp SVG tải lên' : `Lucide: ${sol.icon}`}
                      </span>
                      <input
                        type="text"
                        value={sol.icon}
                        onChange={(e) => handleUpdateSolution(sol.id, 'icon', e.target.value)}
                        placeholder="Tên icon hoặc URL SVG..."
                        className="w-full text-xs font-mono text-slate-800 bg-transparent border-none outline-none p-0 focus:ring-0 truncate"
                      />
                    </div>
                  </div>

                  {/* Quick Icon Selector Dropdown/Grid */}
                  {activeIconPickerId === sol.id && (
                    <div className="mt-2.5 p-3 rounded-xl bg-white border border-slate-300 shadow-md space-y-2.5 animate-fadeIn">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        Chọn nhanh icon từ thư viện:
                      </span>
                      <div className="grid grid-cols-4 gap-1.5 max-h-40 overflow-y-auto p-1 custom-scrollbar">
                        {ICON_LIBRARY.map((item) => {
                          const IconComp = item.icon;
                          const isSelected = sol.icon === item.name;
                          return (
                            <button
                              key={item.name}
                              type="button"
                              onClick={() => {
                                handleUpdateSolution(sol.id, 'icon', item.name);
                                setActiveIconPickerId(null);
                              }}
                              title={item.label}
                              className={`p-2 rounded-lg flex flex-col items-center justify-center gap-1 transition-all ${
                                isSelected
                                  ? 'bg-[#00ADEF] text-white shadow-xs'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                              }`}
                            >
                              <IconComp className="w-4 h-4 stroke-[1.75]" />
                              <span className="text-[8px] font-medium truncate max-w-full">
                                {item.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* SVG upload option */}
                      <div className="pt-2 border-t border-slate-100">
                        <label className="text-[10px] font-bold text-slate-600 block mb-1">
                          Hoặc tải file SVG từ máy tính:
                        </label>
                        <ImageUploaderField
                          label="Upload SVG"
                          value={sol.icon.startsWith('http') || sol.icon.startsWith('/') ? sol.icon : ''}
                          onChange={(url) => {
                            handleUpdateSolution(sol.id, 'icon', url);
                            setActiveIconPickerId(null);
                          }}
                          targetKey={`solution-icon-${sol.id}`}
                          folder="image"
                          aspectRatio="h-16"
                          recommendation="File vector SVG chuẩn"
                        />
                      </div>
                    </div>
                  )}
                </div>
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
                <ImageUploaderField
                  label={prod.name || 'Ảnh sản phẩm'}
                  badge={prod.category}
                  value={prod.image}
                  onChange={(url) => handleUpdateProduct(prod.id, 'image', url)}
                  targetKey={`bestseller-${prod.id}`}
                  folder="image"
                  aspectRatio="h-28"
                  recommendation="Ảnh sản phẩm nền trắng/trong suốt"
                />

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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CTA Button & Pop-up Ưu Đãi Đặc Biệt (2 Cột) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-red-100 text-[#D93025] flex items-center justify-center">
            <Gift className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-slate-900 text-base">
              Nút CTA Dưới Khối Sản Phẩm & Pop-up Ưu Đãi Đặc Biệt
            </h4>
            <p className="text-xs text-slate-500">
              Nút này mở Pop-up 2 khung: Khung bên trái hiển thị 4 ưu đãi đặc biệt để khách hàng chọn; Khung bên phải là form đăng ký.
            </p>
          </div>
        </div>

        {/* CTA Button Text */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
            Nội dung chữ trên nút CTA (Mặt trước Landing Page)
          </label>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <ShoppingCart className="w-4 h-4 text-[#00ADEF] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                placeholder="Xem ưu đãi và đặt hàng"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
              />
            </div>
            <div className="shrink-0 px-3 py-2 rounded-xl bg-sky-50 border border-sky-200 text-[#00ADEF] text-xs font-bold flex items-center gap-1.5">
              <span>Hành động:</span>
              <span className="font-mono bg-white px-2 py-0.5 rounded border border-sky-300 text-slate-900">
                Mở Pop-up Ưu đãi
              </span>
            </div>
          </div>
        </div>

        {/* Cấu hình Khung Bên Phải (Form Điền Thông Tin) */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00ADEF]" />
            <h5 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider">
              Cấu hình Khung Bên Phải (Form Điền Thông Tin)
            </h5>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Tiêu đề Form
              </label>
              <input
                type="text"
                value={offerModalFormTitle}
                onChange={(e) => setOfferModalFormTitle(e.target.value)}
                placeholder="Đăng ký ngay"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Đoạn văn hướng dẫn dưới tiêu đề
              </label>
              <input
                type="text"
                value={offerModalFormDesc}
                onChange={(e) => setOfferModalFormDesc(e.target.value)}
                placeholder="Quý Bác sĩ vui lòng điền thông tin bên dưới để Sota-D liên hệ hỗ trợ và giữ ưu đãi:"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-700 bg-white focus:border-[#00ADEF] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Cấu hình Khung Bên Trái (4 Thẻ Ưu Đãi Đặc Biệt) */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-[#D93025]" />
              <h5 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider">
                Cấu hình Khung Bên Trái (4 Thẻ Ưu Đãi Cho Bác Sĩ Tick Chọn)
              </h5>
            </div>
            <span className="text-[11px] font-mono text-slate-500">
              {specialOffers.length} Thẻ ưu đãi
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {specialOffers.map((offer, index) => (
              <div 
                key={offer.id || index + 1}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-4 hover:border-slate-300 transition-all"
              >
                {/* Header card index & badge preview */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-red-100 text-[#D93025] font-bold flex items-center justify-center text-xs font-mono">
                      0{index + 1}
                    </span>
                    <strong className="text-xs font-heading text-slate-900">
                      {offer.title || `Ưu đãi #${index + 1}`}
                    </strong>
                  </div>
                  {offer.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#D93025] text-white shadow-xs">
                      {offer.badge}
                    </span>
                  )}
                </div>

                {/* 1. Hình ảnh ưu đãi */}
                <ImageUploaderField
                  label="Hình ảnh minh họa ưu đãi"
                  badge={offer.badge || 'PROMO'}
                  value={offer.headerImage}
                  onChange={(url) => handleUpdateOffer(offer.id, 'headerImage', url)}
                  targetKey={`special-offer-${offer.id}`}
                  folder="images"
                  aspectRatio="h-32"
                  recommendation="Khuyến nghị tỷ lệ 16:9 hoặc 2:1, nền sáng"
                />

                {/* 2. Nhãn ưu đãi (Badge đỏ) */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Nhãn ưu đãi (Ví dụ: TẶNG 2 TUÝP, TIẾT KIỆM 20%, GIẢM TRỰC TIẾP)
                  </label>
                  <input
                    type="text"
                    value={offer.badge}
                    onChange={(e) => handleUpdateOffer(offer.id, 'badge', e.target.value)}
                    placeholder="TẶNG 2 TUÝP"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-[#D93025] bg-white focus:border-[#D93025] outline-none uppercase"
                  />
                </div>

                {/* 3. Tên ưu đãi */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Tên ưu đãi (Ví dụ: Mua 7 Tặng 2, Mua 4 Tặng 1, Trợ Giá Trực Tiếp)
                  </label>
                  <input
                    type="text"
                    value={offer.title}
                    onChange={(e) => handleUpdateOffer(offer.id, 'title', e.target.value)}
                    placeholder="Mua 7 Tặng 2"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-extrabold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
                  />
                </div>

                {/* 4. Sản phẩm ưu đãi */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Sản phẩm ưu đãi (Ví dụ: Dòng Composite BeautiFil, Keo Dán BeautiBond Xtreme...)
                  </label>
                  <input
                    type="text"
                    value={offer.subtitle}
                    onChange={(e) => handleUpdateOffer(offer.id, 'subtitle', e.target.value)}
                    placeholder="Dòng Composite BeautiFil"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-700 bg-white focus:border-[#00ADEF] outline-none"
                  />
                </div>

                {/* 5. Thông tin ưu đãi */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Thông tin ưu đãi (Mô tả chi tiết áp dụng)
                  </label>
                  <textarea
                    rows={2}
                    value={offer.desc}
                    onChange={(e) => handleUpdateOffer(offer.id, 'desc', e.target.value)}
                    placeholder="Áp dụng cho BeautiFil Injectable X/X SL hoặc BeautiFil II. Giảm sâu chi phí vốn trên mỗi ca phục hình."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-600 bg-white focus:border-[#00ADEF] outline-none leading-relaxed resize-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Preview Popup Display */}
        {showLivePreview && (
          <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#00ADEF]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Xem trước giao diện Pop-up khi Bác sĩ bấm nút CTA:
                </span>
              </div>
              <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                Live Preview Pop-up
              </span>
            </div>

            <div className="bg-[#F3F6F8] rounded-2xl p-4 sm:p-6 text-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-6 shadow-inner">
              {/* Left Column Preview (4 Offers) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex bg-gradient-to-r from-[#D93025] to-[#f44336] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full items-center gap-1.5 shadow-xs">
                  <Gift className="w-3.5 h-3.5" />
                  ƯU ĐÃI ĐẶC BIỆT
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specialOffers.map((offer, idx) => (
                    <div 
                      key={offer.id || idx}
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col shadow-xs"
                    >
                      <div className="relative aspect-[16/9] w-full bg-slate-100 flex items-center justify-center">
                        {offer.headerImage ? (
                          <img src={offer.headerImage} alt={offer.title} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-[10px] font-mono text-slate-400">Chưa có ảnh</span>
                        )}
                        <div className="absolute top-2 right-2 w-5 h-5 rounded bg-[#00ADEF] flex items-center justify-center text-white">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        {offer.badge && (
                          <div className="absolute -bottom-2.5 left-3 bg-[#D93025] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded shadow-xs">
                            {offer.badge}
                          </div>
                        )}
                      </div>
                      <div className="p-3 pt-4 flex flex-col flex-1">
                        <strong className="text-xs text-slate-900 block truncate">{offer.title}</strong>
                        <span className="text-[11px] text-slate-600 block truncate mb-1">{offer.subtitle}</span>
                        <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">{offer.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column Preview (Form) */}
              <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-heading font-extrabold text-base text-slate-900 mb-1">
                    {offerModalFormTitle || 'Đăng ký ngay'}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {offerModalFormDesc || 'Quý Bác sĩ vui lòng điền thông tin bên dưới để Sota-D liên hệ hỗ trợ và giữ ưu đãi:'}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-400">
                    Tên Bác sĩ * (VD: BS. Nguyễn Văn A)
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-400">
                    Số điện thoại * (Để Sota-D liên hệ)
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-400">
                    Phòng khám / Nơi công tác *
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-400">
                    Địa chỉ phòng khám *
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full py-2.5 rounded-xl bg-[#00ADEF] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/20"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Đăng ký nhận ưu đãi</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
