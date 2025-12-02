'use client';

import { Text } from '@/components/ui/text';
import { motion } from 'motion/react';
import { pricingPlans } from '../data/pricingPlans';
import PricingCard from './PricingCard';

const PricingSection = () => {
  return (
    <section className="container pt-page">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Text variant="heading" className="text-center">
          Short-form engagement <br /> for every business
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Text variant="section-subheading" className="text-center pt-8 pb-[100px]">
          Whether you&apos;re just starting out or serving millions, Horizon makes <br className="hidden md:block" /> short-form engagement effortless to launch, manage, and scale.
        </Text>
      </motion.div>

      {/* Pricing Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-5 max-w-[382px] md:max-w-[700px] xl:max-w-none mx-auto"
      >
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </motion.div>
    </section>
  );
};

export default PricingSection;