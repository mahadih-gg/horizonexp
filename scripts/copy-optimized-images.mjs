import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, '../public/assets/optimized');
const DEST_DIR = path.join(__dirname, '../out/assets/optimized');

console.log('📦 Copying optimized images to out directory...');

// Ensure destination directory exists
if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

// Copy all files from source to destination
const files = fs.readdirSync(SOURCE_DIR);
let copiedCount = 0;

files.forEach(file => {
  const sourcePath = path.join(SOURCE_DIR, file);
  const destPath = path.join(DEST_DIR, file);
  
  if (fs.statSync(sourcePath).isFile()) {
    fs.copyFileSync(sourcePath, destPath);
    copiedCount++;
  }
});

console.log(`✅ Copied ${copiedCount} optimized images to out/assets/optimized/`);
