import React from 'react';
import { ShieldCheck, BookOpen, Microscope, Quote, Plus, Trash2 } from 'lucide-react';
import { TestimonialItem } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section5EvidenceEditorProps {
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  quote: string;
  setQuote: React.Dispatch<React.SetStateAction<string>>;
  study1Title: string;
  setStudy1Title: React.Dispatch<React.SetStateAction<string>>;
  study1Points: string[];
  setStudy1Points: React.Dispatch<React.SetStateAction<string[]>>;
  study2Title: string;
  setStudy2Title: React.Dispatch<React.SetStateAction<string>>;
  study2Desc: string;
  setStudy2Desc: React.Dispatch<React.SetStateAction<string>>;
  testimonialsHeadline: string;
  setTestimonialsHeadline: React.Dispatch<React.SetStateAction<string>>;
  testimonialsRow1: TestimonialItem[];
  setTestimonialsRow1: React.Dispatch<React.SetStateAction<TestimonialItem[]>>;
  testimonialsRow2: TestimonialItem[];
  setTestimonialsRow2: React.Dispatch<React.SetStateAction<TestimonialItem[]>>;
  ctaText: string;
  setCtaText: React.Dispatch<React.SetStateAction<string>>;
  formTitle?: string;
  setFormTitle?: React.Dispatch<React.SetStateAction<string>>;
  formDesc?: string;
  setFormDesc?: React.Dispatch<React.SetStateAction<string>>;
  formExtraHtml?: string;
  setFormExtraHtml?: React.Dispatch<React.SetStateAction<string>>;
  redirectThanks?: boolean;
  setRedirectThanks?: React.Dispatch<React.SetStateAction<boolean>>;
  targetUrl?: string;
  setTargetUrl?: React.Dispatch<React.SetStateAction<string>>;
  resourceTitle?: string;
  setResourceTitle?: React.Dispatch<React.SetStateAction<string>>;
}

