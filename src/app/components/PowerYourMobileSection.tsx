import SectionHeader from "@/components/common/SectionHeader";

const PowerYourMobileSection = () => {
  return (
    <section className="container">

      <SectionHeader
        title={<>Power your mobile and web with native <br /> short-form video experiences</>}
        description={<>Meet Horizon - the plug-and-play short-form video <br /> engagement platform that turns attention into revenue.</>}
      />

      <div
        className='w-full h-[860px] rounded-3xl'
        style={{
          background: 'linear-gradient(180deg, #F9FCFD 0%, #FFE3EF 100%)'
        }}>

      </div>
    </section>
  );
};

export default PowerYourMobileSection;