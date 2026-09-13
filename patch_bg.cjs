const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

// Fix FAQ background to be white so it doesn't clash with Section 5.5
content = content.replace(
  '{/* SECTION 6: FAQ */}\n      <section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative border-t border-slate-200 overflow-hidden">',
  '{/* SECTION 6: FAQ */}\n      <section className="py-20 lg:py-28 bg-white relative border-t border-slate-200 overflow-hidden">'
);

// Fix OFFER background to be slate-950 for stronger contrast if desired
content = content.replace(
  '{/* SECTION 7: THE CORE OFFER */}\n      <section className="py-20 lg:py-28 bg-slate-900 relative border-b border-slate-800 text-white overflow-hidden">',
  '{/* SECTION 7: THE CORE OFFER */}\n      <section className="py-20 lg:py-28 bg-slate-950 relative border-b border-slate-800 text-white overflow-hidden">'
);


fs.writeFileSync(file_path, content);
console.log("Patched backgrounds");
