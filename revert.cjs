const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuOffers.tsx', 'utf-8');
const img1 = `<div className="w-full aspect-square sm:aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 flex items-center justify-center bg-slate-900/50"><img src="/images/CTKM-mua-7-tang-2-Beautifill-II.webp" alt="Combo Mua 7 Tặng 2 Beautifil II" className="w-full h-full object-cover" /></div>\n`;
content = content.replace(img1, '');
fs.writeFileSync('src/components/shofu/ShofuOffers.tsx', content);
