import React from 'react';
import { 
  Bold, Plus, Trash2, Upload, Microscope, Umbrella, ShieldCheck, Clock, Shield, 
  Eye, CheckCircle2, ArrowRight, Sparkles, Zap, Layers, Activity, Droplet, RotateCcw 
} from 'lucide-react';
import { ProductItem, DiagramConfig, FeatureItem, applyFormat } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

export const DEFAULT_FEATURE_ICONS = [
  { value: 'Microscope', label: 'Microscope (Kính hiển vi / Siêu mỏng)' },
  { value: 'Umbrella', label: 'Umbrella (Kỵ nước / Kháng ẩm HEMA-Free)' },
  { value: 'ShieldCheck', label: 'ShieldCheck (Bảo vệ kép / Kháng rò rỉ)' },
  { value: 'Clock', label: 'Clock (Thời gian / Dọn dư nhanh)' },
  { value: 'Shield', label: 'Shield (Lá chắn / Kháng axit S-PRG)' },
  { value: 'Sparkles', label: 'Sparkles (Thẩm mỹ / Độ bóng cao)' },
  { value: 'Zap', label: 'Zap (Lực dán mạnh / Năng lượng)' },
  { value: 'Layers', label: 'Layers (Lớp màng / Khít sát)' },
  { value: 'Activity', label: 'Activity (Hoạt tính sinh học)' },
  { value: 'Droplet', label: 'Droplet (Độ loang thixotropic)' },
  { value: 'CheckCircle2', label: 'CheckCircle2 (Tiêu chuẩn chất lượng)' },
];

export const renderFeatureIcon = (
  iconName?: string,
  iconSvg?: string,
  className = "w-5 h-5"
) => {
  if (iconSvg) {
    if (iconSvg.startsWith('<svg')) {
      return (
        <span
          className={`inline-flex items-center justify-center [&>svg]:w-full [&>svg]:h-full ${className}`}
          dangerouslySetInnerHTML={{ __html: iconSvg }}
        />
      );
    }
    return <img src={iconSvg} alt="Custom SVG" className={`${className} object-contain`} />;
  }

  switch (iconName) {
    case 'Microscope': return <Microscope className={className} />;
    case 'Umbrella': return <Umbrella className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'Droplet': return <Droplet className={className} />;
    case 'CheckCircle2':
    default:
      return <CheckCircle2 className={className} />;
  }
};

const handleSvgUpload = (file: File, callback: (svgStr: string) => void) => {
  if (!file.name.toLowerCase().endsWith('.svg') && file.type !== 'image/svg+xml') {
    alert('Vui lòng chọn tệp tin định dạng SVG (.svg)!');
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const result = e.target?.result as string;
    if (result) {
      callback(result);
    }
  };
  reader.readAsDataURL(file);
};

