const fs = require('fs');

let file = 'src/components/shofu/ShofuOfferModal.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace product prices in offerDetails
content = content.replace(/value: '[0-9.]+đ',/g, "value: '',");
// Also remove totalValue and price properties in offerDetails, or set them to empty
// content = content.replace(/totalValue: '[0-9.]+đ',/g, "totalValue: '',");
// content = content.replace(/price: '[0-9.]+đ',/g, "price: '',");

// Remove oldPrice and newPrice in productDetails
content = content.replace(/oldPrice: '.*?',/g, "oldPrice: '',");
content = content.replace(/newPrice: '.*?',/g, "newPrice: '',");

// Remove the text about BeautiLink SA free BBX value
content = content.replace(/\(trị giá 1\.420\.000đ\)/g, '');

fs.writeFileSync(file, content);
console.log('Done ShofuOfferModal');
