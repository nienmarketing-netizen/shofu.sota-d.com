import React from 'react';
import { 
  Plus, 
  Trash2, 
  Upload, 
  RefreshCw, 
  AlertTriangle, 
  ShieldAlert, 
  Info, 
  XCircle, 
  CheckCircle2 
} from 'lucide-react';
import { PainPointItem, applyFormat } from './types';

interface Section2PainPointsEditorProps {
  painBadge: string;
  setPainBadge: React.Dispatch<React.SetStateAction<string>>;
  painHeadline: string;
  setPainHeadline: React.Dispatch<React.SetStateAction<string>>;
  painDesc: string;
  setPainDesc: React.Dispatch<React.SetStateAction<string>>;
  painCard1Badge: string;
  setPainCard1Badge: React.Dispatch<React.SetStateAction<string>>;
  painCard1Title: string;
  setPainCard1Title: React.Dispatch<React.SetStateAction<string>>;
  painCard1Subtitle: string;
  setPainCard1Subtitle: React.Dispatch<React.SetStateAction<string>>;
  painCard1Items: PainPointItem[];
  handleAddCard1Item: () => void;
  handleDeleteCard1Item: (id: string) => void;
  handleUpdateCard1Item: (id: string, field: 'title' | 'description', val: string) => void;
  painCard1Quote: string;
  setPainCard1Quote: React.Dispatch<React.SetStateAction<string>>;
  painCard2Badge: string;
  setPainCard2Badge: React.Dispatch<React.SetStateAction<string>>;
  painCard2Title: string;
  setPainCard2Title: React.Dispatch<React.SetStateAction<string>>;
  painCard2Subtitle: string;
  setPainCard2Subtitle: React.Dispatch<React.SetStateAction<string>>;
  painCard2Items: PainPointItem[];
  handleAddCard2Item: () => void;
  handleDeleteCard2Item: (id: string) => void;
  handleUpdateCard2Item: (id: string, field: 'title' | 'description', val: string) => void;
  painCard2Conclusion: string;
  setPainCard2Conclusion: React.Dispatch<React.SetStateAction<string>>;
  painSemImage: string;
  setPainSemImage: React.Dispatch<React.SetStateAction<string>>;
  painSemImageSizeNote: string;
  painMatrixBadge: string;
  setPainMatrixBadge: React.Dispatch<React.SetStateAction<string>>;
  painMatrixTitle: string;
  setPainMatrixTitle: React.Dispatch<React.SetStateAction<string>>;
  painOldSchoolTitle: string;
  setPainOldSchoolTitle: React.Dispatch<React.SetStateAction<string>>;
  painOldSchoolPoints: string[];
  handleAddOldSchoolPoint: () => void;
  handleDeleteOldSchoolPoint: (index: number) => void;
  handleUpdateOldSchoolPoint: (index: number, val: string) => void;
  painOldSchoolFooter: string;
  setPainOldSchoolFooter: React.Dispatch<React.SetStateAction<string>>;
  painNewSchoolTitle: string;
  setPainNewSchoolTitle: React.Dispatch<React.SetStateAction<string>>;
  painNewSchoolPoints: string[];
  handleAddNewSchoolPoint: () => void;
  handleDeleteNewSchoolPoint: (index: number) => void;
  handleUpdateNewSchoolPoint: (index: number, val: string) => void;
  painNewSchoolFooter: string;
  setPainNewSchoolFooter: React.Dispatch<React.SetStateAction<string>>;
  painCtaText: string;
  setPainCtaText: React.Dispatch<React.SetStateAction<string>>;
  uploadingTarget: string;
  handleUploadImageFile: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
}