export const Section5EvidenceEditor: React.FC<Section5EvidenceEditorProps> = ({
  headline,
  setHeadline,
  quote,
  setQuote,
  study1Title,
  setStudy1Title,
  study1Points,
  setStudy1Points,
  study2Title,
  setStudy2Title,
  study2Desc,
  setStudy2Desc,
  testimonialsHeadline,
  setTestimonialsHeadline,
  testimonialsRow1,
  setTestimonialsRow1,
  testimonialsRow2,
  setTestimonialsRow2,
  ctaText,
  setCtaText,
  formTitle = '',
  setFormTitle = () => {},
  formDesc = '',
  setFormDesc = () => {},
  formExtraHtml = '',
  setFormExtraHtml = () => {},
  redirectThanks = false,
  setRedirectThanks = () => {},
  targetUrl = '',
  setTargetUrl = () => {},
  resourceTitle = '',
  setResourceTitle = () => {},
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-extrabold text-slate-900">
              Section 5: Bằng chứng y văn & Đánh giá chuyên gia
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Nghiên cứu lâm sàng JADA (8 năm & 13 năm), Nature 2018 và feedback từ Bác sĩ
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              Tiêu đề chính Section H2
            </label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              Câu trích dẫn định hướng (Quote)
            </label>
            <input
              type="text"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm italic text-slate-800"
            />
          </div>
        </div>
      </div>

      {/* 2. 2 Studies Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            5.2. Hai nghiên cứu khoa học bảo chứng
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Study 1: JADA */}
          <div className="p-5 rounded-2xl border border-blue-200 bg-blue-50/30 space-y-4">
            <div className="flex items-center gap-2 text-blue-700">
              <BookOpen className="w-5 h-5" />
              <span className="font-bold text-sm">Nghiên cứu 1: JADA Florida</span>
            </div>
            <div>
              <label className="block text-xs text-slate-600 font-semibold mb-1">Tiêu đề bài báo</label>
              <textarea
                rows={2}
                value={study1Title}
                onChange={(e) => setStudy1Title(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs text-slate-600 font-semibold">Các mốc kết quả</label>
              {study1Points.map((pt, idx) => (
                <textarea
                  key={idx}
                  rows={2}
                  value={pt}
                  onChange={(e) => {
                    const next = [...study1Points];
                    next[idx] = e.target.value;
                    setStudy1Points(next);
                  }}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-700"
                />
              ))}
            </div>
          </div>

          {/* Study 2: Nature */}
          <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/30 space-y-4">
            <div className="flex items-center gap-2 text-emerald-700">
              <Microscope className="w-5 h-5" />
              <span className="font-bold text-sm">Nghiên cứu 2: Tạp chí Nature (2018)</span>
            </div>
            <div>
              <label className="block text-xs text-slate-600 font-semibold mb-1">Tiêu đề nghiên cứu</label>
              <textarea
                rows={2}
                value={study2Title}
                onChange={(e) => setStudy2Title(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-600 font-semibold mb-1">Nội dung chứng minh SEM</label>
              <textarea
                rows={5}
                value={study2Desc}
                onChange={(e) => setStudy2Desc(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Testimonials */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              5.3. Đánh giá chuyên gia lâm sàng
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Hiển thị dạng băng chuyền chạy ngang (Marquee) 2 hàng
            </p>
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
            Tiêu đề phần Đánh giá
          </label>
          <input
            type="text"
            value={testimonialsHeadline}
            onChange={(e) => setTestimonialsHeadline(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900"
          />
        </div>

        {/* Row 1 Feedbacks */}
        <div className="space-y-4 pt-2">
          <span className="text-xs font-mono font-bold text-slate-600 uppercase">
            Hàng 1 (Chạy từ phải sang trái)
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonialsRow1.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <textarea
                  rows={3}
                  value={item.quote}
                  onChange={(e) => {
                    const next = [...testimonialsRow1];
                    next[idx].quote = e.target.value;
                    setTestimonialsRow1(next);
                  }}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs italic text-slate-800"
                  placeholder="Lời nhận xét..."
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => {
                      const next = [...testimonialsRow1];
                      next[idx].name = e.target.value;
                      setTestimonialsRow1(next);
                    }}
                    className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold"
                    placeholder="Bác sĩ / Chuyên gia..."
                  />
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => {
                      const next = [...testimonialsRow1];
                      next[idx].title = e.target.value;
                      setTestimonialsRow1(next);
                    }}
                    className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-500"
                    placeholder="Đơn vị / Chức danh..."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 Feedbacks */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <span className="text-xs font-mono font-bold text-slate-600 uppercase">
            Hàng 2 (Chạy ngược chiều)
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonialsRow2.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <textarea
                  rows={3}
                  value={item.quote}
                  onChange={(e) => {
                    const next = [...testimonialsRow2];
                    next[idx].quote = e.target.value;
                    setTestimonialsRow2(next);
                  }}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs italic text-slate-800"
                  placeholder="Lời nhận xét..."
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => {
                      const next = [...testimonialsRow2];
                      next[idx].name = e.target.value;
                      setTestimonialsRow2(next);
                    }}
                    className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold"
                    placeholder="Bác sĩ / Chuyên gia..."
                  />
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => {
                      const next = [...testimonialsRow2];
                      next[idx].title = e.target.value;
                      setTestimonialsRow2(next);
                    }}
                    className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-500"
                    placeholder="Đơn vị / Chức danh..."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. CTA & Form */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            5.4. Cấu hình Nút CTA & Form
          </h3>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
            Chữ trên nút CTA
          </label>
          <input
            type="text"
            value={ctaText}
            onChange={(e) => setCtaText(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
          />
        </div>

        <CtaFormConfigEditor
          label="CTA & Form Section 5"
          ctaText={ctaText}
          onChangeCtaText={setCtaText}
          formTitle={formTitle}
          onChangeFormTitle={setFormTitle}
          setTitle={setFormTitle}
          formDesc={formDesc}
          onChangeFormDesc={setFormDesc}
          setDescription={setFormDesc}
          formExtraHtml={formExtraHtml}
          onChangeFormExtraHtml={setFormExtraHtml}
          setExtraHtml={setFormExtraHtml}
          redirectThanks={redirectThanks}
          onChangeRedirectThanks={setRedirectThanks}
          setRedirectThanks={setRedirectThanks}
          targetUrl={targetUrl}
          onChangeTargetUrl={setTargetUrl}
          setTargetUrl={setTargetUrl}
          resourceTitle={resourceTitle}
          onChangeResourceTitle={setResourceTitle}
          setResourceTitle={setResourceTitle}
        />
      </div>
    </div>
  );
};
