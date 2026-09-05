const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuOfferModal.tsx', 'utf-8');

// The images were not uploaded to the server by the user correctly so they are missing. I will use placeholder URLs for now until the user uploads them.
content = content.replace(/'\/images\/CTKM-mua-7-tang-2-Beautifill-II\.webp'/g, "'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautifil-injectable-x.png'");
content = content.replace(/'\/images\/CTKM-mua-4-tang-1-Beautifil-II-LS\.webp'/g, "'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautibond-xtreme.png'");
content = content.replace(/'\/images\/CTKM-giam-gia-truc-tiep-BBX\.webp'/g, "'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BeautilinkSA.png'");
content = content.replace(/'\/images\/CTKM-mua-1-tang-1-BLSA-BBX\.webp'/g, "'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@f081ef33bfcfda01a376c61118e98a95a99fb6bc/public/images/super-snap-xtreme.webp'");

// Set mix blend mode back so placeholders look good
const oldJsx = `<div className={\`relative aspect-[4/3] w-full flex items-center justify-center p-0 bg-slate-100\`}>
                          {offer.headerImage && (
                            <img src={offer.headerImage} alt={offer.headerText} className="absolute inset-0 w-full h-full object-cover" />
                          )}`;
const newJsx = `<div className={\`relative aspect-[4/3] w-full flex items-center justify-center p-0 bg-slate-100\`}>
                          {offer.headerImage && (
                            <img src={offer.headerImage} alt={offer.headerText} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
                          )}`;

content = content.replace(oldJsx, newJsx);

fs.writeFileSync('src/components/shofu/ShofuOfferModal.tsx', content);