export const Section2PainPointsEditor: React.FC<Section2PainPointsEditorProps> = ({
  painBadge,
  setPainBadge,
  painHeadline,
  setPainHeadline,
  painDesc,
  setPainDesc,
  painCard1Badge,
  setPainCard1Badge,
  painCard1Title,
  setPainCard1Title,
  painCard1Subtitle,
  setPainCard1Subtitle,
  painCard1Items,
  handleAddCard1Item,
  handleDeleteCard1Item,
  handleUpdateCard1Item,
  painCard1Quote,
  setPainCard1Quote,
  painCard2Badge,
  setPainCard2Badge,
  painCard2Title,
  setPainCard2Title,
  painCard2Subtitle,
  setPainCard2Subtitle,
  painCard2Items,
  handleAddCard2Item,
  handleDeleteCard2Item,
  handleUpdateCard2Item,
  painCard2Conclusion,
  setPainCard2Conclusion,
  painSemImage,
  setPainSemImage,
  painSemImageSizeNote,
  painMatrixBadge,
  setPainMatrixBadge,
  painMatrixTitle,
  setPainMatrixTitle,
  painOldSchoolTitle,
  setPainOldSchoolTitle,
  painOldSchoolPoints,
  handleAddOldSchoolPoint,
  handleDeleteOldSchoolPoint,
  handleUpdateOldSchoolPoint,
  painOldSchoolFooter,
  setPainOldSchoolFooter,
  painNewSchoolTitle,
  setPainNewSchoolTitle,
  painNewSchoolPoints,
  handleAddNewSchoolPoint,
  handleDeleteNewSchoolPoint,
  handleUpdateNewSchoolPoint,
  painNewSchoolFooter,
  setPainNewSchoolFooter,
  painCtaText,
  setPainCtaText,
  uploadingTarget,
  handleUploadImageFile
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
      <div className="border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 font-mono text-xs font-bold mb-2">
          Section 2
        </div>
        <h2 className="font-heading font-extrabold text-2xl text-slate-900">
          Section 2: Góc khuất lâm sàng (Nỗi đau & Căn nguyên)
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Chỉnh sửa toàn bộ thành phần: Huy hiệu, tiêu đề, đoạn văn căn nguyên, 2 thẻ phân tích đối sánh lâm sàng & khoa học, đồ họa SEM vi thể, bảng ma trận đối chiếu 2 trường phái, và nút CTA.
        </p>
      </div>

      {/* 1. Badge Text */}
      <div className="space-y-2">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          1. Huy hiệu Badge Section 2
        </label>
        <input
          type="text"
          value={painBadge}
          onChange={(e) => setPainBadge(e.target.value)}
          placeholder="Góc khuất lâm sàng"
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-medium"
        />
      </div>

      {/* 2. Headline with Formatting Helper & Dark Preview */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            2. Headline (Tiêu đề chính)
          </label>
          <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
            <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
            <button
              type="button"
              onClick={() => applyFormat('strong', setPainHeadline)}
              title="In đậm chữ đang bôi đen"
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => applyFormat('cyan', setPainHeadline)}
              title="Tô màu xanh Shofu"
              className="px-2 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
            >
              Xanh
            </button>
            <button
              type="button"
              onClick={() => applyFormat('red', setPainHeadline)}
              title="Tô màu đỏ báo động"
              className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-red-600 font-bold border border-red-200 text-xs"
            >
              Đỏ
            </button>
          </div>
        </div>

        <textarea
          rows={3}
          value={painHeadline}
          onChange={(e) => setPainHeadline(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-heading font-bold"
        />

        {/* Live Preview on Dark Background */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2 text-left">
            Xem trước trên nền thực tế (Dark theme):
          </span>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 font-mono text-xs font-bold mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
            <span>{painBadge}</span>
          </div>
          <div 
            className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-snug max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: painHeadline }}
          />
          <div className="w-16 h-0.5 bg-red-500 mx-auto mt-4"></div>
        </div>
      </div>

      {/* 3. Description with Formatting Helper & Preview */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            3. Đoạn văn giải thích căn nguyên (Description)
          </label>
          <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => applyFormat('strong', setPainDesc)}
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => applyFormat('cyan', setPainDesc)}
              className="px-2 py-0.5 rounded bg-sky-50 text-[#00ADEF] font-bold border border-sky-200 text-xs"
            >
              Xanh
            </button>
            <button
              type="button"
              onClick={() => applyFormat('red', setPainDesc)}
              className="px-2 py-0.5 rounded bg-red-50 text-red-600 font-bold border border-red-200 text-xs"
            >
              Đỏ
            </button>
          </div>
        </div>

        <textarea
          rows={4}
          value={painDesc}
          onChange={(e) => setPainDesc(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-body leading-relaxed"
        />

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
            Xem trước đoạn văn trên nền tối:
          </span>
          <div 
            className="font-body text-sm text-slate-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: painDesc }}
          />
        </div>
      </div>

      {/* 4. Thẻ so sánh 1: Thực tế lâm sàng */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-slate-300" />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                4. Thẻ so sánh 1: Thực tế lâm sàng (Áp lực thao tác)
              </label>
              <span className="text-xs text-slate-500">Bao gồm Badge, Tiêu đề, Phụ đề, 4 rào cản và Quote</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddCard1Item}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold transition-colors shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm rào cản</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Badge Thẻ 1</label>
            <input
              type="text"
              value={painCard1Badge}
              onChange={(e) => setPainCard1Badge(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Tiêu đề Thẻ 1</label>
            <input
              type="text"
              value={painCard1Title}
              onChange={(e) => setPainCard1Title(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Phụ đề Thẻ 1</label>
          <input
            type="text"
            value={painCard1Subtitle}
            onChange={(e) => setPainCard1Subtitle(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700"
          />
        </div>

        {/* Danh sách rào cản thao tác */}
        <div className="space-y-3">
          <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
            Danh sách các rào cản lâm sàng ({painCard1Items.length} mục)
          </label>
          {painCard1Items.map((item, idx) => (
            <div key={item.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 relative">
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-700 text-white flex items-center justify-center font-mono font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700">Rào cản {idx + 1}</span>
                </div>
                {painCard1Items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleDeleteCard1Item(item.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded transition-colors"
                    title="Xóa rào cản này"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <div className="space-y-1">
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleUpdateCard1Item(item.id, 'title', e.target.value)}
                  placeholder="Tiêu đề rào cản..."
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-900"
                />
              </div>
              <div className="space-y-1">
                <textarea
                  rows={2}
                  value={item.description}
                  onChange={(e) => handleUpdateCard1Item(item.id, 'description', e.target.value)}
                  placeholder="Mô tả chi tiết khó khăn..."
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-600 font-body"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Câu Quote của Card 1 */}
        <div className="space-y-1">
          <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
            Câu trích dẫn tâm sự Bác sĩ (Quote)
          </label>
          <textarea
            rows={2}
            value={painCard1Quote}
            onChange={(e) => setPainCard1Quote(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs italic text-slate-700"
          />
        </div>
      </div>

      {/* 5. Thẻ so sánh 2: Căn nguyên khoa học */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <ShieldAlert className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                5. Thẻ so sánh 2: Căn nguyên khoa học (Giới hạn vật liệu cũ)
              </label>
              <span className="text-xs text-slate-500">Bao gồm Badge, Tiêu đề, Phụ đề, 4 giới hạn và Lời kết luận</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddCard2Item}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-mono text-xs font-bold transition-colors shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm giới hạn</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Badge Thẻ 2</label>
            <input
              type="text"
              value={painCard2Badge}
              onChange={(e) => setPainCard2Badge(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Tiêu đề Thẻ 2</label>
            <input
              type="text"
              value={painCard2Title}
              onChange={(e) => setPainCard2Title(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Phụ đề Thẻ 2</label>
          <input
            type="text"
            value={painCard2Subtitle}
            onChange={(e) => setPainCard2Subtitle(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700"
          />
        </div>

        {/* Danh sách giới hạn vật liệu cũ */}
        <div className="space-y-3">
          <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
            Danh sách các giới hạn vật liệu cũ ({painCard2Items.length} mục)
          </label>
          {painCard2Items.map((item, idx) => (
            <div key={item.id} className="p-4 rounded-xl bg-red-50/60 border border-red-200/80 space-y-2 relative">
              <div className="flex items-center justify-between border-b border-red-200/60 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center font-mono font-bold text-xs">
                    !
                  </span>
                  <span className="text-xs font-mono font-bold text-red-900">Giới hạn {idx + 1}</span>
                </div>
                {painCard2Items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleDeleteCard2Item(item.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded transition-colors"
                    title="Xóa giới hạn này"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <div className="space-y-1">
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleUpdateCard2Item(item.id, 'title', e.target.value)}
                  placeholder="Tiêu đề giới hạn hóa học..."
                  className="w-full bg-white border border-red-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-900"
                />
              </div>
              <div className="space-y-1">
                <textarea
                  rows={2}
                  value={item.description}
                  onChange={(e) => handleUpdateCard2Item(item.id, 'description', e.target.value)}
                  placeholder="Mô tả cơ chế thất bại..."
                  className="w-full bg-white border border-red-200 rounded-lg px-3 py-1.5 text-xs text-slate-600 font-body"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Kết luận thực tế của Card 2 */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
              Lời kết luận thực tế
            </label>
            <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => applyFormat('strong', setPainCard2Conclusion)}
                className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
              >
                B
              </button>
              <button
                type="button"
                onClick={() => applyFormat('red', setPainCard2Conclusion)}
                className="px-2 py-0.5 rounded bg-red-50 text-red-600 font-bold border border-red-200 text-xs"
              >
                Đỏ
              </button>
            </div>
          </div>
          <textarea
            rows={2}
            value={painCard2Conclusion}
            onChange={(e) => setPainCard2Conclusion(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
          />
        </div>
      </div>

      {/* 6. SEM Graphic Image Uploader & Suggested Size */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          6. Hình ảnh đồ họa SEM / Cơ chế sinh học vi thể
        </label>

        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Kích thước gợi ý:</strong> {painSemImageSizeNote}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="w-48 h-28 rounded-xl bg-slate-800 border border-slate-700 p-2 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
            <img 
              src={painSemImage} 
              alt="SEM Graphic preview" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1 space-y-3 w-full">
            <div>
              <span className="text-xs text-slate-400 font-medium block mb-1">Đường dẫn file ảnh hiện tại:</span>
              <input
                type="text"
                value={painSemImage}
                onChange={(e) => setPainSemImage(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-slate-200 focus:outline-none focus:border-red-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white text-xs font-mono font-bold cursor-pointer transition-colors shadow-sm ${uploadingTarget === 'pain-sem' ? 'opacity-60 cursor-not-allowed' : ''}`}>
                {uploadingTarget === 'pain-sem' ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Upload className="w-3.5 h-3.5" />
                )}
                <span>{uploadingTarget === 'pain-sem' ? 'ĐANG TẢI LÊN GITHUB...' : 'Tải ảnh từ máy tính'}</span>
                <input
                  type="file"
                  accept="image/*"
                  disabled={uploadingTarget === 'pain-sem'}
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleUploadImageFile(file, 'pain-sem', (url) => setPainSemImage(url));
                    }
                  }}
                />
              </label>
              <span className="text-xs text-slate-400 font-mono">Tự động commit vào public/image/ trên GitHub</span>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Quick Comparative Matrix */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="border-b border-slate-100 pb-3">
          <label className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
            7. Bảng ma trận đối chiếu 2 trường phái phục hồi
          </label>
          <span className="text-xs text-slate-500">Đối chiếu chi tiết giữa vật liệu cơ học thụ động cũ và hệ sinh thái Giomer sinh học mới</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Badge Ma trận</label>
            <input
              type="text"
              value={painMatrixBadge}
              onChange={(e) => setPainMatrixBadge(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Tiêu đề Ma trận</label>
            <input
              type="text"
              value={painMatrixTitle}
              onChange={(e) => setPainMatrixTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
            />
          </div>
        </div>

        {/* 2 Cột đối chiếu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          {/* Cột 1: Vật liệu cũ */}
          <div className="p-5 rounded-2xl bg-red-50/50 border border-red-200 space-y-4">
            <div className="flex items-center justify-between border-b border-red-200 pb-2">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-xs font-mono font-bold text-red-900 uppercase">Cột 1: Vật liệu cũ</span>
              </div>
              <button
                type="button"
                onClick={handleAddOldSchoolPoint}
                className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-red-700 hover:text-red-900 bg-red-100 hover:bg-red-200 px-2 py-1 rounded-lg"
              >
                <Plus className="w-3 h-3" />
                <span>Thêm dòng</span>
              </button>
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase">Tiêu đề cột 1</label>
              <input
                type="text"
                value={painOldSchoolTitle}
                onChange={(e) => setPainOldSchoolTitle(e.target.value)}
                className="w-full bg-white border border-red-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-900"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase">Các luận điểm hạn chế:</label>
              {painOldSchoolPoints.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-[10px] shrink-0 font-bold">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    value={pt}
                    onChange={(e) => handleUpdateOldSchoolPoint(idx, e.target.value)}
                    className="flex-1 bg-white border border-red-200 rounded-lg px-3 py-1.5 text-xs text-slate-800"
                  />
                  {painOldSchoolPoints.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleDeleteOldSchoolPoint(idx)}
                      className="text-red-500 hover:text-red-700 p-1"
                      title="Xóa dòng này"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-1 pt-1 border-t border-red-200/60">
              <label className="block text-[10px] font-mono text-red-700 font-bold uppercase">Hậu quả (Footer)</label>
              <input
                type="text"
                value={painOldSchoolFooter}
                onChange={(e) => setPainOldSchoolFooter(e.target.value)}
                className="w-full bg-white border border-red-200 rounded-lg px-3 py-1.5 text-xs text-red-700 font-semibold"
              />
            </div>
          </div>

          {/* Cột 2: Hệ sinh thái Giomer */}
          <div className="p-5 rounded-2xl bg-sky-50/50 border border-sky-200 space-y-4">
            <div className="flex items-center justify-between border-b border-sky-200 pb-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00ADEF]" />
                <span className="text-xs font-mono font-bold text-sky-900 uppercase">Cột 2: Hệ sinh thái Giomer</span>
              </div>
              <button
                type="button"
                onClick={handleAddNewSchoolPoint}
                className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-sky-700 hover:text-sky-900 bg-sky-100 hover:bg-sky-200 px-2 py-1 rounded-lg"
              >
                <Plus className="w-3 h-3" />
                <span>Thêm dòng</span>
              </button>
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase">Tiêu đề cột 2</label>
              <input
                type="text"
                value={painNewSchoolTitle}
                onChange={(e) => setPainNewSchoolTitle(e.target.value)}
                className="w-full bg-white border border-sky-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-900"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase">Các luận điểm trị liệu:</label>
              {painNewSchoolPoints.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center text-[10px] shrink-0 font-bold">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    value={pt}
                    onChange={(e) => handleUpdateNewSchoolPoint(idx, e.target.value)}
                    className="flex-1 bg-white border border-sky-200 rounded-lg px-3 py-1.5 text-xs text-slate-800"
                  />
                  {painNewSchoolPoints.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleDeleteNewSchoolPoint(idx)}
                      className="text-red-500 hover:text-red-700 p-1"
                      title="Xóa dòng này"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-1 pt-1 border-t border-sky-200/60">
              <label className="block text-[10px] font-mono text-sky-700 font-bold uppercase">Thành quả (Footer)</label>
              <input
                type="text"
                value={painNewSchoolFooter}
                onChange={(e) => setPainNewSchoolFooter(e.target.value)}
                className="w-full bg-white border border-sky-200 rounded-lg px-3 py-1.5 text-xs text-[#00ADEF] font-semibold"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 8. CTA Button */}
      <div className="space-y-2 pt-4 border-t border-slate-100">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          8. Text nút CTA Button Section 2
        </label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={painCtaText}
            onChange={(e) => setPainCtaText(e.target.value)}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-mono font-bold"
          />
          <div className="px-5 py-3 rounded-xl bg-[#00ADEF] text-white text-xs font-mono font-bold whitespace-nowrap shadow-sm">
            {painCtaText}
          </div>
        </div>
      </div>
    </div>
  );
};
