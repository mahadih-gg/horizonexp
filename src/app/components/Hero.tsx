import { Button } from "@/components/ui/button";
import Link from "next/link";
import CompareSection from "./CompareSection";

const Hero = () => {
  return (
    <section className="container pt-[100px]">

      <h1 className="text-5xl md:text-6xl 2xl:text-8xl font-medium tracking-tight text-primary-text text-center">
        Use short-form videos to <br />
        <span className="text-grad-tertiary">sell on autopilot</span>
      </h1>

      <p className="text-lg 2xl:text-2xl text-primary-text text-center pt-8 pb-10">
        Bring immersive short-form video experience to your site, store, or app <br className="hidden md:block" /> that supercharges discovery, engagement and sales.
      </p>

      <div className="flex items-center justify-center gap-3 pb-20">
        <Button asChild>
          <Link href="/signup">
            Start for free
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/demo">
            Visit demo site
          </Link>
        </Button>
      </div>

      <CompareSection />

    </section>
  );
};

export default Hero;