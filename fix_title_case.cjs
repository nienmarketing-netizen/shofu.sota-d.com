const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

content = content.replace(/Hệ Sinh Thái Giomer/g, 'Hệ sinh thái Giomer');
content = content.replace(/Quy Trình Trám Dính 3 Bước Tối Giản/g, 'Quy trình trám dính 3 bước tối giản');
content = content.replace(/Keo dán Universal kỵ nước/g, 'Keo dán universal kỵ nước');

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
