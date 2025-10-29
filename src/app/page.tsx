import ConnectSection from "@/components/common/ConnectSection";
import EngageMoreSection from "./components/EngageMoreSection";
import EverythingYouNeedSection from "./components/EverythingYouNeedSection";
import Hero from "./components/Hero";
import HorizonForEnterpriseSection from "./components/HorizonForEnterpriseSection";
import HorizonImpactSection from "./components/HorizonImpactSection";
import HowBrandsCanUseHorizonSection from "./components/HowBrandsCanUseHorizonSection";
import LaunchHorizonSection from "./components/LaunchHorizonSection";
import PowerYourMobileSection from "./components/PowerYourMobileSection";
import SeeHorizonSection from "./components/SeeHorizonSection";
import WhyHorizonSection from "./components/WhyHorizonSection";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <EngageMoreSection />
      <PowerYourMobileSection />
      <SeeHorizonSection />
      <HowBrandsCanUseHorizonSection />
      <EverythingYouNeedSection />
      <HorizonImpactSection />
      <WhyHorizonSection />
      {/* <ReviewsSection /> */}
      <HorizonForEnterpriseSection />
      <LaunchHorizonSection />
      <ConnectSection
        title={<>Ready to grow <br className="block md:hidden" /> with short-<br className="block md:hidden" />form video? <br /> Start free today.</>}
        description="Join the new generation of brands turning attention into sales with short-form engagement."
      />
    </main>
  );
}
