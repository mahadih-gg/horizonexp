"use client"

import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ShortFormBenefitsSection = () => {
  const items = [
    {
      image: "/assets/images/why-img-1.webp",
      title: "10x Product Discovery",
      description: "Short-form feeds let shoppers swipe through dozens of products in seconds - far more than any static grid can show.",
    },
    {
      image: "/assets/images/why-img-2.webp",
      title: "Sky-High Engagement",
      description: "Motion-first video thumbnails pull the eye, so more visitors tap, watch, and keep exploring your products.",
    },
    {
      image: "/assets/images/why-img-3.webp",
      title: "Video That Sells",
      description: "Seeing products in action builds trust - video drives stronger intent than static images, lifting conversion.",
    },
  ];

  return (
    <section className='container pb-section'>
      <SectionHeader
        title={<>Your site needs its own short-form <br className="hidden lg:block" /> layer now. Here{"’"}s why</>}
      />

      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView={1.15}
        spaceBetween={12}
        breakpoints={{
          520: {
            slidesPerView: 1.6,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 2.4,
            spaceBetween: 18,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full aspect-[1/1.52] md:aspect-[1/1.35] rounded-4xl 2xl:rounded-6xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="absolute top-0 left-0 px-6 py-6 md:px-[22px] md:py-7 2xl:px-[30px] 2xl:py-9 text-lg md:text-xl 2xl:text-[28px] text-[#F2F4F7]/50 leading-[110%]">
                <span className="text-white">{item.title}</span>{": "}
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ShortFormBenefitsSection;