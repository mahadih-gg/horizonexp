import GradientBg from "@/components/common/GradientBg";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { TextRotate } from "@/components/ui/text-rotate";
import Link from "next/link";
import ComparisonSection from "./ComparisonSection";

const Hero = () => {

  const text = [
    <span key="sell-autopilot" className="text-inherit">sell on <br className="block sm:hidden" /> autopilot</span>,
    <span key="hook-customers" className="text-inherit">hook your customers</span>,
    <span key="turn-traffic" className="text-inherit">turn traffic <br className="block sm:hidden" /> into fans</span>
  ]

  return (
    <section className="container pt-page">

      <Text variant="heading" className="text-center">
        Use short-form videos to <br />
        <div className="overflow-hidden">
          <TextRotate texts={text} />
        </div>
      </Text>


      <p className="text-lg 2xl:text-2xl text-primary-text text-center pb-7 md:pb-[30px] 2xl:pb-10 font-medium leading-tight">
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
            Visit demo site
          </Link>
        </Button>
      </div>

      <GradientBg className="flex-center relative">
        <ComparisonSection />
      </GradientBg>

    </section>
  );
};

export default Hero;