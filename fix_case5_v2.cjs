const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

// Find the line for case-study-5.2.webp
const regex = /\{ url: "https:\/\/cdn.jsdelivr.net\/gh\/nienmarketing-netizen\/shofu.sota-d.com@main\/public\/images\/Case%20Study\/case-study-5.2.webp", note: "[^"]+" \}/;

const newString = '{ url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-5.2.webp", note: "<strong className=\\"text-slate-900\\">Kết quả:</strong> Khe hở được lấp đầy hoàn hảo bằng <span className=\\"text-[#00ADEF] font-bold\\">Shofu Beautifil Injectable</span> sau khi xử lý bằng <span className=\\"text-[#00ADEF] font-bold\\">Shofu Select Etch</span> và keo dán <span className=\\"text-[#00ADEF] font-bold\\">Shofu BeautiBond Xtreme</span>. Bề mặt được đánh bóng vi phẫu bằng đĩa <span className=\\"text-[#00ADEF] font-bold\\">Shofu Super-Snap</span> & mũi cao su <span className=\\"text-[#00ADEF] font-bold\\">OneGloss</span> mang lại độ láng mịn và tệp màu tự nhiên." }';

if(regex.test(content)) {
    content = content.replace(regex, newString);
    fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
    console.log("Success! Updated Case 5 Image 2.");
} else {
    console.log("Failed to match regex for Case 5 image 2.");
}
