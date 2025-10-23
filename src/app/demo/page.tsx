import ConnectSection from "@/components/common/ConnectSection";
import { Text } from "@/components/ui/text";
import DemoCard from "./DemoCard";

const demoCards = [
  {
    title: "E-commerce",
    description: "Showcase products in an interactive, Insta-style feed that turns browsing into buying. With shoppable overlays, personalized recommendations, and seamless checkout integrations, Horizon helps you capture attention, increase session time, and convert views into sales.",
    imageUrl: "https://via.placeholder.com/150",
    link: "#",
    buttonText: "View E-commerce demo",
  },
  {
    title: "Telecommunications",
    description: "Reimagine customer engagement with short-form journeys. From personalized data pack offers to loyalty campaigns and product education, Horizon makes it easy to connect with subscribers in a format they already love. Drive upsells, improve retention, and deliver more value per customer.",
    imageUrl: "https://via.placeholder.com/150",
    link: "#",
    buttonText: "View telco demo",
  },
  {
    title: "Sports",
    description: "Turn fans into superfans with short-form. Share highlights, exclusive behind-the-scenes clips, merch drops, and interactive polls - all in one feed. Horizon keeps audiences engaged before, during, and after the game, unlocking new revenue and deeper fan loyalty.",
    imageUrl: "https://via.placeholder.com/150",
    link: "#",
    buttonText: "View sports demo",
  },
];

const DemoPage = () => {
  return (
    <main>
      <section className="container pt-[100px]">
        <Text variant="heading" className="text-center">
          Experience Horizon in action
        </Text>
        <Text variant="section-subheading" className="text-center pt-8 pb-[80px]">
          Short-form built for every industry, every audience. See how Horizon&apos;s short-
          <br className="hidden md:block" />
          form engine can transform engagement across industries.
        </Text>
      </section>

      <section className="container">
        <div className="grid gap-[100px]">
          {demoCards.map((card, i) => (
            <DemoCard
              key={card.title}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              link={card.link}
              buttonText={card.buttonText}
              align={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </section>

      <ConnectSection
        title="Don’t see your industry demo?"
        description="Request a custom plan through our contact form, we’ll be happy to tailor one just for you."
      />

    </main>
  );
};

export default DemoPage;