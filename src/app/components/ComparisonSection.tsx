"use client";

import { ChevronsLeftRight } from "lucide-react";
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
    <div className="w-full flex md:flex-row flex-col justify-center items-center md:px-10 2xl:px-14 gap-5">

      <h3 className="text-xl md:text-lg 2xl:text-2xl font-medium">Horizon home</h3>
      {/* Comparison Container */}
      <div className="comparison-container w-[70.833%] mx-auto relative overflow-hidden rounded-xl md:rounded-[20px] 2xl:rounded-[24px]" style={{ aspectRatio: '1.52/1' }}>
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
          className={`absolute top-1/2 z-40 flex h-12 w-12 -translate-y-1/2! -translate-x-1/2! cursor-pointer items-center justify-center rounded-full bg-white shadow-lg select-none ${isDragging ? '' : 'transition-all hover:scale-110'
            }`}
          style={{
            left: `${sliderPosition}%`,
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <ChevronsLeftRight className="h-5 w-5 text-gray-600" />
        </div>
      </div>
      <h3 className="text-xl md:text-lg 2xl:text-2xl font-medium">Static home</h3>
    </div>
  );
};

export default ComparisonSection;