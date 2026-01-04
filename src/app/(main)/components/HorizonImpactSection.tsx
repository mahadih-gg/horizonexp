import ClockIcon from "@/components/icons/clock-icon";
import CursorIcon from "@/components/icons/cursor-icon";
import FileSearchIcon from "@/components/icons/file-search-icon";
import ShoppingCartIcon from "@/components/icons/shopping-cart-icon";
import AndroidSvg from "@/components/svg/AndroidSvg";
import AppleSvg from "@/components/svg/AppleSvg";
import ReactSvg from "@/components/svg/ReactSvg";
import ShopifySvg from "@/components/svg/ShopifySvg";
import WooSvg from "@/components/svg/WooSvg";
import WpSvg from "@/components/svg/WpSvg";
import { Card, CardContent } from "@/components/ui/card";
import CounterAnimation from "@/components/ui/counter-animation";

const HorizonImpactSection = () => {
  const platforms = [
    {
      icon: <ShopifySvg />,
      name: "Shopify"
    },
    {
      icon: <WooSvg />,
      name: "WooCommerce"
    },
    {
      icon: <WpSvg />,
      name: "WordPress"
    },
    {
      icon: <ReactSvg />,
      name: "React"
    },
    {
      icon: <AndroidSvg />,
      name: "Android"
    },
    {
      icon: <AppleSvg />,
      name: "Apple"
    },
  ];

  const impactMetrics = [
    {
      icon: <CursorIcon />,
      statistic: "15%",
      numericValue: 15,
      suffix: "%",
      description: "15% avg. CTR → Horizon's CTR is 10x higher than traditional banners."
    },
    {
      icon: <ClockIcon />,
      statistic: "96s",
      numericValue: 96,
      suffix: "s",
      description: "Horizon increases user session time by 96 seconds, enhancing engagement in your store."
    },
    {
      icon: <FileSearchIcon />,
      statistic: "10x",
      numericValue: 10,
      suffix: "x",
      description: "10x product visibility → Super fast video scroll unlocks dramatically higher discovery."
    },
    {
      icon: <ShoppingCartIcon />,
      statistic: "2x",
      numericValue: 2,
      suffix: "x",
      description: "Horizon doubles your conversions as engagement flows straight into checkout."
    }
  ];

  return (
    <section className='pt-section'>

      <div className='container py-[80px] md:py-[82px] 2xl:py-[109px]'
        style={{
          background: "linear-gradient(360deg, #FFFFFF 0.02%, #B4E9FD 48.01%, #BAD9FD 71.01%, #CDDAFA 85%, #FBFDFF 100%)"
        }}
      >
        <p className="text-center text-lg 2xl:text-2xl font-medium text-primary/40 pb-[30px] 2xl:pb-10">
          Compatible with all major platforms. It’s as easy as adding Google Analytics or Facebook Pixel.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-4 md:gap-5 pb-[30px] md:pb-[90px] 2xl:pb-[120px]">
          {
            platforms.map((platform, index) => (
              <div key={index} className="flex items-center justify-center py-3.5 px-[27px] md:py-3.5 md:px-7 2xl:py-5 2xl:px-10">
                {platform.icon}
              </div>
            ))
          }
        </div>

        <p className="text-center text-lg 2xl:text-2xl font-medium text-primary/40 pb-10 md:pb-[30px] 2xl:pb-10">
          Proven impact with leading global brands
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 md:gap-[18px] 2xl:gap-6 px-4 xxs:px-[46px] md:px-0'>
          {impactMetrics.map((metric, index) => (
            <Card key={index} className="p-[30px] md:p-10"
              style={{
                background: "linear-gradient(180deg, #E8EEFC 0%, rgba(232, 238, 252, 0.3) 100%)"
              }}
            >
              <CardContent className="flex flex-col items-start justify-start gap-7">
                <span>{metric.icon}</span>
                <h2 className="text-[72px] 2xl:text-[96px] font-normal leading-none text-primary-text tracking-[-0.04em] 2xl:tracking-[-0.04em]">
                  <CounterAnimation to={metric.numericValue} suffix={metric.suffix} />
                </h2>
                <p className="text-base md:text-[15px] 2xl:text-xl text-primary-text font-medium">
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