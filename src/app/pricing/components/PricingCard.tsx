import GradCheckIcon from '@/components/icons/grad-check-icon';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

export interface PricingPlan {
  productId?: string;
  name: string;
  price: number;
  priceUnit: string;
  label?: string;
  viewsIncluded: string;
  videosInLibrary: {
    count: string;
    duration: string;
  };
  websitesStores: string;
  description: string;
  buttonText: string;
  footerText?: string;
  features: string[];
  isHighlighted?: boolean;
  hasButtonGradient?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className='w-full h-full flex-center'>
      <div className={`
      relative rounded-3xl overflow-hidden
      ${plan.isHighlighted ? 'bg-grad-border-main p-1' : ''}
    `}>

        <div className={cn('bg-secondary px-4 2xl:px-5 py-4 md:py-5 2xl:py-7 flex flex-col rounded-3xl', plan.isHighlighted && 'pb-10 xl:pb-[55px] 2xl:pb-[74px]')}>
          <div className='flex justify-between items-center w-full mb-6 2xl:mb-8'>
            {/* Plan Name */}
            <h3 className="text-[28px] md:text-lg 2xl:text-2xl text-black-gradient font-medium tracking-tight leading-none">{plan.name}</h3>

            {/* Label */}
            <div className={cn(
              "opacity-0 h-[36px] md:h-[31px] 2xl:h-[42px] rounded-full overflow-hidden flex-center",
              plan.label && 'opacity-100',
              plan.isHighlighted && 'bg-grad-border'
            )}>
              <span className={cn(
                "inline-flex items-center justify-center h-full bg-white text-sm md:text-xs 2xl:text-base font-semibold px-3.5 md:px-3.5 2xl:px-[18px] rounded-full",
                plan.isHighlighted && 'w-full h-[calc(100%-1.5px)]'
              )}>
                {plan.label ?? 'Free'}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6 2xl:mb-8 flex items-end justify-start">
            <h2 className="text-[36px] md:text-[30px] 2xl:text-[40px] font-medium leading-none text-black-gradient tracking-[-0.04em] pb-1.5 2xl:pb-2">
              ${plan.price}
            </h2>

            <span className="inline-block text-lg md:text-base 2xl:text-xl text-primary-text font-medium ml-1.5 2xl:ml-2">{plan.priceUnit}</span>
          </div>

          {/* Inclusions */}
          <div className="mb-6 2xl:mb-8 space-y-3.5 md:space-y-1.5 2xl:space-y-2">
            <Text variant="body" className='font-medium'>
              <span className="font-semibold">{plan.viewsIncluded}</span> views included
            </Text>
            <Text variant="body" className='font-medium'>
              <span className="font-semibold">{plan.videosInLibrary.count + " "}</span>
              videos in library ({plan.videosInLibrary.duration} each)
            </Text>
            <Text variant="body" className='font-medium'>
              <span className="font-semibold">{plan.websitesStores}</span> website/store
            </Text>
          </div>

          {/* Description */}
          <Text variant="body" className="mb-6 2xl:mb-8 font-medium">{plan.description}</Text>

          <Button className={cn("w-full", plan.hasButtonGradient && 'bg-black-gradient')} asChild>
            <Link href={`https://dev.shorts.macintosh-ix88.thinkflagship.com/signup?productId=${plan.productId}`} target="_blank">
              {plan.buttonText}
            </Link>
          </Button>

          {/* Features */}
          {plan.features.length > 0 && (
            <div className="mt-6 2xl:mt-8 space-y-3.5 md:space-y-3 2xl:space-y-4">
              {plan.features.map((feature, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <GradCheckIcon className="w-4 h-4 shrink-0" />
                    <Text variant="body" className="font-medium">
                      {feature.includes("Extra views @") ? <>
                        Extra views @ <span className="font-semibold">{feature.split("Extra views @ ")[1]}</span>
                      </> : feature}
                    </Text>
                  </div>
                )
              })}
            </div>
          )}

          {plan.footerText && (
            <div className='mt-6 2xl:mt-8 h-auto md:h-[120px] 2xl:h-[160px]'>
              <Text variant="body" className="text-center font-medium">{plan.footerText}</Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
