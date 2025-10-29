import LogoLoop from '@/components/LogoLoop';

const InfiniteScroll = () => {

  const marqueeCards = [
    {
      image: "/assets/images/infinity-scroll/card-1.webp",
      title: "Card 1",
    },
    {
      image: "/assets/images/infinity-scroll/card-2.webp",
      title: "Card 2",
    },
    {
      image: "/assets/images/infinity-scroll/card-3.webp",
      title: "Card 3",
    },
    {
      image: "/assets/images/infinity-scroll/card-4.webp",
      title: "Card 4",
    },
    {
      image: "/assets/images/infinity-scroll/card-5.webp",
      title: "Card 5",
    },
    {
      image: "/assets/images/infinity-scroll/card-6.webp",
    },
    {
      image: "/assets/images/infinity-scroll/card-7.webp",
      title: "Card 7",
    },
    {
      image: "/assets/images/infinity-scroll/card-8.webp",
      title: "Card 8",
    },
    {
      image: "/assets/images/infinity-scroll/card-9.webp",
      title: "Card 9",
    },
    {
      image: "/assets/images/infinity-scroll/card-10.webp",
      title: "Card 10",
    },
    {
      image: "/assets/images/infinity-scroll/card-11.webp",
      title: "Card 11",
    },
  ];
  return (
    <div>
      <LogoLoop
        logos={marqueeCards.map((card) => ({
          src: card.image,
          alt: card.title,
          title: card.title,
          width: 264,
          height: 364,
        }))}
        pauseOnHover={false}
        slowOnHover={true}
        slowFactor={0.2}
        speed={80}
        direction="left"
        logoHeight={364}
        gap={8}
        responsiveGapClasses="gap-1.5 md:gap-2 2xl:gap-2.5"
        ariaLabel="Infinite Scroll"
        responsiveClassName={{
          item: "w-[131px] md:w-[197px] 2xl:w-[264px]",
          image: "w-full h-auto aspect-72/100 2xl:aspect-66/91 object-contain object-left"
        }}
      />
    </div>
  );
};

export default InfiniteScroll;