const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

// Replace gap-8 lg:gap-16 with gap-0 lg:gap-16 for the 3 step wrappers
content = content.replace(/className="relative pl-12 pr-4 sm:pl-16 sm:pr-6 lg:px-0 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center"/g, 
  'className="relative pl-12 pr-4 sm:pl-16 sm:pr-6 lg:px-0 flex flex-col lg:flex-row gap-0 lg:gap-16 items-start lg:items-center"');

content = content.replace(/className="relative pl-12 pr-4 sm:pl-16 sm:pr-6 lg:px-0 flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-start lg:items-center"/g, 
  'className="relative pl-12 pr-4 sm:pl-16 sm:pr-6 lg:px-0 flex flex-col lg:flex-row-reverse gap-0 lg:gap-16 items-start lg:items-center"');

// Change image container margins from mb-6 to my-6 or mt-4 mb-6
content = content.replace(/order-4 lg:order-none mb-6 lg:mb-0/g, 'order-4 lg:order-none my-6 lg:my-0 w-full');

fs.writeFileSync(file_path, content);
console.log("Replaced gaps.");
