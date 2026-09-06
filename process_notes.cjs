const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

// 1. Process note titles
content = content.replace(/note:\s*"\(([^)]+)\):\s*/g, 'note: "<strong className=\\"text-slate-900\\">$1:</strong> ');

const keywords = [
    "Shofu BeautiBond Universal", 
    "Shofu Beautifil II", 
    "Shofu Beautifil Injectable XSL",
    "Shofu Beautifil Injectable X",
    "Shofu Beautifil Injectable",
    "Shofu Beautifil Flow Plus",
    "Shofu Super-Snap",
    "Shofu Select Etch",
    "Shofu Caries Detector",
    "Shofu Etchant Gel",
    "DirectDia Paste",
    "OneGloss",
    "BeautiBond Xtreme",
    "Beautilink SA",
    "Core Paste & Bond",
    "BeautiBond Universal",
    "BeautiBond",
    "Beautifil II",
    "Super-Snap",
    "Select Etch",
    "Caries Detector",
    "Etchant Gel",
    "đê cao su",
    "rubber dam",
    "composite sinh học"
];

const uniqueKeywords = [...new Set(keywords)].sort((a, b) => b.length - a.length);

const startIndex = content.indexOf('const caseStudies = [');
const endIndex = content.indexOf('];', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  let caseStudiesBlock = content.substring(startIndex, endIndex);

  // We only replace in note and description strings to be safe
  caseStudiesBlock = caseStudiesBlock.replace(/(note|description):\s*"([^"]+)"/g, (match, key, text) => {
    
    let modifiedText = text;
    let replacements = [];
    
    uniqueKeywords.forEach((kw, i) => {
      // Escape for regex
      const escapedKw = kw.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      const regex = new RegExp(escapedKw, 'g');
      
      modifiedText = modifiedText.replace(regex, `__KW_${i}__`);
    });

    uniqueKeywords.forEach((kw, i) => {
      const regex = new RegExp(`__KW_${i}__`, 'g');
      modifiedText = modifiedText.replace(regex, `<span className=\\"text-[#00ADEF] font-semibold\\">${kw}</span>`);
    });

    return `${key}: "${modifiedText}"`;
  });

  content = content.substring(0, startIndex) + caseStudiesBlock + content.substring(endIndex);
}

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Processed case studies successfully!");
