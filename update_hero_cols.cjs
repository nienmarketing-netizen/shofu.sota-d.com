const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

content = content.replace(
  /<div className="w-\[90%\] lg:w-\[80%\] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">/,
  '<div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative z-10">'
);

content = content.replace(
  /<div className="flex-1 text-center lg:text-left">/,
  '<div className="w-full lg:w-[65%] xl:w-[60%] text-center lg:text-left">'
);

content = content.replace(
  /<div className="w-full lg:w-\[45%\] relative">/,
  '<div className="w-full lg:w-[35%] xl:w-[40%] relative flex justify-center">'
);

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
