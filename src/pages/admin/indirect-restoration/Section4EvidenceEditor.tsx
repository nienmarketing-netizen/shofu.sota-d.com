import React from 'react';
import { Bold, Plus, Trash2, Upload, Video, BarChart3, ShieldCheck, DollarSign, Eye } from 'lucide-react';
import { applyFormat } from './types';

interface Section4EvidenceEditorProps {
  badge: string;
  setBadge: React.Dispatch<React.SetStateAction<string>>;
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  usp1: {
    title: string;
    image: string;
    description: string;
  };
  setUsp1: React.Dispatch<React.SetStateAction<any>>;
  usp2: {
    title: string;
    youtubeId: string;
    description: string;
    feedbackImage: string;
  };
  setUsp2: React.Dispatch<React.SetStateAction<any>>;
  usp3: {
    title: string;
    description: string;
    image: string;
    points: string[];
  };
  setUsp3: React.Dispatch<React.SetStateAction<any>>;
  usp4: {
    title: string;
    problemTitle: string;
    problemDescription: string;
    problemImage: string;
    solutionTitle: string;
    solutionDescription: string;
    solutionImage: string;
  };
  setUsp4: React.Dispatch<React.SetStateAction<any>>;
  ctaText: string;
  setCtaText: React.Dispatch<React.SetStateAction<string>>;
  onUploadImage: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
  isUploadingImage: boolean;
  uploadingTarget: string;
}

