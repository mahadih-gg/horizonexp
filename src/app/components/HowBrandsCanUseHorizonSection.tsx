"use client"

import SectionHeader from '@/components/common/SectionHeader';
import SootingStartIcon from '@/components/icons/sooting-start-icon';
import { CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Sample data for the slider cards
const sliderData = [
  {
    topLabel: "Recommended for you",
    title: "Hook visitors instantly",
    description: "Show personalized short-form videos at the top of your homepage. Grab attention in seconds and keep visitors exploring longer.",
    image: "/assets/images/slider/slider-img-1.webp",
    imageClassName: "h-[120px] md:h-[126px] 2xl:h-[192px]"
  },
  {
    topLabel: "Experience our new collection",
    title: "Demonstrate products",
    description: "Highlight product features, textures, and motion through immersive short-form clips. Let customers see why they should buy.",
    image: "/assets/images/slider/slider-img-2.webp",
    imageClassName: "h-[170px] md:h-[211px] 2xl:h-[282px]"
  },
  {
    topLabel: "Discover our services",
    title: "Showcase services",
    description: "Bring your service experience to life with quick demos, client stories, or before-after results. Turn expertise into visual proof.",
    image: "/assets/images/slider/slider-img-3.webp",
    imageClassName: "h-[170px] md:h-[211px] 2xl:h-[282px]"
  },
  {
    topLabel: "What our customers say",
    title: "Build product trust",
    description: "Use authentic customer stories and user reviews in short-form to boost credibility and remove purchase hesitation.",
    image: "/assets/images/slider/slider-img-4.webp",
    imageClassName: "h-[120px] md:h-[126px] 2xl:h-[192px]"
  },
  {
    title: "Turn content into sales",
    description: "Transform all your videos into shoppable short-form moments. Turn inspiration directly into seamless checkout.",
    image: "/assets/images/slider/slider-img-5.webp",
    imageClassName: "h-[120px] md:h-[150px] 2xl:h-[225px] 3xl:h-[338px] object-center 2xl:-ml-[5%] 3xl:-ml-0"
  },
  {
    topLabel: "You might also like",
    title: "Engage after purchase",
    description: "Re-engage customers with unboxing clips, thank-you videos, or tutorials. Turn one-time buyers into loyal advocates.",
    image: "/assets/images/slider/slider-img-6.webp",
    imageClassName: "h-[170px] md:h-[211px] 2xl:h-[282px]"
  },
  {
    topLabel: "Discover our top users",
    title: "Leverage UGC",
    description: "Feature your top customers' videos to create community and social proof. Let real people sell your story for you.",
    image: "/assets/images/slider/slider-img-7.webp",
    imageClassName: "h-[120px] md:h-[126px] 2xl:h-[192px]"
  }
];

const HowBrandsCanUseHorizonSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className='container pb-section'>
      <SectionHeader
        title="How brands can use Horizon"
        className="text-left flex items-end justify-between"
        extraContent={(
          <div className='flex items-center gap-1.5 2xl:gap-2'>
            <button
              onClick={handlePrev}
              disabled={isBeginning}
              className={`size-10 2xl:size-[54px] rounded-full bg-secondary flex-center transition-all duration-200 ${isBeginning
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer'
                }`}
            >
              <ChevronLeft className="size-6 2xl:size-8 text-primary" />
            </button>
            <button
              onClick={handleNext}
              disabled={isEnd}
              className={`size-10 2xl:size-[54px] rounded-full bg-secondary flex-center transition-all duration-200 ${isEnd
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer'
                }`}
            >
              <ChevronRight className="size-6 2xl:size-8 text-primary" />
            </button>
          </div>
        )}
      />

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.25}
          breakpoints={{
            640: {
              slidesPerView: 2.25,
              spaceBetween: 14,
            },
            1024: {
              slidesPerView: 3.25,
              spaceBetween: 18,
            },
            1280: {
              slidesPerView: 3.25,
              spaceBetween: 24,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full">
                <div className="overflow-hidden bg-secondary pl-7 md:pl-6 2xl:pl-[34px] h-[360px] md:h-[405px] 2xl:h-[540px] flex flex-col items-start justify-center rounded-3xl md:rounded-2xl 2xl:rounded-3xl">
                  {/* Top Label */}

                  {
                    item.topLabel && (
                      <>
                        <span className="inline-flex items-center gap-0.5 md:gap-[3px] 2xl:gap-1.5 mb-3.5 md:mb-[18px] 2xl:mb-6 text-base md:text-xl 2xl:text-[26px] text-primary-text font-medium">
                          {item.topLabel}

                          {
                            index === 0 && (
                              <SootingStartIcon className="size-4 md:size-6 2xl:size-8" />
                            )
                          }
                        </span>
                      </>
                    )
                  }

                  <Image
                    width={519}
                    height={192}
                    src={item.image}
                    alt={item.title}
                    className={cn("min-w-fit object-contain object-left", item.imageClassName)}
                  />
                </div>

                <CardHeader
                  animate={false}
                  title={item.title}
                  description={item.description}
                  centered={false}
                  className='mt-6 md:mt-5 2xl:mt-7'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HowBrandsCanUseHorizonSection;