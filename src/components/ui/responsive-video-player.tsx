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
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0 // Trigger as soon as any part of the video is visible
  });

  // Sync isPlaying state with actual video state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updatePlayingState = () => {
      setIsPlaying(!video.paused);
    };

    video.addEventListener('play', updatePlayingState);
    video.addEventListener('pause', updatePlayingState);
    video.addEventListener('ended', updatePlayingState);

    return () => {
      video.removeEventListener('play', updatePlayingState);
      video.removeEventListener('pause', updatePlayingState);
      video.removeEventListener('ended', updatePlayingState);
    };
  }, []);

  // Play/pause video based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibilityChange = async () => {
      // Cancel any pending play operation
      if (playPromiseRef.current) {
        try {
          await playPromiseRef.current;
        } catch (error) {
          // Ignore AbortError from cancelled play operations
          if (error instanceof Error && error.name !== 'AbortError') {
            console.error('Video play error:', error);
          }
        }
        playPromiseRef.current = null;
      }

      if (isInView && video.paused) {
        try {
          playPromiseRef.current = video.play();
          await playPromiseRef.current;
          playPromiseRef.current = null;
        } catch (error) {
          if (error instanceof Error && error.name !== 'AbortError') {
            console.error('Video play error:', error);
          }
          playPromiseRef.current = null;
        }
      } else if (!isInView && !video.paused) {
        video.pause();
      }
    };

    handleVisibilityChange();
  }, [isInView]);


  const handlePlayPause = async () => {
    const video = videoRef.current;
    if (!video) return;

    // Cancel any pending play operation
    if (playPromiseRef.current) {
      try {
        await playPromiseRef.current;
      } catch (error) {
        // Ignore AbortError from cancelled play operations
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Video play error:', error);
        }
      }
      playPromiseRef.current = null;
    }

    if (video.paused) {
      try {
        playPromiseRef.current = video.play();
        await playPromiseRef.current;
        playPromiseRef.current = null;
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Video play error:', error);
        }
        playPromiseRef.current = null;
      }
    } else {
      video.pause();
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
