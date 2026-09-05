const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuSolutions.tsx', 'utf-8');

// Undo changes to titles
content = content.replace(
  /<h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase">\s*Chương Trình Khuyến Mãi Nổi Bật\s*<\/h3>/g,
  `<h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase">
              Hệ sinh thái vật liệu nha khoa Shofu
            </h3>`
);

content = content.replace(
  /<p className="text-slate-600 mt-4 max-w-2xl mx-auto">\s*Đừng bỏ lỡ các ưu đãi đặc quyền lớn nhất năm dành riêng cho Quý Bác sĩ từ Sota-D và Shofu Nhật Bản.\s*<\/p>/g,
  `<p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Sota-D phân phối chính hãng toàn bộ hệ sinh thái giải pháp nha khoa từ Shofu Nhật Bản, đảm bảo chất lượng kiểm định khắt khe nhất.
            </p>`
);

// P1
content = content.replace(
  /<div className="font-mono text-\[10px\] text-red-500 font-semibold uppercase tracking-widest mb-2">ƯU ĐÃI ĐẶC BIỆT<\/div>\s*<h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Mua 7 Tặng 2<\/h4>\s*<div className="font-mono text-xs text-slate-500 mb-4">Beautifil II<\/div>/g,
  `<div className="font-mono text-[10px] text-[#00ADEF] font-semibold uppercase tracking-widest mb-2">COMPOSITE LỎNG CAO CẤP</div>
              <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Beautifil Injectable X</h4>
              <div className="font-mono text-xs text-slate-500 mb-4">Độ bóng & Độ bền vượt trội</div>`
);

// P2
content = content.replace(
  /<div className="font-mono text-\[10px\] text-red-500 font-semibold uppercase tracking-widest mb-2">ƯU ĐÃI ĐẶC BIỆT<\/div>\s*<h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Mua 4 Tặng 1<\/h4>\s*<div className="font-mono text-xs text-slate-500 mb-4">Beautifil II LS<\/div>/g,
  `<div className="font-mono text-[10px] text-[#00ADEF] font-semibold uppercase tracking-widest mb-2">KEO DÁN ĐA NĂNG HEMA-FREE</div>
              <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">BeautiBond Xtreme</h4>
              <div className="font-mono text-xs text-slate-500 mb-4">Lực dán chắc chắn mọi bề mặt</div>`
);

// P3
content = content.replace(
  /<div className="font-mono text-\[10px\] text-red-500 font-semibold uppercase tracking-widest mb-2">GIẢM TRỰC TIẾP<\/div>\s*<h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Ưu Đãi Đặc Quyền<\/h4>\s*<div className="font-mono text-xs text-slate-500 mb-4">BeautiBond Xtreme<\/div>/g,
  `<div className="font-mono text-[10px] text-[#C43838] font-semibold uppercase tracking-widest mb-2">XI MĂNG TỰ DÁN THẾ HỆ MỚI</div>
              <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Beautilink SA</h4>
              <div className="font-mono text-xs text-slate-500 mb-4">One-Sweep sạch xi măng dư</div>`
);

// P4
content = content.replace(
  /<div className="font-mono text-\[10px\] text-red-500 font-semibold uppercase tracking-widest mb-2">ƯU ĐÃI ĐẶC BIỆT<\/div>\s*<h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Mua 1 Tặng 1<\/h4>\s*<div className="font-mono text-xs text-slate-500 mb-4">BeautiLink SA & BeautiBond Xtreme<\/div>/g,
  `<div className="font-mono text-[10px] text-[#8C2828] font-semibold uppercase tracking-widest mb-2">MŨI ĐÁNH BÓNG HOÀN THIỆN</div>
              <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-tight">Super-Snap X-Treme</h4>
              <div className="font-mono text-xs text-slate-500 mb-4">Bề mặt hoàn hảo tự nhiên</div>`
);

// Revert Images
content = content.replace(
  /<img src="\/images\/CTKM-mua-7-tang-2-Beautifill-II\.webp" alt="Combo Mua 7 Tặng 2 Beautifil II" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" \/>/,
  `<img referrerPolicy="no-referrer" src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautifil-injectable-x.png" alt="Beautifil Injectable X" className="w-full h-full object-cover mix-blend-multiply" loading="lazy" />`
);

content = content.replace(
  /<img src="\/images\/CTKM-mua-4-tang-1-Beautifil-II-LS\.webp" alt="Combo Mua 4 Tặng 1 Beautifil II LS" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" \/>/,
  `<img referrerPolicy="no-referrer" src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautibond-xtreme.png" alt="BeautiBond Xtreme" className="w-full h-full object-cover mix-blend-multiply" loading="lazy" />`
);

content = content.replace(
  /<img src="\/images\/CTKM-giam-gia-truc-tiep-BBX\.webp" alt="Ưu đãi BeautiBond Xtreme" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" \/>/,
  `<img referrerPolicy="no-referrer" src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BeautilinkSA.png" alt="Beautilink SA" className="w-full h-full object-cover mix-blend-multiply" loading="lazy" />`
);

content = content.replace(
  /<img src="\/images\/CTKM-mua-1-tang-1-BLSA-BBX\.webp" alt="Combo Mua 1 Tặng 1 BeautiLink SA" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" \/>/,
  `<img referrerPolicy="no-referrer" 
                  src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@f081ef33bfcfda01a376c61118e98a95a99fb6bc/public/images/super-snap-xtreme.webp" 
                  alt="Super-Snap X-Treme" 
                  className="w-full h-full object-cover mix-blend-multiply" loading="lazy" 
                  onError={(e) => {
                    if (!e.currentTarget.src.includes("cdn.jsdelivr.net")) {
                      e.currentTarget.src = "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@f081ef33bfcfda01a376c61118e98a95a99fb6bc/public/images/super-snap-xtreme.webp";
                    }
                  }}
                />`
);

content = content.replace(/bg-slate-900\/5/g, 'bg-slate-100');

fs.writeFileSync('src/components/shofu/ShofuSolutions.tsx', content);
