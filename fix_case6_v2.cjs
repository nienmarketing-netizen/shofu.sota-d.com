const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const targetStr = '{ url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.2.webp", note: "<strong className=\\"text-slate-900\\">Kết quả sau cùng:</strong> Hình ảnh sau khi bề mặt răng được xử lý vi mài mòn và che phủ khiếm khuyết bằng một lớp siêu mỏng composite <span className=\\"text-[#00ADEF] font-bold\\">Shofu Beautifil II</span> (sử dụng hệ thống keo dán <span className=\\"text-[#00ADEF] font-bold\\">Shofu BeautiBond Xtreme</span>). Để đạt được bề mặt nhẵn mịn như men răng thật, bác sĩ đã tiến hành đánh bóng tích cực bằng hệ thống đĩa <span className=\\"text-[#00ADEF] font-bold\\">Shofu Super-Snap</span>, kết hợp mũi cao su <span className=\\"text-[#00ADEF] font-bold\\">OneGloss</span> và sáp đánh bóng <span className=\\"text-[#00ADEF] font-bold\\">DirectDia Paste</span>. Kết quả cho thấy các đốm màu đã được che lấp hoàn toàn, răng đạt độ bóng láng và tệp màu hoàn hảo." }';

const replaceStr = '{ url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.2.webp", note: "<strong className=\\"text-slate-900\\">Kết quả sau cùng:</strong> Che phủ đốm màu bằng composite <span className=\\"text-[#00ADEF] font-bold\\">Shofu Beautifil II</span> & keo dán <span className=\\"text-[#00ADEF] font-bold\\">Shofu BeautiBond Xtreme</span>. Đánh bóng hoàn thiện với đĩa <span className=\\"text-[#00ADEF] font-bold\\">Shofu Super-Snap</span>, mũi <span className=\\"text-[#00ADEF] font-bold\\">OneGloss</span> & sáp <span className=\\"text-[#00ADEF] font-bold\\">DirectDia Paste</span> mang lại bề mặt bóng láng, tệp màu tự nhiên." }';

if(content.includes(targetStr)) {
    content = content.replace(targetStr, replaceStr);
    fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
    console.log("Success! Replaced directly via substring.");
} else {
    console.log("Failed to match substring.");
}
