import React, { useState } from 'react';
import { 
  FileText, 
  Bold, 
  Palette, 
  Eye, 
  Plus, 
  Trash2, 
  ImageIcon, 
  ChevronDown, 
  ChevronUp,
  BookmarkCheck,
  ShoppingCart,
  ArrowUpRight,
  Sparkles,
  X,
  Layers,
  ZoomIn,
  RotateCcw
} from 'lucide-react';
import { CaseStudyItem, applyFormat } from './types';
import { ImageUploaderField } from '../components/ImageUploaderField';
import { DEFAULT_HOME_DATA } from './defaultData';

interface Section6CaseStudiesEditorProps {
  badge: string;
  setBadge: (val: string) => void;
  headline: string;
  setHeadline: (val: string) => void;
  subheadline: string;
  setSubheadline: (val: string) => void;
  ctaText: string;
  setCtaText: (val: string) => void;
  caseStudies: CaseStudyItem[];
  setCaseStudies: React.Dispatch<React.SetStateAction<CaseStudyItem[]>>;
}

export const Section6CaseStudiesEditor: React.FC<Section6CaseStudiesEditorProps> = ({
  badge,
  setBadge,
  headline,
  setHeadline,
  subheadline,
  setSubheadline,
  ctaText,
  setCtaText,
  caseStudies,
  setCaseStudies,
}) => {
  const [expandedCaseId, setExpandedCaseId] = useState<number | null>(1);
  const [showLivePreview, setShowLivePreview] = useState(true);

  const handleUpdateCase = (id: number, field: keyof CaseStudyItem, val: any) => {
    setCaseStudies(prev => prev.map(c => c.id === id ? { ...c, [field]: val } : c));
  };

  const handleAddCase = () => {
    const nextId = caseStudies.length > 0 ? Math.max(...caseStudies.map(c => c.id)) + 1 : 1;
    const newCase: CaseStudyItem = {
      id: nextId,
      caseNumber: `Case #${nextId}`,
      title: 'Ca phục hình mới',
      doctor: 'Sử dụng: Shofu Beautifil II',
      coverImage: 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.1.webp',
      description: 'Mô tả quy trình điều trị lâm sàng với vật liệu Shofu...',
      images: [
        {
          url: 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.1.webp',
          note: '<strong class="text-slate-900">Tình trạng ban đầu:</strong> Hình ảnh trước điều trị của bệnh nhân.'
        }
      ]
    };
    setCaseStudies(prev => [...prev, newCase]);
    setExpandedCaseId(nextId);
  };

  const handleDeleteCase = (id: number | string, index: number) => {
    setCaseStudies(prev => prev.filter((_, i) => i !== index));
    if (expandedCaseId === id) setExpandedCaseId(null);
  };

  const handleAddStepImage = (caseId: number) => {
    setCaseStudies(prev => prev.map(c => {
      if (c.id === caseId) {
        return {
          ...c,
          images: [
            ...c.images,
            { url: '', note: '<strong class="text-slate-900">Bước thực hiện:</strong> Mô tả chi tiết thao tác lâm sàng...' }
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
          Quản lý Badge thư viện, tiêu đề, danh sách 8 Ca lâm sàng (ảnh bìa, các bước quy trình, chú thích HTML) và Nút CTA mở Pop-up Ưu đãi.
        </p>
      </div>

      {/* 1. Badge, Tiêu đề Section & Mô tả phụ */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
        <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <BookmarkCheck className="w-4 h-4 text-emerald-600" />
          <span>1. Huy hiệu Badge & Tiêu đề khối</span>
        </h4>

        {/* 1.1 Badge input */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Huy hiệu đầu khối (Badge Pill)
          </label>
          <div className="relative">
            <BookmarkCheck className="w-4 h-4 text-[#00ADEF] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 uppercase tracking-wider focus:border-[#00ADEF] outline-none"
              placeholder="Thư viện Case Study"
            />
          </div>
        </div>

        {/* 1.2 Headline with HTML formatting */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Tiêu đề Section (Hỗ trợ định dạng HTML)
            </label>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => applyFormat('strong', setHeadline, 'cases-headline-input')}
                title="In đậm chữ đang chọn"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-white text-slate-700 hover:text-black border border-slate-200 shadow-2xs flex items-center gap-1"
              >
                <Bold className="w-3 h-3" />
                <span>Đậm</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setHeadline, 'cases-headline-input')}
                title="Đổi màu Xanh Shofu"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-sky-50 text-[#00ADEF] hover:bg-sky-100 border border-sky-200 shadow-2xs flex items-center gap-1"
              >
                <Palette className="w-3 h-3" />
                <span>Xanh Shofu</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('red', setHeadline, 'cases-headline-input')}
                title="Đổi màu Đỏ"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-red-50 text-[#C43838] hover:bg-red-100 border border-red-200 shadow-2xs flex items-center gap-1"
              >
                <Palette className="w-3 h-3" />
                <span>Đỏ</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('br', setHeadline, 'cases-headline-input')}
                title="Chèn ngắt dòng"
                className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-white text-slate-700 hover:text-black border border-slate-200 shadow-2xs"
              >
                &lt;br /&gt;
              </button>
            </div>
          </div>
          <input
            id="cases-headline-input"
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:border-[#00ADEF] outline-none"
            placeholder='Hiệu quả vượt trội từ <br /><span class="text-[#00ADEF]">thực tế lâm sàng</span>'
          />
        </div>

        {/* 1.3 Subheadline with HTML formatting */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Mô tả phụ (Hỗ trợ định dạng HTML)
            </label>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => applyFormat('strong', setSubheadline, 'cases-sub-input')}
                title="In đậm chữ đang chọn"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-white text-slate-700 hover:text-black border border-slate-200 shadow-2xs flex items-center gap-1"
              >
                <Bold className="w-3 h-3" />
                <span>Đậm</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setSubheadline, 'cases-sub-input')}
                title="Đổi màu Xanh Shofu"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-sky-50 text-[#00ADEF] hover:bg-sky-100 border border-sky-200 shadow-2xs flex items-center gap-1"
              >
                <Palette className="w-3 h-3" />
                <span>Xanh Shofu</span>
              </button>
            </div>
          </div>
          <textarea
            id="cases-sub-input"
            rows={2}
            value={subheadline}
            onChange={(e) => setSubheadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-600 focus:border-[#00ADEF] outline-none leading-relaxed resize-none"
            placeholder="Khám phá những ca điều trị thành công sử dụng vật liệu nha khoa Shofu..."
          />
        </div>
      </div>

      {/* 2. Danh sách 8 Ca Lâm Sàng */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00ADEF]" />
              <span>2. Danh Sách Ca Lâm Sàng ({caseStudies.length} ca)</span>
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Cho phép chỉnh sửa số thứ tự, tiêu đề, vật liệu, mô tả và từng bước thực hiện kèm hình ảnh.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setCaseStudies(DEFAULT_HOME_DATA.caseStudies.caseStudies);
                setExpandedCaseId(1);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl shadow-2xs transition-all active:scale-[0.98]"
              title="Khôi phục đầy đủ 8 ca lâm sàng gốc từ thư viện ảnh hệ thống"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
              <span>Tải 8 Ca Mặc Định</span>
            </button>
            <button
              type="button"
              onClick={handleAddCase}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3.5 py-2 rounded-xl shadow-xs transition-all active:scale-[0.98]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Thêm Ca Mới</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {caseStudies.map((cs, idx) => {
            const isExpanded = expandedCaseId === cs.id;

            return (
              <div key={cs.id || idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all">
                {/* Header card: separated clickable toggle & actions */}
                <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-100 bg-white hover:bg-slate-50/60 transition-colors">
                  <div 
                    onClick={() => setExpandedCaseId(isExpanded ? null : cs.id)}
                    className="flex items-center gap-3 min-w-0 flex-1 cursor-pointer pr-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                      {cs.coverImage ? (
                        <img src={cs.coverImage} alt={cs.title} className="w-full h-full object-cover" />
                      ) : (
                        <ImageIcon className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-mono font-bold text-[#00ADEF] bg-sky-50 border border-sky-100 px-2 py-0.5 rounded">
                          {cs.caseNumber || `Case #${idx + 1}`}
                        </span>
                        <strong className="text-sm font-heading font-bold text-slate-900 truncate block">
                          {cs.title}
                        </strong>
                      </div>
                      <span className="text-xs text-slate-500 truncate block" dangerouslySetInnerHTML={{ __html: cs.doctor }} />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg font-bold hidden sm:inline">
                      {cs.images?.length || 0} bước ảnh
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeleteCase(cs.id, idx)}
                      title="Xóa ca lâm sàng này"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-red-600 hover:text-white bg-red-50 hover:bg-red-600 border border-red-200 hover:border-red-600 rounded-xl transition-all shadow-2xs cursor-pointer active:scale-95"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Xóa</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setExpandedCaseId(isExpanded ? null : cs.id)}
                      className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg transition-colors cursor-pointer"
                      title={isExpanded ? 'Thu gọn' : 'Mở rộng'}
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="p-6 space-y-6 bg-slate-50/50 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Case Number */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Số thứ tự (Hiển thị nhãn)
                        </label>
                        <input
                          type="text"
                          value={cs.caseNumber || `Case #${idx + 1}`}
                          onChange={(e) => handleUpdateCase(cs.id, 'caseNumber', e.target.value)}
                          placeholder="Case #1"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono font-bold text-[#00ADEF] bg-white focus:border-[#00ADEF] outline-none"
                        />
                      </div>

                      {/* Title */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Tiêu đề ca lâm sàng
                        </label>
                        <input
                          type="text"
                          value={cs.title}
                          onChange={(e) => handleUpdateCase(cs.id, 'title', e.target.value)}
                          placeholder="Đóng khe thưa"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
                        />
                      </div>

                      {/* Doctor / Materials */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Vật liệu / Bác sĩ (Hỗ trợ HTML)
                        </label>
                        <input
                          type="text"
                          value={cs.doctor}
                          onChange={(e) => handleUpdateCase(cs.id, 'doctor', e.target.value)}
                          placeholder="Sử dụng: Beautifil Injectable X"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 bg-white focus:border-[#00ADEF] outline-none"
                        />
                      </div>
                    </div>

                    {/* Cover image */}
                    <div>
                      <ImageUploaderField
                        label={`Ảnh bìa ca ${cs.title || 'lâm sàng'}`}
                        badge={cs.caseNumber || `Case #${cs.id}`}
                        value={cs.coverImage}
                        onChange={(url) => handleUpdateCase(cs.id, 'coverImage', url)}
                        targetKey={`case-cover-${cs.id}`}
                        folder="images"
                        aspectRatio="h-36"
                        recommendation="Ảnh vuông tỉ lệ 1:1 hoặc 4:3 rõ nét"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Mô tả tổng quan ca điều trị
                      </label>
                      <textarea
                        rows={3}
                        value={cs.description}
                        onChange={(e) => handleUpdateCase(cs.id, 'description', e.target.value)}
                        placeholder="Ca lâm sàng phục hình thẩm mỹ..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 bg-white focus:border-[#00ADEF] outline-none leading-relaxed"
                      />
                    </div>

                    {/* Step images */}
                    <div className="space-y-4 pt-4 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider">
                            Quy trình các bước ({cs.images?.length || 0} bước ảnh)
                          </h6>
                          <p className="text-[11px] text-slate-500">
                            Mỗi bước gồm 1 hình ảnh minh họa và đoạn chú thích lâm sàng (hỗ trợ thẻ &lt;strong&gt;, &lt;span&gt;...).
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleAddStepImage(cs.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Thêm bước</span>
                        </button>
                      </div>

                      <div className="space-y-3">
                        {cs.images.map((img, imgIdx) => (
                          <div key={imgIdx} className="p-4 rounded-xl border border-slate-200 bg-white space-y-3 shadow-2xs">
                            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                              <span className="text-xs font-mono font-bold text-[#00ADEF]">
                                Bước 0{imgIdx + 1}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleDeleteStepImage(cs.id, imgIdx)}
                                title="Xóa bước này"
                                className="text-slate-400 hover:text-red-600 transition-colors p-1"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div>
                                <ImageUploaderField
                                  label={`Ảnh bước ${imgIdx + 1}`}
                                  value={img.url}
                                  onChange={(url) => handleUpdateStepImage(cs.id, imgIdx, 'url', url)}
                                  targetKey={`case-${cs.id}-step-${imgIdx}`}
                                  folder="images"
                                  aspectRatio="h-28"
                                  recommendation="Ảnh thao tác rõ nét"
                                />
                              </div>
                              <div className="sm:col-span-2 space-y-1">
                                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                                  Chú thích bước thực hiện (Hỗ trợ HTML)
                                </label>
                                <textarea
                                  rows={4}
                                  value={img.note}
                                  onChange={(e) => handleUpdateStepImage(cs.id, imgIdx, 'note', e.target.value)}
                                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 bg-slate-50 focus:bg-white focus:border-[#00ADEF] outline-none leading-relaxed"
                                  placeholder='<strong class="text-slate-900">Bước thực hiện:</strong> ...'
                                />
                              </div>
                            </div>
                          </div>
                          ))}
                        </div>

                      {/* Bottom Action: Delete case */}
                      <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-red-50/60 p-4 rounded-xl border border-red-200">
                        <div>
                          <span className="text-xs font-bold text-red-900 block">
                            Gỡ bỏ ca lâm sàng này khỏi danh sách?
                          </span>
                          <span className="text-[11px] text-red-600 block">
                            Ca {cs.caseNumber || `#${idx + 1}`} ({cs.title}) sẽ được xóa ngay và không hiển thị trên website.
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDeleteCase(cs.id, idx)}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Xóa Ca #{idx + 1} Này</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Nút CTA: Cuối Section Ca Lâm Sàng */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-red-100 text-[#D93025] flex items-center justify-center">
            <ShoppingCart className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-slate-900 text-base">
              3. Nút CTA Cuối Section (Xem ưu đãi & Đặt hàng)
            </h4>
            <p className="text-xs text-slate-500">
              Nút này kích hoạt mở Pop-up Ưu Đãi Đặc Biệt 2 Cột (được cấu hình ở Tab 02).
            </p>
          </div>
        </div>

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
      </div>

      {/* 4. Live Preview Section 06 */}
      {showLivePreview && (
        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#00ADEF]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Xem trước giao diện thực tế (Live Preview Section 06):
              </span>
            </div>
            <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
              Giao diện thực tế trên website
            </span>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 text-slate-900 space-y-8">
            {/* Header preview */}
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                <span className="font-mono text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                  {badge || 'Thư viện Case Study'}
                </span>
              </div>
              <h3 
                className="font-heading font-extrabold text-2xl uppercase tracking-tight text-slate-900"
                dangerouslySetInnerHTML={{ __html: headline || 'Hiệu quả vượt trội từ thực tế lâm sàng' }}
              />
              <p 
                className="text-xs text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: subheadline || 'Khám phá những ca điều trị thành công...' }}
              />
            </div>

            {/* Grid preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {caseStudies.map((cs, idx) => (
                <div key={cs.id || idx} className="relative aspect-square rounded-xl bg-slate-800 overflow-hidden group shadow-xs">
                  <img
                    src={cs.coverImage}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="text-[9px] font-mono font-bold text-[#00ADEF] uppercase">
                      {cs.caseNumber || `Case #${idx + 1}`}
                    </span>
                    <strong className="text-xs font-heading font-bold truncate">{cs.title}</strong>
                    <span className="text-[10px] text-slate-300 truncate" dangerouslySetInnerHTML={{ __html: cs.doctor }} />
                    <span className="text-[9px] text-slate-400 mt-1 font-mono">{cs.images?.length || 0} bước ảnh</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button preview */}
            <div className="text-center pt-2">
              <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00ADEF] text-white font-bold text-sm shadow-md">
                <ShoppingCart className="w-5 h-5" />
                <span>{ctaText || 'Xem ưu đãi và đặt hàng'}</span>
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
