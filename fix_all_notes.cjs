const fs = require('fs');

let content = fs.readFileSync('src/components/shofu/ShofuCaseStudies.tsx', 'utf-8');

const startIndex = content.indexOf('const caseStudies = [');
const endIndex = content.indexOf('];', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  let caseStudiesBlock = content.substring(startIndex, endIndex);

  // Strip "Case Study X - "
  caseStudiesBlock = caseStudiesBlock.replace(/(note|description):\s*"Case Study \d+ - /g, '$1: "');
  
  // Also strip literal parenthesis if they exist around the prefix string just before a colon.
  // We'll replace it in the `note:` field directly.
  
  caseStudiesBlock = caseStudiesBlock.replace(/note:\s*"([^"]+)"/g, (match, noteText) => {
    // 1. If it already starts with <strong..., it was processed. We can strip "( )" from inside the strong tag if it got wrapped strangely.
    
    // First, let's revert the previously processed strong tags if any so we can do a clean pass.
    // Wait, the previous script replaced `note: "(Title): ` with `note: "<strong className=\"text-slate-900\">Title:</strong> `
    
    // Let's strip out existing <strong> tags at the beginning of the note, and re-apply correctly.
    let cleanText = noteText.replace(/^<strong className=\\"text-slate-900\\">([^<]+):<\/strong>\s*/, '$1: ');
    
    // If it starts with parentheses like (Title): 
    cleanText = cleanText.replace(/^\(([^)]+)\):\s*/, '$1: ');
    
    // If it starts with Case Study X - 
    cleanText = cleanText.replace(/^Case Study \d+ - \s*/, '');

    // Now, `cleanText` should look like "Tình trạng ban đầu: Hình ảnh..."
    // Let's bold everything before the first colon (if there is a colon and it's within the first 60 characters).
    const colonIndex = cleanText.indexOf(':');
    if (colonIndex !== -1 && colonIndex < 60) {
      const title = cleanText.substring(0, colonIndex);
      const rest = cleanText.substring(colonIndex + 1).trim();
      cleanText = `<strong className=\\"text-slate-900\\">${title}:</strong> ${rest}`;
    }
    
    return `note: "${cleanText}"`;
  });

  content = content.substring(0, startIndex) + caseStudiesBlock + content.substring(endIndex);
}

fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', content);
console.log("Fixed all notes titles!");
