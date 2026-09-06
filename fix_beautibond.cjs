const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

// Replace "Shofu BeautiBond Universal" with "Shofu BeautiBond Xtreme" globally
content = content.replace(/Shofu BeautiBond Universal/g, 'Shofu BeautiBond Xtreme');

// Fix double span for case-study-8.6
content = content.replace(/<span className="text-\[#00ADEF\] font-semibold"><span className="text-\[#00ADEF\] font-bold">Shofu BeautiBond Xtreme<\/span><\/span>/g, '<span className="text-[#00ADEF] font-bold">Shofu BeautiBond Xtreme</span>');

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Replaced Universal with Xtreme!");
