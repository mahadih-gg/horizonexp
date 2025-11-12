import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OPTIMIZED_SOURCE_DIR = path.join(__dirname, '../public/assets/optimized');
const OPTIMIZED_DEST_DIR = path.join(__dirname, '../out/assets/optimized');
const IMAGES_SOURCE_DIR = path.join(__dirname, '../public/assets/images');
const IMAGES_DEST_DIR = path.join(__dirname, '../out/assets/images');

console.log('📦 Copying images to out directory...');

// Ensure destination directories exist
if (!fs.existsSync(OPTIMIZED_DEST_DIR)) {
  fs.mkdirSync(OPTIMIZED_DEST_DIR, { recursive: true });
}
if (!fs.existsSync(IMAGES_DEST_DIR)) {
  fs.mkdirSync(IMAGES_DEST_DIR, { recursive: true });
}

// Copy optimized images
const optimizedFiles = fs.readdirSync(OPTIMIZED_SOURCE_DIR);
let optimizedCount = 0;

optimizedFiles.forEach(file => {
  const sourcePath = path.join(OPTIMIZED_SOURCE_DIR, file);
  const destPath = path.join(OPTIMIZED_DEST_DIR, file);
  
  if (fs.statSync(sourcePath).isFile()) {
    fs.copyFileSync(sourcePath, destPath);
    optimizedCount++;
  }
});

console.log(`✅ Copied ${optimizedCount} optimized images to out/assets/optimized/`);

// Copy original images (as fallback)
function copyDirectory(source, destination) {
  const entries = fs.readdirSync(source, { withFileTypes: true });
  let count = 0;

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      count += copyDirectory(sourcePath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(sourcePath, destPath);
      count++;
    }
  }

  return count;
}

const originalCount = copyDirectory(IMAGES_SOURCE_DIR, IMAGES_DEST_DIR);
console.log(`✅ Copied ${originalCount} original images to out/assets/images/`);
