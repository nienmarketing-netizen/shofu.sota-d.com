const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuOffers.tsx', 'utf-8');

const img1 = `<img src="/images/CTKM-mua-7-tang-2-Beautifill-II.webp" alt="Combo Mua 7 Tặng 2 Beautifil II" className="w-full h-full object-cover border-b border-white/10" />`;
const img2 = `<img src="/images/CTKM-mua-4-tang-1-Beautifil-II-LS.webp" alt="Combo Mua 4 Tặng 1 Beautifil II LS" className="w-full h-full object-cover border-b border-white/10" />`;
const img3 = `<img src="/images/CTKM-giam-gia-truc-tiep-BBX.webp" alt="Ưu đãi BeautiBond Xtreme" className="w-full h-full object-cover border-b border-white/10" />`;
const img4 = `<img src="/images/CTKM-mua-1-tang-1-BLSA-BBX.webp" alt="Combo Mua 1 Tặng 1 BeautiLink SA" className="w-full h-full object-cover border-b border-white/10" />`;

// Find ImagePlaceholder tags and replace them.
const regex2 = /<ImagePlaceholder\s*className="h-full w-full bg-slate-800"[\s\S]*?\/>/g;

let matches = content.match(regex2);
if (matches && matches.length >= 4) {
  content = content.replace(matches[0], img1);
  content = content.replace(matches[1], img2);
  content = content.replace(matches[2], img3);
  content = content.replace(matches[3], img4);
  fs.writeFileSync('src/components/shofu/ShofuOffers.tsx', content);
  console.log("Successfully replaced images using second regex.");
} else {
    // try finding just <ImagePlaceholder
    const regex3 = /<ImagePlaceholder[\s\S]*?\/>/g;
    let matches3 = content.match(regex3);
    if (matches3 && matches3.length >= 4) {
        content = content.replace(matches3[0], img1);
        content = content.replace(matches3[1], img2);
        content = content.replace(matches3[2], img3);
        content = content.replace(matches3[3], img4);
        fs.writeFileSync('src/components/shofu/ShofuOffers.tsx', content);
        console.log("Successfully replaced images using third regex.");
    } else {
        console.log("Still could not find the ImagePlaceholder blocks.");
    }
}
