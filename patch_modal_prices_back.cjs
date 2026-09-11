const fs = require('fs');

let file = 'src/components/shofu/ShofuOfferModal.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace for Combo 1 (Giomer Không Ê Buốt)
// Wait, both have empty strings now. I'll replace the first occurrence and the second occurrence.

// Let's use string split/join or precise string replacements.
let parts = content.split("totalValue: '',");

if (parts.length === 3) {
  // parts[0] is before first totalValue
  // parts[1] is between first and second
  // parts[2] is after second
  
  // We need to also patch the `price: '',` just after
  
  let newContent = parts[0] + "totalValue: '8.155.000đ',\n      price: '3.415.000đ'," + parts[1].replace("price: '',", "") + "totalValue: '7.250.000đ',\n      price: '3.250.000đ'," + parts[2].replace("price: '',", "");
  
  fs.writeFileSync(file, newContent);
  console.log('Restored prices for Combo 1 & 2');
} else {
  console.log('Failed to match exactly two empty totalValue strings.');
}
