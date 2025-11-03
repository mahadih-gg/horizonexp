'use client';

import GradientBg from '@/components/common/GradientBg';
import SectionHeader from '@/components/common/SectionHeader';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import useWindowSize from '@/hooks/useWindowSize';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useMemo } from 'react';
import HorizonConsole from './HorizonConsole';
import InfiniteScroll from './InfiniteScroll';

type FeatureType = {
  topLabel: string;
  title: string;
  description: string | React.ReactNode;
  image: string;
  imageClassName: string;
};

const EverythingYouNeedSection = () => {

  const { width } = useWindowSize();
  const isMobile = useMemo(() => width < 480, [width]);

  const features: FeatureType[] = useMemo(() => [
    {
      topLabel: "Fast Launch",
      title: "Launch short-form in minutes",
      description: <>Add a line of code or install a plugin to launch short-form <br className="hidden lg:block" /> entry points & video feeds anywhere on your site or app.</>,
      image: "/assets/images/fast-launch.webp",
      imageClassName: "w-auto mx-auto h-[402px] 2xl:h-[537px] -mb-16 sm:mb-0",
    },
    {
      topLabel: "Social Interactions",
      title: "Engage like never before",
      description: <>Boost engagement with likes, shares, and comments (spam <br className="hidden lg:block" /> protected by AI) to drive conversation, loyalty, and retention.</>,
      image: !isMobile ? "/assets/images/social-interactions.webp" : "/assets/images/social-interactions-mobile.webp",
      imageClassName: "h-[402px] 2xl:h-[537px] -mb-[50px] sm:mb-0",
    },
    {
      topLabel: "Sponsored Campaigns",
      title: "Unlock new revenue",
      description: <>Monetize with sponsored deals and ads, or promote your <br className="hidden lg:block" /> product catalog with product and video campaigns.</>,
      image: !isMobile ? "/assets/images/sponsored-campaigns.webp" : "/assets/images/sponsored-campaigns-mobile.webp",
      imageClassName: "h-[402px] 2xl:h-[537px] -mb-6 sm:mb-0",
    },
    {
      topLabel: "Audience Polls",
      title: "Collect customer input with polls",
      description: <>Launch bite-size polls to capture intent and feedback, <br className="hidden lg:block" /> let customers shape your next move.</>,
      image: "/assets/images/audience-polls.webp",
      imageClassName: "w-[243px] sm:w-auto mx-auto h-[402px] 2xl:h-[537px] -mb-5 sm:mb-0",
    },
  ], [isMobile]);

  const features2: FeatureType[] = [
    {
      topLabel: "Invite-only UGC",
      title: "Empower your super fans",
      description: "Invite VIP customers and creators to upload authentic videos that build trust, expand reach, and drive conversions.",
      image: !isMobile ? "/assets/images/invite-only-ugc.webp" : "/assets/images/invite-only-ugc-mobile.webp",
      imageClassName: "h-[402px] 2xl:h-[537px] -mb-6 sm:mb-0",
    },
    {
      topLabel: "Fastest Streaming",
      title: "Deliver blazing-fast streaming",
      description: "Deliver instant-load video experiences with built-in fail-safes that keep your site or app running at top speed.",
      image: "/assets/images/fast-streaming.webp",
      imageClassName: "h-[402px] 2xl:h-[537px] -mb-20 sm:mb-0",
    },
    {
      topLabel: "Analytics",
      title: "Track what truly works",
      description: "Measure performance across every video and entry point to know exactly what drives engagement and sales.",
      image: "/assets/images/analytics.webp",
      imageClassName: "h-[310px] sm:h-[402px] 2xl:h-[537px] pb-5",
    },
    {
      topLabel: "Mobile First",
      title: "Own the mobile experience",
      description: "Give shoppers a smooth, fullscreen video experience built for easy scrolling and on-the-go discovery.",
      image: "/assets/images/mobile-first.webp",
      imageClassName: "h-[272px] sm:h-[402px] 2xl:h-[537px] pb-5",
    },
  ];
  return (
    <section className="container scroll-mt-20 md:scroll-mt-28 2xl:scroll-mt-40" id="features">
      <SectionHeader
        title={<>Everything you need to grow with <br className="hidden lg:block" /> short-form video engagement</>}
        topLabel="Features"
      />

      <div className='flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-6 2xl:gap-8 w-full'>
        <GradientBg className='py-[30px] 2xl:py-10 md:col-span-2 overflow-hidden'>
          <CardHeader
            animate={false}
            topLabel="Shoppable Overlays"
            title={<>Make your videos <br className="block md:hidden" /> shoppable</>}
            description={<>Turn attention into action with <br className="block md:hidden" /> shoppable CTAs that capture attention <br className="block md:hidden" /> and drive purchases directly from videos.</>}
          />
          <div className='w-full h-full pt-[38px] md:pt-[21px] 2xl:pt-[30px] pb-11 md:pb-6 2xl:pb-8 flex justify-center items-start'>
            <Image
              src="/assets/images/make-your-videos-shoppable.webp"
              alt="Make your videos shoppable"
              width={1419}
              height={631}
              className="min-w-fit md:min-w-auto w-auto md:w-full h-[373px] md:h-auto md:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[90%] 3xl:max-w-[1419px] mx-auto object-contain object-top"
            />
          </div>
        </GradientBg>

        {
          features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))
        }

        <GradientBg className='py-10 w-full md:col-span-2'>
          <CardHeader
            animate={false}
            className='px-4'
            topLabel="Infinite Scroll"
            title={<>Create playlists & infinite <br className='hidden lg:block' /> scrolling feeds</>}
            description={
              <>
                Use AI to create personalized video feeds or design the exact <br className='hidden lg:block' /> viewing journeys you want customers to experience.
              </>
            }
          />
          <div className='w-full h-full pt-[54px] md:pt-[58px] 2xl:pt-[80px] pb-[80px] 2xl:pb-[104px]'>
            <InfiniteScroll />
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
            topLabel="Horizon Console"
            title={<>The control center <br className='md:hidden' /> for short-form <br className='md:hidden' /> engagement</>}
            description="Manage everything from one powerful, no-code dashboard."
          />
          <HorizonConsole />
        </GradientBg>

      </div>
    </section>
  );
};

const FeatureCard = ({ feature }: { feature: FeatureType }) => {
  return (
    <Card className='w-full gap-0 md:gap-0 2xl:gap-0 pb-0 px-4 md:px-8 2xl:px-10 sm:pb-[53px] 2xl:pb-[71px] overflow-hidden'>
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

export default EverythingYouNeedSection;