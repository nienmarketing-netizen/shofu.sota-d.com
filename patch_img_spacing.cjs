const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

// Target 1
const t1_start = `<div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">`;
const r1_start = `<div className="mt-3 pt-3 border-t border-slate-100 flex justify-center -mx-4 sm:-mx-6">`;

// Target 2
const t2_start = `<div className="mt-8 flex justify-center">`;
const r2_start = `<div className="mt-3 flex justify-center -mx-4 sm:-mx-6">`;

let modified = false;

if (content.includes(t1_start)) {
    content = content.replace(t1_start, r1_start);
    modified = true;
}

if (content.includes(t2_start)) {
    content = content.replace(t2_start, r2_start);
    modified = true;
}

if (modified) {
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Success");
} else {
    console.log("Failed to find targets");
}
