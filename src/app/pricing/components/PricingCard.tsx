import CheckIcon from '@/components/icons/check-icon';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import React from 'react';

export interface PricingPlan {
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
    <div className={`
      relative bg-secondary rounded-2xl p-6 flex flex-col h-full
      ${plan.isHighlighted ? 'border-2' : ''}
    `}>
      {/* Label */}
      {plan.label && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-secondary text-xs px-3 py-1 rounded-full">
            {plan.label}
          </span>
        </div>
      )}

      {/* Plan Name */}
      <Text variant="card-subheading" className="mb-2">{plan.name}</Text>

      {/* Price */}
      <div className="mb-4">
        <Text variant="card-heading">${plan.price}</Text>
        <Text variant="card-subheading" className="ml-2">{plan.priceUnit}</Text>
      </div>

      {/* Inclusions */}
      <div className="mb-6 space-y-2">
        <Text variant="body">{plan.viewsIncluded} views included</Text>
        <Text variant="body">{plan.videosInLibrary.count} videos in library ({plan.videosInLibrary.duration} each)</Text>
        <Text variant="body">{plan.websitesStores} website/store</Text>
      </div>

      {/* Description */}
      <Text variant="body" className="mb-6">{plan.description}</Text>

      <Button className={cn("w-full", plan.hasButtonGradient && 'bg-black-gradient hover:bg-black-gradient/90')}>
        {plan.buttonText}
      </Button>

      {/* Features */}
      {plan.features.length > 0 && (
        <div className="mt-6 space-y-2">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      )}

      {plan.footerText && (
        <p className="text-xs text-center mt-2">{plan.footerText}</p>
      )}
    </div>
  );
};

export default PricingCard;
