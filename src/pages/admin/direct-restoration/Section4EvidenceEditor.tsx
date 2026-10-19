import React from 'react';
import { Plus, Trash2, ArrowRight, Eye } from 'lucide-react';
import { EvidenceItem, applyFormat } from './types';

interface Section4EvidenceEditorProps {
  evidenceBadge: string;
  setEvidenceBadge: React.Dispatch<React.SetStateAction<string>>;
  evidenceHeadline: string;
  setEvidenceHeadline: React.Dispatch<React.SetStateAction<string>>;
  evidenceDesc: string;
  setEvidenceDesc: React.Dispatch<React.SetStateAction<string>>;
  evidenceCtaText: string;
  setEvidenceCtaText: React.Dispatch<React.SetStateAction<string>>;
  adhesiveBadge: string;
  setAdhesiveBadge: React.Dispatch<React.SetStateAction<string>>;
  adhesiveTitle: string;
  setAdhesiveTitle: React.Dispatch<React.SetStateAction<string>>;
  adhesiveSubtitle: string;
  setAdhesiveSubtitle: React.Dispatch<React.SetStateAction<string>>;
  adhesiveItems: EvidenceItem[];
  handleAddAdhesiveItem: () => void;
  handleDeleteAdhesiveItem: (id: string) => void;
  handleUpdateAdhesiveItem: (id: string, field: 'title' | 'description', val: string) => void;
  compositeBadge: string;
  setCompositeBadge: React.Dispatch<React.SetStateAction<string>>;
  compositeTitle: string;
  setCompositeTitle: React.Dispatch<React.SetStateAction<string>>;
  compositeSubtitle: string;
  setCompositeSubtitle: React.Dispatch<React.SetStateAction<string>>;
  compositeItems: EvidenceItem[];
  handleAddCompositeItem: () => void;
  handleDeleteCompositeItem: (id: string) => void;
  handleUpdateCompositeItem: (id: string, field: 'title' | 'description', val: string) => void;
}

