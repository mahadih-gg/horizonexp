import ConnectSection from "@/components/common/ConnectSection";
import type { Metadata } from "next";
import FAQSection from "./components/faq";
import FeaturesSection from "./components/FeaturesSection";
import ForEnterpriseSection from "./components/ForEnterpriseSection";
import OnboardingSection from "./components/OnboardingSection";
import PricingSection from "./components/PricingSection";

export const metadata: Metadata = {
  title: "Horizon | Pricing",
};

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
        cta={{
          primary: {
            label: "Start for free",
            href: "https://app.horizonexp.com/signup",
            target: "_blank",
            variant: "default",
          },
          secondary: {
            label: "Contact us",
            href: "/contact",
            variant: "secondary",
          },
        }}
      />
    </main>
  );
};

export default PricingPage;