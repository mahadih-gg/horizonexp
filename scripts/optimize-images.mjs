import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const INPUT_DIR = path.join(__dirname, '../public/assets/images');
const OUTPUT_DIR = path.join(__dirname, '../public/assets/optimized');
const SIZES = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
const QUALITY = 85;

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName, ext);
  
  // Skip if not an image
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    return;
  }

  console.log(`📸 Processing: ${fileName}`);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    for (const size of SIZES) {
      // Skip if image is smaller than target size
      if (metadata.width && metadata.width < size) {
        continue;
      }

      const outputFileName = `${baseName}-${size}w.webp`;
      const outputPath = path.join(OUTPUT_DIR, outputFileName);

      await image
        .clone()
        .resize(size, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const stats = fs.statSync(outputPath);
      console.log(`  ✓ ${outputFileName} (${(stats.size / 1024).toFixed(1)}KB)`);
    }

    // Also create an original-size optimized version
    const originalOutputPath = path.join(OUTPUT_DIR, `${baseName}-original.webp`);
    await image
      .webp({ quality: QUALITY })
      .toFile(originalOutputPath);
    
    const originalStats = fs.statSync(originalOutputPath);
    console.log(`  ✓ ${baseName}-original.webp (${(originalStats.size / 1024).toFixed(1)}KB)`);

  } catch (error) {
    console.error(`  ✗ Error processing ${fileName}:`, error.message);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      await optimizeImage(fullPath, entry.name);
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`📁 Input: ${INPUT_DIR}`);
  console.log(`📁 Output: ${OUTPUT_DIR}`);
  console.log(`📐 Sizes: ${SIZES.join(', ')}\n`);

  const startTime = Date.now();
  
  await processDirectory(INPUT_DIR);

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n✅ Optimization complete in ${duration}s`);
}

main().catch(console.error);
