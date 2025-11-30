'use client';

import ConnectSection from "@/components/common/ConnectSection";
import NewArrivalsSvg from "@/components/svg/NewArrivalsSvg";
import NextBestBuySvg from "@/components/svg/NextBestBuySvg";
import SeeItInActionSvg from "@/components/svg/SeeItInActionSvg";
import TrendingSvg from "@/components/svg/TrendingSvg";
import UgcSvg from "@/components/svg/UgcSvg";
import UserReviewSvg from "@/components/svg/UserReviewSvg";
import WebsiteExplainerSvg from "@/components/svg/WebsiteExplainerSvg";
import WebsiteHeroSvg from "@/components/svg/WebsiteHeroSvg";
import { Text } from "@/components/ui/text";
import { motion } from "motion/react";
import DemoCard from "./components/DemoCard";

const DemoPage = () => {

  const demoCards = [
    {
      title: "New Arrivals",
      description: <>
        Show your freshest products in a swipeable <br /> feed so visitors always see what&apos;s new first.
      </>,
      SvgComponent: NewArrivalsSvg,
      link: "#",
      buttonText: "View demo",
    },
    {
      title: "Trending",
      description: <>
        Surface what&apos;s hot right now so shoppers <br /> follow social proof and move faster.
      </>,
      SvgComponent: TrendingSvg,
      link: "#",
      buttonText: "View demo",
    },
    {
      title: "See It in Action",
      description: <>
        Show the product in real use cases so <br /> customers can visualize ownership.
      </>,
      SvgComponent: SeeItInActionSvg,
      link: "#",
      buttonText: "View demo",
    },
    {
      title: "User Review",
      description: <>
        Turn real customer videos into a proof wall <br /> so visitors trust you more and hesitate less.
      </>,
      SvgComponent: UserReviewSvg,
      link: "#",
      buttonText: "View demo",
    },
    {
      title: "Next Best Buy",
      description: <>
        Recommend the next logical product so <br /> you quietly increase AOV.
      </>,
      SvgComponent: NextBestBuySvg,
      link: "#",
      buttonText: "View demo",
    },
    {
      title: "UGC",
      description: <>
        Highlight content from your customers and <br /> fans so your brand feels alive.
      </>,
      SvgComponent: UgcSvg,
      link: "#",
      buttonText: "View demo",
    },
    {
      title: "Website Hero",
      description: <>
        Hook visitors with bold, snackable clips that <br /> instantly show why your product matters.
      </>,
      SvgComponent: WebsiteHeroSvg,
      link: "#",
      buttonText: "View demo",
    },
    {
      title: "Website Explainer",
      description: <>
        Walk visitors through how it works in quick, <br /> swipeable steps so they &quot;get it&quot; in seconds.
      </>,
      SvgComponent: WebsiteExplainerSvg,
      link: "#",
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
            Experience Horizon in action.
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
        description="Contact us and we’ll put together a custom demo for your brand."
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