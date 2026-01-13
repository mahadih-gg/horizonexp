'use client';

import useWindowSize from "@/hooks/useWindowSize";
import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/horizon-web-shorts";
import Image from "next/image";
import { useMemo } from "react";

interface CustomDemoPageProps {
  imageSrc: string;
  heading: string;
  epCircleId: string;
  epRectangleId: string;
}


const CustomDemoPage = ({ imageSrc, heading, epCircleId, epRectangleId }: CustomDemoPageProps) => {

  const { width } = useWindowSize();
  const isMobile = useMemo(() => !!width && width < 768, [width]);

  return (
    <section>
      <div className='pt-8 md:pt-[33px] 2xl:pt-[45px] pb-8 md:pb-[52px] 2xl:pb-[70px]'>
        <EntryPoint
          id={epCircleId}
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>

      <Image
        src={isMobile ? `/assets/images/demo/${imageSrc}/main-sm.webp` : `/assets/images/demo/${imageSrc}/main.webp`}
        alt={imageSrc}
        width={isMobile ? 430 : 1793}
        height={isMobile ? 420 : 628}
        className="w-full h-auto xs:h-auto object-contain rounded-3xl 2xl:rounded-5xl"
      />

      <div className="pt-8 md:pt-[30px] 2xl:pt-10">
        <h2 className='text-left text-xl 2xl:text-[28px] font-medium pb-4 2xl:pb-5'>{heading}</h2>
        <EntryPoint
          id={epRectangleId}
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>
    </section>
  );
};

export default CustomDemoPage;