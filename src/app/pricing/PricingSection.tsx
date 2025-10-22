import { Text } from '@/components/ui/text';
import PricingCard from './components/PricingCard';
import { pricingPlans } from './data/pricingPlans';

const PricingSection = () => {
  return (
    <section className="container">
      <Text variant="heading" className="text-center">
        Short-form engagement <br /> for every business
      </Text>
      <Text variant="section-subheading" className="text-center pt-8 pb-[100px]">
        Whether you're just starting out or serving millions, Horizon makes <br className="hidden md:block" /> short-form engagement effortless to launch, manage, and scale.
      </Text>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;