'use client';

import RightArrowIcon from '@/components/icons/right-arrow-icon';
import { Button } from '@/components/ui/button';
import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';

const WebsiteExplainerDemoPage = () => {
  return (
    <section className='pt-[162px] md:pt-[45px] 2xl:pt-10'>
      <h1 className='text-center text-[30px] 2xl:text-[40px] font-medium leading-none tracking-[-0.02em]'>
        See how our product works
      </h1>

      <div className="py-10 md:py-8 2xl:py-11">
        <EntryPoint
          id="#935370"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>

      <div className='flex items-center justify-center gap-2.5 2xl:gap-5 pb-10 md:pb-8 2xl:pb-11'>
        <Button className='w-1/2 md:w-[180px] 2xl:w-[242px] h-[60px] 2xl:h-[78px] text-lg 2xl:text-2xl'>
          Buy now
        </Button>
        <Button variant="secondary" className='w-1/2 md:w-[180px] 2xl:w-[242px] h-[60px] 2xl:h-[78px] text-lg 2xl:text-2xl'>
          Free trial
          <RightArrowIcon />
        </Button>
      </div>
    </section>
  );
};

export default WebsiteExplainerDemoPage;

