'use client';

import FiveStarIcon from '@/components/icons/five-star-icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';
import { Heart } from 'lucide-react';

interface AccordionItem {
  value: string;
  title: string;
  content: string;
}


const UserReviewDemoPage = () => {

  const accordionItems = [
    {
      value: 'productInfo',
      title: 'Product Information',
      content: 'The Watch Pro X is built for people who want more than notifications on their wrist — they want a companion that quietly elevates their entire day. Crafted from aerospace-grade aluminum with a bezel-less sapphire display, it feels light, sharp, and impossibly premium.',
    },
    {
      value: 'sizesFits',
      title: 'Sizes & Fits',
      content: 'Available in multiple sizes to fit your wrist perfectly.',
    },
    {
      value: 'shippingReturns',
      title: 'Shipping & Returns',
      content: 'Free shipping on orders over $50. 30-day return policy.',
    },
  ];


  return (
    <section className='pt-8 md:pt-[45px] 2xl:pt-[60px] px-0 lg:px-[32px] 2xl:px-[80px]'>
      {/* Product Detail Section */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 2xl:gap-[52px]">
        <div className='w-full lg:w-[65%]'>
          <div>
            <ProductInformation
              accordionItems={accordionItems.slice(0, 1)}
              className="block lg:hidden"
            />

            <div className="flex gap-2 2xl:gap-3 overflow-hidden">
              {
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="w-[332px] min-w-[332px] lg:w-[374px] lg:min-w-[374px] 2xl:w-[498px] 2xl:min-w-[498px] bg-secondary h-[290px] lg:h-[373px] 2xl:h-[432px]" />
                ))
              }
            </div>

            <ActionButtons className="grid lg:hidden pt-[18px]" />
          </div>

          {/* See it in Action Section */}
          <div className="py-8 lg:py-[45px] 2xl:py-[60px]">
            <h2 className='text-left text-xl 2xl:text-[28px] font-medium pb-4 2xl:pb-5'>User Reviews</h2>

            <EntryPoint
              id="#935370"
              skeletonType={EntryPointType.CIRCLE}
              skeletonSize={EntryPointSize.BOLD}
            />
          </div>
        </div>

        <div className='hidden lg:block lg:w-[31.64%] xl:w-[490px]'>
          <ProductInformation
            accordionItems={accordionItems}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};


const ProductInformation = ({ accordionItems, className }: { accordionItems: AccordionItem[], className?: string }) => {
  return (
    <div className={cn("w-full flex-1 px-4 lg:px-0", className)}>
      {/* New Collection Label */}
      <div className='w-full flex justify-between items-center'>
        <p className="text-base 2xl:text-lg text-[#98A1BC] mb-2 lg:mb-4 xl:mb-5">
          New Collection
        </p>
        <div className="flex justify-end lg:hidden">
          <FiveStarIcon />
        </div>
      </div>

      <div className='w-full flex flex-row lg:flex-col items-center lg:items-start justify-between gap-2'>
        <h1 className="text-[32px] 2xl:text-[42px] font-medium text-primary-text mb-3 lg:mb-4">
          Watch Pro X
        </h1>

        <div className="hidden lg:block mb-3 lg:mb-4">
          <FiveStarIcon />
        </div>

        <p className="text-xl lg:text-2xl 2xl:text-3xl font-semibold text-primary-text pb-2.5 lg:pb-0">
          $75
        </p>
      </div>
      {/* Collapsible Sections */}
      <div className="mt-[18px] lg:mt-5 2xl:mt-6 mb-5 2xl:mb-7">
        <Accordion type="single" collapsible defaultValue="productInfo" className="w-full">
          {accordionItems.map((item) => (
            <AccordionItem key={item.value} value={item.value} className='border-none py-2.5 2xl:py-3.5'>
              <AccordionTrigger iconType="plus" className="text-base lg:text-lg 2xl:text-xl font-medium text-primary-text py-1.5 lg:py-1.5 2xl:py-[7px]">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm lg:text-base 2xl:text-lg text-primary-text font-normal pt-5 2xl:pt-7 pb-0 2xl:pb-0">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <ActionButtons className="hidden lg:flex" />
    </div>
  );
};

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

