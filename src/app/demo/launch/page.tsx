'use client';

import useWindowSize from '@/hooks/useWindowSize';
import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';
import Image from "next/image";
import { useMemo } from 'react';

const LaunchDemoPage = () => {

  const { width } = useWindowSize();

  const isMobile = useMemo(() => !!width && width < 768, [width]);

  return (
    <section>
      <div className='pt-8 md:pt-[33px] 2xl:pt-[45px] pb-8 md:pb-[52px] 2xl:pb-[70px]'>
        <EntryPoint
          id="#425795"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>

      <Image
        src={isMobile ? "/assets/images/demo/launch/1-sm.webp" : "/assets/images/demo/launch/1.webp"}
        alt="Launch"
        width={isMobile ? 430 : 1793}
        height={isMobile ? 420 : 628}
        className="w-full h-auto xs:h-auto md:h-[471px] 2xl:h-[628px] object-contain xs:object-cover rounded-3xl 2xl:rounded-5xl"
      />

      <div className="pt-8 md:pt-[30px] 2xl:pt-10">
        <h2 className='text-left text-xl 2xl:text-[28px] font-medium pb-4 2xl:pb-5'>Trending Now</h2>
        <EntryPoint
          id="#162597"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>
    </section>
  );
};

export default LaunchDemoPage;

