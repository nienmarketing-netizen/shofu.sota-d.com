import fs from 'fs';

let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

// 1. Badge in Hero
content = content.replace(
  '<span className="font-mono text-xs text-[#00ADEF] font-semibold uppercase tracking-widest bg-[#00ADEF]/10 px-4 py-1.5 rounded-full mb-6 inline-block">\n              XU THẾ NHA KHOA CAN THIỆP TỐI THIỂU (MiCD) & PHỤC HỒI BIOPLASTIC 2026\n            </span>',
  `<span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#00ADEF]/10 border border-[#00ADEF]/20 mb-6 max-w-full overflow-hidden">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00ADEF] animate-pulse shrink-0"></span>
              <span className="font-mono text-[9px] min-[375px]:text-[10px] sm:text-xs font-bold text-[#00ADEF] tracking-tight sm:tracking-wide whitespace-nowrap uppercase">
                XU THẾ NHA KHOA CAN THIỆP TỐI THIỂU & PHỤC HỒI BIOPLASTIC
              </span>
            </span>`
);

// 2. H1
content = content.replace(
  '<h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 uppercase tracking-tight leading-[1.1]">',
  '<h1 className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.3] mb-6 uppercase tracking-tight">'
);

// 3. Subtitle under H1
content = content.replace(
  '<p className="text-lg text-slate-600 mb-8 leading-relaxed">',
  '<p className="font-body text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">'
);

// 4. Any missing font-body or text-base sm:text-lg
content = content.replace(
  '<p className="text-slate-600 text-lg">Sự kết hợp hoàn hảo tạo nên khoảng ghép vô hình 24µm vững chắc.</p>',
  '<p className="font-body text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">Sự kết hợp hoàn hảo tạo nên khoảng ghép vô hình 24µm vững chắc.</p>'
);
content = content.replace(
  '<p className="text-slate-600 text-lg">5 phút giải phóng ghế nha với quy trình "True Universal" tối giản</p>',
  '<p className="font-body text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">5 phút giải phóng ghế nha với quy trình "True Universal" tối giản</p>'
);

// 5. Update body text in sections
content = content.replace(
  '<p className="text-slate-600 leading-relaxed mb-6">',
  '<p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed mb-6">'
);
content = content.replace(
  '<p className="text-slate-600 leading-relaxed">',
  '<p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed">'
);
// USP Section texts
content = content.replace(
  /<p className="text-slate-600 leading-relaxed">/g,
  '<p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed">'
);

// 6. Section 7 badge
content = content.replace(
  '<span className="font-mono text-xs text-amber-400 font-semibold uppercase tracking-widest bg-amber-500/20 border border-amber-500/30 px-4 py-1.5 rounded-full mb-6 inline-block">',
  '<span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6 max-w-full overflow-hidden font-mono text-[9px] min-[375px]:text-[10px] sm:text-xs font-bold text-amber-400 tracking-tight sm:tracking-wide uppercase">'
);

// CTA Buttons - already pill rounded-full and correct, but we ensure text style matches homepage
content = content.replace(
  /className="group relative inline-flex items-center justify-center gap-2 bg-\[\#00ADEF\] text-white px-8 py-4 rounded-full font-heading font-bold text-base sm:text-lg hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-900\/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"/g,
  'className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"'
);
content = content.replace(
  /className="group relative inline-flex items-center justify-center gap-2 bg-\[\#00ADEF\] text-white px-8 py-4 rounded-full font-heading font-bold text-base sm:text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"/g,
  'className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"'
);


fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
