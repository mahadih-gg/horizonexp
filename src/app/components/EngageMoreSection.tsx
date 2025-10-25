import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";

const EngageMoreSection = () => {

  const items = [
    {
      title: "70% of shoppers prefer video over static images.",
      image: "/assets/images/engage-more-1.webp",
    },
    {
      title: "Short-form feeds drive 50% higher click-throughs than banners.",
      image: "/assets/images/engage-more-2.webp",
    },
    {
      title: "Session times double with short-form video browsing.",
      image: "/assets/images/engage-more-3.webp",
    },
    {
      title: "Purchase likelihood is 80% higher after watching product videos.",
      image: "/assets/images/engage-more-4.webp",
    },
  ]

  return (
    <section className="container py-section">

      <SectionHeader
        title={<>Power your mobile and web with native <br /> short-form video experiences</>}
        description={<>Meet Horizon - the plug-and-play short-form video <br /> engagement platform that turns attention into revenue.</>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-7 2xl:gap-[36px]">
        {
          items.map((item, i) => (
            <div key={i} className="relative w-full aspect-square rounded-3xl md:rounded-2xl 2xl:rounded-3xl bg-secondary overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={286}
                height={286}
                className="w-full h-full object-cover"
              />
              <p className="w-full p-5 text-center absolute top-1/2 left-1/2 -translate-x-1/2! -translate-y-1/2! text-white text-base 2xl:text-xl font-semibold z-10">
                {item.title}
              </p>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default EngageMoreSection;