const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const targetStr = '<strong className="text-slate-900">Kết quả sau cùng & Quy trình thực hiện:</strong> Hình ảnh phục hình hoàn thiện sau khi đóng kín các khe hở. Để đạt được kết quả này, bác sĩ đã làm sạch màng sinh học và xói mòn bề mặt bằng gel <span className="text-[#00ADEF] font-bold">Shofu Select Etch</span>. Tiếp đó, hệ thống keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span> được sử dụng để tối ưu độ bám dính. Bác sĩ kết hợp màng khuôn trong suốt và bơm vật liệu composite dòng chảy <span className="text-[#00ADEF] font-bold">Shofu Beautifil Injectable</span> (hoặc Beautifil Flow Plus) vào vùng kẽ. Đặc tính ôm sát và khuếch tán ánh sáng tốt của dòng composite này giúp lấp đầy hoàn hảo \\"tam giác đen\\" mà không tạo gờ nhô. Cuối cùng, bề mặt được đánh bóng vi phẫu bằng đĩa <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span> và mũi cao su <span className="text-[#00ADEF] font-bold">OneGloss</span>, mang lại độ láng mịn hoàn hảo, tệp màu tự nhiên và mô nướu hoàn toàn khỏe mạnh, không bị kích ứng.';

const replaceStr = '<strong className="text-slate-900">Kết quả & Quy trình:</strong> Khe hở được lấp đầy hoàn toàn bằng composite dòng chảy <span className="text-[#00ADEF] font-bold">Shofu Beautifil Injectable</span> kết hợp màng khuôn trong suốt, sau khi xử lý bề mặt với <span className="text-[#00ADEF] font-bold">Shofu Select Etch</span> và keo dán <span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span>. Phục hình được đánh bóng bằng đĩa <span className="text-[#00ADEF] font-bold">Shofu Super-Snap</span> và mũi <span className="text-[#00ADEF] font-bold">OneGloss</span>, mang lại bề mặt láng mịn, tệp màu tự nhiên và bảo vệ mô nướu khỏe mạnh.';

content = content.replace(targetStr, replaceStr);

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Updated case 5 image 2 note.");
