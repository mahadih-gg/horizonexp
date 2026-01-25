"use client"

import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/horizon-web-shorts";
import Image from "next/image";

const UndpDemoPage = () => {
  return (
    <section>
      <div className="bg-[#FAFAFA] max-h-[115px] mb-11 sticky top-0 z-50"
        style={{
          boxShadow: "0px 3px 6px 0px #0000001A",
        }}
      >
        <Image
          src="/assets/images/demo/undp/nav.webp"
          alt="UNDP nav"
          width={1920}
          height={122}
          className="w-full h-auto"
        />
      </div>
      <div>
        <Image
          src="/assets/images/demo/undp/top.webp"
          alt="UNDP top"
          width={1920}
          height={2038}
          className="w-full h-auto"
        />
      </div>

      <div className="pt-[103px] pb-[140px] px-10">
        <h2 className="pb-[51px] font-bold text-[2rem] md:text-4xl 2xl:text-[55px] uppercase text-[#000000]">
          Watch our stories
        </h2>

        <EntryPoint
          id="#961466"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>

      <div>
        <Image
          src="/assets/images/demo/undp/bottom.webp"
          alt="UNDP bottom"
          width={1920}
          height={4946}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default UndpDemoPage;