'use client';

import useWindowSize from '@/hooks/useWindowSize';
import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';
import Image from "next/image";
import { useMemo } from 'react';

const AfghanWirelessDemoPage = () => {

  const { width } = useWindowSize();

  const isMobile = useMemo(() => width < 768, [width]);

  return (
    <section className='pt-8 md:pt-[45px] 2xl:pt-[60px]'>
      <Image
        src={isMobile ? "/assets/images/demo/afghan-wireless-sm.webp" : "/assets/images/demo/afghan-wireless.webp"}
        alt="Afghan Wireless"
        width={1788}
        height={357}
        className="bg-secondary h-[478px] md:h-[251px] 2xl:h-[357px] object-cover object-top"
      />
      <div className="pt-8 md:pt-[45px] 2xl:pt-[37px]">
        <h2 className='text-left text-xl 2xl:text-[28px] font-medium pb-4 2xl:pb-5'>Trending Now</h2>
        <EntryPoint
          id="#517095"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.STANDARD}
        />
      </div>
    </section>
  );
};

export default AfghanWirelessDemoPage;

