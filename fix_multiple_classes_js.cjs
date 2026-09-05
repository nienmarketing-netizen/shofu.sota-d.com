const fs = require('fs');
const path = require('path');

const dirs = ['src/components', 'src/pages'];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // We want to match all tags `<button ...>` etc.
  const tagRegex = /<([a-zA-Z0-9_\.]+)([^>]*?)>/g;

  content = content.replace(tagRegex, (match, tag, attrs) => {
    // Find all classNames
    const classMatches = [...attrs.matchAll(/className=(["'])(.*?)\1/g)];
    if (classMatches.length > 1) {
      // Collect all classes
      const allClasses = new Set();
      for (const m of classMatches) {
        m[2].split(' ').forEach(c => {
          if (c.trim()) allClasses.add(c.trim());
        });
      }
      
      // Remove all className="..." from attrs
      let newAttrs = attrs.replace(/\s*className=(["'])(.*?)\1/g, '');
      
      // Add a single className back
      return `<${tag} className="${Array.from(allClasses).join(' ')}"${newAttrs}>`;
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed multiple classNames in', filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.jsx')) {
      processFile(p);
    }
  }
}

dirs.forEach(d => {
  if (fs.existsSync(d)) walk(d);
});
