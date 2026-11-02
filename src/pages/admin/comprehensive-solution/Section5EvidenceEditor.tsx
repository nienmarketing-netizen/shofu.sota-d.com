import React, { useState } from 'react';
import { 
  Microscope, 
  Plus, 
  Trash2, 
  Eye, 
  Quote, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  Sliders, 
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { 
  ScientificPillarItem, 
  TestimonialItem, 
  KeyMetricItem,
  applyFormat 
} from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section5EvidenceEditorProps {
  // Headlines & Intro
  evidenceHeadline: string;
  setEvidenceHeadline: React.Dispatch<React.SetStateAction<string>>;
  evidenceSubheadline: string;
  setEvidenceSubheadline: React.Dispatch<React.SetStateAction<string>>;

  // 4 Key Metrics / Lâm sàng
  keyStats?: KeyMetricItem[];
  setKeyStats?: React.Dispatch<React.SetStateAction<KeyMetricItem[]>>;

  // 6 Scientific Pillars
  scientificPillars: ScientificPillarItem[];
  setScientificPillars: React.Dispatch<React.SetStateAction<ScientificPillarItem[]>>;

  // Testimonials
  testimonialsHeadline: string;
  setTestimonialsHeadline: React.Dispatch<React.SetStateAction<string>>;
  testimonialsRow1: TestimonialItem[];
  setTestimonialsRow1: React.Dispatch<React.SetStateAction<TestimonialItem[]>>;
  testimonialsRow2: TestimonialItem[];
  setTestimonialsRow2: React.Dispatch<React.SetStateAction<TestimonialItem[]>>;

  // CTA & Form
  evidenceCtaText: string;
  setEvidenceCtaText: React.Dispatch<React.SetStateAction<string>>;
  evidenceFormTitle?: string;
  setEvidenceFormTitle?: React.Dispatch<React.SetStateAction<string>>;
  evidenceFormDesc?: string;
  setEvidenceFormDesc?: React.Dispatch<React.SetStateAction<string>>;
  evidenceFormExtraHtml?: string;
  setEvidenceFormExtraHtml?: React.Dispatch<React.SetStateAction<string>>;
  evidenceRedirectThanks?: boolean;
  setEvidenceRedirectThanks?: React.Dispatch<React.SetStateAction<boolean>>;
  evidenceTargetUrl?: string;
  setEvidenceTargetUrl?: React.Dispatch<React.SetStateAction<string>>;
  evidenceResourceTitle?: string;
  setEvidenceResourceTitle?: React.Dispatch<React.SetStateAction<string>>;
}

export const Section5EvidenceEditor: React.FC<Section5EvidenceEditorProps> = ({
  evidenceHeadline,
  setEvidenceHeadline,
  evidenceSubheadline,
  setEvidenceSubheadline,
  keyStats,
  setKeyStats,
  scientificPillars,
  setScientificPillars,
  testimonialsHeadline,
  setTestimonialsHeadline,
  testimonialsRow1,
  setTestimonialsRow1,
  testimonialsRow2,
  setTestimonialsRow2,
  evidenceCtaText,
  setEvidenceCtaText,
  evidenceFormTitle,
  setEvidenceFormTitle,
  evidenceFormDesc,
  setEvidenceFormDesc,
  evidenceFormExtraHtml,
  setEvidenceFormExtraHtml,
  evidenceRedirectThanks,
  setEvidenceRedirectThanks,
  evidenceTargetUrl,
  setEvidenceTargetUrl,
  evidenceResourceTitle,
  setEvidenceResourceTitle
}) => {
  const [showLivePreview, setShowLivePreview] = useState<boolean>(true);
  const [expandedPillarId, setExpandedPillarId] = useState<number | null>(null);

  // Default fallback stats if none in props
  const defaultMetrics: KeyMetricItem[] = [
    {
      id: 'stat-1',
      value: '96%',
      label: 'Tỷ lệ lưu giữ 13 năm',
      description: 'Nghiên cứu lâm sàng JADA (ĐH Florida) theo dõi phục hình Giomer bền vững suốt 13 năm.',
      badge: 'JADA 13-Year Study'
    },
    {
      id: 'stat-2',
      value: '0%',
      label: 'Ngừa sâu răng thứ phát',
      description: 'Không phát hiện bất kỳ ca sâu răng tái phát nào quanh bờ phục hình nhờ 6 ion Bioactive.',
      badge: 'Zero Recurrent Caries'
    },
    {
      id: 'stat-3',
      value: '97%',
      label: 'Độ bóng & Độ thẩm mỹ',
      description: 'Khả năng duy trì độ bóng hoàn hảo và kháng ố màu men răng dưới kiểm nghiệm khắt khe.',
      badge: 'Chameleon Polish'
    },
    {
      id: 'stat-4',
      value: '400 MPa',
      label: 'Độ bền nén chịu lực',
      description: 'Độ bền nén kỷ lục chịu lực ăn nhai trực tiếp xoang I, II, V và gờ múi không nứt mẻ.',
      badge: 'Compressive Strength'
    }
  ];

  const currentStats = keyStats && keyStats.length > 0 ? keyStats : defaultMetrics;

  const handleUpdateStat = (id: string, field: keyof KeyMetricItem, val: string) => {
    if (!setKeyStats) return;
    const existing = keyStats && keyStats.length > 0 ? [...keyStats] : [...defaultMetrics];
    const updated = existing.map(item => item.id === id ? { ...item, [field]: val } : item);
    setKeyStats(updated);
  };

  // Pillar Handlers
  const handleAddPillar = () => {
    const newId = scientificPillars.length > 0 ? Math.max(...scientificPillars.map(p => p.id)) + 1 : 1;
    setScientificPillars(prev => [
      ...prev,
      {
        id: newId,
        icon: '🔬',
        title: 'Báo cáo nghiên cứu y văn mới',
        points: ['Điểm nổi bật 1 về kiểm nghiệm lâm sàng', 'Điểm nổi bật 2 về số liệu khoa học']
      }
    ]);
    setExpandedPillarId(newId);
  };

  const handleDeletePillar = (id: number) => {
    setScientificPillars(prev => prev.filter(p => p.id !== id));
    if (expandedPillarId === id) setExpandedPillarId(null);
  };

  const handleUpdatePillar = (id: number, field: 'icon' | 'title', val: string) => {
    setScientificPillars(prev => prev.map(p => p.id === id ? { ...p, [field]: val } : p));
  };

  const handleUpdatePillarPoint = (pillarId: number, pointIdx: number, val: string) => {
    setScientificPillars(prev => prev.map(p => {
      if (p.id !== pillarId) return p;
      const newPoints = [...p.points];
      newPoints[pointIdx] = val;
      return { ...p, points: newPoints };
    }));
  };

  const handleAddPillarPoint = (pillarId: number) => {
    setScientificPillars(prev => prev.map(p => {
      if (p.id !== pillarId) return p;
      return { ...p, points: [...p.points, 'Ghi chú số liệu chứng minh mới...'] };
    }));
  };

  const handleDeletePillarPoint = (pillarId: number, pointIdx: number) => {
    setScientificPillars(prev => prev.map(p => {
      if (p.id !== pillarId) return p;
      return { ...p, points: p.points.filter((_, idx) => idx !== pointIdx) };
    }));
  };

  // Testimonials Handlers
  const handleAddTestimonialRow1 = () => {
    setTestimonialsRow1(prev => [
      ...prev,
      {
        quote: 'Nhận xét chuyên môn từ bác sĩ...',
        name: 'BS. Chuyên khoa',
        title: 'Phòng khám Nha khoa'
      }
    ]);
  };

  const handleDeleteTestimonialRow1 = (idx: number) => {
    setTestimonialsRow1(prev => prev.filter((_, i) => i !== idx));
  };

  const handleUpdateTestimonialRow1 = (idx: number, field: keyof TestimonialItem, val: string) => {
    setTestimonialsRow1(prev => prev.map((item, i) => i === idx ? { ...item, [field]: val } : item));
  };

  const handleAddTestimonialRow2 = () => {
    setTestimonialsRow2(prev => [
      ...prev,
      {
        quote: 'Nhận xét trải nghiệm lâm sàng...',
        name: 'BS. Chuyên khoa',
        title: 'Nha khoa Thẩm mỹ'
      }
    ]);
  };

  const handleDeleteTestimonialRow2 = (idx: number) => {
    setTestimonialsRow2(prev => prev.filter((_, i) => i !== idx));
  };

  const handleUpdateTestimonialRow2 = (idx: number, field: keyof TestimonialItem, val: string) => {
    setTestimonialsRow2(prev => prev.map((item, i) => i === idx ? { ...item, [field]: val } : item));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Section Intro */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <Microscope className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-1">
                Section 5
              </div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                Bằng chứng lâm sàng 13 năm & Y văn quốc tế
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowLivePreview(!showLivePreview)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
              showLivePreview
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Eye className="w-4 h-4 text-emerald-400" />
            <span>{showLivePreview ? 'Ẩn Live Preview' : 'Xem Live Preview Dark Mode'}</span>
          </button>
        </div>

        {/* 1. Tiêu đề H2 & Dẫn nhập nghiên cứu 13 năm */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                Tiêu đề Section H2
              </label>
              <div className="flex items-center gap-1 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => applyFormat('strong', setEvidenceHeadline, 'evidence-headline-input')}
                  className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 font-bold"
                  title="In đậm thẻ strong"
                >
                  B
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('cyan', setEvidenceHeadline, 'evidence-headline-input')}
                  className="px-2 py-0.5 rounded bg-cyan-50 hover:bg-cyan-100 text-[#00ADEF] font-bold"
                  title="Màu xanh cyan"
                >
                  Cyan
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('red', setEvidenceHeadline, 'evidence-headline-input')}
                  className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold"
                  title="Màu đỏ thương hiệu"
                >
                  Đỏ
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('amber', setEvidenceHeadline, 'evidence-headline-input')}
                  className="px-2 py-0.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold"
                  title="Highlight vàng"
                >
                  Highlight
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('br', setEvidenceHeadline, 'evidence-headline-input')}
                  className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 font-mono text-[10px]"
                  title="Xuống dòng"
                >
                  &lt;br/&gt;
                </button>
              </div>
            </div>
            <textarea
              id="evidence-headline-input"
              rows={2}
              value={evidenceHeadline}
              onChange={(e) => setEvidenceHeadline(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              placeholder="Nhập tiêu đề section..."
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                Mô tả nghiên cứu 13 năm (ĐH Florida & Báo chứng lâm sàng)
              </label>
              <div className="flex items-center gap-1 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => applyFormat('strong', setEvidenceSubheadline, 'evidence-desc-input')}
                  className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 font-bold"
                >
                  B
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('cyan', setEvidenceSubheadline, 'evidence-desc-input')}
                  className="px-2 py-0.5 rounded bg-cyan-50 hover:bg-cyan-100 text-[#00ADEF] font-bold"
                >
                  Cyan
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('red', setEvidenceSubheadline, 'evidence-desc-input')}
                  className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold"
                >
                  Đỏ
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('amber', setEvidenceSubheadline, 'evidence-desc-input')}
                  className="px-2 py-0.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold"
                >
                  Highlight
                </button>
              </div>
            </div>
            <textarea
              id="evidence-desc-input"
              rows={3}
              value={evidenceSubheadline}
              onChange={(e) => setEvidenceSubheadline(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              placeholder="Đoạn văn dẫn chứng nghiên cứu lâm sàng..."
            />
          </div>
        </div>
      </div>

      {/* 2. 4 Chỉ số lâm sàng / Kết quả then chốt (Key Metrics) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-heading font-extrabold text-lg text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              4 Chỉ số lâm sàng / Kết quả then chốt
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Tỷ lệ lưu giữ 13 năm, Ngừa sâu răng thứ phát 0%, Độ bóng thẩm mỹ, Độ bền nén chịu lực
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 text-slate-700">
            {currentStats.length} Chỉ số
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentStats.map((stat, idx) => (
            <div key={stat.id || idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800">
                  Chỉ số #{idx + 1}
                </span>
                <input
                  type="text"
                  value={stat.badge || ''}
                  placeholder="Nhãn tiếng Anh (Badge)..."
                  onChange={(e) => handleUpdateStat(stat.id, 'badge', e.target.value)}
                  className="text-right text-xs font-mono px-2 py-1 bg-white border border-slate-200 rounded-lg text-slate-600 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                    Giá trị / Con số
                  </label>
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => handleUpdateStat(stat.id, 'value', e.target.value)}
                    className="w-full font-heading font-extrabold text-lg text-emerald-700 bg-white border border-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                    Tên chỉ số lâm sàng
                  </label>
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => handleUpdateStat(stat.id, 'label', e.target.value)}
                    className="w-full text-xs font-bold text-slate-800 bg-white border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                  Mô tả bảo chứng nghiên cứu
                </label>
                <textarea
                  rows={2}
                  value={stat.description}
                  onChange={(e) => handleUpdateStat(stat.id, 'description', e.target.value)}
                  className="w-full text-xs text-slate-600 bg-white border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 6 Trụ cột dữ liệu y văn & nghiên cứu lâm sàng (Scientific Pillars) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-heading font-extrabold text-lg text-slate-900 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-cyan-600" />
              6 Trụ cột dữ liệu y văn & Nghiên cứu lâm sàng
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              The Dental Advisor 2024, ĐH Florida (JADA), SUNY Buffalo, ĐH Y Nha khoa Tokyo...
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddPillar}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm luận điểm y văn</span>
          </button>
        </div>

        <div className="space-y-4">
          {scientificPillars.map((pillar, idx) => {
            const isExpanded = expandedPillarId === pillar.id;
            return (
              <div 
                key={pillar.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden transition-all"
              >
                {/* Header row */}
                <div 
                  className="p-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-100/80 transition-colors"
                  onClick={() => setExpandedPillarId(isExpanded ? null : pillar.id)}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <span className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-lg shadow-sm shrink-0">
                      {pillar.icon || '🔬'}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-mono font-bold text-slate-400">
                        Luận điểm #{idx + 1}
                      </div>
                      <h4 className="font-heading font-bold text-sm text-slate-900 truncate">
                        {pillar.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm('Bác sĩ có chắc chắn muốn xóa luận điểm này?')) {
                          handleDeletePillar(pillar.id);
                        }
                      }}
                      className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                      title="Xóa luận điểm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>
                </div>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 border-t border-slate-200 bg-white space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-3">
                      <div className="sm:col-span-1">
                        <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                          Icon / Biểu tượng
                        </label>
                        <input
                          type="text"
                          value={pillar.icon}
                          onChange={(e) => handleUpdatePillar(pillar.id, 'icon', e.target.value)}
                          className="w-full text-center text-lg bg-slate-50 border border-slate-200 rounded-xl py-2 focus:outline-none focus:border-cyan-600"
                        />
                      </div>
                      <div className="sm:col-span-5">
                        <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                          Tiêu đề luận điểm nghiên cứu
                        </label>
                        <input
                          type="text"
                          value={pillar.title}
                          onChange={(e) => handleUpdatePillar(pillar.id, 'title', e.target.value)}
                          className="w-full text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-cyan-600"
                        />
                      </div>
                    </div>

                    {/* Points list */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                          Các kết quả chứng minh chi tiết ({pillar.points.length})
                        </label>
                        <button
                          type="button"
                          onClick={() => handleAddPillarPoint(pillar.id)}
                          className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Thêm gạch đầu dòng</span>
                        </button>
                      </div>

                      {pillar.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2">
                          <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-mono flex items-center justify-center shrink-0 mt-2">
                            {pIdx + 1}
                          </span>
                          <textarea
                            rows={2}
                            value={point}
                            onChange={(e) => handleUpdatePillarPoint(pillar.id, pIdx, e.target.value)}
                            className="flex-1 text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-cyan-600 focus:bg-white"
                          />
                          <button
                            type="button"
                            onClick={() => handleDeletePillarPoint(pillar.id, pIdx)}
                            className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-colors mt-1"
                            title="Xóa dòng"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Nhận định từ chuyên gia lâm sàng & Trích dẫn nghiên cứu (Testimonials) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-extrabold text-lg text-slate-900 flex items-center gap-2">
              <Quote className="w-5 h-5 text-blue-600" />
              Đánh giá từ chuyên gia lâm sàng quốc tế & trong nước
            </h3>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
              {testimonialsRow1.length + testimonialsRow2.length} Đánh giá
            </span>
          </div>
          <div className="mt-3">
            <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
              Tiêu đề khối chuyên gia
            </label>
            <input
              type="text"
              value={testimonialsHeadline}
              onChange={(e) => setTestimonialsHeadline(e.target.value)}
              className="w-full text-sm font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        {/* Hàng 1: Chuyên gia hàng 1 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider">
              Dải băng chuyền 1 ({testimonialsRow1.length} Chuyên gia)
            </span>
            <button
              type="button"
              onClick={handleAddTestimonialRow1}
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Thêm chuyên gia</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonialsRow1.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 relative group">
                <button
                  type="button"
                  onClick={() => handleDeleteTestimonialRow1(idx)}
                  className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  title="Xóa đánh giá"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <div className="pr-8">
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                    Lời nhận xét / Trích dẫn
                  </label>
                  <textarea
                    rows={2}
                    value={item.quote}
                    onChange={(e) => handleUpdateTestimonialRow1(idx, 'quote', e.target.value)}
                    className="w-full text-xs text-slate-700 bg-white border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                      Tên chuyên gia
                    </label>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleUpdateTestimonialRow1(idx, 'name', e.target.value)}
                      className="w-full text-xs font-bold text-slate-800 bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                      Chức danh / Đơn vị
                    </label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleUpdateTestimonialRow1(idx, 'title', e.target.value)}
                      className="w-full text-xs text-slate-600 bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hàng 2: Chuyên gia hàng 2 */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider">
              Dải băng chuyền 2 ({testimonialsRow2.length} Chuyên gia)
            </span>
            <button
              type="button"
              onClick={handleAddTestimonialRow2}
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Thêm chuyên gia</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonialsRow2.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 relative group">
                <button
                  type="button"
                  onClick={() => handleDeleteTestimonialRow2(idx)}
                  className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  title="Xóa đánh giá"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <div className="pr-8">
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                    Lời nhận xét / Trích dẫn
                  </label>
                  <textarea
                    rows={2}
                    value={item.quote}
                    onChange={(e) => handleUpdateTestimonialRow2(idx, 'quote', e.target.value)}
                    className="w-full text-xs text-slate-700 bg-white border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                      Tên chuyên gia
                    </label>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleUpdateTestimonialRow2(idx, 'name', e.target.value)}
                      className="w-full text-xs font-bold text-slate-800 bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                      Chức danh / Đơn vị
                    </label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleUpdateTestimonialRow2(idx, 'title', e.target.value)}
                      className="w-full text-xs text-slate-600 bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Cấu hình Nút CTA & Popup Form Section 5 */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
        <CtaFormConfigEditor
          label="Cấu hình Nút CTA & Form Đăng ký Section 5 (Gia nhập cộng đồng MiCD)"
          ctaText={evidenceCtaText}
          onChangeCtaText={setEvidenceCtaText}
          formTitle={evidenceFormTitle}
          onChangeFormTitle={setEvidenceFormTitle}
          formDesc={evidenceFormDesc}
          onChangeFormDesc={setEvidenceFormDesc}
          formExtraHtml={evidenceFormExtraHtml}
          onChangeFormExtraHtml={setEvidenceFormExtraHtml}
          redirectThanks={evidenceRedirectThanks ?? false}
          onChangeRedirectThanks={setEvidenceRedirectThanks}
          targetUrl={evidenceTargetUrl}
          onChangeTargetUrl={setEvidenceTargetUrl}
          resourceTitle={evidenceResourceTitle}
          onChangeResourceTitle={setEvidenceResourceTitle}
        />
      </div>

      {/* 6. Live Preview nền tối (Dark mode card) */}
      {showLivePreview && (
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00ADEF]/10 via-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Live Preview: Section 5 (Dark Mode Card)
            </span>
            <h2 
              className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight"
              dangerouslySetInnerHTML={{ __html: evidenceHeadline || 'Dữ liệu khoa học' }}
            />
            <p 
              className="text-slate-300 text-sm sm:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: evidenceSubheadline || '' }}
            />
          </div>

          {/* 4 Stats Cards Live Preview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {currentStats.map((stat, idx) => (
              <div 
                key={stat.id || idx}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 rounded-2xl p-4 sm:p-5 text-center hover:border-emerald-500/50 transition-all group"
              >
                {stat.badge && (
                  <span className="inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-300 mb-2">
                    {stat.badge}
                  </span>
                )}
                <div className="font-heading font-black text-2xl sm:text-3xl text-emerald-400 group-hover:scale-105 transition-transform duration-300 mb-1">
                  {stat.value}
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white mb-2">
                  {stat.label}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-3">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pillars List Live Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {scientificPillars.slice(0, 4).map((pillar) => (
              <div key={pillar.id} className="bg-slate-800/70 border border-slate-700/70 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{pillar.icon}</span>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-white leading-snug">
                    {pillar.title}
                  </h4>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 pl-4 list-disc marker:text-cyan-400">
                  {pillar.points.map((pt, pIdx) => (
                    <li key={pIdx} className="leading-relaxed">{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Live CTA button */}
          <div className="text-center relative z-10 pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{evidenceCtaText || 'Gia nhập cộng đồng MiCD'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
