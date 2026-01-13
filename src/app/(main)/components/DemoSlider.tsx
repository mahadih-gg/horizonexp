"use client"

import SectionHeader from '@/components/common/SectionHeader';
import useWindowSize from '@/hooks/useWindowSize';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Mousewheel, Navigation } from 'swiper/modules';
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
      title: "Website Hero",
      description: <>
        Hook visitors with bite sized clips <br /> that clearly says why your product <br /> and brand matters.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/website-hero-sm.webp" : "/assets/images/demo/website-hero.webp",
      link: "/demo/website-hero",
      buttonText: "View demo →",
    },
    {
      title: "New Arrivals",
      description: <>
        Show your newest products <br /> in a shoppable video <br /> carousel.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/new-arrivals-sm.webp" : "/assets/images/demo/new-arrivals.webp",
      link: "/demo/new-arrivals",
      buttonText: "View demo →",
    },
    {
      title: "See-It-in-Action",
      description: <>
        Show real use cases of <br /> products so customers can <br /> visualize ownership.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/see-it-in-action-sm.webp" : "/assets/images/demo/see-it-in-action.webp",
      link: "/demo/see-it-in-action",
      buttonText: "View demo →",
    },
    {
      title: "UGC",
      description: <>
        Spotlight reviews & videos from <br /> your customers and top fans to <br /> improve relatability.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/ugc-sm.webp" : "/assets/images/demo/ugc.webp",
      link: "/demo/ugc",
      buttonText: "View demo →",
    },
    {
      title: "Website Explainer",
      description: <>
        Walk visitors through how it <br /> works with bite-sized clips so <br /> they “get it” within seconds.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/website-explainer-sm.webp" : "/assets/images/demo/website-explainer.webp",
      link: "/demo/website-explainer",
      buttonText: "View demo →",
    },
    {
      title: "Next Best Buy",
      description: <>
        After a purchase, recommend <br /> more products with video to <br /> increase AOV.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/next-best-buy-sm.webp" : "/assets/images/demo/next-best-buy.webp",
      link: "/demo/next-best-buy",
      buttonText: "View demo →",
    },
    {
      title: "Trending",
      description: <>
        Surface relevant content so <br /> customers can follow along <br /> and make decisions faster.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/trending-sm.webp" : "/assets/images/demo/trending.webp",
      link: "/demo/trending",
      buttonText: "View demo →",
    },
    {
      title: "User Review",
      description: <>
        Turn customer feedback into a <br /> wall of proof so prospects <br /> know they can trust your brand.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/user-review-sm.webp" : "/assets/images/demo/user-review.webp",
      link: "/demo/user-review",
      buttonText: "View demo →",
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
            Put Horizon where it converts
            <br />
            <span className='text-primary/40'>See the highest-ROI placements</span>
          </>
        }
        centered={false}
        className='container flex items-end justify-between'
        extraContent={
          <div className='flex items-center justify-between gap-5 2xl:gap-6 bg-[#A9B3D3]/10 rounded-full p-2.5'>
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
        }
      />

      <div className="relative">
        <Swiper
          modules={[Navigation, Mousewheel]}
          spaceBetween={24}
          slidesPerView={1.25}
          centeredSlides={true}
          loop={true}
          longSwipes={false}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
            thresholdDelta: 15,
            sensitivity: 1.2,
          }}
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
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1600: {
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
      </div>
    </section>
  );
};

export default DemoSlider;