
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
      smallImageClass: "w-[36.14%] aspect-139/100",
      align: "left"
    },
    {
      id: "upload-videos",
      label: "UPLOAD VIDEOS",
      primaryImage: "/assets/images/launch-step/step-2.webp",
      smallImage: "/assets/images/launch-step/step-2-sm.webp",
      smallImageClass: "w-[37.91%] aspect-121/100",
      align: "right"
    },
    {
      id: "create-entry",
      label: "CREATE ENTRY POINTS",
      primaryImage: "/assets/images/launch-step/step-3.webp",
      smallImage: "/assets/images/launch-step/step-3-sm.webp",
      smallImageClass: "w-[31.98%] aspect-[136/100]",
      align: "left"
    },
    {
      id: "go-live",
      label: "GO LIVE",
      primaryImage: "/assets/images/launch-step/step-4.webp",
      smallImage: "/assets/images/launch-step/step-4-sm.webp",
      smallImageClass: "w-[31.98%] aspect-[136/100]",
      align: "right"
    }
  ];

  return (
    <div className="">
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

              <div className={cn("relative w-full sm:w-[80%] lg:w-[67.48%] 2xl:w-[60.06%] mx-auto px-2 md:px-0", section.align === "left" ? "mr-[5%] lg:mr-[14.62%]" : "mr-[5%] sm:mr-0 ml-auto sm:-ml-[13.62%] lg:-ml-[14.62%]")}>
                <motion.div
                  initial={{ opacity: 1, scale: 0.99 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="rounded-[10px] md:rounded-3xl 2xl:rounded-[28px]"
                >
                  <Image
                    src={section.primaryImage}
                    alt={section.label}
                    width={985}
                    height={624}
                    className="w-full aspect-16/10 object-contain rounded-[10px] md:rounded-3xl 2xl:rounded-[28px] bg-white"
                    style={{
                      boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.02)",
                    }}

                  />
                </motion.div>

                <div className={cn("absolute bottom-4 md:bottom-9 2xl:bottom-[50px]", section.align === "left" ? "left-[3px] sm:-left-[14.62%]" : "right-[3px] sm:-right-[14.62%]", section.smallImageClass)}>
                  <motion.div
                    initial={{ opacity: 0, x: section.align === "left" ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={section.smallImage}
                      alt={`${section.label} detail`}
                      width={373}
                      height={309}
                      className="w-full h-full object-contain bg-white rounded-[7px] md:rounded-[18px] 2xl:rounded-[24px]"
                      style={{
                        boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.04)",
                      }}
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