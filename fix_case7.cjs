const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const targetStr = '{ url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.2.webp", note: "<strong className=\\"text-slate-900\\">Phân tích quang học với nền đen:</strong> Bác sĩ sử dụng tấm nền đen (contrastor) trong miệng để chụp cận cảnh, cô lập ánh sáng chói. Bước này giúp làm nổi bật rõ rệt độ trong mờ (translucency) ở phần rìa cắn, độ dày của men răng và chi tiết các đốm trắng. Đây là thao tác bắt buộc để thiết lập \\"bản đồ màu sắc\\" (color mapping) chuẩn xác, chuẩn bị cho kỹ thuật sửa soạn, bôi keo dán <span className=\\"text-[#00ADEF] font-bold\\">Shofu BeautiBond Xtreme</span> và đắp lớp (layering) bằng các sắc độ ngà, men của hệ thống composite <span className=\\"text-[#00ADEF] font-bold\\">Shofu Beautifil II</span> ở các bước tiếp theo." }';

const replaceStr = '{ url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.2.webp", note: "<strong className=\\"text-slate-900\\">Phân tích nền đen:</strong> Chụp nền đen để lập bản đồ màu sắc chuẩn xác trước khi bôi keo <span className=\\"text-[#00ADEF] font-bold\\">Shofu BeautiBond Xtreme</span> và đắp composite <span className=\\"text-[#00ADEF] font-bold\\">Shofu Beautifil II</span>." }';

if(content.includes(targetStr)) {
    content = content.replace(targetStr, replaceStr);
    fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
    console.log("Success! Replaced directly via substring.");
} else {
    console.log("Failed to match substring.");
}
