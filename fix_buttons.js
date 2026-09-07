const fs = require('fs');

function replaceButtons(filePath) {
  let code = fs.readFileSync(filePath, 'utf-8');
  let newCode = "";
  let i = 0;
  
  // Find <CtaButton ... > ... </button> and replace with </CtaButton>
  // Actually, I can just use a stack-based HTML parser, or simple regex if they are simple enough
  
  // A safer approach: I will look for `<CtaButton` and then find the corresponding `</button>` and replace it.
  while(i < code.length) {
    let tagStart = code.indexOf('<CtaButton', i);
    if(tagStart === -1) {
      newCode += code.slice(i);
      break;
    }
    
    // Find where the opening tag ends
    let tagEnd = code.indexOf('>', tagStart);
    
    // Find the NEXT </button> or </CtaButton>
    let closeButton = code.indexOf('</button>', tagEnd);
    let closeCtaButton = code.indexOf('</CtaButton>', tagEnd);
    
    if (closeButton !== -1 && (closeCtaButton === -1 || closeButton < closeCtaButton)) {
      newCode += code.slice(i, closeButton) + '</CtaButton>';
      i = closeButton + '</button>'.length;
    } else {
      newCode += code.slice(i, tagEnd + 1);
      i = tagEnd + 1;
    }
  }
  
  fs.writeFileSync(filePath, newCode);
  console.log("Fixed: " + filePath);
}

replaceButtons('src/components/shofu/solutions/IndirectRestoration.tsx');
