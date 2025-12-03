'use client';

import ConnectSection from "@/components/common/ConnectSection";
import NewArrivalsSvg from "@/components/svg/NewArrivalsSvg";
import NewArrivalsSvgSm from "@/components/svg/NewArrivalsSvgSm";
import NextBestBuySvg from "@/components/svg/NextBestBuySvg";
import NextBestBuySvgSm from "@/components/svg/NextBestBuySvgSm";
import SeeItInActionSvg from "@/components/svg/SeeItInActionSvg";
import SeeItInActionSvgSm from "@/components/svg/SeeItInActionSvgSm";
import TrendingSvg from "@/components/svg/TrendingSvg";
import TrendingSvgSm from "@/components/svg/TrendingSvgSm";
import UgcSvg from "@/components/svg/UgcSvg";
import UgcSvgSm from "@/components/svg/UgcSvgSm";
import UserReviewSvg from "@/components/svg/UserReviewSvg";
import UserReviewSvgSm from "@/components/svg/UserReviewSvgSm";
import WebsiteExplainerSvg from "@/components/svg/WebsiteExplainerSvg";
import WebsiteExplainerSvgSm from "@/components/svg/WebsiteExplainerSvgSm";
import WebsiteHeroSvg from "@/components/svg/WebsiteHeroSvg";
import WebsiteHeroSvgSm from "@/components/svg/WebsiteHeroSvgSm";
import { Text } from "@/components/ui/text";
import useWindowSize from "@/hooks/useWindowSize";
import { motion } from "motion/react";
import { useMemo } from "react";
import DemoCard from "./components/DemoCard";

const DemoPage = () => {

  const { width } = useWindowSize();

  const isMobile = useMemo(() => width < 480, [width]);

  const demoCards = [
    {
      title: "New Arrivals",
      description: <>
        Show your freshest products in a swipeable <br className="hidden md:block" /> feed so visitors always see what&apos;s new first.
      </>,
      SvgComponent: isMobile ? NewArrivalsSvgSm : NewArrivalsSvg,
      link: "/demo/new-arrivals",
      buttonText: "View demo",
    },
    {
      title: "Trending",
      description: <>
        Surface what&apos;s hot right now so shoppers <br className="hidden md:block" /> follow social proof and move faster.
      </>,
      SvgComponent: isMobile ? TrendingSvgSm : TrendingSvg,
      link: "/demo/trending",
      buttonText: "View demo",
    },
    {
      title: "See It in Action",
      description: <>
        Show the product in real use cases so <br className="hidden md:block" /> customers can visualize ownership.
      </>,
      SvgComponent: isMobile ? SeeItInActionSvgSm : SeeItInActionSvg,
      link: "/demo/see-it-in-action",
      buttonText: "View demo",
    },
    {
      title: "User Review",
      description: <>
        Turn real customer videos into a proof wall <br className="hidden md:block" /> so visitors trust you more and hesitate less.
      </>,
      SvgComponent: isMobile ? UserReviewSvgSm : UserReviewSvg,
      link: "/demo/user-review",
      buttonText: "View demo",
    },
    {
      title: "Next Best Buy",
      description: <>
        Recommend the next logical product so <br className="hidden md:block" /> you quietly increase AOV.
      </>,
      SvgComponent: isMobile ? NextBestBuySvgSm : NextBestBuySvg,
      link: "/demo/next-best-buy",
      buttonText: "View demo",
    },
    {
      title: "UGC",
      description: <>
        Highlight content from your customers and <br className="hidden md:block" /> fans so your brand feels alive.
      </>,
      SvgComponent: isMobile ? UgcSvgSm : UgcSvg,
      link: "/demo/ugc",
      buttonText: "View demo",
    },
    {
      title: "Website Hero",
      description: <>
        Hook visitors with bold, snackable clips that <br className="hidden md:block" /> instantly show why your product matters.
      </>,
      SvgComponent: isMobile ? WebsiteHeroSvgSm : WebsiteHeroSvg,
      link: "/demo/website-hero",
      buttonText: "View demo",
    },
    {
      title: "Website Explainer",
      description: <>
        Walk visitors through how it works in quick, <br className="hidden md:block" /> swipeable steps so they &quot;get it&quot; in seconds.
      </>,
      SvgComponent: isMobile ? WebsiteExplainerSvgSm : WebsiteExplainerSvg,
      link: "/demo/website-explainer",
      buttonText: "View demo",
    },
  ];

  return (
    <main className="pt-page">
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text variant="heading" className="text-center">
            Experience Horizon in action
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Text variant="section-subheading" className="text-center pt-8 pb-[80px]">
            Click into demos for each use case and see how Horizon upgrades
            <br className="hidden md:block" />
            your site with conversion-ready video feeds.
          </Text>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-6 2xl:gap-8">
          {demoCards.map((card, i) => (
            <DemoCard
              key={card.title}
              SvgComponent={card.SvgComponent}
              title={card.title}
              description={card.description}
              link={card.link}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </motion.section>

      <ConnectSection
        title="Don’t see the use case you need?"
        description={<>Contact us and we’ll put together a <br /> custom demo for your brand.</>}
        cta={{
          primary: {
            label: "Start for free",
            href: "https://app.horizonexp.com/signup",
            target: "_blank",
            variant: "default",
          },
          secondary: {
            label: "Contact us",
            href: "/contact",
            variant: "secondary",
          },
        }}
      />

    </main>
  );
};

export default DemoPage;