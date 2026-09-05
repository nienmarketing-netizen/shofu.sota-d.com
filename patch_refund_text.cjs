const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

content = content.replace('Cam kết hoàn tiền 100% trong 30 ngày nếu xảy ra ê buốt do vật liệu.', 'Hoàn tiền 100% nếu Bác sĩ không hài lòng.');

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("Refund text updated");
