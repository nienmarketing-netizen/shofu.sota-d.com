import React, { useState } from 'react';
import { 
  Building2, 
  Bold, 
  Palette, 
  CornerDownLeft, 
  Eye, 
  Layers, 
  ShieldCheck, 
  Microscope, 
  Award, 
  TrendingUp, 
  ImageIcon 
} from 'lucide-react';
import { IonBioItem, AboutCardItem, AboutStatItem, applyFormat } from './types';

interface Section4AboutEditorProps {
  historyHeadline: string;
  setHistoryHeadline: (val: string) => void;
  historyDesc1: string;
  setHistoryDesc1: (val: string) => void;
  historyDesc2: string;
  setHistoryDesc2: (val: string) => void;
  historyStats: AboutStatItem[];
  setHistoryStats: React.Dispatch<React.SetStateAction<AboutStatItem[]>>;
  historyImage: string;
  setHistoryImage: (val: string) => void;
  reportBadge: string;
  setReportBadge: (val: string) => void;
  reportHeadline: string;
  setReportHeadline: (val: string) => void;
  reportDesc: string;
  setReportDesc: (val: string) => void;
  reportButtonText: string;
  setReportButtonText: (val: string) => void;
  layersHeadline: string;
  setLayersHeadline: (val: string) => void;
  layers: AboutCardItem[];
  setLayers: React.Dispatch<React.SetStateAction<AboutCardItem[]>>;
  ionsHeadline: string;
  setIonsHeadline: (val: string) => void;
  ions: IonBioItem[];
  setIons: React.Dispatch<React.SetStateAction<IonBioItem[]>>;
  phBufferingDesc: string;
  setPhBufferingDesc: (val: string) => void;
  rechargeReleaseDesc: string;
  setRechargeReleaseDesc: (val: string) => void;
  natureHeadline: string;
  setNatureHeadline: (val: string) => void;
  natureDesc: string;
  setNatureDesc: (val: string) => void;
  floridaHeadline: string;
  setFloridaHeadline: (val: string) => void;
  floridaDesc: string;
  setFloridaDesc: (val: string) => void;
  roiHeadline: string;
  setRoiHeadline: (val: string) => void;
  roiDesc: string;
  setRoiDesc: (val: string) => void;
}

