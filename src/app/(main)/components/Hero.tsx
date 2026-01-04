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
          className="inline-block text-center text-[48px] xxs:text-[54px] 2xl:text-[72px] font-medium leading-none tracking-[-0.04em] w-full sm:w-[540px] md:w-[580px] mlg:w-full mx-auto"
        >

          {heading.map((word, i) => (
            <span
              key={i + word}
              className="text-primary"
            >
              {word}&nbsp;
            </span>
          ))}
          <br />
          {/* <FlipWords words={text} /> */}
          <span className="text-primary pr-1">
            solution for your website & app
          </span>
        </SSRMotion>
      </div>

      <div className="py-10 md:py-8 2xl:py-11 max-w-[530px] lg:max-w-[678px] 2xl:max-w-[888px] mx-auto">
        <EntryPoint
          id="#626206"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>

      <SSRMotion
        as="p"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg 2xl:text-2xl text-primary-text text-center pt-6 2xl:pt-8 pb-[30px] 2xl:pb-10 font-medium leading-tight">
        Launch swipeable, shoppable video feeds on your site or <br className="hidden md:block" /> app in minutes - convert more visitors into buyers.
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
              Book a demo
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