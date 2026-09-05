const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuSolutions.tsx', 'utf-8');

const regex = /<img referrerPolicy="no-referrer"[^>]*src="https:\/\/cdn\.jsdelivr\.net\/gh\/nienmarketing-netizen\/shofu\.sota-d\.com@f081ef33bfcfda01a376c61118e98a95a99fb6bc\/public\/images\/super-snap-xtreme\.webp"[^>]*>/;
const match = content.match(regex);
if (match) {
  content = content.replace(regex, `<img src="/images/CTKM-mua-1-tang-1-BLSA-BBX.webp" alt="Combo Mua 1 Tặng 1 BeautiLink SA" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />`);
  fs.writeFileSync('src/components/shofu/ShofuSolutions.tsx', content);
  console.log('Patched target 4');
} else {
  console.log('Target 4 not found');
}
