"use client"

import SectionHeader from '@/components/common/SectionHeader';
import { ConsoleIcon } from '@/components/icons/console-icon';
import { NativeStreamingIcon } from '@/components/icons/native-streaming-icon';
import { PerformanceIcon } from '@/components/icons/performance-icon';
import { SocialCommerceIcon } from '@/components/icons/social-commerce-icon';
import { Card } from '@/components/ui/card';
import { motion } from 'motion/react';

const WhyHorizonSection = () => {
  const features = [
    {
      icon: <NativeStreamingIcon />,
      title: <>Native Short-Form <br /> Streaming</>,
      description: "The fastest, smoothest, most immersive short-form playback ever built. Horizon's native streaming drives unmatched engagement, retention, and conversion."
    },
    {
      icon: <SocialCommerceIcon />,
      title: <>Full-Stack Social <br /> Commerce</>,
      description: "The smartest, most seamless path from content to commerce. From shoppable CTAs to ad monetization, Horizon bridges storytelling and sales in one seamless layer."
    },
    {
      icon: <ConsoleIcon />,
      title: <>All-in-one <br /> Console</>,
      description: "Control everything from one powerful dashboard. Create, deploy, and optimize short-form experiences with enterprise-grade precision - no code needed."
    },
    {
      icon: <PerformanceIcon className="w-8 h-8 text-gray-700" />,
      title: <>Big-Tech Grade <br /> Performance</>,
      description: "Engineered for massive, global scale and unmatched reliability. Horizon delivers ultra-fast, low-latency performance powered by edge infrastructure and intelligent caching."
    }
  ];

  return (
    <section className='container pb-section'>
      <SectionHeader
        topLabel="Why Horizon"
        title={<>The {"world’s"} most advanced short-form <br className='hidden md:block' /> video engagement engine - period.</>}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 2xl:gap-9">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <Card className="flex flex-col items-start justify-start gap-0 px-10 md:px-[30px] 2xl:px-10 py-[60px] md:py-[45px] 2xl:py-[60px]">
              <span>
                {feature.icon}
              </span>
              <h3 className="text-2xl 2xl:text-[32px] font-medium text-black-gradient pt-5 md:pt-[30px] 2xl:pt-10 pb-5 md:pb-[22px] 2xl:pb-[30px] leading-[110%]">
                {feature.title}
              </h3>
              <p className="text-base 2xl:text-xl text-primary-text font-medium">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyHorizonSection;