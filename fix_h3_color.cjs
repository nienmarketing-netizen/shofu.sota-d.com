const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

content = content.replace(
  /<h3 className="font-heading font-bold text-xl text-slate-900 mb-4">Tỷ lệ lưu giữ<\/h3>/,
  '<h3 className="font-heading font-bold text-xl text-white mb-4">Tỷ lệ lưu giữ</h3>'
);

content = content.replace(
  /<h3 className="font-heading font-bold text-xl text-slate-900 mb-4">Phục hình sạch bóng sâu răng<\/h3>/,
  '<h3 className="font-heading font-bold text-xl text-white mb-4">Phục hình sạch bóng sâu răng</h3>'
);

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
