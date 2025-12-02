"use client"

import SectionHeader from "@/components/common/SectionHeader";
import imageLoader from "@/lib/image-loader";
import { motion } from "motion/react";
import Image from "next/image";

const EngageMoreSection = () => {

  const items = [
    {
      heading: "70%",
      title: <>of shoppers prefer video <br /> over static images.</>,
      image: "/assets/images/engage-more-1.webp",
    },
    {
      heading: "50%",
      title: <>higher click-throughs than <br /> banners via short-form.</>,
      image: "/assets/images/engage-more-2.webp",
    },
    {
      heading: "2x",
      title: <>session time with short- <br /> form video browsing.</>,
      image: "/assets/images/engage-more-3.webp",
    },
    {
      heading: "80%",
      title: <>higher purchase likelihood <br /> after watching videos.</>,
      image: "/assets/images/engage-more-4.webp",
    },
  ]

  return (
    <section className="container py-section">

      <SectionHeader
        title={<>Engage more, convert faster, with short-<br className="block xs:hidden" />form video</>}
        description={<>Customers prefer to watch short-form videos instead of reading specs & looking at <br className="hidden md:block" /> static images. Show up with short-form - because video sells faster. </>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-[27px] 2xl:gap-[36px] px-[46px] md:px-0">
        {
          items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              className="relative w-full aspect-square rounded-3xl md:rounded-2xl 2xl:rounded-3xl bg-secondary overflow-hidden"
            >

              <Image
                loader={imageLoader}
                src={item.image}
                alt={`${item.heading} - ${typeof item.title === 'string' ? item.title : 'Engage more with short-form video'}`}
                width={382}
                height={382}
                quality={100}
                priority
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 p-4 md:p-[18px] 2xl:p-6 size-full flex flex-col items-start justify-end">

                <h3 className="text-white text-[28px] md:text-[30px] 2xl:text-[40px] font-medium pb-2 md:pb-1.5 2xl:pb-2 leading-normal z-10">
                  {item.heading}
                </h3>

                <p className="w-full text-left text-white text-base md:text-[15px] 2xl:text-xl font-medium leading-tight z-10">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))
        }
      </div>
    </section>
  );
};

export default EngageMoreSection;