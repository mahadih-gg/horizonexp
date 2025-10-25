import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { TextRotate } from "@/components/ui/text-rotate";
import Link from "next/link";
import CompareSection from "./CompareSection";

const Hero = () => {

  const text = ["sell on autopilot", "spark real engagement", "keep customers coming back"]

  return (
    <section className="container pt-page">

      <Text variant="heading" className="text-center">
        Use short-form videos to <br />
        <div className="overflow-hidden">
          <TextRotate texts={text} />
        </div>
      </Text>


      <p className="text-lg 2xl:text-2xl text-primary-text text-center pb-7 md:pb-[30px] 2xl:pb-10">
        Bring immersive short-form video experience to your site, store, or app <br className="hidden md:block" /> that supercharges discovery, engagement and sales.
      </p>

      <div className="flex items-center justify-center gap-3 pb-[52px] md:pb-[60px] 2xl:pb-20">
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