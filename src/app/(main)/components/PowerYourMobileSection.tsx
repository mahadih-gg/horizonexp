import SectionHeader from "@/components/common/SectionHeader";
import ResponsiveVideoPlayer from "@/components/ui/responsive-video-player";

const PowerYourMobileSection = () => {
  return (
    <section className="container pt-section">

      <SectionHeader
        title={<>Power your mobile and web with native <br className="hidden md:block" /> short-form video experiences.</>}
      // description={<>Meet Horizon - the plug-and-play short-form video <br className="hidden md:block" /> engagement platform that turns attention into revenue.</>}
      />

      <div className="relative w-full rounded-4xl 2xl:rounded-6xl overflow-hidden">
        <ResponsiveVideoPlayer
          mobileVideoSrc="/assets/videos/power-your-mobile-md.webm"
          desktopVideoSrc="/assets/videos/power-your-mobile.webm"
          className="w-full h-full object-cover rounded-4xl 2xl:rounded-6xl"
          preload="metadata"
        />
      </div>

    </section>
  );
};

export default PowerYourMobileSection;