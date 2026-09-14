const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const t_old = `<p className="font-body text-sm text-slate-600 leading-relaxed mb-6 order-5 lg:order-none">
                  Beautifil II LS sở hữu tỷ lệ hạt độn cao (83 wt%) giúp giảm thiểu tối đa độ co ngót thể tích xuống mức kỷ lục <strong>0.85% Vol</strong> và ứng suất co ngót tối thiểu chỉ <strong>1.37 MPa</strong>. Bảo vệ đường hoàn tất khỏi hiện tượng nứt kẽ vi thể và đổi màu đường viền sau nhiều năm ăn nhai.
                </p>`;
                
const t_new = `<p className="font-body text-sm text-slate-600 leading-relaxed mb-6 order-5 lg:order-none">
                  Beautifil II LS sở hữu tỷ lệ hạt độn cao (83 wt%) giúp <strong className="font-bold text-[#00ADEF] bg-sky-50 px-1 rounded">giảm thiểu tối đa độ co ngót thể tích xuống mức kỷ lục</strong> <strong className="font-bold text-white bg-slate-800 px-1.5 py-0.5 rounded text-[13px]">0.85% Vol</strong> và ứng suất co ngót tối thiểu chỉ <strong className="font-bold text-white bg-slate-800 px-1.5 py-0.5 rounded text-[13px]">1.37 MPa</strong>. <strong className="font-bold text-slate-900 underline decoration-sky-300 decoration-2 underline-offset-2">Bảo vệ đường hoàn tất khỏi hiện tượng nứt kẽ vi thể</strong> và đổi màu đường viền sau nhiều năm ăn nhai.
                </p>`;

content = content.replace(t_old, t_new);

fs.writeFileSync(file_path, content);
console.log("Highlights applied 3");
