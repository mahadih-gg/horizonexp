import ConnectSection from "@/components/common/ConnectSection";
import FAQSection from "./components/faq";
import FeaturesSection from "./components/FeaturesSection";
import ForEnterpriseSection from "./components/ForEnterpriseSection";
import OnboardingSection from "./components/OnboardingSection";
import PricingSection from "./components/PricingSection";

const PricingPage = () => {
  return (
    <main>
      <PricingSection />

      <FeaturesSection />

      <ForEnterpriseSection />

      <OnboardingSection />

      <FAQSection />

      <ConnectSection
        title={<>Launch your next growth story. <br /> Start today.</>}
        description="Pick a plan, plug in Horizon, and start engaging customers in minutes."
      />
    </main>
  );
};

export default PricingPage;