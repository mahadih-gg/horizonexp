import GradientBg from "@/components/common/GradientBg";
import { SSRMotion } from "@/components/common/ssr-motion";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import ComparisonSection from "./ComparisonSection";

const Hero = () => {
  const text = [
    "solution for websites",
    "solution for stores",
    "solution for apps",
  ]

  const heading = "The best short-form video".split(" ");
  return (
    <section className="container pt-[62px] md:pt-[90px] 2xl:pt-[120px]">
      <div className="flex-center">
        <SSRMotion
          as="h1"
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
          <FlipWords words={text} />
        </SSRMotion>
      </div>


      <SSRMotion
        as="p"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg 2xl:text-2xl text-primary-text text-center pt-6 2xl:pt-8 pb-[30px] 2xl:pb-10 font-medium leading-tight">
        Skyrocket customer engagement, conversion, and retention with <br className="hidden md:block" /> ultra-fast, shoppable short-form video experience
      </SSRMotion>

      <SSRMotion
        as="div"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center justify-center gap-3 pb-[60px] 2xl:pb-20"
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
      </SSRMotion>

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