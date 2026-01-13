'use client';

import ConnectSection from "@/components/common/ConnectSection";
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
      title: "Website Hero",
      description: <>
        Hook visitors with bold, snackable clips that <br className="hidden md:block" /> instantly show why your product matters.
      </>,
      imageUrl: "/assets/images/demo/website-hero.webp",
      link: "/demo/website-hero",
      buttonText: "View demo",
    },
    {
      title: "Website Explainer",
      description: <>
        Walk visitors through how it works in quick, <br className="hidden md:block" /> swipeable steps so they &quot;get it&quot; in seconds.
      </>,
      imageUrl: "/assets/images/demo/website-explainer.webp",
      link: "/demo/website-explainer",
      buttonText: "View demo",
    },
    {
      title: "New Arrivals",
      description: <>
        Show your freshest products in a swipeable <br className="hidden md:block" /> feed so visitors always see what&apos;s new first.
      </>,
      imageUrl: "/assets/images/demo/new-arrivals.webp",
      link: "/demo/new-arrivals",
      buttonText: "View demo",
    },
    {
      title: "Trending",
      description: <>
        Surface what&apos;s hot right now so shoppers <br className="hidden md:block" /> follow social proof and move faster.
      </>,
      imageUrl: "/assets/images/demo/trending.webp",
      link: "/demo/trending",
      buttonText: "View demo",
    },
    {
      title: "See It in Action",
      description: <>
        Show the product in real use cases so <br className="hidden md:block" /> customers can visualize ownership.
      </>,
      imageUrl: "/assets/images/demo/see-it-in-action.webp",
      link: "/demo/see-it-in-action",
      buttonText: "View demo",
    },
    {
      title: "User Review",
      description: <>
        Turn real customer videos into a proof wall <br className="hidden md:block" /> so visitors trust you more and hesitate less.
      </>,
      imageUrl: "/assets/images/demo/user-review.webp",
      link: "/demo/user-review",
      buttonText: "View demo",
    },
    {
      title: "Next Best Buy",
      description: <>
        Recommend the next logical product so <br className="hidden md:block" /> you quietly increase AOV.
      </>,
      imageUrl: "/assets/images/demo/next-best-buy.webp",
      link: "/demo/next-best-buy",
      buttonText: "View demo",
    },
    {
      title: "UGC",
      description: <>
        Highlight content from your customers and <br className="hidden md:block" /> fans so your brand feels alive.
      </>,
      imageUrl: "/assets/images/demo/ugc.webp",
      link: "/demo/ugc",
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
            See Horizon in action
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Text variant="section-subheading" className="text-center pt-8 pb-[80px]">
            Explore the most common Horizon use cases teams can launch to drive engagement and conversion.
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
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              link={card.link}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </motion.section>

      <ConnectSection
        title="Start with any layout. Go live in minutes."
        description="Pick a layout. Paste the snippet on your site, app, or store. You’re live."
      />

    </main>
  );
};

export default DemoPage;