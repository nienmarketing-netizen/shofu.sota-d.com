const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

const script = `
    <!-- NUCLEAR CURSOR FIX -->
    <style>
      button, a, [role="button"], .cursor-pointer, [class*="cursor-pointer"],
      button *, a *, [role="button"] *, .cursor-pointer *, [class*="cursor-pointer"] * {
        cursor: pointer !important;
      }
    </style>
    <script>
      document.addEventListener('mouseover', function(e) {
        let target = e.target;
        while(target && target !== document.body && target !== document) {
          if (
            target.tagName === 'BUTTON' || 
            target.tagName === 'A' || 
            target.getAttribute('role') === 'button' ||
            (target.className && typeof target.className === 'string' && target.className.includes('cursor-pointer'))
          ) {
            target.style.setProperty('cursor', 'pointer', 'important');
            // Also force children
            Array.from(target.querySelectorAll('*')).forEach(child => {
               child.style.setProperty('cursor', 'pointer', 'important');
            });
            break;
          }
          target = target.parentNode;
        }
      });
    </script>
`;

if (!html.includes('NUCLEAR CURSOR FIX')) {
    html = html.replace('</head>', script + '</head>');
    fs.writeFileSync('index.html', html);
    console.log("Added nuclear script to index.html");
} else {
    console.log("Nuclear script already exists");
}
