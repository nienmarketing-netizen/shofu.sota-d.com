const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const target = `Điểm cốt lõi làm nên sức mạnh trị liệu vượt trội của hệ sinh thái Giomer là hạt độn sinh học S-PRG độc quyền của Shofu. Cấu trúc hạt độn 3 lớp gồm lõi thủy tinh đa chức năng đã phản ứng trước, hoạt động như một "bình ắc quy sinh học" liên tục giải phóng và tự sạc lại 6 loại ion sinh học giúp tái khoáng hóa ngà răng và chống mảng bám vĩnh cửu.`;

const replacement = `Điểm cốt lõi làm nên <strong className="text-slate-900 font-bold">sức mạnh trị liệu vượt trội</strong> của hệ sinh thái Giomer là <strong className="text-[#00ADEF] font-bold">hạt độn sinh học S-PRG độc quyền</strong> của Shofu. <strong className="text-slate-900 font-bold">Cấu trúc hạt độn 3 lớp</strong> gồm lõi thủy tinh đa chức năng đã phản ứng trước, hoạt động như một "bình ắc quy sinh học" liên tục <strong className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">giải phóng và tự sạc lại 6 loại ion sinh học</strong> giúp <span className="text-slate-900 font-bold border-b-2 border-sky-300">tái khoáng hóa ngà răng</span> và <span className="text-slate-900 font-bold border-b-2 border-red-300">chống mảng bám vĩnh cửu</span>.`;

content = content.replace(target, replacement);

fs.writeFileSync(file_path, content);
console.log("Patched Section 4 text styling");
