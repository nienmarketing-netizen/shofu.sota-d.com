const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

// 1. Change section 7 background to dark
let sectionTarget = '<section className="py-20 lg:py-28 bg-slate-200 relative border-b border-slate-300">';
let sectionReplacement = '<section className="py-20 lg:py-28 bg-slate-900 relative border-b border-slate-800">';
content = content.replace(sectionTarget, sectionReplacement);

// 2. Remove grid pattern from section 7 (optional, but wait, the card has its own grid pattern)
// Actually let's keep the section's grid pattern but make it like section 2: bg-grid-pattern-light
content = content.replace('<div className="absolute inset-0 bg-grid-pattern opacity-50"></div>', '<div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>');

// 3. Remove card's background and rounded corners
let cardTarget = '<div className="bg-slate-900 rounded-[2.2rem] p-8 md:p-12 lg:p-16 text-white text-center relative overflow-hidden">';
let cardReplacement = '<div className="p-8 md:p-12 lg:p-16 text-white text-center relative overflow-hidden">';
content = content.replace(cardTarget, cardReplacement);

// 4. Remove inner grid pattern from the card since the section now has it
let innerGridTarget = '<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>';
let innerGridReplacement = '';
content = content.replace(innerGridTarget, innerGridReplacement);

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("Updated");
