import React, { useState } from 'react';
import { 
  RefreshCw, 
  Eye, 
  Plus, 
  Trash2, 
  Sparkles, 
  HelpCircle, 
  Zap, 
  ShieldCheck, 
  RotateCcw,
  Check,
  Palette,
  ArrowRight
} from 'lucide-react';
import { IonItem, applyFormat } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section3BioactiveEditorProps {
  bioBadge: string;
  setBioBadge: React.Dispatch<React.SetStateAction<string>>;
  bioHeadline: string;
  setBioHeadline: React.Dispatch<React.SetStateAction<string>>;
  bioIntro: string;
  setBioIntro: React.Dispatch<React.SetStateAction<string>>;
  bioBatteryTitle: string;
  setBioBatteryTitle: React.Dispatch<React.SetStateAction<string>>;
  bioBatteryDesc: string;
  setBioBatteryDesc: React.Dispatch<React.SetStateAction<string>>;
  bioIons: IonItem[];
  setBioIons: React.Dispatch<React.SetStateAction<IonItem[]>>;
  bioCtaText: string;
  setBioCtaText: React.Dispatch<React.SetStateAction<string>>;
  bioFormTitle?: string;
  setBioFormTitle?: React.Dispatch<React.SetStateAction<string>>;
  bioFormDesc?: string;
  setBioFormDesc?: React.Dispatch<React.SetStateAction<string>>;
  bioFormExtraHtml?: string;
  setBioFormExtraHtml?: React.Dispatch<React.SetStateAction<string>>;
  bioRedirectThanks?: boolean;
  setBioRedirectThanks?: React.Dispatch<React.SetStateAction<boolean>>;
  bioTargetUrl?: string;
  setBioTargetUrl?: React.Dispatch<React.SetStateAction<string>>;
  bioResourceTitle?: string;
  setBioResourceTitle?: React.Dispatch<React.SetStateAction<string>>;
}

const PRESET_6_IONS: IonItem[] = [
  {
    id: 'ion-fluoride',
    ionName: 'F⁻ (Fluoride)',
    title: 'Tái khoáng hóa & Kháng toan',
    description: 'Tạo thành fluorapatite bền vững trên men và ngà răng, ức chế quá trình hủy khoáng và kích thích tái khoáng hóa liên tục.',
    color: 'blue'
  },
  {
    id: 'ion-strontium',
    ionName: 'Sr²⁺ (Strontium)',
    title: 'Tăng cường cấu trúc ngà',
    description: 'Tác động hiệp đồng cùng Fluoride giúp bít kín ống ngà vi thể, thúc đẩy canxi hóa và triệt tiêu hoàn toàn ê buốt sau phục hình.',
    color: 'cyan'
  },
  {
    id: 'ion-natri',
    ionName: 'Na⁺ (Natri)',
    title: 'Điều hòa thẩm thấu & Sạc ion',
    description: 'Chất xúc tác ion hóa giúp cân bằng môi trường kiềm hóa, kích hoạt khả năng "tự sạc lại ion" liên tục từ kem đánh răng.',
    color: 'emerald'
  },
  {
    id: 'ion-aluminum',
    ionName: 'Al³⁺ (Nhôm)',
    title: 'Trung hòa Axit chủ động',
    description: 'Kích hoạt ngay khi pH môi trường tụt dưới 5.5, kéo pH miệng về mức trung tính an toàn, bảo vệ bền vững bờ viền phục hình.',
    color: 'purple'
  },
  {
    id: 'ion-silicate',
    ionName: 'SiO₃²⁻ (Silicat)',
    title: 'Phục hồi vi mô & Tái tạo ngà',
    description: 'Kích hoạt phản ứng sinh học nội tại của mô răng, hỗ trợ quá trình sửa chữa vi thể và tạo cầu ngà thứ cấp bảo vệ tủy sống.',
    color: 'amber'
  },
  {
    id: 'ion-borate',
    ionName: 'BO₃³⁻ (Borat)',
    title: 'Kháng vi khuẩn & Biofilm',
    description: 'Ức chế hoạt động của vi khuẩn Streptococcus mutans, phá vỡ liên kết màng sinh học (Biofilm) ngay cả trong môi trường giàu đường.',
    color: 'rose'
  }
];

