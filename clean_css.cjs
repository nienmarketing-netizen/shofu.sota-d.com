const fs = require('fs');
let css = fs.readFileSync('src/global.css', 'utf-8');

// Strip out everything from the first time I messed with it
const splitString = "/* Custom Scrollbar */";
if (css.includes(splitString)) {
  const parts = css.split(splitString);
  let base = parts[0] + splitString + `
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #F1F5F9;
}
::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #00ADEF;
}

@layer utilities {
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 15s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }
}

/* Comprehensive Cursor Fix */
button, button *, 
a, a *, 
[role="button"], [role="button"] *,
.cursor-pointer, .cursor-pointer * {
  cursor: pointer !important;
}

button:disabled, button:disabled *,
[disabled], [disabled] *,
.cursor-not-allowed, .cursor-not-allowed * {
  cursor: not-allowed !important;
}
`;
  fs.writeFileSync('src/global.css', base);
  console.log("CSS cleaned up.");
}
