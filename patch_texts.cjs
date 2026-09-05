const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuSolutions.tsx', 'utf-8');

// P1
content = content.replace(
  /<div className="font-mono text-\[10px\] text-\[#00ADEF\] font-semibold uppercase tracking-widest mb-2">COMPOSITE LỎNG CAO CẤP<\/div>\s*<h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Beautifil Injectable X<\/h4>\s*<div className="font-mono text-xs text-slate-500 mb-4">Độ bóng & Độ bền vượt trội<\/div>/g,
  `<div className="font-mono text-[10px] text-red-500 font-semibold uppercase tracking-widest mb-2">ƯU ĐÃI ĐẶC BIỆT</div>
  <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Mua 7 Tặng 2</h4>
  <div className="font-mono text-xs text-slate-500 mb-4">Beautifil II</div>`
);

// P2
content = content.replace(
  /<div className="font-mono text-\[10px\] text-\[#00ADEF\] font-semibold uppercase tracking-widest mb-2">KEO DÁN ĐA NĂNG HEMA-FREE<\/div>\s*<h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">BeautiBond Xtreme<\/h4>\s*<div className="font-mono text-xs text-slate-500 mb-4">Lực dán chắc chắn mọi bề mặt<\/div>/g,
  `<div className="font-mono text-[10px] text-red-500 font-semibold uppercase tracking-widest mb-2">ƯU ĐÃI ĐẶC BIỆT</div>
  <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Mua 4 Tặng 1</h4>
  <div className="font-mono text-xs text-slate-500 mb-4">Beautifil II LS</div>`
);

// P3
content = content.replace(
  /<div className="font-mono text-\[10px\] text-\[#C43838\] font-semibold uppercase tracking-widest mb-2">XI MĂNG TỰ DÁN THẾ HỆ MỚI<\/div>\s*<h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Beautilink SA<\/h4>\s*<div className="font-mono text-xs text-slate-500 mb-4">One-Sweep sạch xi măng dư<\/div>/g,
  `<div className="font-mono text-[10px] text-red-500 font-semibold uppercase tracking-widest mb-2">GIẢM TRỰC TIẾP</div>
  <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Ưu Đãi Đặc Quyền</h4>
  <div className="font-mono text-xs text-slate-500 mb-4">BeautiBond Xtreme</div>`
);

// P4
content = content.replace(
  /<div className="font-mono text-\[10px\] text-\[#8C2828\] font-semibold uppercase tracking-widest mb-2">MŨI ĐÁNH BÓNG HOÀN THIỆN<\/div>\s*<h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Super-Snap X-Treme<\/h4>\s*<div className="font-mono text-xs text-slate-500 mb-4">Bề mặt hoàn hảo tự nhiên<\/div>/g,
  `<div className="font-mono text-[10px] text-red-500 font-semibold uppercase tracking-widest mb-2">ƯU ĐÃI ĐẶC BIỆT</div>
  <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Mua 1 Tặng 1</h4>
  <div className="font-mono text-xs text-slate-500 mb-4">BeautiLink SA & BeautiBond Xtreme</div>`
);

fs.writeFileSync('src/components/shofu/ShofuSolutions.tsx', content);