export const Section4AboutEditor: React.FC<Section4AboutEditorProps> = ({
  historyHeadline,
  setHistoryHeadline,
  historyDesc1,
  setHistoryDesc1,
  historyDesc2,
  setHistoryDesc2,
  historyStats,
  setHistoryStats,
  historyImage,
  setHistoryImage,
  reportBadge,
  setReportBadge,
  reportHeadline,
  setReportHeadline,
  reportDesc,
  setReportDesc,
  reportButtonText,
  setReportButtonText,
  layersHeadline,
  setLayersHeadline,
  layers,
  setLayers,
  ionsHeadline,
  setIonsHeadline,
  ions,
  setIons,
  phBufferingDesc,
  setPhBufferingDesc,
  rechargeReleaseDesc,
  setRechargeReleaseDesc,
  natureHeadline,
  setNatureHeadline,
  natureDesc,
  setNatureDesc,
  floridaHeadline,
  setFloridaHeadline,
  floridaDesc,
  setFloridaDesc,
  roiHeadline,
  setRoiHeadline,
  roiDesc,
  setRoiDesc,
}) => {
  const [showLivePreview, setShowLivePreview] = useState(true);

  const handleUpdateStat = (idx: number, field: 'value' | 'label', val: string) => {
    setHistoryStats(prev => prev.map((s, i) => i === idx ? { ...s, [field]: val } : s));
  };

  const handleUpdateLayer = (idx: number, field: 'title' | 'desc', val: string) => {
    setLayers(prev => prev.map((l, i) => i === idx ? { ...l, [field]: val } : l));
  };

  const handleUpdateIon = (idx: number, field: 'name' | 'desc', val: string) => {
    setIons(prev => prev.map((ion, i) => i === idx ? { ...ion, [field]: val } : ion));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section info */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs font-mono">
              04
            </span>
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Di Sản 100 Năm & Công Nghệ Sinh Học S-PRG
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
          Chỉnh sửa di sản Shofu từ 1922 tại Kyoto, báo cáo chuyên môn hạt S-PRG 3 lớp và lá chắn 6 ion sinh học.
        </p>
      </div>

      {/* 1. Brand History */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <Building2 className="w-4 h-4 text-[#8C2828]" />
          <span>1. Lịch sử hình thành & Di sản 100 năm Shofu</span>
        </h4>

        {/* Headline */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Tiêu đề Di sản (Hỗ trợ HTML)
            </label>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => applyFormat('strong', setHistoryHeadline, 'history-headline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-slate-700 transition-colors flex items-center gap-1"
              >
                <Bold className="w-3 h-3" /> Bold
              </button>
              <button
                type="button"
                onClick={() => applyFormat('red', setHistoryHeadline, 'history-headline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-[#8C2828] transition-colors flex items-center gap-1"
              >
                <Palette className="w-3 h-3" /> Đỏ
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setHistoryHeadline, 'history-headline-input')}
                className="px-2 py-1 rounded hover:bg-white text-xs font-bold text-[#00ADEF] transition-colors flex items-center gap-1"
              >
                <Palette className="w-3 h-3" /> Xanh
              </button>
            </div>
          </div>
          <textarea
            id="history-headline-input"
            rows={2}
            value={historyHeadline}
            onChange={(e) => setHistoryHeadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-xs text-slate-900 focus:border-[#00ADEF] outline-none leading-relaxed"
          />
        </div>

        {/* Paragraph 1 */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Đoạn giới thiệu 1 (Thành lập Kyoto 1922)
          </label>
          <textarea
            rows={3}
            value={historyDesc1}
            onChange={(e) => setHistoryDesc1(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-xs text-slate-900 focus:border-[#00ADEF] outline-none leading-relaxed"
          />
        </div>

        {/* Paragraph 2 */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Đoạn giới thiệu 2 (Quy mô toàn cầu & 100+ quốc gia)
          </label>
          <textarea
            rows={3}
            value={historyDesc2}
            onChange={(e) => setHistoryDesc2(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-xs text-slate-900 focus:border-[#00ADEF] outline-none leading-relaxed"
          />
        </div>

        {/* Stats & Image */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {historyStats.map((st, i) => (
            <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Chỉ số {i + 1}
              </label>
              <input
                type="text"
                value={st.value}
                onChange={(e) => handleUpdateStat(i, 'value', e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-sm font-bold text-[#8C2828] bg-white focus:border-[#00ADEF] outline-none"
              />
              <input
                type="text"
                value={st.label}
                onChange={(e) => handleUpdateStat(i, 'label', e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-700 bg-white focus:border-[#00ADEF] outline-none uppercase"
              />
            </div>
          ))}

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              URL Ảnh Di sản Shofu 1922
            </label>
            <input
              type="text"
              value={historyImage}
              onChange={(e) => setHistoryImage(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 font-mono text-xs text-slate-800 bg-white focus:border-[#00ADEF] outline-none"
            />
          </div>
        </div>
      </div>

      {/* 2. S-PRG Technology Report Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <Microscope className="w-4 h-4 text-[#00ADEF]" />
          <span>2. Tiêu đề Báo cáo Chuyên môn S-PRG</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Huy hiệu báo cáo
            </label>
            <input
              type="text"
              value={reportBadge}
              onChange={(e) => setReportBadge(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#00ADEF] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Chữ trên nút mở rộng báo cáo
            </label>
            <input
              type="text"
              value={reportButtonText}
              onChange={(e) => setReportButtonText(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#00ADEF] outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Tiêu đề báo cáo
          </label>
          <input
            type="text"
            value={reportHeadline}
            onChange={(e) => setReportHeadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:border-[#00ADEF] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Mô tả báo cáo
          </label>
          <textarea
            rows={2}
            value={reportDesc}
            onChange={(e) => setReportDesc(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-[#00ADEF] outline-none"
          />
        </div>
      </div>

      {/* 3. 3 Layers Structure */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#00ADEF]" />
          <span>3. Cấu trúc 3 lớp phức hợp của hạt S-PRG</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {layers.map((layer, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <span className="text-xl font-heading font-bold text-slate-300">0{idx + 1}</span>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Tên lớp
                </label>
                <input
                  type="text"
                  value={layer.title}
                  onChange={(e) => handleUpdateLayer(idx, 'title', e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Mô tả cơ chế
                </label>
                <textarea
                  rows={3}
                  value={layer.desc}
                  onChange={(e) => handleUpdateLayer(idx, 'desc', e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-600 bg-white focus:border-[#00ADEF] outline-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. 6 Bioactive Ions */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>4. Lá chắn 6 Ion sinh học (Giải phóng & Tái nạp)</span>
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {ions.map((ion, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-xs font-bold text-[#00ADEF] block">{ion.name}</span>
              <input
                type="text"
                value={ion.desc}
                onChange={(e) => handleUpdateIon(idx, 'desc', e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-800 bg-white focus:border-[#00ADEF] outline-none"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Cơ chế pH-buffering (Trung hòa axit)
            </label>
            <textarea
              rows={3}
              value={phBufferingDesc}
              onChange={(e) => setPhBufferingDesc(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-700 focus:border-[#00ADEF] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Cơ chế Tái nạp Ion (Recharge & Release)
            </label>
            <textarea
              rows={3}
              value={rechargeReleaseDesc}
              onChange={(e) => setRechargeReleaseDesc(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-700 focus:border-[#00ADEF] outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
