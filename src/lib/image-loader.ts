export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width?: number;
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
    
    // Handle undefined, NaN, or invalid width values
    // When using 'fill' prop, Next.js might pass undefined or a very large value
    // For fill images (undefined width), use -original.webp which is always created
    // This ensures the image loads even if the source image is smaller than our size presets
    if (!width || isNaN(width) || !isFinite(width) || width <= 0) {
      const originalPath = `/assets/optimized/${baseName}-original.webp`;
      if (process.env.NODE_ENV === 'development') {
        console.log(`Image Loader: ${src} (fill/undefined) → ${originalPath}`);
      }
      return originalPath;
    }
    
    // Find the closest size that's >= requested width
    // If no size is found (width is larger than all sizes), use the largest available
    const targetSize = AVAILABLE_SIZES.find(s => s >= width) || AVAILABLE_SIZES[AVAILABLE_SIZES.length - 1];
    
    // CRITICAL FIX: If the requested size is larger than what might exist,
    // use -original.webp as fallback. The optimization script only creates sizes
    // up to the original image width, so if we request 3840w but the image is only
    // 2592px wide, that file won't exist. Using -original.webp ensures it always works.
    // 
    // For images with very large explicit widths (like 2592, 3045), if they request
    // 3840w but the original is smaller, we should use -original.webp instead.
    // However, we can't check file existence at runtime in static export, so we use
    // a heuristic: if requested width is > 2048, use -original.webp to be safe.
    // This covers the cases where images request 3840w but the file doesn't exist.
    if (width > 2048) {
      const originalPath = `/assets/optimized/${baseName}-original.webp`;
      if (process.env.NODE_ENV === 'development') {
        console.log(`Image Loader: ${src} (${width}px > 2048, using original) → ${originalPath}`);
      }
      return originalPath;
    }
    
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
