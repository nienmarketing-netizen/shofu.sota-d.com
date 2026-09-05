const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

content = content.replace('Combo dán - gắn đồng bộ trị giá 3.415.000đ', 'Combo dán - gắn đồng bộ');
content = content.replace('Bộ quà tặng đặc quyền (Trị giá 2.500.000đ)', 'Bộ quà tặng đặc quyền');

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("Headlines updated");
