"use client"

import SectionHeader from '@/components/common/SectionHeader';
import useWindowSize from '@/hooks/useWindowSize';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DemoCard from '../demo/components/DemoCard';


const DemoSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { width } = useWindowSize();

  const isMobile = useMemo(() => width < 480, [width]);

  const demoCards = [
    {
      title: "New Arrivals",
      description: <>
        Show your freshest products in a swipeable <br /> feed so visitors always see what&apos;s new first.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/new-arrivals-sm.webp" : "/assets/images/demo/new-arrivals.webp",
      link: "/demo/new-arrivals",
      buttonText: "Watch this demo →",
    },
    {
      title: "Trending",
      description: <>
        Surface what&apos;s hot right now so shoppers <br /> follow social proof and move faster.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/trending-sm.webp" : "/assets/images/demo/trending.webp",
      link: "/demo/trending",
      buttonText: "Watch this demo →",
    },
    {
      title: "See It in Action",
      description: <>
        Show the product in real use cases so <br /> customers can visualize ownership.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/see-it-in-action-sm.webp" : "/assets/images/demo/see-it-in-action.webp",
      link: "/demo/see-it-in-action",
      buttonText: "Watch this demo →",
    },
    {
      title: "User Review",
      description: <>
        Turn real customer videos into a proof wall <br /> so visitors trust you more and hesitate less.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/user-review-sm.webp" : "/assets/images/demo/user-review.webp",
      link: "/demo/user-review",
      buttonText: "Watch this demo →",
    },
    {
      title: "Next Best Buy",
      description: <>
        Recommend the next logical product so <br /> you quietly increase AOV.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/next-best-buy-sm.webp" : "/assets/images/demo/next-best-buy.webp",
      link: "/demo/next-best-buy",
      buttonText: "Watch this demo →",
    },
    {
      title: "UGC",
      description: <>
        Highlight content from your customers and <br /> fans so your brand feels alive.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/ugc-sm.webp" : "/assets/images/demo/ugc.webp",
      link: "/demo/ugc",
      buttonText: "Watch this demo →",
    },
    {
      title: "Website Hero",
      description: <>
        Hook visitors with bold, snackable clips that <br /> instantly show why your product matters.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/website-hero-sm.webp" : "/assets/images/demo/website-hero.webp",
      link: "/demo/website-hero",
      buttonText: "Watch this demo →",
    },
    {
      title: "Website Explainer",
      description: <>
        Walk visitors through how it works in quick, <br /> swipeable steps so they &quot;get it&quot; in seconds.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/website-explainer-sm.webp" : "/assets/images/demo/website-explainer.webp",
      link: "/demo/website-explainer",
      buttonText: "Watch this demo →",
    },
  ];

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
    <section className='container py-section'>
      <SectionHeader
        title="How brands can win with Horizon"
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
          centeredSlides={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1.25,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 2.25,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 2.25,
              spaceBetween: 24,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
        >
          {demoCards.map((item, index) => (
            <SwiperSlide key={index}>
              <DemoCard
                variant="slider"
                title={item.title}
                description={item.description}
                link={item.link}
                buttonText={item.buttonText}
                imageUrl={item.imageUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DemoSlider;