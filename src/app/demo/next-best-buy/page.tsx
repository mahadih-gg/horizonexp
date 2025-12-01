'use client';

import CircleCheckIcon from '@/components/icons/circle-check-icon';
import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';

const NextBestBuyDemoPage = () => {
  return (
    <section className='pt-[131px] md:pt-[30px] 2xl:pt-10'>
      <div className='flex items-center justify-center flex-col gap-5 2xl:gap-7'>
        <CircleCheckIcon className='size-[42px] 2xl:size-[58px]' />
        <p className='text-xl 2xl:text-[28px] text-center'>Thanks for shopping!</p>
      </div>

      <h1 className='text-center text-3xl 2xl:text-[40px] font-medium pt-[75px] md:pt-8 2xl:pt-10'>
        You may also like these picks
      </h1>
      <div className="pt-8 2xl:pt-[45px]">
        <EntryPoint
          id="#935370"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>
    </section>
  );
};

export default NextBestBuyDemoPage;

