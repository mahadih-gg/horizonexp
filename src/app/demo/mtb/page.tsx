'use client';

import { cn } from "@/lib/utils";
import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/horizon-web-shorts";
import Image from "next/image";

const MTBDemoPage = () => {
  return (
    <section className='bg-[#373737]'>
      <div className="max-w-[430px] mx-auto bg-[#181818] overflow-hidden">
        <Image
          src="/assets/images/demo/mtb/1.webp"
          alt="MTB"
          width={430}
          height={87}
          className="w-full h-auto"
        />

        <div className="py-8">
          <MtbHeading title="Latest Offers" />
          <div className="px-4">
            <EntryPoint
              id="#291731"
              skeletonType={EntryPointType.CIRCLE}
              skeletonSize={EntryPointSize.STANDARD}
            />
          </div>
        </div>

        <div>
          <MtbHeading title="Knowledge Point" />
          <Image
            src="/assets/images/demo/mtb/2.webp"
            alt="MTB"
            width={430}
            height={128}
            className="w-full h-auto"
          />
        </div>

        <div className="py-8">
          <Image
            src="/assets/images/demo/mtb/3.webp"
            alt="MTB"
            width={430}
            height={100}
            className="w-full h-auto"
          />
        </div>

        <div>
          <MtbHeading title="Manage Your Personal Finance" />

          <div className="px-4">
            <EntryPoint
              id="#954465"
              skeletonType={EntryPointType.RECTANGLE}
              skeletonSize={EntryPointSize.BOLD}
            />
          </div>
        </div>

        <div className="py-8">
          <Image
            src="/assets/images/demo/mtb/4.webp"
            alt="MTB"
            width={430}
            height={100}
            className="w-full h-auto"
          />
        </div>

        <div>
          <MtbHeading title="Rewards & Privileges" />
          <div className="px-4 block md:hidden">
            <EntryPoint
              id="#969110"
              skeletonType={EntryPointType.BLOCK}
              skeletonSize={EntryPointSize.BLOCK_OF_4}
            />
          </div>
          <div className="px-4 hidden md:block">
            <EntryPoint
              id="#168047"
              skeletonType={EntryPointType.RECTANGLE}
              skeletonSize={EntryPointSize.COMPACT}
            />
          </div>
        </div>

        <div className="pt-8">
          <MtbHeading title="Contact & Services" className="mb-0" />

          <Image
            src="/assets/images/demo/mtb/5.webp"
            alt="MTB"
            width={430}
            height={100}
          />
        </div>

        <div>
          <MtbHeading title="Social" className="mb-0" />
          <Image
            src="/assets/images/demo/mtb/6.webp"
            alt="MTB"
            width={430}
            height={100}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};


const MtbHeading = ({ title, className }: { title: string, className?: string }) => {
  return (
    <div className={cn("relative px-4 mb-6", className)}>
      <h2 className='relative'>
        <span className="bg-[#181818] relative z-10 pr-5 text-[#E8E8E8] text-left text-sm font-medium">{title}</span>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-px bg-[#606060]" />
      </h2>
    </div>
  );
};

export default MTBDemoPage;