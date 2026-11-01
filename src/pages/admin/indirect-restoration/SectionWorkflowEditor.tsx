import React, { useRef } from 'react';
import { 
  GitBranch, 
  Upload, 
  Sparkles, 
  ArrowRight, 
  AlertTriangle, 
  AlertCircle,
  ShieldAlert,
  DollarSign,
  Flame,
  Zap,
  Ban,
  XCircle,
  Activity,
  FileWarning,
  CheckCircle2, 
  Layers,
  Coins,
  TrendingUp,
  Clock,
  Palette,
  RotateCcw,
  Image as ImageIcon
} from 'lucide-react';
import { WorkflowData, WorkflowInterfaceItem, WorkflowStepItem, WorkflowConsequenceItem } from './types';

export const CONSEQUENCE_ICONS = [
  { value: 'Coins', label: 'Coins (Chi phí vật tư / Tiền)' },
  { value: 'TrendingUp', label: 'TrendingUp (Xu hướng leo thang / Tăng rủi ro)' },
  { value: 'Clock', label: 'Clock (Thời gian / Thao tác)' },
  { value: 'AlertTriangle', label: 'AlertTriangle (Cảnh báo tam giác)' },
  { value: 'AlertCircle', label: 'AlertCircle (Cảnh báo tròn)' },
  { value: 'ShieldAlert', label: 'ShieldAlert (Lá chắn cảnh báo)' },
  { value: 'DollarSign', label: 'DollarSign (Đồng tiền)' },
  { value: 'Flame', label: 'Flame (Nguy cơ / Nóng)' },
  { value: 'Zap', label: 'Zap (Tia chớp / Sốc)' },
  { value: 'Ban', label: 'Ban (Cấm / Triệt tiêu)' },
  { value: 'XCircle', label: 'XCircle (Thất bại / Sai sót)' },
  { value: 'Activity', label: 'Activity (Nhịp độ / Biến động)' },
  { value: 'FileWarning', label: 'FileWarning (Cảnh báo hồ sơ)' }
];

export const CONSEQUENCE_COLORS = [
  { label: 'Xanh ngọc', value: '#34d399' },
  { label: 'Đỏ hồng', value: '#fb7185' },
  { label: 'Vàng hổ phách', value: '#fbbf24' },
  { label: 'Xanh Shofu', value: '#00ADEF' },
  { label: 'Đỏ tươi', value: '#ef4444' },
  { label: 'Tím', value: '#a855f7' },
  { label: 'Cam', value: '#f97316' }
];

