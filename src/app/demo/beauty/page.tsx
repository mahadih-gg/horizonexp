'use client';

import useWindowSize from '@/hooks/useWindowSize';
import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';
import Image from "next/image";
import { useMemo } from 'react';

const BeautyDemoPage = () => {

  const { width } = useWindowSize();

  const isMobile = useMemo(() => !!width && width < 768, [width]);

  return (
    <section>
      {/* <div className='pb-8 md:pb-[30px] 2xl:pb-10'>
        <EntryPoint
          id="#348249"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div> */}

      <Image
        src={isMobile ? "/assets/images/demo/beauty/1-sm.webp" : "/assets/images/demo/beauty/1.webp"}
        alt="Beauty"
        width={430}
        height={580}
        className="w-full h-auto xs:h-auto md:h-[435px] 2xl:h-[580px] object-contain xs:object-cover"
      />

      <div className="pt-8 md:pt-[30px] 2xl:pt-10">
        <h2 className='text-left text-xl 2xl:text-[28px] font-medium pb-4 2xl:pb-5'>Trending Now</h2>
        <EntryPoint
          id="#781647"
          skeletonType={EntryPointType.RECTANGLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>
    </section>
  );
};

export default BeautyDemoPage;

