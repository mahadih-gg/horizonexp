import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OPTIMIZED_DIR = path.join(__dirname, '../public/assets/optimized');
const OUT_DIR = path.join(__dirname, '../out/assets/optimized');

console.log('🔍 Diagnosing Image Issues\n');

// Check if directories exist
console.log('📁 Checking directories...');
console.log(`  Source (public): ${fs.existsSync(OPTIMIZED_DIR) ? '✓' : '✗'}`);
console.log(`  Build (out): ${fs.existsSync(OUT_DIR) ? '✓' : '✗'}\n`);

// List of critical images that might be failing
const criticalImages = [
  'demo-ecom-xl',
  'demo-sports-xl',
  'demo-telco-xl',
  'engage-more-1',
  'engage-more-2',
  'engage-more-3',
  'engage-more-4',
];

const SIZES = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

console.log('🎯 Checking critical images...\n');

for (const imageName of criticalImages) {
  console.log(`📸 ${imageName}:`);
  
  let missingInSource = [];
  let missingInBuild = [];
  let largeFiles = [];
  
  for (const size of SIZES) {
    const fileName = `${imageName}-${size}w.webp`;
    const sourcePath = path.join(OPTIMIZED_DIR, fileName);
    const buildPath = path.join(OUT_DIR, fileName);
    
    // Check source
    if (!fs.existsSync(sourcePath)) {
      missingInSource.push(size);
    } else {
      const stats = fs.statSync(sourcePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      if (stats.size > 300 * 1024) { // > 300KB
        largeFiles.push(`${size}w (${sizeKB}KB)`);
      }
    }
    
    // Check build
    if (fs.existsSync(OUT_DIR) && !fs.existsSync(buildPath)) {
      missingInBuild.push(size);
    }
  }
  
  if (missingInSource.length === 0 && missingInBuild.length === 0) {
    console.log(`  ✓ All sizes present`);
  } else {
    if (missingInSource.length > 0) {
      console.log(`  ✗ Missing in source: ${missingInSource.join(', ')}w`);
    }
    if (missingInBuild.length > 0) {
      console.log(`  ⚠ Missing in build: ${missingInBuild.join(', ')}w`);
    }
  }
  
  if (largeFiles.length > 0) {
    console.log(`  ⚠ Large files: ${largeFiles.join(', ')}`);
  }
  
  console.log('');
}

// Check for common issues
console.log('🔧 Common Issues Check:\n');

// 1. Check if original files exist (they shouldn't be used but good to know)
console.log('1. Original files (should not be referenced):');
for (const imageName of criticalImages) {
  const originalPath = path.join(OPTIMIZED_DIR, `${imageName}-original.webp`);
  if (fs.existsSync(originalPath)) {
    const stats = fs.statSync(originalPath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`  - ${imageName}-original.webp: ${sizeKB}KB`);
  }
}

console.log('\n2. File size distribution:');
if (fs.existsSync(OPTIMIZED_DIR)) {
  const files = fs.readdirSync(OPTIMIZED_DIR);
  const webpFiles = files.filter(f => f.endsWith('.webp'));
  
  let small = 0, medium = 0, large = 0, veryLarge = 0;
  
  for (const file of webpFiles) {
    const stats = fs.statSync(path.join(OPTIMIZED_DIR, file));
    const sizeKB = stats.size / 1024;
    
    if (sizeKB < 50) small++;
    else if (sizeKB < 150) medium++;
    else if (sizeKB < 300) large++;
    else veryLarge++;
  }
  
  console.log(`  < 50KB: ${small} files`);
  console.log(`  50-150KB: ${medium} files`);
  console.log(`  150-300KB: ${large} files`);
  console.log(`  > 300KB: ${veryLarge} files ⚠`);
}

console.log('\n3. Recommendations:');
console.log('  - Ensure all WebP files have correct MIME type (image/webp) on S3');
console.log('  - Set Cache-Control headers: public, max-age=31536000, immutable');
console.log('  - Invalidate CloudFront cache after deployment');
console.log('  - Consider reducing quality for files > 300KB');
console.log('  - Check browser console for specific 404 or MIME type errors');

console.log('\n✅ Diagnosis complete!\n');
