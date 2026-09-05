const fs = require('fs');
const path = require('path');

const dirs = ['src/components', 'src/pages'];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Regex to match tags
  const tagRegex = /<([a-zA-Z0-9_\.]+)([^>]*?)>/g;

  content = content.replace(tagRegex, (match, tag, attrs) => {
    // Check if it's a clickable tag
    const isClickableTag = ['button', 'a', 'motion.button'].includes(tag);
    const hasOnClick = attrs.includes('onClick=');
    
    if (!isClickableTag && !hasOnClick) {
      return match;
    }

    // It's clickable! Ensure it has className
    if (!attrs.includes('className=')) {
      // Add className="cursor-pointer"
      return `<${tag} className="cursor-pointer"${attrs}>`;
    }

    // It has className, let's inject cursor-pointer if not there
    const classRegex = /className=(["'])(.*?)\1/;
    return match.replace(classRegex, (classMatch, quote, classes) => {
      if (!classes.includes('cursor-') && !classes.includes('cursor-pointer')) {
        return `className=${quote}${classes} cursor-pointer${quote}`;
      }
      return classMatch;
    });
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', filePath);
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
