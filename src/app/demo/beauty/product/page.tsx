'use client';

import FiveStarIcon from '@/components/icons/five-star-icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import useWindowSize from '@/hooks/useWindowSize';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { useMemo } from 'react';

interface AccordionItem {
  value: string;
  title: string;
  content: string;
}


const accordionItems = [
  {
    value: 'productInfo',
    title: 'Product Information',
    content: 'Reveal your radiance with Color Crush Blush! Available in 6 shades, from pink to iridescent coral, it melts into the skin for an instant healthy glow.',
  },
  {
    value: 'customerReviews',
    title: 'Customer Reviews',
    content: 'Available in multiple sizes to fit your wrist perfectly.',
  },
  {
    value: 'composition',
    title: 'Composition',
    content: 'Free shipping on orders over $50. 30-day return policy.',
  },
];

const UserReviewDemoPage = () => {
  const { width } = useWindowSize();
  const isMobile = useMemo(() => !!width && width < 768, [width]);

  return (
    <section className='pt-8 md:pt-[45px] 2xl:pt-[60px] px-0 lg:px-[32px] 2xl:px-[80px]'>
      {/* Product Detail Section */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 2xl:gap-[52px]">
        <div className='w-full lg:w-[65%]'>
          <ProductInformation className="block lg:hidden" />

          <div className="w-full overflow-hidden">
            <Image
              src={isMobile ? "/assets/images/demo/beauty/product-sm.webp" : "/assets/images/demo/beauty/product.webp"}
              alt="Beauty Product"
              width={430}
              height={790}
              className="w-full h-[330px] md:h-[592px] 2xl:h-[790px] object-cover"
            />
          </div>

          <ProductAccordion className="grid lg:hidden pt-[18px]" />

          <ActionButtons className="grid lg:hidden pt-[18px]" />
        </div>

        <div className='hidden lg:block lg:w-[31.64%] xl:w-[490px]'>
          <ProductInformation className="w-full" />
        </div>
      </div>
    </section>
  );
};


const ProductInformation = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full h-full flex-1 px-0 md:px-4 lg:px-0 flex flex-col justify-between", className)}>
      <div>
        {/* New Collection Label */}
        <div className='w-full flex justify-between items-center'>
          <p className="text-base 2xl:text-lg text-[#98A1BC] mb-2 lg:mb-4 xl:mb-5 leading-none">
            New Collection
          </p>
          <div className="flex justify-end lg:hidden">
            <FiveStarIcon />
          </div>
        </div>

        <div className='w-full flex flex-row lg:flex-col items-center lg:items-start justify-between gap-2'>
          <h1 className="text-[32px] 2xl:text-[42px] font-medium text-primary-text mb-3 lg:mb-4">
            4K Blush
          </h1>

          <div className="hidden lg:block mb-3 lg:mb-4">
            <FiveStarIcon />
          </div>

          <p className="text-xl lg:text-2xl 2xl:text-3xl font-semibold text-primary-text pb-2.5 lg:pb-0">
            $19.99
          </p>
        </div>

        <ProductAccordion className="hidden lg:block" />
      </div>

      <ActionButtons className="hidden lg:flex" />
    </div>
  );
};

const ProductAccordion = ({ className }: { className?: string }) => {
  return (
    <div className={cn("mt-[18px] lg:mt-5 2xl:mt-6 mb-5 md:mb-[18px] 2xl:mb-7", className)}>
      <Accordion type="single" collapsible defaultValue="productInfo" className="w-full">
        {accordionItems.map((item) => (
          <AccordionItem key={item.value} value={item.value} className='border-none py-2.5 2xl:py-3.5'>
            <AccordionTrigger iconType="plus" className="text-base lg:text-lg 2xl:text-xl font-medium text-primary-text py-1.5 lg:py-[5px] 2xl:py-[7px] leading-none">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-sm lg:text-base 2xl:text-lg text-primary-text font-normal pt-4 2xl:pt-7 pb-0 2xl:pb-0">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

const ActionButtons = ({ className }: { className?: string }) => {
  return (
    <div className={cn("grid grid-cols-2 lg:flex flex-col gap-2 lg:gap-[14px]", className)}>
      <Button className='w-full text-base lg:text-base 2xl:text-[22px] h-[48px] lg:h-[60px] 2xl:h-[80px]'>
        Add to Bag
      </Button>
      <Button variant="outline" className='border-[#F1F4F7] w-full text-base lg:text-base hover:bg-[#F1F4F7] hover:text-primary 2xl:text-[22px] h-[48px] lg:h-[60px] 2xl:h-[80px]'>
        Favorite
        <Heart className="size-4 lg:size-5 2xl:size-6" />
      </Button>
    </div>
  );
};

export default UserReviewDemoPage;

