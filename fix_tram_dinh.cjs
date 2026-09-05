const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

content = content.replace(/Quy trình trám dính/g, 'Quy trình phục hồi trực tiếp');
content = content.replace(/quy trình trám dính/g, 'quy trình phục hồi trực tiếp');

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
