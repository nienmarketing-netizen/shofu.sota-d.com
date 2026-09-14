const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const t4_old = `<p className="font-body text-sm text-slate-600 leading-relaxed mb-6 order-5 lg:order-none">
                  Các vật liệu composite thế hệ Giomer của Shofu (như Beautifil II, Flow Plus, Injectable) được trang bị hệ thống hạt độn sinh học S-PRG. Khi tiếp xúc với môi trường miệng, chúng liên tục hút và giải phóng chuỗi 6 ion có lợi (Fluoride, Strontium, Borate...) giúp trung hòa acid, kháng khuẩn và tái khoáng hóa.
                </p>`;
const t4_new = `<p className="font-body text-sm text-slate-600 leading-relaxed mb-6 order-5 lg:order-none">
                  Các vật liệu composite thế hệ Giomer của Shofu (như Beautifil II, Flow Plus, Injectable) được trang bị <strong className="font-bold text-[#00ADEF] bg-sky-50 px-1 rounded">hệ thống hạt độn sinh học S-PRG</strong>. Khi tiếp xúc với môi trường miệng, chúng <strong className="font-bold text-slate-900 underline decoration-sky-300 decoration-2 underline-offset-2">liên tục hút và giải phóng chuỗi 6 ion có lợi</strong> (Fluoride, Strontium, Borate...) giúp trung hòa acid, kháng khuẩn và tái khoáng hóa.
                </p>`;

content = content.replace(t4_old, t4_new);

fs.writeFileSync(file_path, content);
console.log("Highlights applied 2");
