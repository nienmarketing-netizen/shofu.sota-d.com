const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

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

  // Apply to notes and descriptions
  caseStudiesBlock = caseStudiesBlock.replace(/(note|description):\s*"([^"]+)"/g, (match, key, text) => {
    
    let modifiedText = text;
    
    uniqueKeywords.forEach((kw, i) => {
      // Avoid replacing if it's already inside a tag we injected, though we just injected <strong className="...">...</strong>
      // A quick hack: do replacing, but make sure the kw isn't part of an HTML attribute or something.
      // Since our keywords are mostly product names, they won't conflict with HTML.
      
      const escapedKw = kw.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      // Only match if not preceded by <span className... or inside an HTML tag. Actually our keywords don't match our HTML tags, so we can just replace.
      // But we should use a placeholder to prevent double replacing (e.g. Shofu Beautifil II vs Beautifil II).
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
console.log("Fixed keywords!");
