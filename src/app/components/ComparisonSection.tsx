"use client";

import { useInView } from "@/hooks/useInView";
import imageLoader from "@/lib/image-loader";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const ComparisonSection = () => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Use custom hook with configurable threshold
  const { ref: containerRef, inView, hasTriggered } = useInView<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const container = document.querySelector('.comparison-container') as HTMLElement;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const relativeX = e.clientX - containerRect.left;
      const newPosition = (relativeX / containerWidth) * 100;

      // Constrain the position between 0% and 100%
      const constrainedPosition = Math.min(Math.max(newPosition, 0), 100);
      setSliderPosition(constrainedPosition);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: false });
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const container = document.querySelector('.comparison-container') as HTMLElement;
    if (!container) return;

    const handleTouchMove = (e: TouchEvent) => {
      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const relativeX = e.touches[0].clientX - containerRect.left;
      const newPosition = (relativeX / containerWidth) * 100;

      // Constrain the position between 0% and 100%
      const constrainedPosition = Math.min(Math.max(newPosition, 0), 100);
      setSliderPosition(constrainedPosition);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
  };

  // Smooth animation function
  const animateSlider = () => {
    if (hasAnimated || isDragging) return;

    setHasAnimated(true);

    // Animate from 0% to 75%
    const animateTo75 = () => {
      let startTime: number;
      const duration = 2000; // 2 seconds
      const startPosition = 0;
      const endPosition = 75;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const easedProgress = easeInOut(progress);

        const currentPosition = startPosition + (endPosition - startPosition) * easedProgress;
        setSliderPosition(currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Start animation back to 50% immediately
          animateTo50();
        }
      };

      requestAnimationFrame(animate);
    };

    // Animate from 100% back to 50%
    const animateTo50 = () => {
      let startTime: number;
      const duration = 2000; // 1 seconds
      const startPosition = 75;
      const endPosition = 50;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const easedProgress = easeInOut(progress);

        const currentPosition = startPosition + (endPosition - startPosition) * easedProgress;
        setSliderPosition(currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    // Start the animation after a brief delay
    setTimeout(animateTo75, 500);
  };

  // Trigger animation when component comes into view
  if (inView && hasTriggered && !hasAnimated) {
    animateSlider();
  }

  return (
    <div className="w-full flex md:flex-row flex-col justify-center items-center px-1 md:px-10 2xl:px-14 gap-5">
      {/* Desktop labels - hidden on mobile */}
      <h3 className={cn("hidden lg:block text-lg 2xl:text-2xl font-medium", sliderPosition < 50 ? 'opacity-100' : 'opacity-50')}>Static home</h3>
      <AnimatePresence mode="wait">
        {/* Mobile labels - only visible on mobile and based on slider position */}
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          key={sliderPosition > 50 ? 'horizon-home' : 'static-home'}
          className="lg:hidden absolute top-10 xs:top-5 sm:top-10 left-1/2 -translate-x-1/2! text-lg 2xl:text-2xl font-medium z-10 text-primary-text"
        >
          {sliderPosition > 50 ? 'Horizon home' : 'Static home'}
        </motion.h3>
      </AnimatePresence>
      {/* Comparison Container */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }}
        className="comparison-container w-full sm:w-[95%] md:w-[85%] lg:w-[70.24%] 2xl:w-[76%] mx-auto relative overflow-hidden rounded-xl md:rounded-[20px] 2xl:rounded-[24px]"
        style={{ aspectRatio: '1.52/1' }}
      >
        {/* Horizon Home Image (Left) */}
        <div
          className="absolute inset-0 z-10"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <Image
            src="/assets/images/horzion-home.webp"
            alt="Horizon home layout"
            fill
            loader={imageLoader}
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Static Home Image (Right) */}
        <div
          className="absolute inset-0 z-20"
          style={{
            clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
          }}
        >
          <Image
            src="/assets/images/static-home.webp"
            alt="Static home layout"
            fill
            loader={imageLoader}
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 z-30 h-full w-1 bg-white shadow-lg"
          style={{
            left: `${sliderPosition}%`,
            transform: "translateX(-50%)",
            transition: isDragging ? "none" : undefined,
          }}
        />

        {/* Slider Handle */}
        <div
          className={`absolute top-1/2 z-40 flex size-10 md:size-11 2xl:size-12 -translate-y-1/2! cursor-pointer items-center justify-center rounded-full bg-white shadow-lg select-none ${isDragging ? '' : 'hover:scale-110'}`}
          style={{
            left: `${sliderPosition}%`,
            transform: "translateX(-50%)",
            transition: isDragging ? "none" : "transform 0.2s ease",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <ChevronLeft strokeWidth={2.5} className="size-4 md:size-4 2xl:size-5 text-primary-text" />
          <ChevronRight strokeWidth={2.5} className="size-4 md:size-4 2xl:size-5 text-primary-text" />
        </div>
      </motion.div>

      {/* Desktop labels - hidden on mobile */}
      <h3 className={cn("hidden lg:block text-lg 2xl:text-2xl font-medium", sliderPosition > 50 ? 'opacity-100' : 'opacity-50')}>Horizon home</h3>
    </div>
  );
};

export default ComparisonSection;