export const renderConsequenceIcon = (
  iconName?: string,
  iconSvg?: string,
  iconColor?: string,
  className = "w-6 h-6"
) => {
  const isHexOrRgb = iconColor && (iconColor.startsWith('#') || iconColor.startsWith('rgb'));
  const colorClass = (!isHexOrRgb && iconColor) ? iconColor : '';
  const colorStyle = isHexOrRgb ? { color: iconColor } : undefined;

  if (iconSvg) {
    if (iconSvg.startsWith('<svg')) {
      return (
        <span
          className={`inline-flex items-center justify-center [&>svg]:w-full [&>svg]:h-full shrink-0 ${className} ${colorClass}`}
          style={colorStyle}
          dangerouslySetInnerHTML={{ __html: iconSvg }}
        />
      );
    }
    return <img src={iconSvg} alt="Custom SVG" className={`${className} object-contain shrink-0`} style={colorStyle} />;
  }

  const props = {
    className: `${className} shrink-0 ${colorClass}`,
    style: colorStyle
  };

  switch (iconName) {
    case 'Coins': return <Coins {...props} />;
    case 'TrendingUp': return <TrendingUp {...props} />;
    case 'Clock': return <Clock {...props} />;
    case 'AlertTriangle': return <AlertTriangle {...props} />;
    case 'AlertCircle': return <AlertCircle {...props} />;
    case 'ShieldAlert': return <ShieldAlert {...props} />;
    case 'DollarSign': return <DollarSign {...props} />;
    case 'Flame': return <Flame {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'Ban': return <Ban {...props} />;
    case 'XCircle': return <XCircle {...props} />;
    case 'Activity': return <Activity {...props} />;
    case 'FileWarning': return <FileWarning {...props} />;
    default: return <Coins {...props} />;
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

interface SectionWorkflowEditorProps {
  workflow: WorkflowData;
  setWorkflow: React.Dispatch<React.SetStateAction<WorkflowData>>;
  onUploadImage: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
  isUploadingImage: boolean;
  uploadingTarget: string;
}

export const SectionWorkflowEditor: React.FC<SectionWorkflowEditorProps> = ({
  workflow,
  setWorkflow,
  onUploadImage,
  isUploadingImage,
  uploadingTarget
}) => {
  const activeInputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const applyFormat = (tag: 'strong' | 'cyan' | 'red' | 'amber') => {
    const el = activeInputRef.current;
    if (!el) return;
    const start = el.selectionStart || 0;
    const end = el.selectionEnd || 0;
    const val = el.value;
    const selected = val.substring(start, end) || 'văn bản';
    let formatted = '';
    if (tag === 'strong') formatted = `<strong>${selected}</strong>`;
    if (tag === 'cyan') formatted = `<span class="text-[#00ADEF]">${selected}</span>`;
    if (tag === 'red') formatted = `<strong class="text-red-400 font-bold">${selected}</strong>`;
    if (tag === 'amber') formatted = `<strong class="text-amber-400 font-bold">${selected}</strong>`;

    const newVal = val.substring(0, start) + formatted + val.substring(end);
    el.value = newVal;
    el.dispatchEvent(new Event('input', { bubbles: true }));
  };

  const handleUpdate = <K extends keyof WorkflowData>(key: K, value: WorkflowData[K]) => {
    setWorkflow((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleUpdateInterface = (index: number, field: keyof WorkflowInterfaceItem, value: string) => {
    setWorkflow((prev) => {
      const updated = [...(prev.interfaces || [])];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, interfaces: updated };
    });
  };

  const handleUpdateStep = (index: number, field: keyof WorkflowStepItem, value: string) => {
    setWorkflow((prev) => {
      const updated = [...(prev.steps || [])];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, steps: updated };
    });
  };

  const handleUpdateConsequence = (
    index: number,
    field: 'text' | 'iconName' | 'iconSvg' | 'iconColor',
    value: string
  ) => {
    setWorkflow((prev) => {
      const defaultIcons = ['Coins', 'TrendingUp', 'Clock'];
      const defaultColors = ['#34d399', '#fb7185', '#fbbf24'];
      const updated = [...(prev.consequences || [])];
      const cur = updated[index];
      const curObj = typeof cur === 'string'
        ? {
            iconName: defaultIcons[index % defaultIcons.length],
            iconColor: defaultColors[index % defaultColors.length],
            text: cur
          }
        : { ...cur };

      if (field === 'iconSvg' && !value) {
        delete (curObj as any).iconSvg;
      } else {
        (curObj as any)[field] = value;
      }

      updated[index] = curObj;
      return { ...prev, consequences: updated };
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Info */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#00ADEF]">
            <GitBranch className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-heading font-extrabold text-slate-900">
              Section 5: Phác đồ lâm sàng & Ma trận chai lọ
            </h2>
            <p className="text-xs text-slate-500">
              Biên tập khối Triệt tiêu sai số lâm sàng & tài chính, Sự xung đột hóa học 3 bề mặt, Hậu quả chuỗi thao tác và Phác đồ 3 bước chuẩn hóa.
            </p>
          </div>
        </div>
      </div>

      {/* BLOCK 1: TIÊU ĐỀ & ẢNH ĐẠI DIỆN SECTION */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            1. Tiêu đề chính & Ảnh ma trận chai lọ
          </h3>
          <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-lg border border-slate-200">
            <span className="text-[11px] font-bold text-slate-500 mr-1 hidden sm:inline">Chèn nhanh:</span>
            <button
              type="button"
              onClick={() => applyFormat('strong')}
              className="px-2 py-0.5 rounded text-[11px] font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              In đậm
            </button>
            <button
              type="button"
              onClick={() => applyFormat('cyan')}
              className="px-2 py-0.5 rounded text-[11px] font-bold bg-sky-50 border border-sky-200 text-[#00ADEF] hover:bg-sky-100 cursor-pointer"
            >
              Xanh Shofu
            </button>
            <button
              type="button"
              onClick={() => applyFormat('red')}
              className="px-2 py-0.5 rounded text-[11px] font-bold bg-red-50 border border-red-200 text-red-500 hover:bg-red-100 cursor-pointer"
            >
              Màu Đỏ
            </button>
            <button
              type="button"
              onClick={() => applyFormat('amber')}
              className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 border border-amber-200 text-amber-600 hover:bg-amber-100 cursor-pointer"
            >
              Màu Vàng
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Badge tiêu đề (Viên thuốc nhỏ phía trên)
              </label>
              <input
                type="text"
                value={workflow.badge || ''}
                onChange={(e) => handleUpdate('badge', e.target.value)}
                placeholder="Triệt tiêu sai số lâm sàng & tài chính"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00ADEF] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tiêu đề chính (Hỗ trợ HTML & ngắt dòng)
              </label>
              <textarea
                rows={3}
                ref={(el) => { if (el) el.onfocus = () => { activeInputRef.current = el; }; }}
                value={workflow.headline || ''}
                onChange={(e) => handleUpdate('headline', e.target.value)}
                placeholder='Đập tan "ma trận" <br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADEF] to-blue-400">chai lọ phục hình</span>'
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-mono focus:border-[#00ADEF] outline-none"
              />
              {workflow.headline && (
                <div className="mt-2 p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Xem trước Tiêu đề:</span>
                  <div 
                    className="font-heading font-extrabold text-lg text-white leading-snug"
                    dangerouslySetInnerHTML={{ __html: workflow.headline }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Ảnh minh họa ma trận chai lọ (Đường dẫn hoặc tải file)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={workflow.image || ''}
                  onChange={(e) => handleUpdate('image', e.target.value)}
                  placeholder="/images/ma-tran-chai-lo-phuc-hinh.webp"
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono focus:border-[#00ADEF] outline-none"
                />
                <label className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer inline-flex items-center gap-1.5 shrink-0 border border-slate-200 transition-colors">
                  <Upload className="w-3.5 h-3.5 text-slate-500" />
                  <span>{isUploadingImage && uploadingTarget === 'workflow_image' ? 'Đang tải...' : 'Tải ảnh'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={isUploadingImage}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        onUploadImage(file, 'workflow_image', (url) => handleUpdate('image', url));
                      }
                    }}
                  />
                </label>
              </div>

              {workflow.image && (
                <div className="mt-3 p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center">
                  <img
                    src={workflow.image}
                    alt="Preview ma trận chai lọ"
                    className="max-h-36 w-auto object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 2: NGUỒN GỐC MA TRẬN: SỰ XUNG ĐỘT HÓA HỌC */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            2. Nguồn gốc "ma trận": Sự xung đột hóa học (3 Giao diện bám dính)
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Giải thích cơ chế lý hóa của từng giao diện bám dính (Sứ thủy tinh, Zirconia & kim loại, Mô răng)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Tiêu đề phụ nhóm (interfacesTitle)
            </label>
            <input
              type="text"
              ref={(el) => { if (el) el.onfocus = () => { activeInputRef.current = el; }; }}
              value={workflow.interfacesTitle || ''}
              onChange={(e) => handleUpdate('interfacesTitle', e.target.value)}
              placeholder='Nguồn gốc "ma trận": <span class="text-[#00ADEF]">Sự xung đột hóa học</span>'
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00ADEF] outline-none"
            />
            {workflow.interfacesTitle && (
              <div className="mt-2 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Xem trước:</span>
                <div 
                  className="font-heading font-bold text-sm text-white"
                  dangerouslySetInnerHTML={{ __html: workflow.interfacesTitle }}
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Đoạn văn giải thích (interfacesSubtitle)
            </label>
            <textarea
              rows={2}
              ref={(el) => { if (el) el.onfocus = () => { activeInputRef.current = el; }; }}
              value={workflow.interfacesSubtitle || ''}
              onChange={(e) => handleUpdate('interfacesSubtitle', e.target.value)}
              placeholder='Để thấu hiểu "ma trận chai lọ", cần nhìn vào...'
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00ADEF] outline-none"
            />
            {workflow.interfacesSubtitle && (
              <div className="mt-2 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Xem trước:</span>
                <div 
                  className="text-xs text-slate-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: workflow.interfacesSubtitle }}
                />
              </div>
            )}
          </div>
        </div>

        {/* 3 Interfaces Cards */}
        <div className="space-y-4">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
            3 Giao diện bám dính cụ thể
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(workflow.interfaces || []).map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between space-y-3">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[#00ADEF]">
                      Giao diện #{idx + 1}
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Tên giao diện</label>
                    <input
                      type="text"
                      value={item.title || ''}
                      onChange={(e) => handleUpdateInterface(idx, 'title', e.target.value)}
                      placeholder="Sứ thủy tinh"
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold focus:border-[#00ADEF] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Hình ảnh đại diện</label>
                    <div className="flex gap-1.5">
                      <input
                        type="text"
                        value={item.image || ''}
                        onChange={(e) => handleUpdateInterface(idx, 'image', e.target.value)}
                        placeholder="/images/su-thuy-tinh.webp"
                        className="flex-1 px-2.5 py-1.5 rounded-lg border border-slate-200 text-[11px] font-mono focus:border-[#00ADEF] outline-none"
                      />
                      <label className="px-2.5 py-1.5 bg-white hover:bg-slate-100 text-slate-700 rounded-lg text-[11px] font-bold cursor-pointer border border-slate-200 transition-colors shrink-0">
                        <Upload className="w-3 h-3" />
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              onUploadImage(file, `interface_${idx}`, (url) => handleUpdateInterface(idx, 'image', url));
                            }
                          }}
                        />
                      </label>
                    </div>
                    {item.image && (
                      <div className="mt-2 p-2 bg-slate-900 rounded-lg flex items-center justify-center">
                        <img src={item.image} alt={item.title} className="max-h-20 w-auto object-contain" referrerPolicy="no-referrer" />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Mô tả lý hóa (Hỗ trợ HTML)</label>
                    <textarea
                      rows={3}
                      ref={(el) => { if (el) el.onfocus = () => { activeInputRef.current = el; }; }}
                      value={item.description || ''}
                      onChange={(e) => handleUpdateInterface(idx, 'description', e.target.value)}
                      placeholder="Đòi hỏi soi mòn vi cơ học..."
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-[#00ADEF] outline-none"
                    />
                    {item.description && (
                      <div className="mt-1.5 p-2 bg-slate-900 rounded-lg border border-slate-800">
                        <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Xem trước:</span>
                        <div 
                          className="text-[11px] text-slate-300 leading-snug"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Khối nhấn mạnh (Callout) */}
        <div className="pt-2">
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Khung nhấn mạnh lý hóa màu đỏ (calloutText)
          </label>
          <textarea
            rows={2}
            ref={(el) => { if (el) el.onfocus = () => { activeInputRef.current = el; }; }}
            value={workflow.calloutText || ''}
            onChange={(e) => handleUpdate('calloutText', e.target.value)}
            placeholder='Chính sự khác biệt lý hóa khắt khe này đã ép buộc quy trình lâm sàng phải...'
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00ADEF] outline-none"
          />
          {workflow.calloutText && (
            <div className="mt-2 p-3 bg-red-950/40 border border-red-500/30 rounded-xl text-center">
              <span className="text-[10px] uppercase font-bold text-red-300 block mb-1">Xem trước Khung nhấn mạnh:</span>
              <div 
                className="text-xs sm:text-sm text-red-200 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: workflow.calloutText }}
              />
            </div>
          )}
        </div>
      </div>

      {/* BLOCK 3: HẬU QUẢ CỦA CHUỖI THAO TÁC CỒNG KỀNH */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            3. Hậu quả của chuỗi thao tác cồng kềnh (COGS, Rủi ro, Cảnh báo)
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Nêu bật các nguy cơ đội chi phí vật tư và sai số thao tác lâm sàng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tiêu đề khối hậu quả (consequencesTitle)
              </label>
              <input
                type="text"
                ref={(el) => { if (el) el.onfocus = () => { activeInputRef.current = el; }; }}
                value={workflow.consequencesTitle || ''}
                onChange={(e) => handleUpdate('consequencesTitle', e.target.value)}
                placeholder='Hậu quả của chuỗi <br class="sm:hidden" /> thao tác cồng kềnh'
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00ADEF] outline-none"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                3 Điểm hậu quả chính (Icon, Màu sắc & Nội dung)
              </label>
              {(workflow.consequences || [
                'Tỷ lệ <strong class="text-white">chi phí vật tư (COGS) liên tục leo thang</strong> do phức tạp trong <strong class="text-white">quản lý tồn kho</strong>.',
                'Sự gia tăng tuyến tính của số lượng thao tác lâm sàng tỷ lệ thuận với rủi ro xảy ra <strong class="text-white">"sai số nhân sự"</strong>.',
                'Chỉ một khoảnh khắc đưa nhầm chai Primer hoặc sai lệch thời gian lưu dung dịch, <strong class="text-white">toàn bộ cấu trúc dán dính sẽ sụp đổ.</strong>'
              ]).map((cons, cIdx) => {
                const defaultIcons = ['Coins', 'TrendingUp', 'Clock'];
                const defaultColors = ['#34d399', '#fb7185', '#fbbf24'];
                const itemObj: WorkflowConsequenceItem = typeof cons === 'string'
                  ? {
                      iconName: defaultIcons[cIdx % 3],
                      iconColor: defaultColors[cIdx % 3],
                      text: cons
                    }
                  : cons;
                const itemIconName = itemObj.iconName || defaultIcons[cIdx % 3];
                const itemIconColor = itemObj.iconColor || defaultColors[cIdx % 3];
                const itemIconSvg = itemObj.iconSvg;
                const itemText = itemObj.text || '';

                return (
                  <div key={cIdx} className="bg-slate-50/90 border border-slate-200 rounded-2xl p-4 space-y-3.5 shadow-sm">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/80">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-sm">
                          {renderConsequenceIcon(itemIconName, itemIconSvg, itemIconColor, "w-6 h-6")}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900">Điểm hậu quả #{cIdx + 1}</span>
                            {itemIconSvg && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-50 text-[#00ADEF] border border-sky-200">
                                SVG tuỳ chọn
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-500">
                            {itemIconSvg ? 'Đang dùng icon SVG tải lên' : `Icon mặc định: ${itemIconName}`}
                          </span>
                        </div>
                      </div>

                      {itemIconSvg && (
                        <button
                          type="button"
                          onClick={() => handleUpdateConsequence(cIdx, 'iconSvg', '')}
                          className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                          title="Xóa icon SVG và quay lại icon mặc định"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Về mặc định</span>
                        </button>
                      )}
                    </div>

                    {/* Icon Selection & SVG Upload */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Chọn Icon trong thư viện
                        </label>
                        <select
                          value={itemIconName}
                          onChange={(e) => handleUpdateConsequence(cIdx, 'iconName', e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-800 focus:border-[#00ADEF] outline-none font-medium"
                        >
                          {CONSEQUENCE_ICONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Hoặc tải lên icon SVG
                        </label>
                        <label className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold cursor-pointer transition-colors shadow-sm">
                          <Upload className="w-3.5 h-3.5 text-slate-500" />
                          <span className="truncate">{itemIconSvg ? 'Thay đổi SVG' : 'Tải lên icon .SVG'}</span>
                          <input
                            type="file"
                            accept=".svg,image/svg+xml"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                handleSvgUpload(file, (svgStr) => handleUpdateConsequence(cIdx, 'iconSvg', svgStr));
                              }
                            }}
                          />
                        </label>
                      </div>
                    </div>

                    {/* Color Customization */}
                    <div className="pt-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                          <Palette className="w-3.5 h-3.5 text-slate-400" />
                          <span>Màu sắc Icon</span>
                        </label>
                        <span className="text-[10px] font-mono font-bold text-slate-500">{itemIconColor}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {CONSEQUENCE_COLORS.map((clr) => (
                          <button
                            key={clr.value}
                            type="button"
                            onClick={() => handleUpdateConsequence(cIdx, 'iconColor', clr.value)}
                            className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 cursor-pointer ${
                              itemIconColor.toLowerCase() === clr.value.toLowerCase() ? 'border-slate-900 scale-110 shadow-sm' : 'border-white'
                            }`}
                            style={{ backgroundColor: clr.value }}
                            title={clr.label}
                          />
                        ))}
                        <div className="flex items-center gap-1.5 ml-auto">
                          <input
                            type="color"
                            value={itemIconColor.startsWith('#') ? itemIconColor : '#34d399'}
                            onChange={(e) => handleUpdateConsequence(cIdx, 'iconColor', e.target.value)}
                            className="w-7 h-7 p-0 rounded-lg border border-slate-200 cursor-pointer overflow-hidden"
                            title="Chọn màu tự do"
                          />
                          <input
                            type="text"
                            value={itemIconColor}
                            onChange={(e) => handleUpdateConsequence(cIdx, 'iconColor', e.target.value)}
                            placeholder="#34d399"
                            className="w-20 px-2 py-1 rounded-lg border border-slate-200 text-[11px] font-mono text-center text-slate-700 outline-none focus:border-[#00ADEF]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Text Area */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">
                        Nội dung mô tả hậu quả (Hỗ trợ HTML)
                      </label>
                      <textarea
                        rows={2}
                        ref={(el) => { if (el) el.onfocus = () => { activeInputRef.current = el; }; }}
                        value={itemText}
                        onChange={(e) => handleUpdateConsequence(cIdx, 'text', e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:border-[#00ADEF] outline-none"
                        placeholder="Nhập nội dung điểm hậu quả..."
                      />
                    </div>

                    {/* Live Preview */}
                    {itemText && (
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-start gap-3">
                        {renderConsequenceIcon(itemIconName, itemIconSvg, itemIconColor, "w-6 h-6 shrink-0 mt-0.5")}
                        <div 
                          className="text-[12px] text-slate-300 leading-relaxed font-body"
                          dangerouslySetInnerHTML={{ __html: itemText }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Ảnh sơ đồ chuỗi thao tác cồng kềnh (consequencesFlowImage)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={workflow.consequencesFlowImage || ''}
                  onChange={(e) => handleUpdate('consequencesFlowImage', e.target.value)}
                  placeholder="/images/chuoi-thao-tac-cong-kenh.webp"
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono focus:border-[#00ADEF] outline-none"
                />
                <label className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer inline-flex items-center gap-1.5 shrink-0 border border-slate-200 transition-colors">
                  <Upload className="w-3.5 h-3.5 text-slate-500" />
                  <span>Tải ảnh</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        onUploadImage(file, 'flow_image', (url) => handleUpdate('consequencesFlowImage', url));
                      }
                    }}
                  />
                </label>
              </div>

              {workflow.consequencesFlowImage && (
                <div className="mt-3 p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center">
                  <img
                    src={workflow.consequencesFlowImage}
                    alt="Sơ đồ chuỗi thao tác"
                    className="max-h-36 w-auto object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Hộp cảnh báo rủi ro trực tiếp (consequencesWarning)
              </label>
              <textarea
                rows={3}
                ref={(el) => { if (el) el.onfocus = () => { activeInputRef.current = el; }; }}
                value={workflow.consequencesWarning || ''}
                onChange={(e) => handleUpdate('consequencesWarning', e.target.value)}
                placeholder='Hậu quả trực tiếp: <strong class="text-red-400 font-bold">Bong tróc phục hình, vi sút viền...</strong>'
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00ADEF] outline-none"
              />
              {workflow.consequencesWarning && (
                <div className="mt-2 p-3 bg-red-950/40 border border-red-500/30 rounded-xl flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div 
                    className="text-xs text-red-200 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: workflow.consequencesWarning }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 4: PHÁC ĐỒ 3 BƯỚC ĐƠN GIẢN */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            4. Phác đồ 3 bước đơn giản (BBX + BeautiLink SA) & Nút kêu gọi hành động
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Quy trình chuẩn hóa 3 bước tinh gọn: Thoa keo BBX, Thổi cát/thổi khô, và Trộn xi măng gắn phục hình.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tiêu đề phác đồ (protocolTitle)
              </label>
              <input
                type="text"
                ref={(el) => { if (el) el.onfocus = () => { activeInputRef.current = el; }; }}
                value={workflow.protocolTitle || ''}
                onChange={(e) => handleUpdate('protocolTitle', e.target.value)}
                placeholder='Phác đồ <span class="text-[#00ADEF]">3 bước đơn giản</span>'
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00ADEF] outline-none"
              />
              {workflow.protocolTitle && (
                <div className="mt-2 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Xem trước Tiêu đề:</span>
                  <div 
                    className="font-heading font-bold text-base text-white"
                    dangerouslySetInnerHTML={{ __html: workflow.protocolTitle }}
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Đoạn giới thiệu phác đồ (protocolSubtitle)
              </label>
              <textarea
                rows={2}
                ref={(el) => { if (el) el.onfocus = () => { activeInputRef.current = el; }; }}
                value={workflow.protocolSubtitle || ''}
                onChange={(e) => handleUpdate('protocolSubtitle', e.target.value)}
                placeholder='Bác sĩ nay chỉ cần thực hiện 3 bước thao tác đơn giản...'
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00ADEF] outline-none"
              />
              {workflow.protocolSubtitle && (
                <div className="mt-2 p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Xem trước:</span>
                  <div 
                    className="text-xs text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: workflow.protocolSubtitle }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Ảnh bộ đôi BBX & BeautiLink SA (protocolImage)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={workflow.protocolImage || ''}
                  onChange={(e) => handleUpdate('protocolImage', e.target.value)}
                  placeholder="/image/beautilink-bbx-new.webp"
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono focus:border-[#00ADEF] outline-none"
                />
                <label className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer inline-flex items-center gap-1.5 shrink-0 border border-slate-200 transition-colors">
                  <Upload className="w-3.5 h-3.5 text-slate-500" />
                  <span>Tải ảnh</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        onUploadImage(file, 'protocol_image', (url) => handleUpdate('protocolImage', url));
                      }
                    }}
                  />
                </label>
              </div>

              {workflow.protocolImage && (
                <div className="mt-3 p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center">
                  <img
                    src={workflow.protocolImage}
                    alt="Bộ đôi BBX và BeautiLink SA"
                    className="max-h-36 w-auto object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nút kêu gọi hành động CTA (ctaText)
              </label>
              <input
                type="text"
                value={workflow.ctaText || ''}
                onChange={(e) => handleUpdate('ctaText', e.target.value)}
                placeholder="Trải nghiệm phác đồ 3 bước"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-800 focus:border-[#00ADEF] outline-none"
              />
            </div>
          </div>
        </div>

        {/* 3 STEPS EDITOR */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
            Nội dung chi tiết 3 bước lâm sàng
          </label>
          <div className="space-y-4">
            {(workflow.steps || []).map((step, sIdx) => (
              <div key={sIdx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#00ADEF] text-white font-heading font-bold text-sm flex items-center justify-center shadow-sm">
                    {step.stepNumber || `0${sIdx + 1}`}
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={step.title || ''}
                      onChange={(e) => handleUpdateStep(sIdx, 'title', e.target.value)}
                      placeholder={`Bước ${sIdx + 1}: Tiêu đề bước`}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-sm font-bold text-slate-900 focus:border-[#00ADEF] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Hướng dẫn thao tác (Hỗ trợ HTML)
                  </label>
                  <textarea
                    rows={2}
                    ref={(el) => { if (el) el.onfocus = () => { activeInputRef.current = el; }; }}
                    value={step.description || ''}
                    onChange={(e) => handleUpdateStep(sIdx, 'description', e.target.value)}
                    placeholder="Mô tả các thao tác chuẩn..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 focus:border-[#00ADEF] outline-none"
                  />
                  {step.description && (
                    <div className="mt-1.5 p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Xem trước bước {sIdx + 1}:</span>
                      <div 
                        className="text-xs text-slate-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: step.description }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
