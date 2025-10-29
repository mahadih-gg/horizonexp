import { Marquee } from '@/components/ui/marquee';
import Image from 'next/image';

const InfiniteScroll = () => {

  const marqueeCards = [
    {
      image: "/assets/images/infinity-scroll/card-1.webp",
    },
    {
      image: "/assets/images/infinity-scroll/card-2.webp",
    },
    {
      image: "/assets/images/infinity-scroll/card-3.webp",
    },
    {
      image: "/assets/images/infinity-scroll/card-4.webp",
    },
    {
      image: "/assets/images/infinity-scroll/card-5.webp",
    },
    {
      image: "/assets/images/infinity-scroll/card-6.webp",
    },
    {
      image: "/assets/images/infinity-scroll/card-7.webp",
    },
    {
      image: "/assets/images/infinity-scroll/card-8.webp",
    },
    {
      image: "/assets/images/infinity-scroll/card-9.webp",
    },
    {
      image: "/assets/images/infinity-scroll/card-10.webp",
    },
    {
      image: "/assets/images/infinity-scroll/card-11.webp",
    },
  ];
  return (
    <div>
      <Marquee pauseOnHover>
        {marqueeCards.map((card, index) => (
          <MarqueeCard key={index} index={index} image={card.image} />
        ))}
      </Marquee>
    </div>
  );
};

const MarqueeCard = ({ image, index }: { image: string, index: number }) => {
  return (
    <div>
      <Image
        src={image}
        alt={`Infinite Scroll Card ${index + 1}`}
        width={264}
        height={364}
        className="w-[131px] md:w-[197px] 2xl:w-[264px] aspect-72/100 2xl:aspect-66/91 object-contain object-left"
      />
    </div>
  );
};

export default InfiniteScroll;