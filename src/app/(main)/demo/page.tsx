'use client';

import ConnectSection from "@/components/common/ConnectSection";
import { Text } from "@/components/ui/text";
import useWindowSize from "@/hooks/useWindowSize";
import { motion } from "motion/react";
import { useMemo } from "react";
import DemoCard from "./components/DemoCard";

const DemoPage = () => {

  const { width } = useWindowSize();

  const isMobile = useMemo(() => !!width && width < 768, [width]);

  const demoCards = [
    {
      title: "Website Hero",
      description: <>
        Hook visitors with bite sized clips that clearly <br className="hidden md:block" /> says why your product and brand matters.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/website-hero-sm.webp" : "/assets/images/demo/website-hero.webp",
      link: "/demo/website-hero",
      buttonText: "View demo",
    },
    {
      title: "Website Explainer",
      description: <>
        Walk visitors through how it works with bite- <br className="hidden md:block" /> sized clips so they “get it” within seconds.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/website-explainer-sm.webp" : "/assets/images/demo/website-explainer.webp",
      link: "/demo/website-explainer",
      buttonText: "View demo",
    },
    {
      title: "New Arrivals",
      description: <>
        Show your newest products in a shoppable <br className="hidden md:block" /> video carousel.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/new-arrivals-sm.webp" : "/assets/images/demo/new-arrivals.webp",
      link: "/demo/new-arrivals",
      buttonText: "View demo",
    },
    {
      title: "Trending",
      description: <>
        Surface relevant content so customers can <br className="hidden md:block" /> follow along and make decisions faster.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/trending-sm.webp" : "/assets/images/demo/trending.webp",
      link: "/demo/trending",
      buttonText: "View demo",
    },
    {
      title: "See-it-in-Action",
      description: <>
        Show real use cases of products so <br className="hidden md:block" /> customers can visualize ownership.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/see-it-in-action-sm.webp" : "/assets/images/demo/see-it-in-action.webp",
      link: "/demo/see-it-in-action",
      buttonText: "View demo",
    },
    {
      title: "User Review",
      description: <>
        Turn customer feedback into a wall of proof <br className="hidden md:block" /> so prospects know they can trust your brand.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/user-review-sm.webp" : "/assets/images/demo/user-review.webp",
      link: "/demo/user-review",
      buttonText: "View demo",
    },
    {
      title: "Next Best Buy",
      description: <>
        After a purchase, recommend more <br className="hidden md:block" /> products with video to increase AOV.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/next-best-buy-sm.webp" : "/assets/images/demo/next-best-buy.webp",
      link: "/demo/next-best-buy",
      buttonText: "View demo",
    },
    {
      title: "UGC",
      description: <>
        Spotlight reviews & videos from your <br className="hidden md:block" />  customers and top fans to improve relatability.
      </>,
      imageUrl: isMobile ? "/assets/images/demo/ugc-sm.webp" : "/assets/images/demo/ugc.webp",
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