interface Section3StepsEditorProps {
  badge?: string;
  setBadge?: React.Dispatch<React.SetStateAction<string>>;
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  product1: ProductItem;
  setProduct1: React.Dispatch<React.SetStateAction<ProductItem>>;
  product2: ProductItem;
  setProduct2: React.Dispatch<React.SetStateAction<ProductItem>>;
  diagram: DiagramConfig;
  setDiagram: React.Dispatch<React.SetStateAction<DiagramConfig>>;
  ctaText: string;
  setCtaText: React.Dispatch<React.SetStateAction<string>>;
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

export const Section3StepsEditor: React.FC<Section3StepsEditorProps> = ({
  headline,
  setHeadline,
  description,
  setDescription,
  product1,
  setProduct1,
  product2,
  setProduct2,
  diagram,
  setDiagram,
  ctaText,
  setCtaText,
  formTitle,
  setFormTitle,
  formDesc,
  setFormDesc,
  formExtraHtml,
  setFormExtraHtml,
  redirectThanks,
  setRedirectThanks,
  targetUrl,
  setTargetUrl,
  resourceTitle,
  setResourceTitle,
  onUploadImage,
  isUploadingImage,
  uploadingTarget
}) => {
  // Product 1 Feature handlers
  const handleAddFeature1 = () => {
    setProduct1({
      ...product1,
      features: [
        ...product1.features,
        {
          iconName: 'Microscope',
          title: 'Tính năng kỹ thuật mới',
          description: 'Mô tả chi tiết ưu điểm lâm sàng.'
        }
      ]
    });
  };

  const handleDeleteFeature1 = (index: number) => {
    setProduct1({
      ...product1,
      features: product1.features.filter((_, i) => i !== index)
    });
  };

  const handleUpdateFeature1 = (index: number, field: keyof FeatureItem, val: string | undefined) => {
    const updated = [...product1.features];
    if (val === undefined) {
      delete updated[index][field];
    } else {
      updated[index] = { ...updated[index], [field]: val };
    }
    setProduct1({ ...product1, features: updated });
  };

  // Product 2 Feature handlers
  const handleAddFeature2 = () => {
    setProduct2({
      ...product2,
      features: [
        ...product2.features,
        {
          iconName: 'Shield',
          title: 'Tính năng kỹ thuật mới',
          description: 'Mô tả chi tiết ưu điểm lâm sàng.'
        }
      ]
    });
  };

  const handleDeleteFeature2 = (index: number) => {
    setProduct2({
      ...product2,
      features: product2.features.filter((_, i) => i !== index)
    });
  };

  const handleUpdateFeature2 = (index: number, field: keyof FeatureItem, val: string | undefined) => {
    const updated = [...product2.features];
    if (val === undefined) {
      delete updated[index][field];
    } else {
      updated[index] = { ...updated[index], [field]: val };
    }
    setProduct2({ ...product2, features: updated });
  };

  // Diagram Points handlers
  const handleAddDiagramPoint = () => {
    setDiagram({
      ...diagram,
      points: [...diagram.points, '<strong>Điểm ưu thế mới:</strong> Mô tả chi tiết...']
    });
  };

  const handleDeleteDiagramPoint = (index: number) => {
    setDiagram({
      ...diagram,
      points: diagram.points.filter((_, i) => i !== index)
    });
  };

  const handleUpdateDiagramPoint = (index: number, val: string) => {
    const updated = [...diagram.points];
    updated[index] = val;
    setDiagram({ ...diagram, points: updated });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg">
            03
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-xl text-slate-900">
              Section 3: The Gold Standard (Tiêu chuẩn vàng mới)
            </h2>
            <p className="text-slate-500 text-sm">
              Bộ đôi vũ khí BBX & BeautiLink SA, danh sách tính năng và sơ đồ khoảng ghép 24µm.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Tiêu đề chính Section
              </label>
              <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => applyFormat('strong', setHeadline)}
                  className="px-2 py-0.5 rounded text-xs font-bold text-slate-700 hover:bg-white transition-colors"
                >
                  <Bold className="w-3.5 h-3.5 inline mr-0.5" /> Bold
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('cyan', setHeadline)}
                  className="px-2 py-0.5 rounded text-xs font-bold text-[#00ADEF] hover:bg-white transition-colors"
                >
                  Cyan
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
                Xem trước Tiêu đề:
              </span>
              <div 
                className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 leading-snug"
                dangerouslySetInnerHTML={{ __html: headline || '<span class="text-slate-400 italic text-sm">Chưa nhập tiêu đề...</span>' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Mô tả ngắn
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-amber-500 text-sm outline-none"
            />
            {description && (
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 mt-2 text-xs text-slate-600">
                <span className="text-[10.5px] font-mono text-slate-400 block mb-1 uppercase font-bold">Xem trước mô tả:</span>
                <div>{description}</div>
              </div>
            )}
          </div>

          {/* Cấu hình Nút CTA & Form Popup */}
          <CtaFormConfigEditor
            label="Nút CTA Section 3 (Tiêu chuẩn vàng)"
            ctaText={ctaText}
            onChangeCtaText={setCtaText}
            formTitle={formTitle || ''}
            onChangeFormTitle={(val) => setFormTitle && setFormTitle(val)}
            formDesc={formDesc || ''}
            onChangeFormDesc={(val) => setFormDesc && setFormDesc(val)}
            formExtraHtml={formExtraHtml || ''}
            onChangeFormExtraHtml={(val) => setFormExtraHtml && setFormExtraHtml(val)}
            redirectThanks={redirectThanks || false}
            onChangeRedirectThanks={(val) => setRedirectThanks && setRedirectThanks(val)}
            targetUrl={targetUrl || ''}
            onChangeTargetUrl={(val) => setTargetUrl && setTargetUrl(val)}
            resourceTitle={resourceTitle || ''}
            onChangeResourceTitle={(val) => setResourceTitle && setResourceTitle(val)}
          />
        </div>
      </div>

      {/* Product 1: BeautiBond Xtreme */}
      <div className="bg-white rounded-2xl border border-blue-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold text-[#00ADEF] uppercase tracking-wider">
              Sản phẩm 1
            </span>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              {product1.title}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tên sản phẩm
            </label>
            <input
              type="text"
              value={product1.title}
              onChange={(e) => setProduct1({ ...product1, title: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Phân loại / Subtitle
            </label>
            <input
              type="text"
              value={product1.subtitle}
              onChange={(e) => setProduct1({ ...product1, subtitle: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
        </div>

        {/* Product 1 Image */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-20 h-20 bg-white rounded-lg border border-slate-200 p-1 overflow-hidden shrink-0">
            {product1.image ? (
              <img src={product1.image} alt={product1.title} className="w-full h-full object-contain" />
            ) : null}
          </div>
          <div className="flex-1 w-full space-y-2">
            <input
              type="text"
              value={product1.image}
              onChange={(e) => setProduct1({ ...product1, image: e.target.value })}
              className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono outline-none"
              placeholder="URL hình ảnh..."
            />
            <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold cursor-pointer shadow-sm">
              <Upload className="w-3.5 h-3.5 text-[#00ADEF]" />
              <span>{isUploadingImage && uploadingTarget === 'p1' ? 'Đang tải...' : 'Upload ảnh'}</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) onUploadImage(f, 'p1', (url) => setProduct1({ ...product1, image: url }));
                }}
              />
            </label>
          </div>
        </div>

        {/* Features of Product 1 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Các tính năng cốt lõi ({product1.features.length})
              </label>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Mỗi tính năng gồm 3 thành phần: Biểu tượng (Icon/SVG), Tính năng kỹ thuật và Ưu điểm lâm sàng.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddFeature1}
              className="px-3 py-1.5 rounded-xl bg-sky-50 text-[#00ADEF] hover:bg-sky-100 text-xs font-bold inline-flex items-center gap-1.5 transition-colors border border-sky-200"
            >
              <Plus className="w-3.5 h-3.5" /> Thêm tính năng
            </button>
          </div>

          <div className="space-y-4">
            {product1.features.map((feat, fIdx) => (
              <div 
                key={fIdx} 
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-sky-300 transition-all space-y-4 shadow-xs"
              >
                {/* Header card */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-[#00ADEF] font-bold text-xs flex items-center justify-center">
                      {fIdx + 1}
                    </span>
                    <span className="font-bold text-sm text-slate-900 truncate max-w-xs sm:max-w-md">
                      {feat.title || `Tính năng #${fIdx + 1}`}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteFeature1(fIdx)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 text-xs font-medium transition-colors"
                    title="Xóa tính năng này"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Xóa</span>
                  </button>
                </div>

                {/* 3 Thành phần của tính năng */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Thành phần 1: Biểu tượng (Icon) */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#00ADEF]" />
                        1. Biểu tượng (Icon)
                      </label>
                      {feat.iconSvg ? (
                        <span className="text-[10.5px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                          Đang dùng file SVG tải lên
                        </span>
                      ) : (
                        <span className="text-[10.5px] text-slate-400 font-mono">
                          Mặc định: {feat.iconName || 'Microscope'}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      {/* Icon preview box */}
                      <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 shadow-sm flex items-center justify-center shrink-0 p-2 text-[#00ADEF]">
                        {renderFeatureIcon(feat.iconName, feat.iconSvg, "w-6 h-6")}
                      </div>

                      <div className="flex-1 w-full flex flex-wrap items-center gap-2">
                        {/* Default icon dropdown */}
                        <select
                          value={feat.iconSvg ? 'custom-svg' : (feat.iconName || 'Microscope')}
                          onChange={(e) => {
                            if (e.target.value !== 'custom-svg') {
                              handleUpdateFeature1(fIdx, 'iconSvg', undefined);
                              handleUpdateFeature1(fIdx, 'iconName', e.target.value);
                            }
                          }}
                          className="flex-1 min-w-[200px] px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs font-medium outline-none focus:border-[#00ADEF]"
                        >
                          {feat.iconSvg && (
                            <option value="custom-svg">★ File SVG tùy chọn đang dùng</option>
                          )}
                          <optgroup label="Icon mặc định hệ thống">
                            {DEFAULT_FEATURE_ICONS.map((ic) => (
                              <option key={ic.value} value={ic.value}>
                                {ic.label}
                              </option>
                            ))}
                          </optgroup>
                        </select>

                        {/* Upload SVG button */}
                        <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-300 hover:border-[#00ADEF] hover:bg-sky-50/50 text-slate-700 text-xs font-bold cursor-pointer transition-colors shadow-sm">
                          <Upload className="w-3.5 h-3.5 text-[#00ADEF]" />
                          <span>Tải file .SVG</span>
                          <input
                            type="file"
                            accept=".svg,image/svg+xml"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                handleSvgUpload(file, (svgData) => {
                                  handleUpdateFeature1(fIdx, 'iconSvg', svgData);
                                });
                              }
                            }}
                          />
                        </label>

                        {/* Revert custom SVG */}
                        {feat.iconSvg && (
                          <button
                            type="button"
                            onClick={() => handleUpdateFeature1(fIdx, 'iconSvg', undefined)}
                            className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium transition-colors"
                            title="Quay lại dùng icon mặc định"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Về mặc định</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Thành phần 2: Tính năng kỹ thuật */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      2. Tính năng kỹ thuật
                    </label>
                    <input
                      type="text"
                      value={feat.title}
                      onChange={(e) => handleUpdateFeature1(fIdx, 'title', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-bold outline-none focus:border-[#00ADEF] focus:ring-2 focus:ring-sky-500/10"
                      placeholder="Ví dụ: Độ dày màng siêu mỏng (chỉ 5µm)..."
                    />
                  </div>

                  {/* Thành phần 3: Mô tả chi tiết ưu điểm lâm sàng */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      3. Mô tả chi tiết ưu điểm lâm sàng
                    </label>
                    <textarea
                      rows={2}
                      value={feat.description}
                      onChange={(e) => handleUpdateFeature1(fIdx, 'description', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm font-medium outline-none focus:border-[#00ADEF] focus:ring-2 focus:ring-sky-500/10 leading-relaxed font-body"
                      placeholder="Ví dụ: Khoá chặt vi kẽ ống ngà, không lo cộm khớp, ngăn ngừa đổi màu đường viền phục hình..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product 2: BeautiLink SA */}
      <div className="bg-white rounded-2xl border border-red-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
              Sản phẩm 2
            </span>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              {product2.title}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tên sản phẩm
            </label>
            <input
              type="text"
              value={product2.title}
              onChange={(e) => setProduct2({ ...product2, title: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Phân loại / Subtitle
            </label>
            <input
              type="text"
              value={product2.subtitle}
              onChange={(e) => setProduct2({ ...product2, subtitle: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
        </div>

        {/* Product 2 Image */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-20 h-20 bg-white rounded-lg border border-slate-200 p-1 overflow-hidden shrink-0">
            {product2.image ? (
              <img src={product2.image} alt={product2.title} className="w-full h-full object-contain" />
            ) : null}
          </div>
          <div className="flex-1 w-full space-y-2">
            <input
              type="text"
              value={product2.image}
              onChange={(e) => setProduct2({ ...product2, image: e.target.value })}
              className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono outline-none"
              placeholder="URL hình ảnh..."
            />
            <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold cursor-pointer shadow-sm">
              <Upload className="w-3.5 h-3.5 text-red-600" />
              <span>{isUploadingImage && uploadingTarget === 'p2' ? 'Đang tải...' : 'Upload ảnh'}</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) onUploadImage(f, 'p2', (url) => setProduct2({ ...product2, image: url }));
                }}
              />
            </label>
          </div>
        </div>

        {/* Features of Product 2 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Các tính năng cốt lõi ({product2.features.length})
              </label>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Mỗi tính năng gồm 3 thành phần: Biểu tượng (Icon/SVG), Tính năng kỹ thuật và Ưu điểm lâm sàng.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddFeature2}
              className="px-3 py-1.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 text-xs font-bold inline-flex items-center gap-1.5 transition-colors border border-red-200"
            >
              <Plus className="w-3.5 h-3.5" /> Thêm tính năng
            </button>
          </div>

          <div className="space-y-4">
            {product2.features.map((feat, fIdx) => (
              <div 
                key={fIdx} 
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-red-300 transition-all space-y-4 shadow-xs"
              >
                {/* Header card */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center">
                      {fIdx + 1}
                    </span>
                    <span className="font-bold text-sm text-slate-900 truncate max-w-xs sm:max-w-md">
                      {feat.title || `Tính năng #${fIdx + 1}`}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteFeature2(fIdx)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 text-xs font-medium transition-colors"
                    title="Xóa tính năng này"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Xóa</span>
                  </button>
                </div>

                {/* 3 Thành phần của tính năng */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Thành phần 1: Biểu tượng (Icon) */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        1. Biểu tượng (Icon)
                      </label>
                      {feat.iconSvg ? (
                        <span className="text-[10.5px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                          Đang dùng file SVG tải lên
                        </span>
                      ) : (
                        <span className="text-[10.5px] text-slate-400 font-mono">
                          Mặc định: {feat.iconName || 'Shield'}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      {/* Icon preview box */}
                      <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 shadow-sm flex items-center justify-center shrink-0 p-2 text-red-600">
                        {renderFeatureIcon(feat.iconName, feat.iconSvg, "w-6 h-6")}
                      </div>

                      <div className="flex-1 w-full flex flex-wrap items-center gap-2">
                        {/* Default icon dropdown */}
                        <select
                          value={feat.iconSvg ? 'custom-svg' : (feat.iconName || 'Shield')}
                          onChange={(e) => {
                            if (e.target.value !== 'custom-svg') {
                              handleUpdateFeature2(fIdx, 'iconSvg', undefined);
                              handleUpdateFeature2(fIdx, 'iconName', e.target.value);
                            }
                          }}
                          className="flex-1 min-w-[200px] px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs font-medium outline-none focus:border-red-500"
                        >
                          {feat.iconSvg && (
                            <option value="custom-svg">★ File SVG tùy chọn đang dùng</option>
                          )}
                          <optgroup label="Icon mặc định hệ thống">
                            {DEFAULT_FEATURE_ICONS.map((ic) => (
                              <option key={ic.value} value={ic.value}>
                                {ic.label}
                              </option>
                            ))}
                          </optgroup>
                        </select>

                        {/* Upload SVG button */}
                        <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-300 hover:border-red-400 hover:bg-red-50/50 text-slate-700 text-xs font-bold cursor-pointer transition-colors shadow-sm">
                          <Upload className="w-3.5 h-3.5 text-red-600" />
                          <span>Tải file .SVG</span>
                          <input
                            type="file"
                            accept=".svg,image/svg+xml"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                handleSvgUpload(file, (svgData) => {
                                  handleUpdateFeature2(fIdx, 'iconSvg', svgData);
                                });
                              }
                            }}
                          />
                        </label>

                        {/* Revert custom SVG */}
                        {feat.iconSvg && (
                          <button
                            type="button"
                            onClick={() => handleUpdateFeature2(fIdx, 'iconSvg', undefined)}
                            className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium transition-colors"
                            title="Quay lại dùng icon mặc định"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Về mặc định</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Thành phần 2: Tính năng kỹ thuật */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      2. Tính năng kỹ thuật
                    </label>
                    <input
                      type="text"
                      value={feat.title}
                      onChange={(e) => handleUpdateFeature2(fIdx, 'title', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-bold outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
                      placeholder="Ví dụ: Màng phim siêu mỏng 14µm..."
                    />
                  </div>

                  {/* Thành phần 3: Mô tả chi tiết ưu điểm lâm sàng */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      3. Mô tả chi tiết ưu điểm lâm sàng
                    </label>
                    <textarea
                      rows={2}
                      value={feat.description}
                      onChange={(e) => handleUpdateFeature2(fIdx, 'description', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm font-medium outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 leading-relaxed font-body"
                      placeholder="Ví dụ: Chảy loang thixotropic tối ưu tạo đường hoàn tất vô hình..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The 24um Diagram Editor */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <h3 className="font-heading font-bold text-lg text-slate-900 mb-4 pb-3 border-b border-slate-100">
          Sơ đồ cấu trúc liên kết 24µm khít sát
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tiêu đề sơ đồ
            </label>
            <input
              type="text"
              value={diagram.title}
              onChange={(e) => setDiagram({ ...diagram, title: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold font-mono outline-none"
            />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="w-24 h-24 bg-white rounded-lg border border-slate-200 p-1 shrink-0 overflow-hidden">
              {diagram.image ? (
                <img src={diagram.image} alt="Diagram" className="w-full h-full object-contain" />
              ) : null}
            </div>
            <div className="flex-1 w-full space-y-2">
              <input
                type="text"
                value={diagram.image}
                onChange={(e) => setDiagram({ ...diagram, image: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono outline-none"
              />
              <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold cursor-pointer shadow-sm">
                <Upload className="w-3.5 h-3.5 text-[#00ADEF]" />
                <span>Upload sơ đồ mới</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) onUploadImage(f, 'diagram', (url) => setDiagram({ ...diagram, image: url }));
                  }}
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Đoạn văn phân tích kỹ thuật
            </label>
            <textarea
              rows={3}
              value={diagram.description}
              onChange={(e) => setDiagram({ ...diagram, description: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-700 outline-none font-mono"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                3 Điểm cam kết lâm sàng
              </label>
              <button
                type="button"
                onClick={handleAddDiagramPoint}
                className="text-xs font-bold text-[#00ADEF] hover:underline"
              >
                + Thêm điểm
              </button>
            </div>
            <div className="space-y-2">
              {diagram.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={pt}
                    onChange={(e) => handleUpdateDiagramPoint(pIdx, e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-800 outline-none font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteDiagramPoint(pIdx)}
                    className="text-slate-400 hover:text-red-500 p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. XEM TRƯỚC THÀNH PHẦN TIÊU CHUẨN VÀNG (LIVE COMPONENT PREVIEW) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Xem trước giao diện Tiêu chuẩn vàng (Live Component Preview)
              </h3>
              <p className="text-slate-500 text-xs">
                Mô phỏng hai thẻ sản phẩm BBX & BeautiLink SA và sơ đồ khoảng ghép 24µm.
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Trực quan tức thì
          </span>
        </div>

        {/* Mock Gold Standard Container */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div
              className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 leading-snug"
              dangerouslySetInnerHTML={{ __html: headline || '' }}
            />
            {description && <p className="text-slate-600 text-xs sm:text-sm">{description}</p>}
          </div>

          {/* 2 Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1: BBX */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-[#00ADEF] font-mono text-[11px] font-bold">
                  {product1.step || 'BƯỚC 1'}
                </span>
                <span className="text-xs font-bold text-slate-500">{product1.role}</span>
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900">{product1.name || product1.title}</h4>
              <div className="h-40 rounded-xl bg-slate-50 flex items-center justify-center p-3 border border-slate-100 overflow-hidden">
                {product1.image ? (
                  <img src={product1.image} alt={product1.name || product1.title} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xs text-slate-400">Chưa có ảnh</span>
                )}
              </div>
              <ul className="space-y-2 pt-1">
                {product1.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="shrink-0 mt-0.5 text-[#00ADEF]">
                      {renderFeatureIcon(f.iconName, f.iconSvg, "w-4 h-4")}
                    </span>
                    <span><strong className="text-slate-900 font-semibold">{f.title}:</strong> {f.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 2: BeautiLink SA */}
            <div className="rounded-2xl border border-red-200 bg-white p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-red-50 text-red-600 font-mono text-[11px] font-bold">
                  {product2.step || 'BƯỚC 2'}
                </span>
                <span className="text-xs font-bold text-slate-500">{product2.role}</span>
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900">{product2.name || product2.title}</h4>
              <div className="h-40 rounded-xl bg-slate-50 flex items-center justify-center p-3 border border-slate-100 overflow-hidden">
                {product2.image ? (
                  <img src={product2.image} alt={product2.name || product2.title} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xs text-slate-400">Chưa có ảnh</span>
                )}
              </div>
              <ul className="space-y-2 pt-1">
                {product2.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="shrink-0 mt-0.5 text-red-500">
                      {renderFeatureIcon(f.iconName, f.iconSvg, "w-4 h-4")}
                    </span>
                    <span><strong className="text-slate-900 font-semibold">{f.title}:</strong> {f.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Diagram Preview */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs space-y-2">
            <div className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ADEF]"></span>
              <span>Sơ đồ khoảng ghép: {diagram.title}</span>
            </div>
            <p className="text-slate-500 text-[11px]">{diagram.description}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {diagram.points?.map((pt, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200">
                  ✓ {pt}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
