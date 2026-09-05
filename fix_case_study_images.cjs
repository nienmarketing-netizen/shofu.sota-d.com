const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

// 1. Replace local paths with GitHub CDN paths so the preview can access them
const cdnPrefix = 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/';
content = content.replace(/\/images\/Case Study\//g, cdnPrefix);

// 2. Add referrerPolicy="no-referrer" to fix Unsplash hotlinking issues (broken images 2, 6, 8)
content = content.replace(/<img\s+src=\{item\.coverImage\}/g, '<img src={item.coverImage} referrerPolicy="no-referrer"');
content = content.replace(/<img\s+src=\{caseStudies\[selectedCaseIndex\]\.images\[currentImageIndex\]\}/g, '<img src={caseStudies[selectedCaseIndex].images[currentImageIndex]} referrerPolicy="no-referrer"');

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Images fixed!");
