export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // If it's an external URL, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // Extract the file path and name
  const fileName = src.split('/').pop();
  if (!fileName) return src;

  const baseName = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  
  // Check if this is an asset image that should be optimized
  if (src.includes('/assets/images/')) {
    // Available sizes from optimization script
    const AVAILABLE_SIZES = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
    
    // Find the closest size that's >= requested width
    const targetSize = AVAILABLE_SIZES.find(s => s >= width) || AVAILABLE_SIZES[AVAILABLE_SIZES.length - 1];
    
    // Return optimized version with absolute path for static export
    // Always ensure the path starts with / for absolute paths
    const optimizedPath = `/assets/optimized/${baseName}-${targetSize}w.webp`;
    
    // Debug logging (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log(`Image Loader: ${src} (${width}px) → ${optimizedPath}`);
    }
    
    return optimizedPath;
  }

  // For other images, return original path
  return src;
}

// Helper function to get optimized image path for any width
export function getOptimizedImagePath(src: string, width: number = 1200): string {
  return imageLoader({ src, width });
}
