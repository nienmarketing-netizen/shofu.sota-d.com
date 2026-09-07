const fs = require('fs');

function replaceButtons(filePath) {
  let code = fs.readFileSync(filePath, 'utf-8');
  let newCode = "";
  let i = 0;
  
  while(i < code.length) {
    let tagStart = code.indexOf('<CtaButton', i);
    if(tagStart === -1) {
      newCode += code.slice(i);
      break;
    }
    
    let tagEnd = code.indexOf('>', tagStart);
    
    // Quick heuristic: find the NEXT `</button>` before `<button`
    let nextOpen = code.indexOf('<button', tagEnd);
    let nextClose = code.indexOf('</button>', tagEnd);
    let nextCtaClose = code.indexOf('</CtaButton>', tagEnd);
    
    // If the immediate close is `</button>` and it appears before the next `<button>`, we replace it.
    if (nextClose !== -1 && (nextOpen === -1 || nextClose < nextOpen) && (nextCtaClose === -1 || nextClose < nextCtaClose)) {
      newCode += code.slice(i, nextClose) + '</CtaButton>';
      i = nextClose + '</button>'.length;
    } else {
      newCode += code.slice(i, tagEnd + 1);
      i = tagEnd + 1;
    }
  }
  
  fs.writeFileSync(filePath, newCode);
  console.log("Fixed: " + filePath);
}

replaceButtons('src/components/shofu/solutions/IndirectRestoration.tsx');
