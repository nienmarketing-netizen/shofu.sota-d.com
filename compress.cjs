const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = '/tmp/repo_for_compression/public/images/Case Study';

async function compressImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.match(/\.(png|jpe?g|webp)$/i)) {
      const filePath = path.join(dir, file);
      const tempPath = filePath + '.tmp.webp';
      
      const originalSize = fs.statSync(filePath).size;
      
      try {
        await sharp(filePath)
          .webp({ quality: 75, effort: 6 })
          .toFile(tempPath);
          
        const newSize = fs.statSync(tempPath).size;
        
        if (newSize < originalSize) {
            fs.renameSync(tempPath, filePath);
            console.log(`Compressed ${file}: ${(originalSize/1024).toFixed(1)}KB -> ${(newSize/1024).toFixed(1)}KB`);
        } else {
            fs.unlinkSync(tempPath);
            console.log(`Skipped ${file} (already optimized)`);
        }
      } catch (err) {
        console.error(`Error compressing ${file}:`, err);
      }
    }
  }
}

compressImages();
