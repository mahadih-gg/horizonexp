import GradientBg from "@/components/common/GradientBg";
import SectionHeader from "@/components/common/SectionHeader";

const PowerYourMobileSection = () => {
  return (
    <section className="container">

      <SectionHeader
        title={<>Power your mobile and web with native <br /> short-form video experiences</>}
        description={<>Meet Horizon - the plug-and-play short-form video <br /> engagement platform that turns attention into revenue.</>}
      />

      <GradientBg />
    </section>
  );
};

export default PowerYourMobileSection;