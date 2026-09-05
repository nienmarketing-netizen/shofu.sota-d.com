const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

// Target 1: Card container padding
const oldCardClass = 'rounded-3xl p-8 hover:border-red-500/60';
const newCardClass = 'rounded-3xl px-3 py-6 sm:p-8 hover:border-red-500/60';
content = content.split(oldCardClass).join(newCardClass);

// Target 2: H3 font size and tracking
const oldH3Class1 = '<h3 className="font-heading font-bold text-xl text-white mb-4">Sút phục hình & Ê buốt muộn</h3>';
const newH3Class1 = '<h3 className="font-heading font-bold text-[14.5px] min-[375px]:text-[16px] min-[400px]:text-[17px] sm:text-xl text-white mb-4 whitespace-nowrap sm:whitespace-normal tracking-tight sm:tracking-normal">Sút phục hình & Ê buốt muộn</h3>';
content = content.split(oldH3Class1).join(newH3Class1);

const oldH3Class2 = '<h3 className="font-heading font-bold text-xl text-white mb-4">Kênh cộm khớp & Hở đường viền</h3>';
const newH3Class2 = '<h3 className="font-heading font-bold text-[14.5px] min-[375px]:text-[16px] min-[400px]:text-[17px] sm:text-xl text-white mb-4 whitespace-nowrap sm:whitespace-normal tracking-tight sm:tracking-normal">Kênh cộm khớp & Hở đường viền</h3>';
content = content.split(oldH3Class2).join(newH3Class2);

const oldH3Class3 = '<h3 className="font-heading font-bold text-xl text-white mb-4">"Đốt tiền" do Thể tích chết Automix</h3>';
const newH3Class3 = '<h3 className="font-heading font-bold text-[13px] min-[375px]:text-[14.5px] min-[400px]:text-[15.5px] sm:text-xl text-white mb-4 whitespace-nowrap sm:whitespace-normal tracking-tight sm:tracking-normal">"Đốt tiền" do Thể tích chết Automix</h3>';
content = content.split(oldH3Class3).join(newH3Class3);

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log('Updated');
