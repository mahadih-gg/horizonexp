import ConnectSection from "@/components/common/ConnectSection";
import LaunchHorizonSection from "./components/LaunchHorizonSection";

export default function Home() {
  return (
    <main className="">
      {/* <Hero />
      <EngageMoreSection />
      <PowerYourMobileSection />
      <SeeHorizonSection />
      <HowBrandsCanUseHorizonSection />
      <EverythingYouNeedSection />
      <HorizonImpactSection />
      <WhyHorizonSection />
      <ReviewsSection />
      <HorizonForEnterpriseSection /> */}
      <LaunchHorizonSection />
      <ConnectSection
        title={<>Ready to grow with short-form video? <br /> Start free today.</>}
        description="Join the thousands of businesses already using Horizon to grow their business."
      />
    </main>
  );
}
