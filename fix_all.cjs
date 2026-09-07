const fs = require('fs');

function replaceButtons(filePath, searchStr, ctaName) {
  let code = fs.readFileSync(filePath, 'utf-8');
  let newCode = "";
  let i = 0;
  
  while(i < code.length) {
    let tagStart = code.indexOf(searchStr, i);
    if(tagStart === -1) {
      newCode += code.slice(i);
      break;
    }
    
    // Replace the `<button` part with `<CtaButton ctaName="..."`
    let replacedOpenTag = code.slice(i, tagStart + '<button'.length) + ' ctaName="' + ctaName + '"';
    // Actually searchStr includes `<button`, we can replace that specifically.
    
    let tagEnd = code.indexOf('>', tagStart);
    
    // Find next </button>
    let nextClose = code.indexOf('</button>', tagEnd);
    let nextOpen = code.indexOf('<button', tagEnd);
    let nextCtaClose = code.indexOf('</CtaButton>', tagEnd);
    
    if (nextClose !== -1 && (nextOpen === -1 || nextClose < nextOpen) && (nextCtaClose === -1 || nextClose < nextCtaClose)) {
      // safe to replace
      newCode += code.slice(i, tagStart) + code.slice(tagStart, tagEnd + 1).replace('<button', '<CtaButton ctaName="' + ctaName + '"');
      newCode += code.slice(tagEnd + 1, nextClose) + '</CtaButton>';
      i = nextClose + '</button>'.length;
    } else {
      newCode += code.slice(i, tagEnd + 1);
      i = tagEnd + 1;
    }
  }
  
  fs.writeFileSync(filePath, newCode);
  console.log("Fixed: " + filePath);
}

replaceButtons('src/components/shofu/ShofuSocialProof.tsx', '<button  onClick={() => window.dispatchEvent(new CustomEvent("open-offer-modal"))}', 'MoKhoaUuDai');
replaceButtons('src/components/shofu/ShofuSolutions.tsx', '<button  onClick={() => window.dispatchEvent(new CustomEvent("open-offer-modal"))}', 'MoKhoaUuDai');
replaceButtons('src/components/shofu/ShofuCaseStudies.tsx', '<button  onClick={() => window.dispatchEvent(new CustomEvent("open-offer-modal"))}', 'MoKhoaUuDai');
