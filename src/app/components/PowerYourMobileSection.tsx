import SectionHeader from "@/components/common/SectionHeader";
import ResponsiveVideoPlayer from "@/components/ui/responsive-video-player";

const PowerYourMobileSection = () => {
  return (
    <section className="container">

      <SectionHeader
        title={<>Power your mobile and web with native <br /> short-form video experiences</>}
        description={<>Meet Horizon - the plug-and-play short-form video <br /> engagement platform that turns attention into revenue.</>}
      />

      <div className="relative w-full rounded-3xl overflow-hidden">
        <ResponsiveVideoPlayer
          mobileVideoSrc="/assets/videos/power-your-mobile-md.webm"
          desktopVideoSrc="/assets/videos/power-your-mobile.webm"
          className="w-full h-full object-cover"
          preload="metadata"
        />
      </div>

    </section>
  );
};

export default PowerYourMobileSection;