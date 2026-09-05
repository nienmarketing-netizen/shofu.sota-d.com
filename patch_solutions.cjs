const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuSolutions.tsx', 'utf-8');

const targets = [
  {
    find: /<img referrerPolicy="no-referrer" src="https:\/\/cdn\.jsdelivr\.net\/gh\/nienmarketing-netizen\/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988\/beautifil-injectable-x\.png" alt="Beautifil Injectable X" className="w-full h-full object-cover mix-blend-multiply" loading="lazy" \/>/,
    replace: `<img src="/images/CTKM-mua-7-tang-2-Beautifill-II.webp" alt="Combo Mua 7 Tặng 2 Beautifil II" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />`
  },
  {
    find: /<img referrerPolicy="no-referrer" src="https:\/\/cdn\.jsdelivr\.net\/gh\/nienmarketing-netizen\/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988\/beautibond-xtreme\.png" alt="BeautiBond Xtreme" className="w-full h-full object-cover mix-blend-multiply" loading="lazy" \/>/,
    replace: `<img src="/images/CTKM-mua-4-tang-1-Beautifil-II-LS.webp" alt="Combo Mua 4 Tặng 1 Beautifil II LS" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />`
  },
  {
    find: /<img referrerPolicy="no-referrer" src="https:\/\/cdn\.jsdelivr\.net\/gh\/nienmarketing-netizen\/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988\/BeautilinkSA\.png" alt="Beautilink SA" className="w-full h-full object-cover mix-blend-multiply" loading="lazy" \/>/,
    replace: `<img src="/images/CTKM-giam-gia-truc-tiep-BBX.webp" alt="Ưu đãi BeautiBond Xtreme" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />`
  },
  {
    find: /<img referrerPolicy="no-referrer" \s*src="https:\/\/cdn\.jsdelivr\.net\/gh\/nienmarketing-netizen\/shofu\.sota-d\.com@f081ef33bfcfda01a376c61118e98a95a99fb6bc\/public\/images\/super-snap-xtreme\.webp" \s*alt="Super-Snap X-Treme" \s*className="w-full h-full object-cover mix-blend-multiply" loading="lazy" \/>/m,
    replace: `<img src="/images/CTKM-mua-1-tang-1-BLSA-BBX.webp" alt="Combo Mua 1 Tặng 1 BeautiLink SA" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />`
  }
];

let successCount = 0;
targets.forEach((t, index) => {
  if (content.match(t.find)) {
    content = content.replace(t.find, t.replace);
    successCount++;
  } else {
    console.log(`Failed to find target ${index}`);
  }
});

// Let's also update the text of the cards to match the new images so it makes sense!
// Wait, the user ONLY asked to update the IMAGES for the 4 promotional programs.
// Let's check what the titles are.

// Actually, I should also change bg-slate-100 to bg-slate-900 or just remove bg-slate-100 to make it look clean if the image is full.

content = content.replace(/bg-slate-100/g, 'bg-slate-900/5'); // Subtle background

fs.writeFileSync('src/components/shofu/ShofuSolutions.tsx', content);
console.log(`Patched ${successCount} targets.`);
