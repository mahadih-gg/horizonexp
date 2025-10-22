import EngageMoreSection from "./components/EngageMoreSection";
import EverythingYouNeedSection from "./components/EverythingYouNeedSection";
import Hero from "./components/Hero";
import HorizonForEnterpriseSection from "./components/HorizonForEnterpriseSection";
import HorizonImpactSection from "./components/HorizonImpactSection";
import LaunchHorizonSection from "./components/LaunchHorizonSection";
import PowerYourMobileSection from "./components/PowerYourMobileSection";
import ReadyToGrowSection from "./components/ReadyToGrowSection";
import ReviewsSection from "./components/ReviewsSection";
import SeeHorizonSection from "./components/SeeHorizonSection";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <EngageMoreSection />
      <PowerYourMobileSection />
      <SeeHorizonSection />
      <EverythingYouNeedSection />
      <HorizonImpactSection />
      <ReviewsSection />
      <HorizonForEnterpriseSection />
      <LaunchHorizonSection />
      <ReadyToGrowSection />
    </main>
  );
}
