const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuOfferModal.tsx', 'utf-8');

// Replace the placeholder CDN links with the actual ones from github
const image1 = 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautifil-injectable-x.png';
const newImage1 = 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/CTKM-mua-7-tang-2-Beautifill-II.webp';

const image2 = 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautibond-xtreme.png';
const newImage2 = 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/CTKM-mua-4-tang-1-Beautifil-II-LS.webp';

const image3 = 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BeautilinkSA.png';
const newImage3 = 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/CTKM-giam-gia-truc-tiep-BBX.webp';

const image4 = 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@f081ef33bfcfda01a376c61118e98a95a99fb6bc/public/images/super-snap-xtreme.webp';
const newImage4 = 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/CTKM-mua-1-tang-1-BLSA-BBX.webp';

content = content.replace(image1, newImage1);
content = content.replace(image2, newImage2);
content = content.replace(image3, newImage3);
content = content.replace(image4, newImage4);

// Remove the mix-blend-multiply class so the original banners display normally (otherwise they are multiplied against the background color and look grey/broken if they have a white background)
const oldJsx = `<img src={offer.headerImage} alt={offer.headerText} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />`;
const newJsx = `<img src={offer.headerImage} alt={offer.headerText} className="absolute inset-0 w-full h-full object-cover" />`;
content = content.replace(oldJsx, newJsx);

fs.writeFileSync('src/components/shofu/ShofuOfferModal.tsx', content);
console.log("Patched images successfully!");