const PRESET_4_IONS: IonItem[] = [
  {
    id: 'ion-1',
    ionName: 'F⁻ & Sr²⁺',
    title: 'Tái khoáng hóa',
    description: 'Hỗ trợ hình thành khoáng chất chứa fluor ở vùng ống ngà, góp phần làm giảm độ mở của ống ngà.',
    color: 'blue'
  },
  {
    id: 'ion-2',
    ionName: 'Na⁺ & SiO₃²⁻',
    title: 'Phục hồi vi mô',
    description: 'Thúc đẩy phục hồi vi mô ngà răng suy thoái một cách chủ động.',
    color: 'emerald'
  },
  {
    id: 'ion-3',
    ionName: 'BO₃³⁻',
    title: 'Kháng Biofilm',
    description: 'Có thể làm giảm khả năng bám dính của S. mutans, góp phần hạn chế hình thành màng sinh học.',
    color: 'amber'
  },
  {
    id: 'ion-4',
    ionName: 'Al³⁺',
    title: 'Trung hòa Axit',
    description: 'Trung hòa axit chủ động, kiềm hóa môi trường khi pH tụt dưới 5.5.',
    color: 'purple'
  }
];

export const Section3BioactiveEditor: React.FC<Section3BioactiveEditorProps> = ({
  bioBadge,
  setBioBadge,
  bioHeadline,
  setBioHeadline,
  bioIntro,
  setBioIntro,
  bioBatteryTitle,
  setBioBatteryTitle,
  bioBatteryDesc,
  setBioBatteryDesc,
  bioIons,
  setBioIons,
  bioCtaText,
  setBioCtaText,
  bioFormTitle,
  setBioFormTitle,
  bioFormDesc,
  setBioFormDesc,
  bioFormExtraHtml,
  setBioFormExtraHtml,
  bioRedirectThanks = false,
  setBioRedirectThanks,
  bioTargetUrl,
  setBioTargetUrl,
  bioResourceTitle,
  setBioResourceTitle
}) => {
  const [showLivePreview, setShowLivePreview] = useState(true);

  // Helper formatting for ion text fields
  const formatIonField = (id: string, field: 'title' | 'description' | 'ionName', tag: 'strong' | 'red' | 'cyan' | 'amber' | 'sup' | 'sub') => {
    const elId = `ion-${field}-${id}`;
    const el = document.getElementById(elId) as HTMLTextAreaElement | HTMLInputElement | null;
    if (el) {
      const start = el.selectionStart || 0;
      const end = el.selectionEnd || 0;
      const targetIon = bioIons.find(item => item.id === id);
      if (!targetIon) return;
      const val = targetIon[field] || '';
      const selected = val.substring(start, end);

      let rep = '';
      if (tag === 'strong') rep = `<strong>${selected || 'chữ in đậm'}</strong>`;
      else if (tag === 'red') rep = `<span class="text-[#8C2828] font-bold">${selected || 'chữ đỏ'}</span>`;
      else if (tag === 'cyan') rep = `<span class="text-[#00ADEF] font-bold">${selected || 'chữ xanh'}</span>`;
      else if (tag === 'amber') rep = `<span class="text-amber-600 font-bold">${selected || 'chữ vàng'}</span>`;
      else if (tag === 'sup') rep = `<sup>${selected || '2+'}</sup>`;
      else if (tag === 'sub') rep = `<sub>${selected || '3'}</sub>`;

      const newVal = val.substring(0, start) + rep + val.substring(end);
      setBioIons(prev => prev.map(item => item.id === id ? { ...item, [field]: newVal } : item));
      setTimeout(() => {
        el.focus();
        if (el instanceof HTMLTextAreaElement || el instanceof HTMLInputElement) {
          el.setSelectionRange(start + rep.length, start + rep.length);
        }
      }, 20);
    }
  };

  const handleUpdateIon = (id: string, field: keyof IonItem, val: string) => {
    setBioIons(prev => prev.map(item => item.id === id ? { ...item, [field]: val } : item));
  };

  const handleAddIon = () => {
    const newIon: IonItem = {
      id: 'ion-' + Date.now(),
      ionName: 'Ion mới',
      title: 'Tác dụng sinh học',
      description: 'Mô tả cơ chế giải phóng ion và bảo vệ mô răng...',
      color: 'blue'
    };
    setBioIons(prev => [...prev, newIon]);
  };

  const handleDeleteIon = (id: string) => {
    setBioIons(prev => prev.filter(item => item.id !== id));
  };

  const getColorTheme = (color?: string, idx: number = 0) => {
    const resolvedColor = color || (['blue', 'cyan', 'emerald', 'purple', 'amber', 'rose'][idx % 6]);
    switch (resolvedColor) {
      case 'cyan':
        return {
          bgGradient: 'from-white to-cyan-50/80',
          border: 'border-cyan-100 hover:border-cyan-300',
          badgeBg: 'bg-cyan-100 border border-cyan-200',
          badgeText: 'text-cyan-700',
          badgeDot: 'bg-cyan-500'
        };
      case 'emerald':
        return {
          bgGradient: 'from-white to-emerald-50/80',
          border: 'border-emerald-100 hover:border-emerald-300',
          badgeBg: 'bg-emerald-100 border border-emerald-200',
          badgeText: 'text-emerald-700',
          badgeDot: 'bg-emerald-500'
        };
      case 'purple':
        return {
          bgGradient: 'from-white to-purple-50/80',
          border: 'border-purple-100 hover:border-purple-300',
          badgeBg: 'bg-purple-100 border border-purple-200',
          badgeText: 'text-purple-700',
          badgeDot: 'bg-purple-500'
        };
      case 'amber':
        return {
          bgGradient: 'from-white to-amber-50/80',
          border: 'border-amber-100 hover:border-amber-300',
          badgeBg: 'bg-amber-100 border border-amber-200',
          badgeText: 'text-amber-800',
          badgeDot: 'bg-amber-500'
        };
      case 'rose':
      case 'red':
        return {
          bgGradient: 'from-white to-rose-50/80',
          border: 'border-rose-100 hover:border-rose-300',
          badgeBg: 'bg-rose-100 border border-rose-200',
          badgeText: 'text-rose-700',
          badgeDot: 'bg-rose-500'
        };
      case 'blue':
      default:
        return {
          bgGradient: 'from-white to-blue-50/80',
          border: 'border-blue-100 hover:border-blue-300',
          badgeBg: 'bg-blue-100 border border-blue-200',
          badgeText: 'text-blue-700',
          badgeDot: 'bg-blue-500'
        };
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-extrabold text-slate-900">
                Section 3: Triết lý MiCD & Hạt độn Giomer S-PRG 6 Ion
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Chuyển dịch tư duy: từ trám bít thụ động sang trị liệu phục hồi sinh học chủ động
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowLivePreview(!showLivePreview)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              showLivePreview 
                ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{showLivePreview ? 'Đang bật xem trước' : 'Xem trước'}</span>
          </button>
        </div>

        {/* 3.1 Badge */}
        <div>
          <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
            3.1. Badge nhãn phụ
          </label>
          <input
            type="text"
            value={bioBadge}
            onChange={(e) => setBioBadge(e.target.value)}
            placeholder="Ví dụ: Bước ngoặt tư duy"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#8C2828] bg-white"
          />
        </div>

        {/* 3.2 Tiêu đề H2 */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
              3.2. Tiêu đề H2 (Hỗ trợ HTML)
            </label>
            <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
              <span className="text-[11px] text-slate-500 px-1 font-mono">Chèn nhanh:</span>
              <button
                type="button"
                onClick={() => applyFormat('strong', setBioHeadline, 'section3-headline')}
                className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-800 font-bold border border-slate-200 text-xs shadow-xs"
              >
                In Đậm
              </button>
              <button
                type="button"
                onClick={() => applyFormat('red', setBioHeadline, 'section3-headline')}
                className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold rounded border border-red-200 text-[11px]"
              >
                Đỏ Shofu
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setBioHeadline, 'section3-headline')}
                className="px-2 py-0.5 bg-blue-50 hover:bg-blue-100 text-[#00ADEF] font-bold rounded border border-blue-200 text-[11px]"
              >
                Xanh
              </button>
              <button
                type="button"
                onClick={() => applyFormat('amber', setBioHeadline, 'section3-headline')}
                className="px-2 py-0.5 bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold rounded border border-amber-200 text-[11px]"
              >
                Vàng
              </button>
              <button
                type="button"
                onClick={() => applyFormat('br', setBioHeadline, 'section3-headline')}
                className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200"
              >
                &lt;br/&gt;
              </button>
            </div>
          </div>
          <textarea
            id="section3-headline"
            rows={3}
            value={bioHeadline}
            onChange={(e) => setBioHeadline(e.target.value)}
            placeholder="Nhập tiêu đề H2..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold font-mono text-slate-900 focus:outline-none focus:border-[#8C2828] focus:ring-2 focus:ring-red-900/10 leading-relaxed bg-white"
          />
        </div>

        {/* 3.3 Đoạn mô tả dẫn nhập Triết lý MiCD */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
              3.3. Mô tả dẫn nhập Triết lý MiCD & Công nghệ S-PRG (Hỗ trợ HTML)
            </label>
            <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
              <span className="text-[11px] text-slate-500 px-1 font-mono">Chèn nhanh:</span>
              <button
                type="button"
                onClick={() => applyFormat('strong', setBioIntro, 'section3-intro')}
                className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-800 font-bold border border-slate-200 text-xs shadow-xs"
              >
                In Đậm
              </button>
              <button
                type="button"
                onClick={() => applyFormat('red', setBioIntro, 'section3-intro')}
                className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold rounded border border-red-200 text-[11px]"
              >
                Đỏ Shofu
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setBioIntro, 'section3-intro')}
                className="px-2 py-0.5 bg-blue-50 hover:bg-blue-100 text-[#00ADEF] font-bold rounded border border-blue-200 text-[11px]"
              >
                Xanh
              </button>
              <button
                type="button"
                onClick={() => applyFormat('br', setBioIntro, 'section3-intro')}
                className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200"
              >
                &lt;br/&gt;
              </button>
            </div>
          </div>
          <textarea
            id="section3-intro"
            rows={4}
            value={bioIntro}
            onChange={(e) => setBioIntro(e.target.value)}
            placeholder="Mô tả triết lý MiCD và công nghệ hạt độn Giomer..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono text-slate-800 focus:outline-none focus:border-[#8C2828] focus:ring-2 focus:ring-red-900/10 leading-relaxed bg-white"
          />
        </div>

        {/* 3.4 Khối mô tả cơ chế Bình ắc quy sinh học S-PRG */}
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-800">
              3.4. Cơ chế "Bình ắc quy sinh học Giomer S-PRG tái nạp Fluoride"
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Tiêu đề khối ắc quy (HTML)
                </label>
                <div className="flex gap-1 text-[11px]">
                  <button
                    type="button"
                    onClick={() => applyFormat('strong', setBioBatteryTitle, 'section3-battery-title')}
                    className="px-1.5 py-0.5 bg-slate-100 hover:bg-slate-200 rounded font-bold"
                  >
                    Đậm
                  </button>
                  <button
                    type="button"
                    onClick={() => applyFormat('red', setBioBatteryTitle, 'section3-battery-title')}
                    className="px-1.5 py-0.5 bg-red-50 text-[#8C2828] rounded font-bold"
                  >
                    Đỏ
                  </button>
                </div>
              </div>
              <textarea
                id="section3-battery-title"
                rows={2}
                value={bioBatteryTitle}
                onChange={(e) => setBioBatteryTitle(e.target.value)}
                placeholder="Lá chắn 6 ion sinh học (Giomer Molecular Shield)"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-slate-900 focus:border-[#8C2828] bg-white"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Mô tả cơ chế tái nạp Fluoride (HTML)
                </label>
                <div className="flex gap-1 text-[11px]">
                  <button
                    type="button"
                    onClick={() => applyFormat('strong', setBioBatteryDesc, 'section3-battery-desc')}
                    className="px-1.5 py-0.5 bg-slate-100 hover:bg-slate-200 rounded font-bold"
                  >
                    Đậm
                  </button>
                  <button
                    type="button"
                    onClick={() => applyFormat('red', setBioBatteryDesc, 'section3-battery-desc')}
                    className="px-1.5 py-0.5 bg-red-50 text-[#8C2828] rounded font-bold"
                  >
                    Đỏ
                  </button>
                </div>
              </div>
              <textarea
                id="section3-battery-desc"
                rows={2}
                value={bioBatteryDesc}
                onChange={(e) => setBioBatteryDesc(e.target.value)}
                placeholder='Hạt độn S-PRG hoạt động như một "Bình ắc quy sinh học" liên tục phóng thích & tự sạc lại 6 loại ion y tế.'
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-800 focus:border-[#8C2828] bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Danh sách 6 Ion sinh học */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-heading font-extrabold text-slate-900 flex items-center gap-2">
              <span>3.5. Danh sách các Ion sinh học ({bioIons.length} Ion)</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Phóng thích và tự sạc 6 Ion y sinh học: Fluoride, Strontium, Natri, Nhôm, Silicat, Borat
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setBioIons(PRESET_6_IONS)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200 transition-colors shadow-2xs"
              title="Đặt lại đầy đủ danh sách 6 Ion sinh học độc quyền Shofu"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Nạp chuẩn 6 Ion Shofu</span>
            </button>

            <button
              type="button"
              onClick={() => setBioIons(PRESET_4_IONS)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              title="Khôi phục định dạng 4 nhóm Ion ban đầu"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Nạp mẫu 4 nhóm Ion</span>
            </button>

            <button
              type="button"
              onClick={handleAddIon}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white text-xs font-bold transition-all shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Thêm Ion</span>
            </button>
          </div>
        </div>

        {/* Ion Cards Editor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bioIons.map((ion, idx) => {
            const theme = getColorTheme(ion.color, idx);
            return (
              <div 
                key={ion.id || idx}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/80 hover:bg-white hover:shadow-md transition-all space-y-4 relative"
              >
                {/* Top header of card */}
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-200/70">
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-full ${theme.badgeBg} ${theme.badgeText} text-xs font-bold flex items-center justify-center`}>
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Ion #{idx + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Color selector */}
                    <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
                      {(['blue', 'cyan', 'emerald', 'purple', 'amber', 'rose'] as const).map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => handleUpdateIon(ion.id, 'color', c)}
                          className={`w-3.5 h-3.5 rounded-full transition-transform ${
                            c === 'blue' ? 'bg-blue-500' :
                            c === 'cyan' ? 'bg-cyan-500' :
                            c === 'emerald' ? 'bg-emerald-500' :
                            c === 'purple' ? 'bg-purple-500' :
                            c === 'amber' ? 'bg-amber-500' : 'bg-rose-500'
                          } ${ion.color === c ? 'scale-125 ring-2 ring-slate-400' : 'hover:scale-110 opacity-70'}`}
                          title={`Chọn màu ${c}`}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDeleteIon(ion.id)}
                      className="p-1 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      title="Xóa Ion này"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Ký hiệu Ion */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-bold text-slate-700">
                      Ký hiệu Ion & Tên (HTML):
                    </label>
                    <div className="flex gap-1 text-[10px]">
                      <button
                        type="button"
                        onClick={() => formatIonField(ion.id, 'ionName', 'sup')}
                        className="px-1.5 py-0.2 bg-white hover:bg-slate-200 rounded border border-slate-200 font-mono"
                        title="Chỉ số trên mũ: 2+, -"
                      >
                        x<sup>y</sup>
                      </button>
                      <button
                        type="button"
                        onClick={() => formatIonField(ion.id, 'ionName', 'sub')}
                        className="px-1.5 py-0.2 bg-white hover:bg-slate-200 rounded border border-slate-200 font-mono"
                        title="Chỉ số dưới: 3"
                      >
                        x<sub>y</sub>
                      </button>
                      <button
                        type="button"
                        onClick={() => formatIonField(ion.id, 'ionName', 'strong')}
                        className="px-1.5 py-0.2 bg-white hover:bg-slate-200 rounded border border-slate-200 font-bold"
                      >
                        B
                      </button>
                    </div>
                  </div>
                  <input
                    id={`ion-ionName-${ion.id}`}
                    type="text"
                    value={ion.ionName}
                    onChange={(e) => handleUpdateIon(ion.id, 'ionName', e.target.value)}
                    placeholder="Ví dụ: F⁻ (Fluoride)"
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900 focus:outline-none focus:border-[#8C2828]"
                  />
                </div>

                {/* Tiêu đề tác dụng */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-bold text-slate-700">
                      Tên tác dụng / Công năng (HTML):
                    </label>
                    <div className="flex gap-1 text-[10px]">
                      <button
                        type="button"
                        onClick={() => formatIonField(ion.id, 'title', 'strong')}
                        className="px-1.5 py-0.2 bg-white hover:bg-slate-200 rounded border border-slate-200 font-bold"
                      >
                        B
                      </button>
                      <button
                        type="button"
                        onClick={() => formatIonField(ion.id, 'title', 'red')}
                        className="px-1.5 py-0.2 bg-red-50 text-[#8C2828] rounded border border-red-200 font-bold"
                      >
                        Đỏ
                      </button>
                    </div>
                  </div>
                  <input
                    id={`ion-title-${ion.id}`}
                    type="text"
                    value={ion.title}
                    onChange={(e) => handleUpdateIon(ion.id, 'title', e.target.value)}
                    placeholder="Ví dụ: Tái khoáng hóa"
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#8C2828]"
                  />
                </div>

                {/* Mô tả cơ chế */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[11px] font-bold text-slate-700">
                      Mô tả cơ chế sinh học (HTML):
                    </label>
                    <div className="flex gap-1 text-[10px]">
                      <button
                        type="button"
                        onClick={() => formatIonField(ion.id, 'description', 'strong')}
                        className="px-1.5 py-0.2 bg-white hover:bg-slate-200 rounded border border-slate-200 font-bold"
                      >
                        B
                      </button>
                      <button
                        type="button"
                        onClick={() => formatIonField(ion.id, 'description', 'red')}
                        className="px-1.5 py-0.2 bg-red-50 text-[#8C2828] rounded border border-red-200 font-bold"
                      >
                        Đỏ
                      </button>
                      <button
                        type="button"
                        onClick={() => formatIonField(ion.id, 'description', 'cyan')}
                        className="px-1.5 py-0.2 bg-blue-50 text-[#00ADEF] rounded border border-blue-200 font-bold"
                      >
                        Xanh
                      </button>
                    </div>
                  </div>
                  <textarea
                    id={`ion-description-${ion.id}`}
                    rows={3}
                    value={ion.description}
                    onChange={(e) => handleUpdateIon(ion.id, 'description', e.target.value)}
                    placeholder="Mô tả tác động của ion..."
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800 leading-relaxed focus:outline-none focus:border-[#8C2828]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Live Preview Section 3 */}
      {showLivePreview && (
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-10">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Xem trước thực tế: Section 3 (MiCD & S-PRG 6 Ion)
              </span>
            </div>
            <span className="text-xs text-slate-500 font-mono">Theme Trắng Landing Page</span>
          </div>

          {/* Section 3 Preview Content in white box */}
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-10">
            {/* Header in preview */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-mono text-xs sm:text-sm font-bold tracking-wider">
                <RefreshCw className="w-4 h-4" />
                <span>{bioBadge || 'Bước ngoặt tư duy'}</span>
              </div>

              <h2 
                className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 leading-[1.3] tracking-tight"
                dangerouslySetInnerHTML={{ __html: bioHeadline || 'Tiêu đề Section 3...' }}
              />

              <p 
                className="font-body text-sm sm:text-base text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: bioIntro || 'Mô tả triết lý MiCD...' }}
              />
            </div>

            {/* Ions Grid in preview */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${bioIons.length <= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
              {bioIons.map((ion, idx) => {
                const theme = getColorTheme(ion.color, idx);
                return (
                  <div
                    key={ion.id || idx}
                    className={`bg-gradient-to-b ${theme.bgGradient} p-6 rounded-2xl border ${theme.border} shadow-xs flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
                  >
                    <div className={`w-16 h-16 rounded-full ${theme.badgeBg} flex items-center justify-center mb-4`}>
                      <span 
                        className={`font-heading font-bold ${theme.badgeText} text-base sm:text-lg`}
                        dangerouslySetInnerHTML={{ __html: ion.ionName }}
                      />
                    </div>
                    <h4 
                      className="font-bold text-slate-900 mb-2 text-base"
                      dangerouslySetInnerHTML={{ __html: ion.title }}
                    />
                    <p 
                      className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: ion.description }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Battery Callout in preview */}
            <div className="text-center pt-4 border-t border-slate-100 max-w-2xl mx-auto space-y-3">
              <h3 
                className="font-heading font-bold text-lg sm:text-2xl text-slate-900 flex flex-col sm:flex-row items-center justify-center gap-2"
                dangerouslySetInnerHTML={{ __html: bioBatteryTitle || 'Lá chắn 6 ion sinh học' }}
              />
              <p 
                className="text-slate-600 font-body text-sm sm:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: bioBatteryDesc || 'Mô tả cơ chế bình ắc quy...' }}
              />
            </div>

            {/* CTA Button in preview */}
            <div className="pt-2 text-center">
              <div className="inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-6 sm:px-8 py-3.5 rounded-full font-mono text-xs sm:text-base font-bold shadow-md shadow-red-900/20">
                <span>{bioCtaText || 'Nâng cấp vật liệu sinh học S-PRG'}</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Cấu hình Nút CTA & Form Popup */}
      <CtaFormConfigEditor
        label="Nút CTA Section 3 (MiCD & S-PRG)"
        ctaText={bioCtaText}
        onChangeCtaText={setBioCtaText}
        formTitle={bioFormTitle}
        onChangeFormTitle={setBioFormTitle}
        formDesc={bioFormDesc}
        onChangeFormDesc={setBioFormDesc}
        formExtraHtml={bioFormExtraHtml}
        onChangeFormExtraHtml={setBioFormExtraHtml}
        redirectThanks={bioRedirectThanks}
        onChangeRedirectThanks={setBioRedirectThanks}
        targetUrl={bioTargetUrl}
        onChangeTargetUrl={setBioTargetUrl}
        resourceTitle={bioResourceTitle}
        onChangeResourceTitle={setBioResourceTitle}
      />
    </div>
  );
};