export const Section4EvidenceEditor: React.FC<Section4EvidenceEditorProps> = ({
  evidenceBadge,
  setEvidenceBadge,
  evidenceHeadline,
  setEvidenceHeadline,
  evidenceDesc,
  setEvidenceDesc,
  evidenceCtaText,
  setEvidenceCtaText,
  adhesiveBadge,
  setAdhesiveBadge,
  adhesiveTitle,
  setAdhesiveTitle,
  adhesiveSubtitle,
  setAdhesiveSubtitle,
  adhesiveItems,
  handleAddAdhesiveItem,
  handleDeleteAdhesiveItem,
  handleUpdateAdhesiveItem,
  compositeBadge,
  setCompositeBadge,
  compositeTitle,
  setCompositeTitle,
  compositeSubtitle,
  setCompositeSubtitle,
  compositeItems,
  handleAddCompositeItem,
  handleDeleteCompositeItem,
  handleUpdateCompositeItem
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
      {/* Header Title */}
      <div className="border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 font-mono text-xs font-bold mb-2">
          Section 4
        </div>
        <h2 className="font-heading font-extrabold text-2xl text-slate-900">
          Bằng chứng khoa học (Scientific Evidence)
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Quản lý nội dung công bố khoa học, thử nghiệm kỹ thuật keo dán và bằng chứng cơ học composite
        </p>
      </div>

      {/* 1. Header & Giới thiệu Section */}
      <div className="space-y-4">
        <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
          1. Tiêu đề & Giới thiệu Section Bằng chứng khoa học
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            Badge nhỏ (Nhãn trên cùng)
          </label>
          <input
            type="text"
            value={evidenceBadge}
            onChange={(e) => setEvidenceBadge(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              Tiêu đề chính (Headline)
            </label>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => applyFormat('strong', setEvidenceHeadline)}
                className="px-2 py-1 text-[11px] font-mono bg-slate-100 hover:bg-slate-200 rounded font-bold"
              >
                [B]
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setEvidenceHeadline)}
                className="px-2 py-1 text-[11px] font-mono bg-sky-50 text-sky-700 hover:bg-sky-100 rounded font-bold"
              >
                [Xanh]
              </button>
            </div>
          </div>
          <input
            type="text"
            value={evidenceHeadline}
            onChange={(e) => setEvidenceHeadline(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-bold"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              Mô tả tổng quan Section
            </label>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => applyFormat('strong', setEvidenceDesc)}
                className="px-2 py-1 text-[11px] font-mono bg-slate-100 hover:bg-slate-200 rounded font-bold"
              >
                [B]
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setEvidenceDesc)}
                className="px-2 py-1 text-[11px] font-mono bg-sky-50 text-sky-700 hover:bg-sky-100 rounded font-bold"
              >
                [Xanh]
              </button>
              <button
                type="button"
                onClick={() => applyFormat('u', setEvidenceDesc)}
                className="px-2 py-1 text-[11px] font-mono bg-slate-100 hover:bg-slate-200 rounded font-bold underline"
              >
                [Gạch chân]
              </button>
            </div>
          </div>
          <textarea
            rows={3}
            value={evidenceDesc}
            onChange={(e) => setEvidenceDesc(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 font-body leading-relaxed"
          />

          {/* Live Preview trực quan mô tả Section 4 */}
          <div className="mt-3 rounded-2xl bg-slate-900 border border-slate-800 p-4 shadow-sm space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <div className="flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-[#00ADEF]" />
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Xem trước trực quan (Live Preview)
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">
                Khung nền thực tế Section 4
              </span>
            </div>
            <div 
              className="text-sm font-body text-slate-300 leading-relaxed [&_strong]:text-white [&_strong]:font-bold"
              dangerouslySetInnerHTML={{
                __html: evidenceDesc || '<span class="text-slate-500 italic text-xs">Chưa có nội dung mô tả... Vui lòng nhập nội dung ở trên để xem trước.</span>'
              }}
            />
          </div>
        </div>
      </div>

      {/* 2. Box 3: Thử nghiệm kỹ thuật keo dán */}
      <div className="space-y-5 pt-6 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-mono font-bold uppercase mb-1">
              Box 3
            </div>
            <div className="text-sm font-heading font-bold text-slate-900">
              3. Thử nghiệm kỹ thuật keo dán (BeautiBond Xtreme)
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold text-slate-600 uppercase">
              Badge Box 3
            </label>
            <input
              type="text"
              value={adhesiveBadge}
              onChange={(e) => setAdhesiveBadge(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-mono font-bold text-amber-800"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold text-slate-600 uppercase">
              Tiêu đề Box 3
            </label>
            <input
              type="text"
              value={adhesiveTitle}
              onChange={(e) => setAdhesiveTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-mono font-bold text-slate-600 uppercase">
            Phụ đề / Thông điệp chính Box 3
          </label>
          <input
            type="text"
            value={adhesiveSubtitle}
            onChange={(e) => setAdhesiveSubtitle(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700"
          />
        </div>

        {/* Sub-boxes: Danh sách các chỉ số thử nghiệm kỹ thuật */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              Danh sách Box chỉ số & kết quả thử nghiệm ({adhesiveItems.length} box)
            </label>
            <button
              type="button"
              onClick={handleAddAdhesiveItem}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-mono text-[11px] font-bold shadow-xs transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Thêm Box chỉ số</span>
            </button>
          </div>

          <div className="space-y-3">
            {adhesiveItems.map((item, idx) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/80 space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-mono font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-900 uppercase">
                      Box chỉ số {idx + 1}
                    </span>
                  </div>

                  {adhesiveItems.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleDeleteAdhesiveItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-lg transition-colors cursor-pointer"
                      title="Xóa box này"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
                  <div className="sm:col-span-5 space-y-1">
                    <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                      Tiêu đề chỉ số (VD: Lực dán trượt 30 – 35 MPa:)
                    </label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleUpdateAdhesiveItem(item.id, 'title', e.target.value)}
                      className="w-full bg-white border border-amber-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-1">
                    <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                      Mô tả chi tiết / Kết quả thử nghiệm
                    </label>
                    <textarea
                      rows={2}
                      value={item.description}
                      onChange={(e) => handleUpdateAdhesiveItem(item.id, 'description', e.target.value)}
                      className="w-full bg-white border border-amber-200 rounded-xl px-3 py-2 text-xs text-slate-700 leading-relaxed font-body"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Box 4: Bằng chứng cơ học composite */}
      <div className="space-y-5 pt-6 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-bold uppercase mb-1">
              Box 4
            </div>
            <div className="text-sm font-heading font-bold text-slate-900">
              4. Bằng chứng cơ học composite (Beautifil II LS & Injectable X)
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold text-slate-600 uppercase">
              Badge Box 4
            </label>
            <input
              type="text"
              value={compositeBadge}
              onChange={(e) => setCompositeBadge(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-mono font-bold text-emerald-800"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold text-slate-600 uppercase">
              Tiêu đề Box 4
            </label>
            <input
              type="text"
              value={compositeTitle}
              onChange={(e) => setCompositeTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-mono font-bold text-slate-600 uppercase">
            Phụ đề / Thông điệp chính Box 4
          </label>
          <input
            type="text"
            value={compositeSubtitle}
            onChange={(e) => setCompositeSubtitle(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700"
          />
        </div>

        {/* Sub-boxes: Danh sách các Box sản phẩm & cơ học */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              Danh sách Box dòng sản phẩm & chứng minh cơ học ({compositeItems.length} box)
            </label>
            <button
              type="button"
              onClick={handleAddCompositeItem}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-[11px] font-bold shadow-xs transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Thêm Box sản phẩm</span>
            </button>
          </div>

          <div className="space-y-4">
            {compositeItems.map((item, idx) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-200 space-y-3.5 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-900 uppercase">
                      Box sản phẩm {idx + 1}
                    </span>
                  </div>

                  {compositeItems.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleDeleteCompositeItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-lg transition-colors cursor-pointer"
                      title="Xóa box sản phẩm này"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
                    Tên dòng sản phẩm / Tiêu đề Box
                  </label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => handleUpdateCompositeItem(item.id, 'title', e.target.value)}
                    className="w-full bg-white border border-emerald-200 rounded-xl px-3.5 py-2 text-xs font-bold text-emerald-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
                      Nội dung thông số cơ học & mô tả chi tiết
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono">Hỗ trợ HTML: &lt;strong&gt;, &lt;span&gt;</span>
                  </div>
                  <textarea
                    rows={3}
                    value={item.description}
                    onChange={(e) => handleUpdateCompositeItem(item.id, 'description', e.target.value)}
                    className="w-full bg-white border border-emerald-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 leading-relaxed font-body"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Section 4 CTA Button */}
      <div className="space-y-2 pt-4 border-t border-slate-100">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          4. Text nút CTA Button Section 4
        </label>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <input
            type="text"
            value={evidenceCtaText}
            onChange={(e) => setEvidenceCtaText(e.target.value)}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-mono font-bold"
          />
          <div className="px-6 py-3.5 rounded-full bg-[#00ADEF] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
            <span>{evidenceCtaText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/80" />
          </div>
        </div>
      </div>
    </div>
  );
};
