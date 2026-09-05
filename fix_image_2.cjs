const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuOfferModal.tsx', 'utf-8');

content = content.replace(
  /'https:\/\/cdn\.jsdelivr\.net\/gh\/nienmarketing-netizen\/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988\/beautibond-xtreme\.png'/g,
  "'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/CTKM-mua-4-tang-1-Beautifil-II-LS.webp'"
);

fs.writeFileSync('src/components/shofu/ShofuOfferModal.tsx', content);
console.log("Fixed image 2!");
