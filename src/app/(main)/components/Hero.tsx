"use client";

import GradientBg from "@/components/common/GradientBg";
import { SSRMotion } from "@/components/common/ssr-motion";
import { Button } from "@/components/ui/button";
import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/horizon-web-shorts";
import Link from "next/link";
import ComparisonSection from "./ComparisonSection";

const Hero = () => {
  const text = [
    "solution for websites",
    "solution for stores",
    "solution for apps",
  ]

  const heading = "The best shoppable video".split(" ");
  return (
    <section className="container pt-page">
      <div className="flex-center">
        <SSRMotion
          as="h1"
          key="hero-heading"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-center text-[48px] xxs:text-[54px] 2xl:text-[72px] font-medium leading-none tracking-[-0.04em] w-full sm:w-[540px] md:w-[580px] mlg:w-full mx-auto work"
        >

          Immersive short-form video for{" "}
          <br className="hidden lg:block" />
          your website and apps{" "}
        </SSRMotion>
      </div>

      <div className="py-10 md:py-8 2xl:py-11 max-w-[930.5px] 2xl:max-w-[1218px] mx-auto">
        <EntryPoint
          id="#849221"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.STANDARD}
        />
      </div>

      <SSRMotion
        as="p"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg 2xl:text-2xl text-primary-text text-center pt-6 2xl:pt-8 pb-[30px] 2xl:pb-10 font-medium leading-tight">
        Launch ultra-fast, swipeable shoppable video feeds on your own assets in <br className="hidden md:block" /> minutes - and skyrocket engagement, discovery, and conversion.
      </SSRMotion>

      <div className="pb-[60px] 2xl:pb-20">
        <SSRMotion
          as="div"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          <Button asChild>
            <Link href="https://app.horizonexp.com/signup" target="_blank">
              Start for free
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/contact">
              Get a demo
            </Link>
          </Button>
        </SSRMotion>
        <SSRMotion
          as="p"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-xs 2xl:text-base font-medium text-primary-text pt-[18px] 2xl:pt-6"
        >
          No credit card required to signup
        </SSRMotion>
      </div>

      <SSRMotion
        as="div"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GradientBg className="flex-center relative min-h-[484px] sm:min-h-[700px] lg:min-h-[645px] 2xl:min-h-[860px]">
          <ComparisonSection />
        </GradientBg>
      </SSRMotion>
    </section>
  );
};

export default Hero;