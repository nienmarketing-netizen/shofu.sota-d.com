const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuOffers.tsx', 'utf-8');

const img1 = `<img src="/images/CTKM-mua-7-tang-2-Beautifill-II.webp" alt="Combo Mua 7 Tặng 2 Beautifil II" className="w-full h-full object-cover border-b border-white/10" />`;
const img2 = `<img src="/images/CTKM-mua-4-tang-1-Beautifil-II-LS.webp" alt="Combo Mua 4 Tặng 1 Beautifil II LS" className="w-full h-full object-cover border-b border-white/10" />`;
const img3 = `<img src="/images/CTKM-giam-gia-truc-tiep-BBX.webp" alt="Ưu đãi BeautiBond Xtreme" className="w-full h-full object-cover border-b border-white/10" />`;
const img4 = `<img src="/images/CTKM-mua-1-tang-1-BLSA-BBX.webp" alt="Combo Mua 1 Tặng 1 BeautiLink SA" className="w-full h-full object-cover border-b border-white/10" />`;

// Let's find occurrences of <img src="..." /> inside ShofuOffers.tsx
// wait, the first script patch_images_2.cjs might have worked but output false positive, or my previous grep was wrong.
// Let's check how many times the exact strings are present.

