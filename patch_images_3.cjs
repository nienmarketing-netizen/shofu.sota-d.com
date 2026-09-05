const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuOffers.tsx', 'utf-8');

const img1 = `<img src="/images/CTKM-mua-7-tang-2-Beautifill-II.webp" alt="Combo Mua 7 Tặng 2 Beautifil II" className="w-full h-full object-cover border-b border-white/10" />`;
const img2 = `<img src="/images/CTKM-mua-4-tang-1-Beautifil-II-LS.webp" alt="Combo Mua 4 Tặng 1 Beautifil II LS" className="w-full h-full object-cover border-b border-white/10" />`;
const img3 = `<img src="/images/CTKM-giam-gia-truc-tiep-BBX.webp" alt="Ưu đãi BeautiBond Xtreme" className="w-full h-full object-cover border-b border-white/10" />`;
const img4 = `<img src="/images/CTKM-mua-1-tang-1-BLSA-BBX.webp" alt="Combo Mua 1 Tặng 1 BeautiLink SA" className="w-full h-full object-cover border-b border-white/10" />`;

// Let's replace by specific descriptions if possible
content = content.replace(/<div className="aspect-\[4\/3\] sm:aspect-auto sm:h-48 md:h-56 relative overflow-hidden bg-slate-800 flex items-center justify-center">.*?<\/div>/, `<div className="aspect-[4/3] sm:aspect-auto sm:h-48 md:h-56 relative overflow-hidden bg-slate-800 flex items-center justify-center">${img1}</div>`);
// It seems the file didn't change from the first attempt. Let's see what the file actually looks like.
