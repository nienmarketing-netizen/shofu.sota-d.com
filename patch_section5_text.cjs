const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

// Replace the 3 paragraph classes in section 5
// Specifically for the 3 conflict cards
const targetClass = 'text-slate-400 text-sm md:text-base leading-relaxed text-center mt-auto';
const replacementClass = 'text-slate-400 text-sm sm:text-base leading-relaxed text-center mt-auto';

// Ensure we only replace those specific lines if they match exactly
// We can use a regex to replace exactly 3 occurrences in that specific section, or just replace all instances of this exact class string since it's likely only used here.
const matches = content.match(new RegExp(targetClass.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'));
if (matches && matches.length >= 3) {
    content = content.replaceAll(targetClass, replacementClass);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Text sizes updated successfully.");
} else {
    console.log("Found " + (matches ? matches.length : 0) + " matches. Not exactly 3.");
}
