const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    let changed = false;

    // This is tricky because we need to parse JSX. 
    // A simpler approach: the user mainly complains about "nút" (buttons) and "headline".
    // I already forced cursor: pointer on `<button>`. 
    // Let me check if they meant components like ShofuHeader navigation items, or Accordions (DirectRestoration FAQ).
    
    // Let's manually fix the known ones with `onClick`:
    // 1. ShofuHeader nav items (li or div)
    // 2. DirectRestoration/IndirectRestoration FAQ headers
    // 3. ShofuCaseStudies images or prev/next buttons
    
    // Wait, let's just forcefully add `cursor-pointer` to all tags that have `onClick` if they don't already have it.
    // Instead of AST parsing, we can just look for `onClick` and see if there's a `className` nearby, but it's risky.

    // Let's just find and replace `onClick=` with `style={{cursor: 'pointer'}} onClick=`
    // This is much safer and guarantees it works without messing up className logic!
    
    const newContent = content.replace(/(<\w+[^>]*?)(onClick=\{)/g, (match, p1, p2) => {
        if(p1.includes("cursor: 'pointer'") || p1.includes("cursor-pointer") || p1.includes("cursor-not-allowed")) {
            return match;
        }
        // inject style
        return p1 + " style={{cursor: 'pointer'}} " + p2;
    });

    if (newContent !== content) {
        fs.writeFileSync(file, newContent);
        console.log("Updated", file);
    }
});
console.log("Done adding style cursor");
