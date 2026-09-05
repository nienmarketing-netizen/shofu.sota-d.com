const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `<div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
        <div className="p-8 md:p-12 lg:p-16 text-white text-center relative overflow-hidden">
          
          
          <div className="relative z-10 max-w-3xl mx-auto">`;

const replacementStr = `<div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          <div className="w-full">
        <div className="py-8 md:py-12 lg:py-16 text-white text-center relative overflow-hidden">
          
          
          <div className="relative z-10 w-full">`;

let updated = content.replace(targetStr, replacementStr);
fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', updated);
console.log("Updated");
