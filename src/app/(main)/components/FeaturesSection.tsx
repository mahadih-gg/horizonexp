'use client';

import GradientBg from '@/components/common/GradientBg';
import SectionHeader from '@/components/common/SectionHeader';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import useWindowSize from '@/hooks/useWindowSize';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useMemo } from 'react';
import HorizonConsole2 from './HorizonConsole2';

type FeatureType = {
  topLabel?: string;
  title: string;
  description: string | React.ReactNode;
  image: string;
  imageClassName: string;
  rightPadding?: boolean;
};

const FeaturesSection = () => {

  const { width } = useWindowSize();
  const isMobile = useMemo(() => width < 480, [width]);

  const features: FeatureType[] = useMemo(() => [
    {
      title: "Create playlists or personalized loops",
      description: <>Select the exact sequence of videos you want customers to <br className="hidden lg:block" /> experience or let AI create personalized video journeys.</>,
      image: "/assets/images/features/feat-1.webp",
      imageClassName: "w-auto mx-auto h-[402px] 2xl:h-[537px] -mb-16 sm:mb-0",
      rightPadding: false
    },
    {
      title: "Engage like never before",
      description: <>Boost engagement with likes, shares, and comments (spam <br className="hidden lg:block" /> protected by AI) to drive conversation, loyalty, and retention.</>,
      image: "/assets/images/features/feat-2.webp",
      imageClassName: "h-[402px] 2xl:h-[537px] -mb-[80px] xs:-mb-[20px] sm:mb-0 -ml-[2px] sm:ml-auto",
    },
    {
      title: "Collect customer insight with polls",
      description: <>Create and add polls on any video to capture feedback <br className="hidden lg:block" /> and let customers shape your next move.</>,
      image: "/assets/images/features/feat-3.webp",
      imageClassName: "w-[243px] sm:w-auto mx-auto h-[402px] 2xl:h-[537px] -mb-5 sm:mb-0",
    },
    {
      title: "Unlock new revenue with ads",
      description: <>Monetize with sponsored deals and ads, or promote your <br className="hidden lg:block" /> product catalog with product and video campaigns.</>,
      image: !isMobile ? "/assets/images/features/feat-4.webp" : "/assets/images/features/feat-4-mobile.webp",
      imageClassName: "h-[402px] 2xl:h-[537px] -mb-[85px] sm:mb-0 -ml-[16px] sm:ml-auto",
    },
  ], [isMobile]);

  const features2: FeatureType[] = [
    {
      title: "Ultra fast streaming",
      description: <>Instant-load video experience with built-in protections <br className="hidden lg:block" /> that keep your website or app running at top speed.</>,
      image: "/assets/images/features/feat-5.webp",
      imageClassName: "w-full h-auto pb-5",
    },
    {
      title: "Own the mobile experience",
      description: <>Delight customers with a smooth, fullscreen video experience <br className="hidden lg:block" /> built for easy scrolling and fast discovery.</>,
      image: "/assets/images/features/feat-6.webp",
      imageClassName: "h-[402px] 2xl:h-[537px] -mb-20 sm:mb-0",
    },
    {
      title: "Empower your super fans",
      description: <>Invite customers and creators to upload their own video content <br className="hidden lg:block" /> to showcase on your website or app.</>,
      image: "/assets/images/features/feat-7.webp",
      imageClassName: "pb-5",
      rightPadding: false
    },
    {
      title: "Track what truly works",
      description: <>Measure performance across every video and every carousel to <br className="hidden lg:block" /> know exactly what is driving engagement and sales.</>,
      image: "/assets/images/features/feat-8.webp",
      imageClassName: "pb-5",
      rightPadding: false
    },
  ];
  return (
    <section className="container scroll-mt-20 md:scroll-mt-28 2xl:scroll-mt-40" id="features">
      <SectionHeader
        title={<>Everything you need to grow your <br className="hidden lg:block" /> business with shoppable videos</>}
      />

      <div className='flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-6 2xl:gap-8 w-full'>
        <GradientBg className='min-h-[382px] pt-[30px] 2xl:pt-10 pb-[87px] md:pb-0 md:col-span-2 overflow-hidden'>
          <CardHeader
            animate={false}
            title={<>The only shoppable video platform that <br className="hidden md:block" /> works everywhere you do</>}
            description={<>Launch on Shopify, Wordpress, Woocommerce, Wix, Webflow, Framer <br className="hidden md:block" /> and many more without any complex technical integration.</>}
          />
          <div className='w-full h-full pt-[50px] md:pt-[40px] 2xl:pt-[54px] flex justify-center items-start'>
            <Image
              src={isMobile ? "/assets/images/shoppable-platform-mobile.webp" : "/assets/images/shoppable-platform.webp"}
              alt="The only shoppable video platform"
              width={isMobile ? 375 : 1640}
              height={isMobile ? 211 : 533}
              className="w-full h-auto object-contain"
            />
          </div>
        </GradientBg>

        {
          features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))
        }

        <GradientBg className='py-[30px] 2xl:py-10 md:col-span-2 overflow-hidden'>
          <CardHeader
            animate={false}
            title={<>Create high converting CTAs</>}
            description={<>Use customizable shoppable video CTAs to draw your <br className="hidden lg:block" /> customer’s attention and drive more purchases.</>}
          />
          <div className='w-full h-full pt-10 md:pt-[45px] 2xl:pt-[60px] pb-11 md:pb-6 2xl:pb-8 flex justify-center items-start'>
            <Image
              src="/assets/images/make-your-videos-shoppable.webp"
              alt="Make your videos shoppable"
              width={1419}
              height={631}
              className="min-w-fit md:min-w-auto w-auto md:w-full h-[373px] md:h-auto md:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[78%] mx-auto object-contain object-top"
            />
          </div>
        </GradientBg>

        {
          features2.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))
        }

        <GradientBg className='py-10 col-span-2 overflow-hidden'>
          <CardHeader
            animate={false}
            className='px-4'
            title="The control center for Shoppable Videos & beyond"
            description={<>Manage video content, carousels, ads, ugc, and user experience from <br className="hidden lg:block" /> one powerful, no-code dashboard.</>} />
          <HorizonConsole2 />
        </GradientBg>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }: { feature: FeatureType }) => {

  const rightPadding = feature.rightPadding ?? true;

  return (
    <Card className={cn('bg-[#F6FAFE] w-full gap-0 md:gap-0 2xl:gap-0 pb-0 px-4 md:px-8 2xl:px-10 sm:pb-[53px] 2xl:pb-[71px] overflow-hidden rounded-4xl 2xl:rounded-6xl', !rightPadding && 'pr-0 md:pr-0 2xl:pr-0')}>
      <CardHeader
        animate={false}
        topLabel={feature.topLabel}
        title={feature.title}
        description={feature.description}
      />
      <CardContent className='w-full pt-[36px] md:pt-[43px] 2xl:pt-[58px]'>
        <Image
          src={feature.image}
          alt={feature.title}
          width={1419}
          height={631}
          className={cn("mx-auto object-contain object-top", feature.imageClassName)}
        />
      </CardContent>
    </Card>
  );
};

export default FeaturesSection;