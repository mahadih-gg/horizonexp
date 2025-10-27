"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const ComparisonSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const startX = e.clientX;
    const startPosition = sliderPosition;

    const handleMouseMove = (e: MouseEvent) => {
      const container = document.querySelector('.comparison-container') as HTMLElement;
      if (!container) return;

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

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const startX = e.touches[0].clientX;

    const handleTouchMove = (e: TouchEvent) => {
      const container = document.querySelector('.comparison-container') as HTMLElement;
      if (!container) return;

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

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div className="w-full flex md:flex-row flex-col justify-center items-center px-1 md:px-10 2xl:px-14 gap-5">
      {/* Desktop labels - hidden on mobile */}
      <h3 className="hidden md:block text-lg 2xl:text-2xl font-medium">Horizon home</h3>
      <AnimatePresence mode="wait">
        {/* Mobile labels - only visible on mobile and based on slider position */}
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          key={sliderPosition > 50 ? 'horizon-home' : 'static-home'}
          className="md:hidden absolute top-10 left-1/2 -translate-x-1/2! text-lg 2xl:text-2xl font-medium z-10 text-primary-text"
        >
          {sliderPosition > 50 ? 'Horizon home' : 'Static home'}
        </motion.h3>
      </AnimatePresence>
      {/* Comparison Container */}
      <div className="comparison-container w-full md:w-[70.833%] mx-auto relative overflow-hidden rounded-xl md:rounded-[20px] 2xl:rounded-[24px]" style={{ aspectRatio: '1.52/1' }}>
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
            className="object-cover"
            priority
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
            className="object-cover"
            priority
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 z-30 h-full w-1 bg-white shadow-lg"
          style={{
            left: `${sliderPosition}%`,
            transform: "translateX(-50%)",
          }}
        />

        {/* Slider Handle */}
        <div
          className={`absolute top-1/2 z-40 flex size-10 md:size-11 2xl:size-12 -translate-y-1/2! -translate-x-1/2! cursor-pointer items-center justify-center rounded-full bg-white shadow-lg select-none ${isDragging ? '' : 'transition-all hover:scale-110'
            }`}
          style={{
            left: `${sliderPosition}%`,
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <ChevronLeft strokeWidth={2.5} className="size-4 md:size-4 2xl:size-5 text-primary-text" />
          <ChevronRight strokeWidth={2.5} className="size-4 md:size-4 2xl:size-5 text-primary-text" />
        </div>
      </div>

      {/* Desktop labels - hidden on mobile */}
      <h3 className="hidden md:block text-lg 2xl:text-2xl font-medium">Static home</h3>
    </div>
  );
};

export default ComparisonSection;