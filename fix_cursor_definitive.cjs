const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf-8');

if (!indexHtml.includes('id="force-cursor-style"')) {
    indexHtml = indexHtml.replace('</head>', `
    <style id="force-cursor-style">
      button, a, [role="button"], .cursor-pointer, [class*="cursor-pointer"],
      button *, a *, [role="button"] *, .cursor-pointer *, [class*="cursor-pointer"] * {
        cursor: pointer !important;
      }
    </style>
  </head>`);
    fs.writeFileSync('index.html', indexHtml);
    console.log("Added style tag to index.html");
} else {
    console.log("Style tag already exists");
}
