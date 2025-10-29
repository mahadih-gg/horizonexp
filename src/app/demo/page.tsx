import ConnectSection from "@/components/common/ConnectSection";
import { Text } from "@/components/ui/text";
import DemoCard from "./components/DemoCard";

const demoCards = [
  {
    topLabel: "E-commerce",
    title: "Convert browsers into buyers",
    description: <>
      Showcase products in an interactive, Insta-style feed that turns browsing into buying.
      <br />
      <br />
      With shoppable overlays, personalized recommendations, and seamless checkout integrations, Horizon helps you capture attention, increase session time, and convert views into sales.
    </>,
    imageUrl: "/assets/images/demo-ecom.webp",
    link: "#",
    buttonText: "View E-commerce demo",
  },
  {
    topLabel: "Telecom",
    title: "Engage every subscriber",
    description: <>
      Reimagine customer engagement with short-form journeys.
      <br />
      <br />
      From personalized data packs to loyalty campaigns and product education, Horizon makes it easy to engage subscribers in a format they love -driving upsells, retention, and greater customer value.
    </>,
    imageUrl: "/assets/images/demo-telco.webp",
    link: "#",
    buttonText: "View telco demo",
  },
  {
    topLabel: "Sports",
    title: "Turn fans into superfans",
    description: <>
      Turn fans into superfans with short-form. Share highlights, exclusive behind-the-scenes clips, merch drops, and interactive polls - all in one feed.
      <br />
      <br />
      Horizon keeps audiences engaged before, during, and after the game, unlocking new revenue and deeper fan loyalty.
    </>,
    imageUrl: "/assets/images/demo-sports.webp",
    link: "#",
    buttonText: "View sports demo",
  },
];

const DemoPage = () => {
  return (
    <main className="pt-page">
      <section className="container">
        <Text variant="heading" className="text-center">
          Experience Horizon in action
        </Text>
        <Text variant="section-subheading" className="text-center pt-8 pb-[80px]">
          Short-form built for every industry, every audience. See how Horizon&apos;s short-
          <br className="hidden md:block" />
          form engine can transform engagement
          <br className="block md:hidden" />
          across industries.
        </Text>
      </section>

      <section className="container">
        <div className="grid gap-10 md:gap-[75px] 2xl:gap-[100px]">
          {demoCards.map((card, i) => (
            <DemoCard
              key={card.title}
              topLabel={card.topLabel}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              link={card.link}
              buttonText={card.buttonText}
              align={i % 2 !== 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </section>

      <ConnectSection
        title="Don’t see your industry demo?"
        description="Request a custom plan through our contact form, we’ll be happy to tailor one just for you."
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