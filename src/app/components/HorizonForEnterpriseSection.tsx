"use client"

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
    icon: <ServerIcon className="size-[24px] md:size-[22px] 2xl:size-[30px]" />,
    topLabel: "Scale",
    title: "Build for scale",
    description: "Deliver instant video experiences to millions with global speed and enterprise performance."
  },
  {
    icon: <StarsIcon className="size-[24px] md:size-[22px] 2xl:size-[30px]" />,
    topLabel: "Personalization",
    title: "Personalize at scale",
    description: "Serve dynamic feeds, recommendations, and CTAs - customized for every viewer in real time."
  },
  {
    icon: <CoinIcon className="size-[24px] md:size-[22px] 2xl:size-[30px]" />,
    topLabel: "Ad Revenue",
    title: "Ad monetization",
    description: "Monetize every view with Horizon's built-in ad manager - onboard third-party publishers seamlessly."
  },
  {
    icon: <DatabaseIcon className="size-[24px] md:size-[22px] 2xl:size-[30px]" />,
    topLabel: "Data Ownership",
    title: "Own your data",
    description: "Retain full ownership of your user data - fuel your own AI intelligence to create smarter experiences."
  },
  {
    icon: <ShieldIcon className="size-[24px] md:size-[22px] 2xl:size-[30px]" />,
    topLabel: "Reliability",
    title: "Always on",
    description: "99.99% uptime with automatic failover, ensuring uninterrupted performance at global scale."
  },
  {
    icon: <UsersCheckIcon className="size-[24px] md:size-[22px] 2xl:size-[30px]" />,
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
        title={<>Big-tech grade short-form engagement, <br className="hidden md:block" /> built for speed, scale, and reliability</>}
        description={<>Horizon delivers enterprise-grade performance, built to scale to <br className="block xs:hidden" /> 50 million+ MAU.</>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-x-[72px] 2xl:gap-x-[94px] 2xl:gap-y-[52px]">
        {enterpriseFeatures.map((feature, index) => (
          <CardHeader
            key={index}
            animate={false}
            icon={
              <div className="bg-secondary rounded-xl flex-center size-[60px] 2xl:size-20">
                {feature.icon}
              </div>
            }
            topLabel={<span className="text-black-gradient">{feature.topLabel}</span>}
            title={feature.title}
            description={feature.description}
            centered={false}
            className="text-center md:text-start flex flex-col items-center md:items-start justify-center"
          />
        ))}
      </div>
    </section>
  );
};

export default HorizonForEnterpriseSection;