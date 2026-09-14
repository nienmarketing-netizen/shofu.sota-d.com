const fs = require('fs');
let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const t1_old = `<span><strong className="text-[#00ADEF]">HEMA-Free kỵ nước & Acetone:</strong> Tự thẩm thấu sâu, triệt tiêu 100% ê buốt.</span>`;
const t1_new = `<span><strong className="text-[#00ADEF]">HEMA-Free kỵ nước & Acetone:</strong> Tự thẩm thấu sâu, triệt tiêu ê buốt.</span>`;

content = content.replace(t1_old, t1_new);

fs.writeFileSync(file_path, content);
console.log("Text '100%' removed.");
