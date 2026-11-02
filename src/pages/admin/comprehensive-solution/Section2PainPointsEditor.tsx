import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Eye, 
  ArrowRight, 
  Plus, 
  Trash2, 
  ShieldAlert, 
  HelpCircle,
  Sparkles,
  Zap
} from 'lucide-react';
import { PainPointCard, applyFormat } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section2PainPointsEditorProps {
  painBadge: string;
  setPainBadge: React.Dispatch<React.SetStateAction<string>>;
  painHeadline: string;
  setPainHeadline: React.Dispatch<React.SetStateAction<string>>;
  painSubheadline: string;
  setPainSubheadline: React.Dispatch<React.SetStateAction<string>>;
  painCards: PainPointCard[];
  handleAddCard: () => void;
  handleDeleteCard: (id: string) => void;
  handleUpdateCard: (id: string, field: 'number' | 'title' | 'description', val: string) => void;
  painCallout: string;
  setPainCallout: React.Dispatch<React.SetStateAction<string>>;
  painCtaText: string;
  setPainCtaText: React.Dispatch<React.SetStateAction<string>>;
  painFormTitle?: string;
  setPainFormTitle?: React.Dispatch<React.SetStateAction<string>>;
  painFormDesc?: string;
  setPainFormDesc?: React.Dispatch<React.SetStateAction<string>>;
  painFormExtraHtml?: string;
  setPainFormExtraHtml?: React.Dispatch<React.SetStateAction<string>>;
  painRedirectThanks?: boolean;
  setPainRedirectThanks?: React.Dispatch<React.SetStateAction<boolean>>;
  painTargetUrl?: string;
  setPainTargetUrl?: React.Dispatch<React.SetStateAction<string>>;
  painResourceTitle?: string;
  setPainResourceTitle?: React.Dispatch<React.SetStateAction<string>>;
}

