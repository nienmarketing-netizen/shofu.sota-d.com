const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

// Step 1
content = content.replace(
  /<div className="flex flex-col lg:flex-row gap-10 items-center">\s*<div className="w-full lg:w-1\/2">\s*<ImagePlaceholder\s*className="aspect-\[4\/3\] w-full bg-white shadow-lg"/g,
  '<div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-white p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row gap-10 items-center hover:border-slate-200 hover:shadow-md transition-all">\n              <div className="w-full lg:w-1/2">\n                <ImagePlaceholder \n                  className="aspect-[4/3] w-full bg-white shadow-lg rounded-2xl"'
);

// Step 2 reverse
content = content.replace(
  /<div className="flex flex-col lg:flex-row-reverse gap-10 items-center">\s*<div className="w-full lg:w-1\/2">\s*<ImagePlaceholder/g,
  '<div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-white p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row-reverse gap-10 items-center hover:border-slate-200 hover:shadow-md transition-all">\n              <div className="w-full lg:w-1/2">\n                <ImagePlaceholder'
);

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
