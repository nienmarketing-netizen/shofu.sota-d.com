const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const targetStr = '{ url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.2.webp", note: "<strong className=\\"text-slate-900\\">Phân tích nền đen:</strong> Chụp nền đen để lập bản đồ màu sắc chuẩn xác trước khi bôi keo <span className=\\"text-[#00ADEF] font-bold\\">Shofu BeautiBond Xtreme</span> và đắp composite <span className=\\"text-[#00ADEF] font-bold\\">Shofu Beautifil II</span>." }';

const replaceStr = '{ url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-7.2.webp", note: "<strong className=\\"text-slate-900\\">Kết quả sau cùng:</strong> Phục hình hoàn thiện với keo dán <span className=\\"text-[#00ADEF] font-bold\\">Shofu BeautiBond Xtreme</span> và composite <span className=\\"text-[#00ADEF] font-bold\\">Shofu Beautifil II</span> tái tạo hoàn hảo hình thể, độ trong mờ và hiệu ứng màu sắc tự nhiên của men răng." }';

if(content.includes(targetStr)) {
    content = content.replace(targetStr, replaceStr);
    fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
    console.log("Success! Replaced directly via substring.");
} else {
    console.log("Failed to match substring.");
}
