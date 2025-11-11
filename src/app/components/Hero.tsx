"use client";

import GradientBg from "@/components/common/GradientBg";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "motion/react";
import Link from "next/link";
import ComparisonSection from "./ComparisonSection";

const Hero = () => {

  // const text = [
  //   <span key="sell-autopilot" className="text-inherit">sell on <br className="block sm:hidden" /> autopilot</span>,
  //   <span key="hook-customers" className="text-inherit">hook your customers</span>,
  //   <span key="turn-traffic" className="text-inherit">turn traffic <br className="block sm:hidden" /> into fans</span>
  // ]

  // const text = [
  //   "sell on autopilot",
  //   "hook your customers",
  //   "turn traffic into fans"
  // ]

  const text = [
    "solution for websites",
    "solution for stores",
    "solution for apps",
  ]

  const heading = "The best short-form video".split(" ");
  return (
    <section className="container pt-[68px] md:pt-[90px] 2xl:pt-[120px]">
      <div className="flex-center">
        <motion.h1
          key="hero-heading"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-center text-[64px] xxs:text-[72px] 2xl:text-[96px] font-medium leading-none tracking-[-0.04em] w-full sm:w-[540px] md:w-[580px] mlg:w-full mx-auto"
        >

          {heading.map((word, i) => (
            <span
              key={i + word}
              className="text-black-gradient"
            >
              {word}&nbsp;
            </span>
          ))}
          <br />
          {/* <br className="hidden xxs:block mlg:hidden" /> */}
          {/* <TextRotate words={text} className="inline-block overflow-hidden w-52 xxs:w-[260px] 2xl:w-[350px] text-left xxs:text-center mlg:text-left -mb-2.5" /> */}
          {/* <TextRotate words={text} /> */}
          <FlipWords words={text} />
        </motion.h1>
      </div>


      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg 2xl:text-2xl text-primary-text text-center pt-6 2xl:pt-8 pb-[30px] 2xl:pb-10 font-medium leading-tight">
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