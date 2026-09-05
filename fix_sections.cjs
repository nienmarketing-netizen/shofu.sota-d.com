const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

// 92 Hero
content = content.replace(
  /<section className="relative bg-gradient-to-br from-\[#00ADEF\]\/10 to-\[#007AA8\]\/10 pt-\[100px\] pb-16 md:pt-\[120px\] md:pb-24 overflow-hidden border-b border-slate-200">/,
  '<section className="relative bg-slate-50 bg-grid-pattern pt-[100px] pb-16 md:pt-[120px] md:pb-24 overflow-hidden border-b border-slate-200">'
);
content = content.replace(
  /<div className="absolute inset-0 bg-grid-pattern opacity-10"><\/div>/,
  '<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#00ADEF]/10 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>'
);

// 149 Ám ảnh âm thầm
content = content.replace(
  /<section className="py-16 md:py-24 bg-white relative">/,
  '<section className="py-20 lg:py-28 bg-slate-100 bg-grid-pattern relative overflow-hidden border-t border-slate-200">'
);

// 182 Giải pháp đồng bộ
content = content.replace(
  /<section className="py-16 md:py-24 bg-slate-50 relative border-t border-slate-200">/,
  '<section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative overflow-hidden border-t border-slate-200">'
);
content = content.replace(
  /<div className="absolute inset-0 bg-grid-pattern opacity-\[0.03\]"><\/div>/,
  ''
);

// 329 Sức mạnh S-PRG
content = content.replace(
  /<section className="py-16 md:py-24 bg-white relative">/,
  '<section className="py-20 lg:py-28 bg-slate-100 bg-grid-pattern relative overflow-hidden border-t border-slate-200">'
);

// 367 Chứng cứ lâm sàng
content = content.replace(
  /<section className="py-16 md:py-24 bg-slate-900 relative border-y border-slate-800 text-white">/,
  '<section className="py-20 lg:py-28 bg-slate-900 relative border-y border-slate-800 text-white overflow-hidden">\n        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>'
);

// 404 FAQ
content = content.replace(
  /<section className="py-16 md:py-24 bg-slate-50">/,
  '<section className="py-20 lg:py-28 bg-slate-200 bg-grid-pattern relative border-t border-slate-300 overflow-hidden">'
);

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
