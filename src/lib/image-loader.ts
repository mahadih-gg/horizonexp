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
    // Available sizes from optimization script (in ascending order)
    const AVAILABLE_SIZES = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
    
    // ============================================================================
    // UNIVERSAL FIX: Screen-size and zoom-level agnostic image loading strategy
    // ============================================================================
    // 
    // Problem Analysis:
    // 1. Fill images: Width is calculated dynamically based on container size, which varies
    //    with screen size, zoom level, and viewport. This can produce unpredictable widths.
    // 2. Explicit width images: May request sizes (like 3840w) that don't exist if the
    //    original image is smaller than that size.
    // 3. Zoom scenarios:
    //    - Zoom out 50%: viewport effectively doubles (1920px → 3840px)
    //    - Zoom out 67%: viewport becomes ~1.5x (1920px → ~2865px)
    //    - Zoom out 75%: viewport becomes ~1.33x (1920px → ~2560px)
    //    - Zoom in: less problematic but still needs handling
    // 4. Screen sizes: Mobile (320-768px), Tablet (768-1024px), Desktop (1024-1920px),
    //    Ultra-wide (1920px+), 4K displays (3840px+)
    //
    // Solution Strategy:
    // - The optimization script creates sizes up to the original image width only
    // - We can't check file existence at runtime in static export
    // - Therefore, we use a conservative approach: use optimized sizes only when safe,
    //   fall back to -original.webp (which always exists) when uncertain
    //
    // ============================================================================
    
    // Step 1: Handle undefined, NaN, or invalid width values
    // This covers fill images and edge cases where width calculation fails
    if (!width || isNaN(width) || !isFinite(width) || width <= 0) {
      const originalPath = `/assets/optimized/${baseName}-original.webp`;
      if (process.env.NODE_ENV === 'development') {
        console.log(`Image Loader: ${src} (invalid/undefined width) → ${originalPath}`);
      }
      return originalPath;
    }
    
    // Step 2: Handle very large widths (zoom out scenarios, ultra-wide displays, 4K)
    // When width > 1920px, we risk requesting 3840w which might not exist.
    // Using -original.webp ensures it works at all zoom levels and screen sizes.
    // This threshold (1920px) is chosen because:
    // - It's the largest "common" desktop size
    // - Anything larger is likely from zoom or ultra-wide displays
    // - The optimization script may not have created larger sizes
    if (width > 1920) {
      const originalPath = `/assets/optimized/${baseName}-original.webp`;
      if (process.env.NODE_ENV === 'development') {
        console.log(`Image Loader: ${src} (${width}px > 1920, using original for zoom/screen compatibility) → ${originalPath}`);
      }
      return originalPath;
    }
    
    // Step 3: For widths <= 1920px, use optimized sizes
    // Find the closest size that's >= requested width
    // This ensures we use the smallest appropriate size for better performance
    // If no size is found (shouldn't happen with our sizes), use the largest available
    const targetSize = AVAILABLE_SIZES.find(s => s >= width) || AVAILABLE_SIZES[AVAILABLE_SIZES.length - 1];
    
    // Return optimized version with absolute path for static export
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
