const fs = require('fs');
let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const t1_old = `Sota-D mang đến những bằng chứng thép từ các <strong className="font-bold text-white bg-slate-800/80 px-1.5 rounded">nghiên cứu độc lập uy tín nhất thế giới</strong>, bảo chứng tuyệt đối cho chất lượng phục hình.`;
const t1_new = `Shofu mang đến những bằng chứng thép từ các <strong className="font-bold text-white bg-slate-800/80 px-1.5 rounded">nghiên cứu độc lập uy tín nhất thế giới</strong>, <strong className="font-bold text-[#00ADEF] underline decoration-sky-500 decoration-2 underline-offset-4">bảo chứng tuyệt đối cho chất lượng phục hình</strong>.`;

content = content.replace(t1_old, t1_new);

fs.writeFileSync(file_path, content);
console.log("Section 5 text patched.");
