'use client';

import useWindowSize from '@/hooks/useWindowSize';
import { cn } from '@/lib/utils';
import { useInView } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import PauseIcon from '../icons/pause-icon';
import PlayIcon from '../icons/play-icon';

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
  const [isPlaying, setIsPlaying] = useState(true);
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

  // useEffect(() => {
  //   if (videoRef.current) {
  //     setIsPlaying(!!videoRef.current.paused);
  //   }
  // }, [videoRef.current?.paused]);

  const handlePlayPause = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }

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
      <button
        className='absolute bottom-4 md:bottom-5 2xl:bottom-7 right-4 md:right-5 2xl:right-7 size-7 md:size-[30px] 2xl:size-10 bg-primary/16 backdrop-blur-sm rounded-full flex items-center justify-center z-20'
        onClick={handlePlayPause}
      >
        {
          isPlaying ? (
            <PauseIcon />
          ) : (
            <PlayIcon />
          )
        }
      </button>
      <div className='absolute inset-0 border-4 border-white rounded-3xl md:rounded-2xl 2xl:rounded-3xl' />
    </div>
  );
};

export default ResponsiveVideoPlayer;
