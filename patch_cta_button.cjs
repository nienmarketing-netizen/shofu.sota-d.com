const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

content = content.replace('ĐĂNG KÝ "GIOMER KHÔNG Ê BUỐT" - NHẬN QUÀ 2.5TR!', 'ĐĂNG KÝ COMBO "GIOMER KHÔNG Ê BUỐT"');

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("CTA button text updated");
