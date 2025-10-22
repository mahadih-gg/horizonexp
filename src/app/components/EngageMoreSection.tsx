import SectionHeader from "@/components/common/SectionHeader";

const EngageMoreSection = () => {


  return (
    <section className="container py-section">

      <SectionHeader
        title={<>Power your mobile and web with native <br /> short-form video experiences</>}
        description={<>Meet Horizon - the plug-and-play short-form video <br /> engagement platform that turns attention into revenue.</>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {
          [1, 2, 3, 4].map((item) => (
            <div key={item} className="w-full aspect-square rounded-2xl bg-secondary">
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default EngageMoreSection;