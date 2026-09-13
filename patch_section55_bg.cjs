const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

// Change section background
content = content.replace(
  '<section className="py-20 lg:py-28 bg-white relative border-t border-slate-200 overflow-hidden">',
  '<section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative border-t border-slate-200 overflow-hidden">'
);

// Change card backgrounds to white to stand out from slate-50
content = content.replace(/className="bg-slate-50 rounded-2xl/g, 'className="bg-white rounded-2xl');

// Soften the border on cards to slate-100 to look cleaner on white
content = content.replace(/border-slate-200 whitespace-normal/g, 'border-slate-100 whitespace-normal');
content = content.replace(/border-t border-slate-200 pt-4/g, 'border-t border-slate-100 pt-4');

fs.writeFileSync(file_path, content);
console.log("Patched section 5.5 background");
