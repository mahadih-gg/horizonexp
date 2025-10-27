
import GradientBg from '@/components/common/GradientBg';
import SectionHeader from '@/components/common/SectionHeader';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import HorizonConsole from './HorizonConsole';

const features = [
  {
    topLabel: "Fast Launch",
    title: "Launch short-form in minutes",
    description: "Add a line of code or install a plugin to launch short-form entry points & video feeds anywhere on your site or app.",
    image: "/assets/images/fast-launch.webp",
    imageClassName: "h-[263px] md:h-[402px] 2xl:h-[537px]",
  },
  {
    topLabel: "Social Interactions",
    title: "Engage like never before",
    description: "Boost engagement with likes, shares, and comments (spam protected by AI) to drive conversation, loyalty, and retention.",
    image: "/assets/images/social-interactions.webp",
    imageClassName: "h-[263px] md:h-[402px] 2xl:h-[537px]",
  },
  {
    topLabel: "Sponsored Campaigns",
    title: "Unlock new revenue",
    description: "Monetize with sponsored deals and ads, or promote your product catalog with product and video campaigns.",
    image: "/assets/images/sponsored-campaigns.webp",
    imageClassName: "h-[263px] md:h-[402px] 2xl:h-[537px]",
  },
  {
    topLabel: "Audience Polls",
    title: "Collect customer input with polls",
    description: "Launch bite-size polls to capture intent and feedback, let customers shape your next move.",
    image: "/assets/images/audience-polls.webp",
    imageClassName: "h-[263px] md:h-[402px] 2xl:h-[537px]",
  },
];

const features2 = [
  {
    topLabel: "Invite-only UGC",
    title: "Empower your super fans",
    description: "Invite VIP customers and creators to upload authentic videos that build trust, expand reach, and drive conversions.",
    image: "/assets/images/invite-only-ugc.webp",
    imageClassName: "h-[263px] md:h-[402px] 2xl:h-[537px]",
  },
  {
    topLabel: "Fastest Streaming",
    title: "Deliver blazing-fast streaming",
    description: "Deliver instant-load video experiences with built-in fail-safes that keep your site or app running at top speed.",
    image: "/assets/images/fast-streaming.webp",
    imageClassName: "h-[263px] md:h-[402px] 2xl:h-[537px]",
  },
  {
    topLabel: "Analytics",
    title: "Track what truly works",
    description: "Measure views, clicks, and performance across every video & entry point to know exactly what drives engagement and sales.",
    image: "/assets/images/analytics.webp",
    imageClassName: "h-[263px] md:h-[402px] 2xl:h-[537px]",
  },
  {
    topLabel: "Mobile First",
    title: "Own the mobile experience",
    description: "Give shoppers a smooth, fullscreen video experience built for easy scrolling and on-the-go discovery.",
    image: "/assets/images/mobile-first.webp",
    imageClassName: "h-[263px] md:h-[402px] 2xl:h-[537px]",
  },
];

const EverythingYouNeedSection = () => {
  return (
    <section className="container">
      <SectionHeader
        title={<>Everything you need to grow with <br className="hidden md:block" /> short-form video engagement</>}
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
              className="w-auto md:w-full h-full md:h-auto md:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[90%] 3xl:max-w-[1419px] mx-auto object-contain object-top"
            />
          </div>
        </GradientBg>

        {
          features.map((feature, index) => (
            <Card key={index} className='w-full gap-0 md:gap-0 2xl:gap-0 pb-0 md:pb-[53px] 2xl:pb-[71px] overflow-hidden'>
              <CardHeader
                animate={false}
                topLabel={feature.topLabel}
                title={feature.title}
                description={feature.description}
              />
              <CardContent className='pt-[36px] md:pt-[43px] 2xl:pt-[58px]'>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={1419}
                  height={631}
                  className={cn("mx-auto object-contain object-top -mb-9 md:mb-0", feature.imageClassName)}
                />
              </CardContent>
            </Card>
          ))
        }

        <GradientBg className='py-10 w-full md:col-span-2'>
          <CardHeader
            animate={false}
            className='px-4'
            topLabel="Infinite Scroll"
            title={<>Create playlists & infinite <br className='hidden md:block' /> scrolling feeds</>}
            description={
              <>
                Use AI to create personalized video feeds or design the exact <br className='hidden md:block' /> viewing journeys you want customers to experience.
              </>
            }
          />
          <div className='w-full h-full pt-[54px] md:pt-[58px] 2xl:pt-[80px] pb-[80px] 2xl:pb-[104px]'>
            <Image
              src="/assets/images/infinite-scroll.webp"
              alt="Create playlists and infinite scrolling feeds"
              width={1419}
              height={631}
              className={cn("mx-auto object-contain object-top w-auto md:w-full h-full md:h-auto")}
            />
          </div>
        </GradientBg>

        {
          features2.map((feature, index) => (
            <Card key={index} className='w-full gap-0 md:gap-0 2xl:gap-0 pb-0 md:pb-10 2xl:pb-12 overflow-hidden'>
              <CardHeader
                animate={false}
                topLabel={feature.topLabel}
                title={feature.title}
                description={feature.description}
              />
              <CardContent className='pt-[36px] md:pt-[43px] 2xl:pt-[58px]'>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={1419}
                  height={631}
                  className={cn("mx-auto object-contain object-top -mb-9 md:mb-0", feature.imageClassName)}
                />
              </CardContent>
            </Card>
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

export default EverythingYouNeedSection;