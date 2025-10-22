import SectionHeader from "@/components/common/SectionHeader";
import ClockIcon from "@/components/icons/clock-icon";
import CursorIcon from "@/components/icons/cursor-icon";
import FileSearchIcon from "@/components/icons/file-search-icon";
import ShoppingCartIcon from "@/components/icons/shopping-cart-icon";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

const HorizonImpactSection = () => {
  const impactMetrics = [
    {
      icon: <CursorIcon />,
      statistic: "15%",
      description: "15% avg. CTR → Horizon's CTR is 10x higher than traditional banners."
    },
    {
      icon: <ClockIcon />,
      statistic: "96s",
      description: "Horizon increases user session time by 96 seconds, enhancing engagement in your store."
    },
    {
      icon: <FileSearchIcon />,
      statistic: "10x",
      description: "10x product visibility → Super fast video scroll unlocks dramatically higher discovery."
    },
    {
      icon: <ShoppingCartIcon />,
      statistic: "2x",
      description: "Horizon doubles your conversions as engagement flows straight into checkout."
    }
  ];

  return (
    <section className='container py-section'>
      <div className='p-20 rounded-3xl bg-secondary'>
        <SectionHeader
          topLabel={<span className='text-grad-secondary'>Horizon Impact</span>}
          title={<>Horizon turns your site or app into an <br /> engagement and conversion powerhouse </>}
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {impactMetrics.map((metric, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="flex flex-col items-start justify-start gap-7">
                <span>{metric.icon}</span>
                <Text variant="heading" className="font-normal text-black-gradient">
                  {metric.statistic}
                </Text>
                <p className="text-base 2xl:text-xl text-primary-text">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizonImpactSection;