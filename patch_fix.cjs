const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuSolutions.tsx', 'utf-8');

// Fix the image tag mess
content = content.replace(
  /<img src="\/images\/CTKM-mua-1-tang-1-BLSA-BBX\.webp"[\s\S]*?\/>/m,
  `<img src="/images/CTKM-mua-1-tang-1-BLSA-BBX.webp" alt="Combo Mua 1 Tặng 1 BeautiLink SA" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />`
);

// Fix the texts for product 4
content = content.replace(
  /<div className="font-mono text-\[10px\] text-\[#00ADEF\] font-semibold uppercase tracking-widest mb-2">HỆ THỐNG ĐÁNH BÓNG<\/div>\s*<h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Super-Snap Xtreme<\/h4>\s*<div className="font-mono text-xs text-slate-500 mb-4">Độ bóng 3D hoàn hảo<\/div>/g,
  `<div className="font-mono text-[10px] text-red-500 font-semibold uppercase tracking-widest mb-2">ƯU ĐÃI ĐẶC BIỆT</div>
              <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Mua 1 Tặng 1</h4>
              <div className="font-mono text-xs text-slate-500 mb-4">BeautiLink SA & BeautiBond Xtreme</div>`
);

fs.writeFileSync('src/components/shofu/ShofuSolutions.tsx', content);
