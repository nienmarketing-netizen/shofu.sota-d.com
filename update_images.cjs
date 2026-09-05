const fs = require('fs');
const path = require('path');

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src/components/shofu', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace src="/images/..." with src="CDN_BASE/images/..."
    if (content.includes('"/images/')) {
      content = content.replace(/"\/images\//g, `"${CDN_BASE}/images/`);
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    } else if (content.includes("'/images/")) {
      content = content.replace(/'\/images\//g, `'${CDN_BASE}/images/`);
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    }
  }
});
