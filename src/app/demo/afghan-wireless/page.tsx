'use client';

import useWindowSize from '@/hooks/useWindowSize';
import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';
import Image from "next/image";
import { useMemo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const AfghanWirelessDemoPage = () => {

  const { width } = useWindowSize();

  const isMobile = useMemo(() => width < 768, [width]);


  const images = [
    {
      src: isMobile ? "/assets/images/demo/afghan-wireless/afghan-wireless-sm.webp" : "/assets/images/demo/afghan-wireless/afghan-wireless.webp",
      alt: "Afghan Wireless",
      width: 1788,
      height: 490,
    },
    {
      src: "/assets/images/demo/afghan-wireless/1.webp",
      alt: "Afghan Wireless",
      width: 1788,
      height: 490,
    },
    {
      src: "/assets/images/demo/afghan-wireless/2.webp",
      alt: "Afghan Wireless",
      width: 1788,
      height: 490,
    },
    {
      src: "/assets/images/demo/afghan-wireless/3.webp",
      alt: "Afghan Wireless",
      width: 1788,
      height: 490,
    },
    {
      src: "/assets/images/demo/afghan-wireless/4.webp",
      alt: "Afghan Wireless",
      width: 1788,
      height: 490,
    },
    {
      src: "/assets/images/demo/afghan-wireless/5.webp",
      alt: "Afghan Wireless",
      width: 1788,
      height: 490,
    },
    {
      src: "/assets/images/demo/afghan-wireless/6.webp",
      alt: "Afghan Wireless",
      width: 1788,
      height: 490,
    },
  ];
  return (
    <section className='pt-8 md:pt-[45px] 2xl:pt-[60px]'>
      <style>{`
        .afghan-wireless-swiper .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .afghan-wireless-swiper .swiper-pagination-bullet-active {
          background-color: white;
        }
      `}</style>

      <div className='pb-8 md:pb-[30px] 2xl:pb-10'>
        <EntryPoint
          id="#123906"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        className="afghan-wireless-swiper h-[390px] md:h-[368px] 2xl:h-[490px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-[390px] md:h-[368px] 2xl:h-[490px] object-cover object-top"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pt-8 md:pt-[45px] 2xl:pt-[37px]">
        <h2 className='text-left text-xl 2xl:text-[28px] font-medium pb-4 2xl:pb-5'>Trending Now</h2>
        <EntryPoint
          id="#517095"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.STANDARD}
        />
      </div>
    </section>
  );
};

export default AfghanWirelessDemoPage;