export const Section2PainPointsEditor: React.FC<Section2PainPointsEditorProps> = ({
  painBadge,
  setPainBadge,
  painHeadline,
  setPainHeadline,
  painSubheadline,
  setPainSubheadline,
  painCards,
  handleAddCard,
  handleDeleteCard,
  handleUpdateCard,
  painCallout,
  setPainCallout,
  painCtaText,
  setPainCtaText,
  painFormTitle,
  setPainFormTitle,
  painFormDesc,
  setPainFormDesc,
  painFormExtraHtml,
  setPainFormExtraHtml,
  painRedirectThanks = false,
  setPainRedirectThanks,
  painTargetUrl,
  setPainTargetUrl,
  painResourceTitle,
  setPainResourceTitle
}) => {
  const [showLivePreview, setShowLivePreview] = useState(true);

  // Helper for card description color accents
  const formatCardDesc = (id: string, tag: 'strong' | 'red' | 'cyan' | 'amber') => {
    const el = document.getElementById(`pain-card-desc-${id}`) as HTMLTextAreaElement | null;
    if (el) {
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const targetCard = painCards.find(c => c.id === id);
      if (!targetCard) return;
      const val = targetCard.description;
      const selected = val.substring(start, end);
      let rep = '';
      if (tag === 'strong') rep = `<strong>${selected || 'Căn nguyên:'}</strong>`;
      else if (tag === 'red') rep = `<strong class="text-red-300">${selected || 'Căn nguyên:'}</strong>`;
      else if (tag === 'amber') rep = `<strong class="text-amber-300">${selected || 'Căn nguyên:'}</strong>`;
      else if (tag === 'cyan') rep = `<strong class="text-[#00ADEF]">${selected || 'Căn nguyên:'}</strong>`;

      const newVal = val.substring(0, start) + rep + val.substring(end);
      handleUpdateCard(id, 'description', newVal);
      setTimeout(() => {
        el.focus();
        el.setSelectionRange(start + rep.length, start + rep.length);
      }, 20);
    }
  };

  // Border & badge accent colors for 4 preview cards
  const getCardTheme = (idx: number) => {
    switch (idx % 4) {
      case 0:
        return {
          border: 'border-red-500/40 hover:border-red-500',
          bgBadge: 'bg-red-500/10 border border-red-500/20 text-red-400',
          tagText: 'text-red-400'
        };
      case 1:
        return {
          border: 'border-amber-500/40 hover:border-amber-500',
          bgBadge: 'bg-amber-500/10 border border-amber-500/20 text-amber-400',
          tagText: 'text-amber-400'
        };
      case 2:
        return {
          border: 'border-blue-500/40 hover:border-blue-500',
          bgBadge: 'bg-blue-500/10 border border-blue-500/20 text-blue-400',
          tagText: 'text-blue-400'
        };
      case 3:
      default:
        return {
          border: 'border-emerald-500/40 hover:border-emerald-500',
          bgBadge: 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400',
          tagText: 'text-emerald-400'
        };
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
      {/* Header Info */}
      <div className="border-b border-slate-100 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-mono text-xs font-bold mb-2 border border-amber-200">
            Section 2
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">
            Section 2: 4 Điểm Mù Lâm Sàng (Dark Theme)
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Biên tập Tiêu đề H2, Mô tả dẫn dắt, 4 Thẻ điểm mù lâm sàng, Thông điệp then chốt (Callout) và Nút CTA.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowLivePreview(!showLivePreview)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors self-start sm:self-auto"
        >
          <Eye className="w-3.5 h-3.5 text-amber-600" />
          <span>{showLivePreview ? 'Thu gọn Live Preview' : 'Mở Live Preview (Dark)'}</span>
        </button>
      </div>

      {/* 1. Badge Section 2 */}
      <div className="space-y-2">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          1. Huy hiệu Badge Section 2
        </label>
        <input
          type="text"
          value={painBadge}
          onChange={(e) => setPainBadge(e.target.value)}
          placeholder="Điểm mù lâm sàng"
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-medium"
        />
      </div>

      {/* 2. Tiêu đề H2 Section 2 với Toolbar HTML */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            2. Tiêu đề chính H2 (HTML Textarea)
          </label>
          <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
            <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
            <button
              type="button"
              onClick={() => applyFormat('strong', setPainHeadline, 'pain-headline-input')}
              title="In đậm chữ đang bôi đen"
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
            >
              <strong>B</strong>
            </button>
            <button
              type="button"
              onClick={() => applyFormat('amber', setPainHeadline, 'pain-headline-input')}
              title="Highlight vàng hổ phách"
              className="px-2 py-0.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold border border-amber-300 text-xs"
            >
              Vàng Amber
            </button>
            <button
              type="button"
              onClick={() => applyFormat('red', setPainHeadline, 'pain-headline-input')}
              title="Tô màu đỏ Shofu (#8C2828)"
              className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold border border-red-200 text-xs"
            >
              Đỏ Shofu
            </button>
            <button
              type="button"
              onClick={() => applyFormat('cyan', setPainHeadline, 'pain-headline-input')}
              title="Tô màu xanh Shofu"
              className="px-2 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
            >
              Xanh
            </button>
            <button
              type="button"
              onClick={() => applyFormat('br', setPainHeadline, 'pain-headline-input')}
              title="Xuống dòng (<br/>)"
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-700 font-mono font-bold border border-slate-200 text-xs"
            >
              &lt;br/&gt;
            </button>
          </div>
        </div>

        <textarea
          id="pain-headline-input"
          rows={3}
          value={painHeadline}
          onChange={(e) => setPainHeadline(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-heading font-bold"
          placeholder="Nhập tiêu đề H2..."
        />
      </div>

      {/* 3. Đoạn mô tả dẫn dắt với Toolbar HTML */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            3. Đoạn mô tả dẫn dắt (Subheadline HTML)
          </label>
          <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
            <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
            <button
              type="button"
              onClick={() => applyFormat('strong', setPainSubheadline, 'pain-subheadline-input')}
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
            >
              <strong>B</strong>
            </button>
            <button
              type="button"
              onClick={() => applyFormat('amber', setPainSubheadline, 'pain-subheadline-input')}
              className="px-2 py-0.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold border border-amber-300 text-xs"
            >
              Vàng Amber
            </button>
            <button
              type="button"
              onClick={() => applyFormat('red', setPainSubheadline, 'pain-subheadline-input')}
              className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold border border-red-200 text-xs"
            >
              Đỏ
            </button>
            <button
              type="button"
              onClick={() => applyFormat('br', setPainSubheadline, 'pain-subheadline-input')}
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-700 font-mono font-bold border border-slate-200 text-xs"
            >
              &lt;br/&gt;
            </button>
          </div>
        </div>

        <textarea
          id="pain-subheadline-input"
          rows={3}
          value={painSubheadline}
          onChange={(e) => setPainSubheadline(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-body leading-relaxed"
          placeholder="Bác sĩ không thao tác sai, nhưng chính việc dùng các vật liệu thụ động truyền thống..."
        />
      </div>

      {/* 4. 4 Thẻ điểm mù lâm sàng */}
      <div className="space-y-4 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              4. Danh sách các Thẻ điểm mù lâm sàng ({painCards.length} Thẻ)
            </label>
            <span className="text-xs text-slate-500">Mỗi thẻ gồm: Số thứ tự, Tiêu đề điểm mù và Phân tích căn nguyên</span>
          </div>

          <button
            type="button"
            onClick={handleAddCard}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold transition-colors shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm Thẻ Điểm Mù</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {painCards.map((card, idx) => (
            <div 
              key={card.id || idx} 
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3.5 relative group"
            >
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-red-100 text-[#8C2828] flex items-center justify-center font-mono font-bold text-xs">
                    {card.number || (idx + 1)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-800 uppercase">
                    Thẻ điểm mù #{idx + 1}
                  </span>
                </div>

                {painCards.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleDeleteCard(card.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-lg transition-colors"
                    title="Xóa thẻ này"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-3 space-y-1">
                  <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase">
                    Số thứ tự
                  </label>
                  <input
                    type="text"
                    value={card.number}
                    onChange={(e) => handleUpdateCard(card.id, 'number', e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-mono font-bold text-center text-slate-900"
                    placeholder="1"
                  />
                </div>

                <div className="col-span-9 space-y-1">
                  <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase">
                    Tiêu đề Thẻ điểm mù
                  </label>
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) => handleUpdateCard(card.id, 'title', e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-900"
                    placeholder="Ám ảnh ê buốt xoang II..."
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase">
                    Mô tả căn nguyên lâm sàng (HTML)
                  </label>
                  <div className="flex items-center gap-1 text-[10px]">
                    <button
                      type="button"
                      onClick={() => formatCardDesc(card.id, 'red')}
                      className="px-1.5 py-0.5 rounded bg-red-100 hover:bg-red-200 text-red-800 font-bold"
                    >
                      Căn nguyên đỏ
                    </button>
                    <button
                      type="button"
                      onClick={() => formatCardDesc(card.id, 'strong')}
                      className="px-1.5 py-0.5 rounded bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold"
                    >
                      Bold
                    </button>
                  </div>
                </div>

                <textarea
                  id={`pain-card-desc-${card.id}`}
                  rows={4}
                  value={card.description}
                  onChange={(e) => handleUpdateCard(card.id, 'description', e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 leading-relaxed font-body"
                  placeholder="Căn nguyên: Keo dán chứa HEMA ưa nước bị thủy phân..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Đoạn Callout cảnh báo / Thông điệp then chốt */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-red-600" />
            5. Đoạn Callout cảnh báo / Thông điệp then chốt (Callout HTML)
          </label>
          <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => applyFormat('strong', setPainCallout, 'pain-callout-input')}
              className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
            >
              <strong>B</strong>
            </button>
            <button
              type="button"
              onClick={() => applyFormat('red', setPainCallout, 'pain-callout-input')}
              className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold border border-red-200 text-xs"
            >
              Đỏ
            </button>
            <button
              type="button"
              onClick={() => applyFormat('amber', setPainCallout, 'pain-callout-input')}
              className="px-2 py-0.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold border border-amber-300 text-xs"
            >
              Vàng
            </button>
          </div>
        </div>

        <textarea
          id="pain-callout-input"
          rows={3}
          value={painCallout}
          onChange={(e) => setPainCallout(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-800 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-medium leading-relaxed"
          placeholder="Bác sĩ không thao tác sai, nhưng chính việc dùng các vật liệu thụ động truyền thống đã vô tình biến các ca phục hình thành quả bom nổ chậm..."
        />
      </div>

      {/* 6. Nút CTA Section 2 & Form Popup Config */}
      <div className="pt-2 border-t border-slate-100">
        <CtaFormConfigEditor
          label="Nút CTA Section 2 (Khắc phục điểm mù lâm sàng ngay)"
          ctaText={painCtaText}
          onChangeCtaText={setPainCtaText}
          formTitle={painFormTitle || ''}
          onChangeFormTitle={(val) => setPainFormTitle && setPainFormTitle(val)}
          formDesc={painFormDesc || ''}
          onChangeFormDesc={(val) => setPainFormDesc && setPainFormDesc(val)}
          formExtraHtml={painFormExtraHtml || ''}
          onChangeFormExtraHtml={(val) => setPainFormExtraHtml && setPainFormExtraHtml(val)}
          redirectThanks={painRedirectThanks}
          onChangeRedirectThanks={(val) => setPainRedirectThanks && setPainRedirectThanks(val)}
          targetUrl={painTargetUrl || ''}
          onChangeTargetUrl={(val) => setPainTargetUrl && setPainTargetUrl(val)}
          resourceTitle={painResourceTitle || ''}
          onChangeResourceTitle={(val) => setPainResourceTitle && setPainResourceTitle(val)}
        />
      </div>

      {/* 7. KHUNG LIVE PREVIEW MÀU TỐI (DARK THEME) */}
      {showLivePreview && (
        <div className="pt-6 border-t border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-amber-500" />
              Khung Live Preview: Section 2 Giao diện Dark Theme thực tế
            </span>
            <span className="text-[11px] font-mono text-slate-400">Chính xác phong cách landing page</span>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Background pattern indicator */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 via-transparent to-slate-950/40 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
              {/* Headline & Subheadline Header */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 font-mono text-xs font-bold">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{painBadge || 'Điểm mù lâm sàng'}</span>
                </div>

                <h2 
                  className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-snug tracking-tight"
                  dangerouslySetInnerHTML={{ __html: painHeadline || '4 Điểm mù lâm sàng & Nỗi đau dai dẳng' }}
                />

                <div className="w-20 h-1 bg-[#8C2828] mx-auto rounded-full"></div>

                <div 
                  className="font-body text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto"
                  dangerouslySetInnerHTML={{ __html: painSubheadline || 'Mô tả dẫn dắt căn nguyên...' }}
                />
              </div>

              {/* 4 Cards Grid Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {painCards.map((card, idx) => {
                  const theme = getCardTheme(idx);
                  return (
                    <div 
                      key={card.id || idx}
                      className={`bg-slate-800/80 border ${theme.border} rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-md`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl ${theme.bgBadge} flex items-center justify-center font-heading font-bold text-xl shrink-0`}>
                          {card.number || (idx + 1)}
                        </div>
                        <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-snug">
                          {card.title}
                        </h3>
                      </div>
                      <div 
                        className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: card.description }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Callout Warning Preview */}
              {painCallout && (
                <div className="bg-red-950/40 border border-red-500/30 rounded-2xl p-4 sm:p-5 text-center max-w-2xl mx-auto shadow-lg shadow-red-950/20">
                  <div className="flex items-center justify-center gap-2 text-red-400 font-mono text-xs font-bold mb-1 uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Thông điệp then chốt</span>
                  </div>
                  <div 
                    className="font-heading font-bold text-sm sm:text-base text-red-200 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: painCallout }}
                  />
                </div>
              )}

              {/* CTA Button Preview */}
              <div className="text-center pt-2">
                <div className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wide shadow-xl shadow-amber-400/20 cursor-default transition-all">
                  <span>{painCtaText || 'Khắc phục điểm mù lâm sàng ngay'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