export const Section4EvidenceEditor: React.FC<Section4EvidenceEditorProps> = ({
  badge,
  setBadge,
  headline,
  setHeadline,
  description,
  setDescription,
  usp1,
  setUsp1,
  usp2,
  setUsp2,
  usp3,
  setUsp3,
  usp4,
  setUsp4,
  ctaText,
  setCtaText,
  onUploadImage,
  isUploadingImage,
  uploadingTarget
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg">
            04
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-xl text-slate-900">
              Section 4: Evidence & Deep Dive (Bằng chứng khoa học & 4 USP)
            </h2>
            <p className="text-slate-500 text-sm">
              Nghiên cứu lực dán Dental Advisor, video Youtube dọn xi măng One-Sweep, cơ chế S-PRG và so sánh lãng phí Automix.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Badge tiêu đề
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-purple-500 text-sm outline-none font-medium"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Tiêu đề chính
              </label>
              <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-lg border border-slate-200">
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
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 text-sm font-medium outline-none font-mono"
            />
            {/* Live Preview of Headline */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mt-2">
              <span className="text-[10.5px] font-mono text-slate-500 font-bold uppercase tracking-wider block mb-1">
                Xem trước Tiêu đề Bằng chứng:
              </span>
              <div 
                className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 leading-snug"
                dangerouslySetInnerHTML={{ __html: headline || '<span class="text-slate-400 italic text-sm">Chưa nhập tiêu đề...</span>' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Đoạn văn mô tả (Bảo chứng y văn vững chắc)
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-purple-500 text-sm outline-none font-mono"
            />
          </div>
        </div>
      </div>

      {/* USP 1: Lực dán ~50 MPa */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
          <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
            1
          </span>
          <h3 className="font-heading font-bold text-base text-slate-900">
            USP 1: Lực dán 50 MPa qua 5.000 chu kỳ sốc nhiệt (Dental Advisor)
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tiêu đề USP 1
            </label>
            <input
              type="text"
              value={usp1.title}
              onChange={(e) => setUsp1({ ...usp1, title: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold outline-none"
            />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="w-24 h-24 bg-white rounded-lg border border-slate-200 p-1 shrink-0 overflow-hidden">
              {usp1.image ? (
                <img src={usp1.image} alt="Chart" className="w-full h-full object-contain" />
              ) : null}
            </div>
            <div className="flex-1 w-full space-y-2">
              <input
                type="text"
                value={usp1.image}
                onChange={(e) => setUsp1({ ...usp1, image: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono outline-none"
              />
              <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold cursor-pointer shadow-sm">
                <Upload className="w-3.5 h-3.5 text-[#00ADEF]" />
                <span>Upload biểu đồ lực dán</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) onUploadImage(f, 'usp1', (url) => setUsp1({ ...usp1, image: url }));
                  }}
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Mô tả báo cáo khoa học (Hỗ trợ HTML)
            </label>
            <textarea
              rows={3}
              value={usp1.description}
              onChange={(e) => setUsp1({ ...usp1, description: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-700 outline-none font-mono"
            />
          </div>
        </div>
      </div>

      {/* USP 2: Video One-Sweep & Tack cure */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
          <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
            2
          </span>
          <h3 className="font-heading font-bold text-base text-slate-900">
            USP 2: Video Youtube Tack-Cure & Dọn xi măng One-Sweep
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tiêu đề USP 2
            </label>
            <input
              type="text"
              value={usp2.title}
              onChange={(e) => setUsp2({ ...usp2, title: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                YouTube Video ID (Tự động phát loop không tiếng)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={usp2.youtubeId}
                  onChange={(e) => setUsp2({ ...usp2, youtubeId: e.target.value })}
                  className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono outline-none"
                  placeholder="K85voUZxMV8"
                />
                <a
                  href={`https://www.youtube.com/watch?v=${usp2.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 text-xs font-bold flex items-center gap-1"
                >
                  <Video className="w-4 h-4" /> Xem
                </a>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Ảnh feedback thực tế dưới video
              </label>
              <input
                type="text"
                value={usp2.feedbackImage}
                onChange={(e) => setUsp2({ ...usp2, feedbackImage: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Mô tả kỹ thuật Tack-cure
            </label>
            <textarea
              rows={3}
              value={usp2.description}
              onChange={(e) => setUsp2({ ...usp2, description: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-700 outline-none font-mono"
            />
          </div>
        </div>
      </div>

      {/* USP 3: S-PRG Bioactive Shield */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
          <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
            3
          </span>
          <h3 className="font-heading font-bold text-base text-slate-900">
            USP 3: Lá chắn sinh học S-PRG 6 loại ion
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tiêu đề USP 3
            </label>
            <input
              type="text"
              value={usp3.title}
              onChange={(e) => setUsp3({ ...usp3, title: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Mô tả cơ chế "bình ắc quy sinh học"
            </label>
            <textarea
              rows={3}
              value={usp3.description}
              onChange={(e) => setUsp3({ ...usp3, description: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-700 outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Ảnh minh họa hạt S-PRG triệt tiêu ê buốt
            </label>
            <input
              type="text"
              value={usp3.image}
              onChange={(e) => setUsp3({ ...usp3, image: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono outline-none"
            />
          </div>
        </div>
      </div>

      {/* USP 4: ROI & Automix comparison */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
          <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
            4
          </span>
          <h3 className="font-heading font-bold text-base text-slate-900">
            USP 4: Tối ưu ROI – "Tuyên chiến" với lãng phí vòi Automix
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tiêu đề chung
            </label>
            <input
              type="text"
              value={usp4.title}
              onChange={(e) => setUsp4({ ...usp4, title: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Cột Trái: Lãng phí vòi Automix */}
            <div className="p-4 rounded-xl bg-red-50/50 border border-red-200 space-y-3">
              <span className="text-xs font-bold text-red-600 uppercase">Khối 1: Vấn đề Automix</span>
              <input
                type="text"
                value={usp4.problemTitle}
                onChange={(e) => setUsp4({ ...usp4, problemTitle: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-red-200 text-xs font-bold outline-none"
              />
              <textarea
                rows={3}
                value={usp4.problemDescription}
                onChange={(e) => setUsp4({ ...usp4, problemDescription: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-red-200 text-xs text-slate-700 outline-none font-mono"
              />
              <input
                type="text"
                value={usp4.problemImage}
                onChange={(e) => setUsp4({ ...usp4, problemImage: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-red-200 text-xs font-mono outline-none"
              />
            </div>

            {/* Cột Phải: Giải pháp BeautiLink SA */}
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 space-y-3">
              <span className="text-xs font-bold text-[#00ADEF] uppercase">Khối 2: Giải pháp BeautiLink SA</span>
              <input
                type="text"
                value={usp4.solutionTitle}
                onChange={(e) => setUsp4({ ...usp4, solutionTitle: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-blue-200 text-xs font-bold outline-none"
              />
              <textarea
                rows={3}
                value={usp4.solutionDescription}
                onChange={(e) => setUsp4({ ...usp4, solutionDescription: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-blue-200 text-xs text-slate-700 outline-none font-mono"
              />
              <input
                type="text"
                value={usp4.solutionImage}
                onChange={(e) => setUsp4({ ...usp4, solutionImage: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-blue-200 text-xs font-mono outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 5. XEM TRƯỚC THÀNH PHẦN BẰNG CHỨNG KHOA HỌC (LIVE COMPONENT PREVIEW) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Xem trước giao diện Bằng chứng khoa học (Live Component Preview)
              </h3>
              <p className="text-slate-500 text-xs">
                Mô phỏng 4 trụ cột bằng chứng lâm sàng: 50 MPa, Video/SEM, S-PRG Bioactive và Tối ưu chi phí.
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            Trực quan tức thì
          </span>
        </div>

        {/* Mock Evidence Container */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            {badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-mono text-xs font-bold uppercase tracking-wider">
                {badge}
              </span>
            )}
            <div
              className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 leading-snug"
              dangerouslySetInnerHTML={{ __html: headline || '' }}
            />
            {description && <p className="text-slate-600 text-xs sm:text-sm">{description}</p>}
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pillar 1 */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
              <div className="font-bold text-xs text-purple-700 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4" />
                <span>Trụ cột 1: {usp1.title}</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">{usp1.description}</p>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
              <div className="font-bold text-xs text-red-600 flex items-center gap-1.5">
                <Video className="w-4 h-4" />
                <span>Trụ cột 2: {usp2.title}</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">{usp2.description}</p>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
              <div className="font-bold text-xs text-emerald-600 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Trụ cột 3: {usp3.title}</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">{usp3.description}</p>
            </div>

            {/* Pillar 4 */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
              <div className="font-bold text-xs text-[#00ADEF] flex items-center gap-1.5">
                <DollarSign className="w-4 h-4" />
                <span>Trụ cột 4: {usp4.title}</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">{usp4.solutionDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
