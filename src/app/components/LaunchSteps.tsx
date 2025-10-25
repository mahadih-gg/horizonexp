
"use client";

import GradientBg from "@/components/common/GradientBg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

const LaunchSteps = () => {
  const tabSections = [
    {
      id: "add-site",
      label: "ADD YOUR SITE",
      primaryImage: "/assets/images/launch-step/step-1.webp",
      smallImage: "/assets/images/launch-step/step-1-sm.webp",
      smallImageContainerClass: "-left-36 bottom-[50px]",
      smallImageClass: "w-[356px] h-[256px]"
    },
    {
      id: "upload-videos",
      label: "UPLOAD VIDEOS",
      primaryImage: "/assets/images/launch-step/step-2.webp",
      smallImage: "/assets/images/launch-step/step-2-sm.webp",
      smallImageContainerClass: "-right-36 bottom-[50px]",
      smallImageClass: "w-[373px] h-[309px]"
    },
    {
      id: "create-entry",
      label: "CREATE ENTRY POINTS",
      primaryImage: "/assets/images/launch-step/step-3.webp",
      smallImage: "/assets/images/launch-step/step-3-sm.webp",
      smallImageContainerClass: "-left-36 bottom-5",
      smallImageClass: "w-[373px] h-[309px]"
    },
    {
      id: "go-live",
      label: "GO LIVE",
      primaryImage: "/assets/images/launch-step/step-4.webp",
      smallImage: "/assets/images/launch-step/step-4-sm.webp",
      smallImageContainerClass: "-right-36 bottom-5",
      smallImageClass: "w-[373px] h-[309px]"
    }
  ];

  return (
    <div className="hidden lg:block">
      <Tabs defaultValue="add-site" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          {tabSections.map((section) => (
            <TabsTrigger key={section.id} value={section.id}>
              {section.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabSections.map((section) => (
          <TabsContent key={section.id} value={section.id} className="mt-0">
            <GradientBg className="flex flex-col items-center justify-center gap-0">

              <div className="relative w-[985px] h-[624px]">
                <motion.div
                  initial={{ opacity: 1, scale: 0.99 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <Image
                    src={section.primaryImage}
                    alt={section.label}
                    width={985}
                    height={624}
                    className="object-contain"
                  />
                </motion.div>

                <div className={cn("absolute", section.smallImageContainerClass)}>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Image
                      src={section.smallImage}
                      alt={`${section.label} detail`}
                      width={373}
                      height={309}
                      className={cn("object-contain", section.smallImageClass)}
                    />
                  </motion.div>
                </div>
              </div>
            </GradientBg>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default LaunchSteps;