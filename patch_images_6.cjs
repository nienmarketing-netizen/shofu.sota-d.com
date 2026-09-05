const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuOffers.tsx', 'utf-8');

const offer1Target = /<div className="w-12 h-12 rounded-xl bg-\[#00ADEF\]\/20 flex items-center justify-center mb-6 shrink-0">/;
const offer2Target = /<div className="w-12 h-12 rounded-xl bg-\[#F43F5E\]\/20 flex items-center justify-center mb-6 shrink-0">/;
const offer3Target = /<div className="w-12 h-12 rounded-xl bg-amber-500\/20 flex items-center justify-center mb-6 shrink-0">/;
const offer4Target = /<div className="w-12 h-12 rounded-xl bg-emerald-500\/20 flex items-center justify-center mb-6 shrink-0">/;

const img1 = `<div className="w-full aspect-square sm:aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 flex items-center justify-center bg-slate-900/50"><img src="/images/CTKM-mua-7-tang-2-Beautifill-II.webp" alt="Combo Mua 7 Tặng 2 Beautifil II" className="w-full h-full object-cover" /></div>`;
const img2 = `<div className="w-full aspect-square sm:aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 flex items-center justify-center bg-slate-900/50"><img src="/images/CTKM-mua-4-tang-1-Beautifil-II-LS.webp" alt="Combo Mua 4 Tặng 1 Beautifil II LS" className="w-full h-full object-cover" /></div>`;
const img3 = `<div className="w-full aspect-square sm:aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 flex items-center justify-center bg-slate-900/50"><img src="/images/CTKM-giam-gia-truc-tiep-BBX.webp" alt="Ưu đãi BeautiBond Xtreme" className="w-full h-full object-cover" /></div>`;
const img4 = `<div className="w-full aspect-square sm:aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 flex items-center justify-center bg-slate-900/50"><img src="/images/CTKM-mua-1-tang-1-BLSA-BBX.webp" alt="Combo Mua 1 Tặng 1 BeautiLink SA" className="w-full h-full object-cover" /></div>`;

// Check where these targets are
content = content.replace(offer1Target, img1 + "\n" + '<div className="w-12 h-12 rounded-xl bg-[#00ADEF]/20 flex items-center justify-center mb-6 shrink-0">');
content = content.replace(offer2Target, img2 + "\n" + '<div className="w-12 h-12 rounded-xl bg-[#F43F5E]/20 flex items-center justify-center mb-6 shrink-0">');
content = content.replace(offer3Target, img3 + "\n" + '<div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6 shrink-0">');
content = content.replace(offer4Target, img4 + "\n" + '<div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6 shrink-0">');

fs.writeFileSync('src/components/shofu/ShofuOffers.tsx', content);
console.log("Injected images above the icons.");
