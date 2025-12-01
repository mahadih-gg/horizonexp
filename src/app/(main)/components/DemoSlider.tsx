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
        Show your freshest products <br /> in a swipeable feed so visitors <br /> always see what&apos;s new first.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/new-arrivals-sm.webp" : "/assets/images/demo/new-arrivals.webp",
      link: "/demo/new-arrivals",
      buttonText: "Watch this demo →",
    },
    {
      title: "Website Explainer",
      description: <>
        Walk visitors through how it <br /> works in quick, swipeable steps <br /> so they &quot;get it&quot; in seconds.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/website-explainer-sm.webp" : "/assets/images/demo/website-explainer.webp",
      link: "/demo/website-explainer",
      buttonText: "Watch this demo →",
    },
    {
      title: "Next Best Buy",
      description: <>
        Recommend the next logical <br /> product so you quietly increase <br /> AOV.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/next-best-buy-sm.webp" : "/assets/images/demo/next-best-buy.webp",
      link: "/demo/next-best-buy",
      buttonText: "Watch this demo →",
    },
    {
      title: "UGC",
      description: <>
        Highlight content from your <br /> customers and fans so your <br /> brand feels alive.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/ugc-sm.webp" : "/assets/images/demo/ugc.webp",
      link: "/demo/ugc",
      buttonText: "Watch this demo →",
    },
    {
      title: "Website Hero",
      description: <>
        Hook visitors with bold, snackable <br /> clips that instantly show why your <br /> product matters.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/website-hero-sm.webp" : "/assets/images/demo/website-hero.webp",
      link: "/demo/website-hero",
      buttonText: "Watch this demo →",
    },
    {
      title: "See It in Action",
      description: <>
        Show the product in real use <br /> cases so customers can <br /> visualize ownership.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/see-it-in-action-sm.webp" : "/assets/images/demo/see-it-in-action.webp",
      link: "/demo/see-it-in-action",
      buttonText: "Watch this demo →",
    },
    {
      title: "Trending",
      description: <>
        Surface what&apos;s hot right now <br /> so shoppers follow social <br /> proof and move faster.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/trending-sm.webp" : "/assets/images/demo/trending.webp",
      link: "/demo/trending",
      buttonText: "Watch this demo →",
    },
    {
      title: "User Review",
      description: <>
        Turn real customer videos into a <br /> proof wall so visitors trust you <br /> more and hesitate less.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/user-review-sm.webp" : "/assets/images/demo/user-review.webp",
      link: "/demo/user-review",
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
    <section className='py-section'>
      <SectionHeader
        title={
          <>
            Use cases that drive conversion.
            <br />
            Explore Horizon experience for your key pages.
          </>
        }
        className="container"
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
              slidesPerView: 2.0475,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 2.0475,
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

        <div className='container flex items-center justify-end pt-6 md:pt-[18px] 3xl:pt-6'>
          <div className='flex items-center justify-between gap-5 2xl:gap-6 bg-secondary rounded-full p-2.5'>
            <button
              onClick={handlePrev}
              disabled={isBeginning}
              className={`size-6 2xl:size-8 flex-center active:scale-95 ${isBeginning
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer'
                }`}
            >
              <ChevronLeft className="size-5 2xl:size-6 text-primary" />
            </button>
            <button
              onClick={handleNext}
              disabled={isEnd}
              className={`size-6 2xl:size-8 flex-center active:scale-95 ${isEnd
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer'
                }`}
            >
              <ChevronRight className="size-5 2xl:size-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSlider;