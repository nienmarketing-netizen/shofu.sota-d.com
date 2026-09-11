const fs = require('fs');

let file = 'src/components/shofu/ShofuOfferModal.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace totalValue and price
content = content.replace(/totalValue: '.*?',/g, "totalValue: '',");
content = content.replace(/price: '.*?',/g, "price: '',");

// We also need to remove the rendering of total value and price in the UI if we don't want empty gaps
fs.writeFileSync(file, content);
console.log('Done');
