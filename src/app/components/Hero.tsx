"use client";

import GradientBg from "@/components/common/GradientBg";
import { Button } from "@/components/ui/button";
import { TextRotate } from "@/components/ui/text-rotate";
import { motion } from "motion/react";
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
      <motion.h1
        key="hero-heading"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-[56px] md:text-[72px] 2xl:text-[96px] font-medium leading-none text-primary-text tracking-[-0.04em]"
      >
        Use short-form videos to <br />
        <span className="inline-block overflow-hidden max-w-[300px] xs:max-w-full mx-auto">
          <TextRotate words={text} />
          {/* <FlipWords words={text} /> */}
        </span>
      </motion.h1>


      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg 2xl:text-2xl text-primary-text text-center pt-4 md:pt-6 2xl:pt-8 pb-7 md:pb-[30px] 2xl:pb-10 font-medium leading-tight">
        Skyrocket customer engagement, conversion, and retention with <br className="hidden md:block" /> ultra-fast, shoppable short-form video experience
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center justify-center gap-3 pb-[52px] md:pb-[60px] 2xl:pb-20"
      >
        <Button asChild>
          <Link href="https://app.horizonexp.com/signup" target="_blank">
            Start for free
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/demo">
            Visit demo sites
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GradientBg className="flex-center relative min-h-[484px] sm:min-h-[700px] lg:min-h-[645px] 2xl:min-h-[860px]">
          <ComparisonSection />
        </GradientBg>
      </motion.div>
    </section>
  );
};

export default Hero;