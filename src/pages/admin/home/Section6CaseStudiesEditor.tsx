import React, { useState } from 'react';
import { 
  FileText, 
  Bold, 
  Eye, 
  Plus, 
  Trash2, 
  ImageIcon, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { CaseStudyItem, applyFormat } from './types';

interface Section6CaseStudiesEditorProps {
  headline: string;
  setHeadline: (val: string) => void;
  subheadline: string;
  setSubheadline: (val: string) => void;
  caseStudies: CaseStudyItem[];
  setCaseStudies: React.Dispatch<React.SetStateAction<CaseStudyItem[]>>;
}

export const Section6CaseStudiesEditor: React.FC<Section6CaseStudiesEditorProps> = ({
  headline,
  setHeadline,
  subheadline,
  setSubheadline,
  caseStudies,
  setCaseStudies,
}) => {
  const [expandedCaseId, setExpandedCaseId] = useState<number | null>(1);

  const handleUpdateCase = (id: number, field: keyof CaseStudyItem, val: any) => {
    setCaseStudies(prev => prev.map(c => c.id === id ? { ...c, [field]: val } : c));
  };

  const handleAddStepImage = (caseId: number) => {
    setCaseStudies(prev => prev.map(c => {
      if (c.id === caseId) {
        return {
          ...c,
          images: [
            ...c.images,
            { url: '', note: '<strong class="text-slate-900">Bước thực hiện:</strong> Mô tả chi tiết...' }
          ]
        };
      }
      return c;
    }));
  };

  const handleUpdateStepImage = (caseId: number, imgIdx: number, field: 'url' | 'note', val: string) => {
    setCaseStudies(prev => prev.map(c => {
      if (c.id === caseId) {
        const nextImages = [...c.images];
        nextImages[imgIdx] = { ...nextImages[imgIdx], [field]: val };
        return { ...c, images: nextImages };
      }
      return c;
    }));
  };

  const handleDeleteStepImage = (caseId: number, imgIdx: number) => {
    setCaseStudies(prev => prev.map(c => {
      if (c.id === caseId) {
        return {
          ...c,
          images: c.images.filter((_, i) => i !== imgIdx)
        };
      }
      return c;
    }));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section info */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs font-mono">
              06
            </span>
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Ca Lâm Sàng Tiêu Biểu (Case Studies)
            </h3>
          </div>
        </div>
        <p className="text-xs text-slate-500">
          Quản lý các ca lâm sàng, ảnh bìa, ghi chú từng bước điều trị và vật liệu Shofu áp dụng.
        </p>
      </div>

      {/* 1. Headline & Subheadline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Tiêu đề Section
          </label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:border-[#00ADEF] outline-none"
            placeholder="Ca Lâm Sàng Tiêu Biểu"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Mô tả phụ
          </label>
          <input
            type="text"
            value={subheadline}
            onChange={(e) => setSubheadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-600 focus:border-[#00ADEF] outline-none"
            placeholder="Tổng hợp các quy trình điều trị thực tế..."
          />
        </div>
      </div>

      {/* 2. Case Studies List */}
      <div className="space-y-6">
        {caseStudies.map((cs, idx) => {
          const isExpanded = expandedCaseId === cs.id;

          return (
            <div key={cs.id || idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Header card toggle */}
              <div 
                onClick={() => setExpandedCaseId(isExpanded ? null : cs.id)}
                className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                    {cs.coverImage ? (
                      <img src={cs.coverImage} alt={cs.title} className="w-full h-full object-cover" />
                    ) : (
                      <ImageIcon className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-slate-900 text-base">
                      Ca #{idx + 1}: {cs.title}
                    </h5>
                    <span className="text-xs text-[#00ADEF] font-bold">{cs.doctor}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400 font-bold hidden sm:inline">
                    {cs.images.length} bước hình ảnh
                  </span>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </div>

              {/* Expanded details */}
              {isExpanded && (
                <div className="p-6 space-y-6 bg-white animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Tiêu đề ca lâm sàng
                      </label>
                      <input
                        type="text"
                        value={cs.title}
                        onChange={(e) => handleUpdateCase(cs.id, 'title', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:border-[#00ADEF] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Vật liệu / Bác sĩ thực hiện
                      </label>
                      <input
                        type="text"
                        value={cs.doctor}
                        onChange={(e) => handleUpdateCase(cs.id, 'doctor', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#00ADEF] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      URL Ảnh bìa ca
                    </label>
                    <input
                      type="text"
                      value={cs.coverImage}
                      onChange={(e) => handleUpdateCase(cs.id, 'coverImage', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 font-mono text-xs text-slate-800 focus:border-[#00ADEF] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mô tả tổng quan ca
                    </label>
                    <textarea
                      rows={3}
                      value={cs.description}
                      onChange={(e) => handleUpdateCase(cs.id, 'description', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-[#00ADEF] outline-none leading-relaxed"
                    />
                  </div>

                  {/* Step images */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <h6 className="font-heading font-bold text-slate-900 text-sm">
                        Quy trình các bước (Ảnh + Chú thích lâm sàng)
                      </h6>
                      <button
                        type="button"
                        onClick={() => handleAddStepImage(cs.id)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-lg transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Thêm bước</span>
                      </button>
                    </div>

                    <div className="space-y-3">
                      {cs.images.map((img, imgIdx) => (
                        <div key={imgIdx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2 relative group">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[11px] font-mono font-bold text-slate-500">
                              Bước 0{imgIdx + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleDeleteStepImage(cs.id, imgIdx)}
                              className="text-slate-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <div>
                              <input
                                type="text"
                                value={img.url}
                                onChange={(e) => handleUpdateStepImage(cs.id, imgIdx, 'url', e.target.value)}
                                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 font-mono text-[11px] text-slate-800 bg-white outline-none"
                                placeholder="URL ảnh bước..."
                              />
                            </div>
                            <div className="sm:col-span-2">
                              <input
                                type="text"
                                value={img.note}
                                onChange={(e) => handleUpdateStepImage(cs.id, imgIdx, 'note', e.target.value)}
                                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white outline-none"
                                placeholder="Chú thích bước thực hiện (hỗ trợ HTML)..."
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
