import SectionHeader from "@/components/common/SectionHeader";
import CoinIcon from "@/components/icons/coin-icon";
import DatabaseIcon from "@/components/icons/database-icon";
import ServerIcon from "@/components/icons/server-icon";
import ShieldIcon from "@/components/icons/shield-icon";
import StarsIcon from "@/components/icons/stars-icon";
import UsersCheckIcon from "@/components/icons/users-check-icon";
import { CardHeader } from "@/components/ui/card";

const enterpriseFeatures = [
  {
    icon: <ServerIcon />,
    topLabel: "Scale",
    title: "Build for scale",
    description: "Deliver instant video experiences to millions with global speed and enterprise performance."
  },
  {
    icon: <StarsIcon />,
    topLabel: "Personalization",
    title: "Personalize at scale",
    description: "Serve dynamic feeds, recommendations, and CTAs - customized for every viewer in real time."
  },
  {
    icon: <CoinIcon />,
    topLabel: "Ad Revenue",
    title: "Ad monetization",
    description: "Monetize every view with Horizon's built-in ad manager - onboard third-party publishers seamlessly."
  },
  {
    icon: <DatabaseIcon />,
    topLabel: "Data Ownership",
    title: "Own your data",
    description: "Retain full ownership of your user data - fuel your own AI intelligence to create smarter experiences."
  },
  {
    icon: <ShieldIcon />,
    topLabel: "Reliability",
    title: "Always on",
    description: "99.99% uptime with automatic failover, ensuring uninterrupted performance at global scale."
  },
  {
    icon: <UsersCheckIcon />,
    topLabel: "Premium Support",
    title: "Dedicated support",
    description: "Priority response and proactive monitoring to keep your video experience running flawlessly."
  }
];

const HorizonForEnterpriseSection = () => {
  return (
    <section className="container py-section">
      <SectionHeader
        topLabel="Horizon for enterprise"
        title={<>Big-tech grade short-form engagement, <br /> built for speed, scale, and reliability</>}
        description="Horizon delivers enterprise-grade performance, built to scale to 50 million+ MAU."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[94px] gap-y-[52px]">
        {enterpriseFeatures.map((feature, index) => (
          <CardHeader
            key={index}
            icon={<span className="bg-secondary rounded-xl flex-center size-20">{feature.icon}</span>}
            topLabel={<span className="text-black-gradient">{feature.topLabel}</span>}
            title={feature.title}
            description={feature.description}
            centered={false}
          />
        ))}
      </div>
    </section>
  );
};

export default HorizonForEnterpriseSection;