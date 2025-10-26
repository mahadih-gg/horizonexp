'use client';

import useWindowSize from '@/hooks/useWindowSize';
import { cn } from '@/lib/utils';
import { useInView } from 'motion/react';
import { useEffect, useMemo, useRef } from 'react';

interface ResponsiveVideoPlayerProps {
  mobileVideoSrc: string;
  desktopVideoSrc: string;
  className?: string;
  poster?: string;
  preload?: 'none' | 'metadata' | 'auto';
}

const ResponsiveVideoPlayer = ({
  mobileVideoSrc,
  desktopVideoSrc,
  className = '',
  poster,
  preload = 'metadata'
}: ResponsiveVideoPlayerProps) => {

  const { width } = useWindowSize();
  const isMobile = useMemo(() => width < 768, [width]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0 // Trigger as soon as any part of the video is visible
  });

  // Play/pause video based on visibility
  useEffect(() => {
    if (!videoRef.current) return;

    if (isInView && videoRef.current.paused) {
      videoRef.current.play().catch(console.error);
    } else if (!isInView && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className='relative w-full h-full'>
      <video
        ref={videoRef}
        src={isMobile ? mobileVideoSrc : desktopVideoSrc}
        className={cn("aspect-191/320 md:aspect-82/43 rounded-3xl md:rounded-2xl 2xl:rounded-3xl", className)}
        poster={poster}
        preload={preload}
        muted
        loop
        playsInline
      />
      <div className='absolute inset-0 border-4 border-white rounded-3xl md:rounded-2xl 2xl:rounded-3xl' />
    </div>
  );
};

export default ResponsiveVideoPlayer;
