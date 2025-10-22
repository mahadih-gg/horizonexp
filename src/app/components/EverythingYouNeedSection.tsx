
import GradientBg from '@/components/common/GradientBg';
import SectionHeader from '@/components/common/SectionHeader';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const features = [
  {
    topLabel: "Fast Launch",
    title: "Launch short-form in minutes",
    description: "Add a line of code or install a plugin to launch short-form entry points & video feeds anywhere on your site or app.",
  },
  {
    topLabel: "Social Interactions",
    title: "Engage like never before",
    description: "Boost engagement with likes, shares, and comments (spam protected by AI) to drive conversation, loyalty, and retention.",
  },
  {
    topLabel: "Sponsored Campaigns",
    title: "Unlock new revenue",
    description: "Monetize with sponsored deals and ads, or promote your product catalog with product and video campaigns.",
  },
  {
    topLabel: "Audience Polls",
    title: "Collect customer input with polls",
    description: "Launch bite-size polls to capture intent and feedback, let customers shape your next move.",
  },
];

const features2 = [
  {
    topLabel: "Invite-only UGC",
    title: "Empower your super fans",
    description: "Invite VIP customers and creators to upload authentic videos that build trust, expand reach, and drive conversions.",
  },
  {
    topLabel: "Fastest Streaming",
    title: "Deliver blazing-fast streaming",
    description: "Deliver instant-load video experiences with built-in fail-safes that keep your site or app running at top speed.",
  },
  {
    topLabel: "Analytics",
    title: "Track what truly works",
    description: "Measure views, clicks, and performance across every video & entry point to know exactly what drives engagement and sales.",
  },
  {
    topLabel: "Mobile First",
    title: "Own the mobile experience",
    description: "Give shoppers a smooth, fullscreen video experience built for easy scrolling and on-the-go discovery.",
  },
];

const EverythingYouNeedSection = () => {
  return (
    <section className="container">
      <SectionHeader
        title={<>Everything you need to grow with <br /> short-form video engagement</>}
        topLabel="Features"
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <GradientBg className='p-10 col-span-2'>
          <CardHeader
            topLabel="Shoppable Overlays"
            title="Make your videos shoppable"
            description="Turn attention into action with shoppable CTAs that capture attention and drive purchases directly from videos."
          />
        </GradientBg>

        {
          features.map((feature, index) => (
            <Card key={index}>
              <CardHeader
                topLabel={feature.topLabel}
                title={feature.title}
                description={feature.description}
              />
              <CardContent className='pt-[58px]'>
                <div className='w-full aspect-video rounded-2xl bg-muted' />
              </CardContent>
            </Card>
          ))
        }

        <GradientBg className='p-10 col-span-2'>
          <CardHeader
            topLabel="Infinite Scroll"
            title={<>Create playlists & infinite <br /> scrolling feeds</>}
            description={
              <>
                Use AI to create personalized video feeds or design the exact <br /> viewing journeys you want customers to experience.
              </>
            }
          />
        </GradientBg>

        {
          features2.map((feature, index) => (
            <Card key={index}>
              <CardHeader
                topLabel={feature.topLabel}
                title={feature.title}
                description={feature.description}
              />
              <CardContent className='pt-[58px]'>
                <div className='w-full aspect-video rounded-2xl bg-muted' />
              </CardContent>
            </Card>
          ))
        }

        <GradientBg className='p-10 col-span-2'>
          <CardHeader
            topLabel="Horizon Console"
            title={<>The control center for short-form engagement</>}
            description={
              <>
                Manage everything from one powerful, no-code dashboard.
              </>
            }
          />
        </GradientBg>

      </div>
    </section>
  );
};

export default EverythingYouNeedSection;