import EngageMoreSection from "./components/EngageMoreSection";
import EverythingYouNeedSection from "./components/EverythingYouNeedSection";
import Hero from "./components/Hero";
import PowerYourMobileSection from "./components/PowerYourMobileSection";
import SeeHorizonSection from "./components/SeeHorizonSection";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <EngageMoreSection />
      <PowerYourMobileSection />
      <SeeHorizonSection />
      <EverythingYouNeedSection />
    </main>
  );
}
