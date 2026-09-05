const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `<div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-slate-900 leading-[1.3] mb-4 tracking-tight">`;
const replacementStr = `<div className="text-center max-w-5xl xl:max-w-6xl mx-auto px-2 xl:px-0">
          <h2 className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-slate-900 leading-[1.3] mb-4 tracking-tight whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap overflow-hidden text-ellipsis">`;

// Wait, whitespace-nowrap will force it to one line, but it might overflow and truncate on smaller screens if we just use whitespace-nowrap.
// The user only wants it on 1 line on PC. On PC, lg or xl.
// If we just use max-w-5xl mx-auto, maybe it fits on PC.
// Let's test just max-w-5xl first.
