'use client';

import RightArrowIcon from '@/components/icons/right-arrow-icon';
import { Button } from '@/components/ui/button';
import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';

const WebsiteHeroDemoPage = () => {
  return (
    <section className='pt-[100px] md:pt-20 2xl:pt-[109px] max-w-[716px] 2xl:max-w-[955px] mx-auto'>
      <h1 className='text-center text-[56px] 2xl:text-[77px] font-medium leading-none tracking-[-0.02em]'>
        Your product/<br className='block sm:hidden' />service <br className='hidden sm:block' /> head<span className='inline sm:hidden'>-</span><br className='block sm:hidden' />line goes here
      </h1>
      <div className="py-10 md:py-8 2xl:py-11 max-w-[530px] lg:max-w-[678px] 2xl:max-w-[888px] mx-auto">
        <EntryPoint
          id="#626206"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>

      <p className='text-center text-xl 2xl:text-[28px] text-primary-text font-medium'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
      </p>

      <div className='flex items-center justify-center gap-2.5 2xl:gap-5 py-10 md:py-8 2xl:py-11'>
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

export default WebsiteHeroDemoPage;

