import ConnectSection from "@/components/common/ConnectSection";
import EverythingYouNeedSection from "./components/EverythingYouNeedSection";
import HorizonForEnterpriseSection from "./components/HorizonForEnterpriseSection";
import HorizonImpactSection from "./components/HorizonImpactSection";
import HowBrandsCanUseHorizonSection from "./components/HowBrandsCanUseHorizonSection";
import LaunchHorizonSection from "./components/LaunchHorizonSection";
import ReviewsSection from "./components/ReviewsSection";

export default function Home() {
  return (
    <main className="">
      {/* <Hero />
      <EngageMoreSection />
      <PowerYourMobileSection />
      <SeeHorizonSection /> */}
      <HowBrandsCanUseHorizonSection />
      <EverythingYouNeedSection />
      <HorizonImpactSection />
      <ReviewsSection />
      <HorizonForEnterpriseSection />
      <LaunchHorizonSection />
      <ConnectSection
        title={<>Ready to grow with short-form video? <br /> Start free today.</>}
        description="Join the thousands of businesses already using Horizon to grow their business."
      />
    </main>
  );
}
