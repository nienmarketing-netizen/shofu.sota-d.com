const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const regex = /\{ url: "https:\/\/cdn.jsdelivr.net\/gh\/nienmarketing-netizen\/shofu.sota-d.com@main\/public\/images\/Case%20Study\/case-study-6.2.webp", note: "[^"]+" \}/g;

const newString = '{ url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-6.2.webp", note: "<strong className=\\"text-slate-900\\">Kết quả sau cùng:</strong> Che phủ đốm màu bằng composite <span className=\\"text-[#00ADEF] font-bold\\">Shofu Beautifil II</span> & keo dán <span className=\\"text-[#00ADEF] font-bold\\">Shofu BeautiBond Xtreme</span>. Đánh bóng hoàn thiện với đĩa <span className=\\"text-[#00ADEF] font-bold\\">Shofu Super-Snap</span>, mũi <span className=\\"text-[#00ADEF] font-bold\\">OneGloss</span> & sáp <span className=\\"text-[#00ADEF] font-bold\\">DirectDia Paste</span> mang lại bề mặt bóng láng, tệp màu tự nhiên." }';

let success = false;
content = content.replace(regex, () => {
    success = true;
    return newString;
});

if(success) {
    fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
    console.log("Success! Updated Case 6 Image 2.");
} else {
    console.log("Failed to match regex for Case 6 Image 2.");
}
