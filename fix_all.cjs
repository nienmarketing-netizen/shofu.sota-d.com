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

  // We can just run a global replace on the block for the keywords.
  // First, we need to replace all keywords, but avoid replacing inside existing HTML attributes.
  // Since we know our keywords don't overlap with HTML tags or attributes (like text-slate-900),
  // we can simply replace them.
  
  // Wait, some are inside note: "..." and some inside description: "..."
  // It's safe to just replace them globally in the block as they are specific names.
  
  uniqueKeywords.forEach((kw, i) => {
    // Only replace if it is NOT inside an HTML tag. (Quick hack: match if not immediately followed by HTML closing tag > or part of an attribute)
    // Actually, just replace directly, since none of these keywords are HTML tags.
    const escapedKw = kw.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const regex = new RegExp(escapedKw, 'g');
    caseStudiesBlock = caseStudiesBlock.replace(regex, `__KW_${i}__`);
  });

  uniqueKeywords.forEach((kw, i) => {
    const regex = new RegExp(`__KW_${i}__`, 'g');
    caseStudiesBlock = caseStudiesBlock.replace(regex, `<span className=\\"text-[#00ADEF] font-bold\\">${kw}</span>`);
  });

  content = content.substring(0, startIndex) + caseStudiesBlock + content.substring(endIndex);
}

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Fixed globally!");
