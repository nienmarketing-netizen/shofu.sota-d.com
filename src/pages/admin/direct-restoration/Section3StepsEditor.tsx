import React from 'react';
import { 
  Plus, 
  Trash2, 
  Upload, 
  RefreshCw, 
  Info, 
  ArrowRight,
  Shield, 
  Target, 
  Layers, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { StepItem, applyFormat } from './types';

interface Section3StepsEditorProps {
  stepsBadge: string;
  setStepsBadge: React.Dispatch<React.SetStateAction<string>>;
  stepsHeadline: string;
  setStepsHeadline: React.Dispatch<React.SetStateAction<string>>;
  stepsDesc: string;
  setStepsDesc: React.Dispatch<React.SetStateAction<string>>;
  stepsCtaText: string;
  setStepsCtaText: React.Dispatch<React.SetStateAction<string>>;
  steps: StepItem[];
  handleUpdateStep: (index: number, field: keyof StepItem, val: any) => void;
  handleAddStepFeature: (stepIndex: number) => void;
  handleDeleteStepFeature: (stepIndex: number, featureIndex: number) => void;
  handleUpdateStepFeature: (
    stepIndex: number,
    featureIndex: number,
    field: 'title' | 'description' | 'iconName',
    val: string
  ) => void;
  handleUploadStepFeatureSvg: (file: File, stepIndex: number, featureIndex: number) => void;
  applyStepDescFormat: (stepIdx: number, tag: 'strong' | 'cyan' | 'red' | 'u') => void;
  uploadingTarget: string;
  handleUploadImageFile: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
}

export const Section3StepsEditor: React.FC<Section3StepsEditorProps> = ({
  stepsBadge,
  setStepsBadge,
  stepsHeadline,
  setStepsHeadline,
  stepsDesc,
  setStepsDesc,
  stepsCtaText,
  setStepsCtaText,
  steps,
  handleUpdateStep,
  handleAddStepFeature,
  handleDeleteStepFeature,
  handleUpdateStepFeature,
  handleUploadStepFeatureSvg,
  applyStepDescFormat,
  uploadingTarget,
  handleUploadImageFile
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
      <div className="border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 font-mono text-xs font-bold mb-2">
          Section 3
        </div>
        <h2 className="font-heading font-extrabold text-2xl text-slate-900">
          Hệ sinh thái Giomer: 3 Bước phục hồi tối giản
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Quản lý huy hiệu, tiêu đề chính, mô tả, nội dung chi tiết từng bước lâm sàng (ảnh minh họa, kích thước gợi ý, đặc tính kỹ thuật) và nút CTA.
        </p>
      </div>

      {/* 1. Badge Text */}
      <div className="space-y-2">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          1. Huy hiệu Badge Section 3
        </label>
        <input
          type="text"
          value={stepsBadge}
          onChange={(e) => setStepsBadge(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-[#00ADEF] focus:ring-2 focus:ring-[#00ADEF]/10 transition-all font-medium"
        />
      </div>

      {/* 2. Headline with Formatting Helper & Live Preview */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            2. Headline (Tiêu đề chính)
          </label>
          <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
            <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
            <button
              type="button"
              onClick={() => applyFormat('strong', setStepsHeadline)}
              title="In đậm chữ đang bôi đen"
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => applyFormat('cyan', setStepsHeadline)}
              title="Tô màu xanh Shofu"
              className="px-2 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
            >
              Xanh
            </button>
            <button
              type="button"
              onClick={() => applyFormat('red', setStepsHeadline)}
              title="Tô màu đỏ Shofu"
              className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold border border-red-200 text-xs"
            >
              Đỏ
            </button>
          </div>
        </div>

        <textarea
          rows={3}
          value={stepsHeadline}
          onChange={(e) => setStepsHeadline(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:bg-white focus:border-[#00ADEF] focus:ring-2 focus:ring-[#00ADEF]/10 transition-all font-heading font-bold"
        />

        {/* Live Preview of Headline */}
        <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
            Xem trước Headline:
          </span>
          <div
            className="font-heading font-extrabold text-xl text-slate-900 leading-snug"
            dangerouslySetInnerHTML={{ __html: stepsHeadline }}
          />
        </div>
      </div>

      {/* 3. Description with Formatting Helper & Live Preview */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            3. Đoạn mô tả dẫn nhập Section 3
          </label>
          <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
            <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
            <button
              type="button"
              onClick={() => applyFormat('strong', setStepsDesc)}
              title="In đậm chữ đang bôi đen"
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => applyFormat('cyan', setStepsDesc)}
              title="Tô màu xanh Shofu"
              className="px-2 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
            >
              Xanh
            </button>
            <button
              type="button"
              onClick={() => applyFormat('u', setStepsDesc)}
              title="Gạch chân chữ đang bôi đen"
              className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
            >
              U
            </button>
          </div>
        </div>

        <textarea
          rows={3}
          value={stepsDesc}
          onChange={(e) => setStepsDesc(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:bg-white focus:border-[#00ADEF] focus:ring-2 focus:ring-[#00ADEF]/10 transition-all"
        />

        {/* Live Preview of Description */}
        <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
            Xem trước Mô tả:
          </span>
          <div
            className="text-sm text-slate-700 leading-relaxed font-body"
            dangerouslySetInnerHTML={{ __html: stepsDesc }}
          />
        </div>
      </div>

      {/* 4. Chi tiết từng bước trong 3 Bước phục hồi */}
      <div className="space-y-6 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
            4. Danh sách các bước lâm sàng ({steps.length} bước)
          </label>
          <span className="text-[11px] font-mono text-slate-400">
            Quy trình 3 bước chuẩn hóa của hệ sinh thái Giomer
          </span>
        </div>

        <div className="space-y-8">
          {steps.map((st, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 relative"
            >
              {/* Step Header Badge & Title */}
              <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#00ADEF] text-white flex items-center justify-center font-heading font-extrabold text-sm shadow-sm">
                    {st.stepNumber || i + 1}
                  </span>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                      {st.badge || `Bước ${i + 1}`}
                    </span>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      {st.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Inputs: Badge & Main Title */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-3 space-y-1">
                  <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
                    Huy hiệu bước
                  </label>
                  <input
                    type="text"
                    value={st.badge}
                    onChange={(e) => handleUpdateStep(i, 'badge', e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-sky-800"
                    placeholder={`Bước ${i + 1}`}
                  />
                </div>
                <div className="sm:col-span-9 space-y-1">
                  <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
                    Tiêu đề sản phẩm & Bước
                  </label>
                  <input
                    type="text"
                    value={st.title}
                    onChange={(e) => handleUpdateStep(i, 'title', e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                    placeholder="Tên sản phẩm & kỹ thuật bước này..."
                  />
                </div>
              </div>

              {/* Subtitle */}
              <div className="space-y-1">
                <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
                  Tiêu đề phụ (Subtitle)
                </label>
                <input
                  type="text"
                  value={st.subtitle}
                  onChange={(e) => handleUpdateStep(i, 'subtitle', e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#00ADEF]"
                  placeholder="Tiêu đề phụ diễn giải cơ chế..."
                />
              </div>

              {/* Detailed Description with Formatting Bar & Live Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
                    Mô tả chi tiết bước lâm sàng
                  </label>
                  <div className="flex items-center gap-1.5 text-xs bg-white p-1 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
                    <button
                      type="button"
                      onClick={() => applyStepDescFormat(i, 'strong')}
                      title="In đậm chữ đang bôi đen"
                      className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => applyStepDescFormat(i, 'cyan')}
                      title="Tô màu xanh Shofu"
                      className="px-1.5 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
                    >
                      Xanh
                    </button>
                    <button
                      type="button"
                      onClick={() => applyStepDescFormat(i, 'red')}
                      title="Tô màu đỏ Shofu"
                      className="px-1.5 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold border border-red-200 text-xs"
                    >
                      Đỏ
                    </button>
                    <button
                      type="button"
                      onClick={() => applyStepDescFormat(i, 'u')}
                      title="Gạch chân chữ đang bôi đen"
                      className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                    >
                      U
                    </button>
                  </div>
                </div>

                <textarea
                  rows={3}
                  value={st.description}
                  onChange={(e) => handleUpdateStep(i, 'description', e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 leading-relaxed font-body"
                  placeholder="Mô tả kỹ thuật, thành phần và lợi ích lâm sàng..."
                />

                {/* Live Preview of Description */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Xem trước mô tả:
                  </span>
                  <div
                    className="text-xs text-slate-700 leading-relaxed font-body"
                    dangerouslySetInnerHTML={{ __html: st.description }}
                  />
                </div>
              </div>

              {/* Product Image & Upload */}
              <div className="space-y-3 pt-3 border-t border-slate-200/70">
                <label className="block text-[11px] font-mono text-slate-700 font-bold uppercase tracking-wider">
                  Hình ảnh minh họa sản phẩm bước {i + 1}
                </label>

                {st.suggestedSize && (
                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold">Kích thước gợi ý:</strong> {st.suggestedSize}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-5 items-center p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-36 h-28 rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center overflow-hidden shrink-0 shadow-xs">
                    <img
                      src={st.image}
                      alt={`Bước ${i + 1} preview`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 space-y-2.5 w-full">
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block mb-1">
                        Đường dẫn file ảnh hiện tại:
                      </span>
                      <input
                        type="text"
                        value={st.image}
                        onChange={(e) => handleUpdateStep(i, 'image', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-[#00ADEF]"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <label
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#00ADEF] hover:bg-[#0095ce] text-white text-xs font-mono font-bold cursor-pointer transition-colors shadow-sm ${
                          uploadingTarget === `step-${i}` ? 'opacity-60 cursor-not-allowed' : ''
                        }`}
                      >
                        {uploadingTarget === `step-${i}` ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Upload className="w-3.5 h-3.5" />
                        )}
                        <span>
                          {uploadingTarget === `step-${i}`
                            ? 'ĐANG TẢI LÊN GITHUB...'
                            : 'Tải ảnh từ máy tính'}
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          disabled={uploadingTarget === `step-${i}`}
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleUploadImageFile(file, `step-${i}`, (url) =>
                                handleUpdateStep(i, 'image', url)
                              );
                            }
                          }}
                        />
                      </label>
                      <span className="text-[11px] text-slate-400 font-mono">
                        Tự động commit vào public/image/ trên GitHub
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features: Các đặc tính kỹ thuật / ưu điểm lâm sàng dạng Box giống Section 1 Box USPs */}
              <div className="space-y-4 pt-3 border-t border-slate-200/70">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                      Danh sách Box Đặc tính kỹ thuật & Ưu điểm ({st.features?.length || 0} box)
                    </label>
                    <span className="text-xs text-slate-500">
                      Mỗi box gồm: Icon SVG, Tiêu đề đặc tính và Đoạn mô tả chi tiết
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddStepFeature(i)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold transition-colors shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Thêm Box Đặc tính</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {st.features?.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 relative group shadow-xs"
                    >
                      <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#00ADEF] text-white flex items-center justify-center font-mono font-bold text-xs">
                            {fIdx + 1}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                            Box Đặc tính {fIdx + 1}
                          </span>
                        </div>

                        {(st.features?.length || 0) > 1 && (
                          <button
                            type="button"
                            onClick={() => handleDeleteStepFeature(i, fIdx)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-lg transition-colors"
                            title="Xóa box đặc tính này"
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
                            <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-xs text-[#00ADEF] overflow-hidden">
                              {feat.iconName?.includes('.svg') || feat.iconName?.startsWith('/') || feat.iconName?.startsWith('http') ? (
                                <img src={feat.iconName} alt="Icon" className="w-5 h-5 object-contain" />
                              ) : feat.iconName === 'Shield' ? (
                                <Shield className="w-5 h-5" />
                              ) : feat.iconName === 'Target' ? (
                                <Target className="w-5 h-5" />
                              ) : feat.iconName === 'Layers' ? (
                                <Layers className="w-5 h-5" />
                              ) : feat.iconName === 'Sparkles' ? (
                                <Sparkles className="w-5 h-5" />
                              ) : feat.iconName === 'Award' ? (
                                <Award className="w-5 h-5" />
                              ) : feat.iconName === 'ShieldCheck' ? (
                                <ShieldCheck className="w-5 h-5" />
                              ) : (
                                <Zap className="w-5 h-5" />
                              )}
                            </div>

                            {/* Select default icon or show custom */}
                            <div className="flex-1 min-w-0">
                              <select
                                value={feat.iconName?.includes('.svg') || feat.iconName?.startsWith('/') ? 'CUSTOM_SVG' : (feat.iconName || (i === 0 ? 'Zap' : i === 1 ? 'Shield' : 'Target'))}
                                onChange={(e) => {
                                  if (e.target.value !== 'CUSTOM_SVG') {
                                    handleUpdateStepFeature(i, fIdx, 'iconName', e.target.value);
                                  }
                                }}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-xs text-slate-800 font-medium truncate"
                              >
                                <option value="Zap">Zap (Tia chớp)</option>
                                <option value="Shield">Shield (Khiên bảo vệ)</option>
                                <option value="Target">Target (Hồng tâm / Độ chính xác)</option>
                                <option value="ShieldCheck">ShieldCheck (Khiên chứng nhận)</option>
                                <option value="Layers">Layers (Nhiều lớp)</option>
                                <option value="Sparkles">Sparkles (Lấp lánh / Thẩm mỹ)</option>
                                <option value="Award">Award (Giải thưởng / Chứng nhận)</option>
                                {(feat.iconName?.includes('.svg') || feat.iconName?.startsWith('/')) && (
                                  <option value="CUSTOM_SVG">SVG đã tải lên (Tùy chỉnh)</option>
                                )}
                              </select>
                            </div>
                          </div>

                          {/* Upload SVG button */}
                          <div className="flex items-center justify-between gap-2 pt-0.5">
                            <label className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-mono font-semibold cursor-pointer border border-slate-200 transition-colors ${uploadingTarget === `step-${i}-feat-${fIdx}` ? 'opacity-50 cursor-not-allowed' : ''}`}>
                              {uploadingTarget === `step-${i}-feat-${fIdx}` ? (
                                <RefreshCw className="w-3 h-3 animate-spin text-sky-600" />
                              ) : (
                                <Upload className="w-3 h-3 text-slate-600" />
                              )}
                              <span>{uploadingTarget === `step-${i}-feat-${fIdx}` ? 'Đang tải...' : 'Tải lên SVG'}</span>
                              <input
                                type="file"
                                accept=".svg,image/svg+xml"
                                disabled={uploadingTarget === `step-${i}-feat-${fIdx}`}
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    handleUploadStepFeatureSvg(file, i, fIdx);
                                  }
                                }}
                              />
                            </label>

                            {(feat.iconName?.includes('.svg') || feat.iconName?.startsWith('/')) && (
                              <button
                                type="button"
                                onClick={() => handleUpdateStepFeature(i, fIdx, 'iconName', i === 0 ? 'Zap' : i === 1 ? 'Shield' : 'Target')}
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
                            Tiêu đề đặc tính
                          </label>
                          <input
                            type="text"
                            value={feat.title}
                            onChange={(e) =>
                              handleUpdateStepFeature(i, fIdx, 'title', e.target.value)
                            }
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                            placeholder="Tiêu đề đặc tính kỹ thuật..."
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
                          value={feat.description}
                          onChange={(e) =>
                            handleUpdateStepFeature(i, fIdx, 'description', e.target.value)
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 leading-relaxed font-body"
                          placeholder="Diễn giải chi tiết ưu điểm lâm sàng..."
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Section 3 CTA Button */}
      <div className="space-y-2 pt-4 border-t border-slate-100">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          5. Text nút CTA Button Section 3
        </label>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <input
            type="text"
            value={stepsCtaText}
            onChange={(e) => setStepsCtaText(e.target.value)}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-mono font-bold"
          />
          <div className="px-6 py-3.5 rounded-full bg-slate-900 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
            <span>{stepsCtaText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/80" />
          </div>
        </div>
      </div>
    </div>
  );
};
