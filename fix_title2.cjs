const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

content = content.replace(/Combo "Trám Sinh Học MiCD - Chặn Đứng Ê Buốt"/g, 'combo "Trám sinh học MiCD - Chặn đứng ê buốt"');
content = content.replace(/01 Tuýp Composite đặc/g, '01 Tuýp composite đặc');
content = content.replace(/01 Tuýp Composite lỏng/g, '01 Tuýp composite lỏng');
content = content.replace(/Làm Chủ Lớp Lai & Kỹ Thuật Trám Xoang II/g, 'Làm chủ lớp lai & Kỹ thuật trám xoang II');

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
