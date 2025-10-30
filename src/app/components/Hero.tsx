import GradientBg from "@/components/common/GradientBg";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import ComparisonSection from "./ComparisonSection";

const Hero = () => {

  // const text = [
  //   <span key="sell-autopilot" className="text-inherit">sell on <br className="block sm:hidden" /> autopilot</span>,
  //   <span key="hook-customers" className="text-inherit">hook your customers</span>,
  //   <span key="turn-traffic" className="text-inherit">turn traffic <br className="block sm:hidden" /> into fans</span>
  // ]

  const text = [
    "sell on autopilot",
    "hook your customers",
    "turn traffic into fans"
  ]

  return (
    <section className="container pt-page">

      <Text variant="hero-heading" className="text-center">
        Use short-form videos to <br />
        <span className="inline-block overflow-hidden max-w-[300px] xs:max-w-full mx-auto">
          {/* <TextRotate words={text} /> */}
          <FlipWords words={text} />
        </span>
      </Text>


      <p className="text-lg 2xl:text-2xl text-primary-text text-center pt-4 md:pt-6 2xl:pt-8 pb-7 md:pb-[30px] 2xl:pb-10 font-medium leading-tight">
        Bring immersive short-form video experience to your site, store, <br className="hidden md:block" /> or app that supercharges discovery, engagement and sales.
      </p>

      <div className="flex items-center justify-center gap-3 pb-[52px] md:pb-[60px] 2xl:pb-20">
        <Button asChild>
          <Link href="https://app.horizonexp.com/signup" target="_blank">
            Start for free
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="https://demo.horizonexp.com/" target="_blank">
            Visit demo sites
          </Link>
        </Button>
      </div>

      <GradientBg className="flex-center relative min-h-[484px] sm:min-h-[700px] lg:min-h-[645px] 2xl:min-h-[860px]">
        <ComparisonSection />
      </GradientBg>

    </section>
  );
};

export default Hero;