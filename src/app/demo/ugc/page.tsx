'use client';

import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';

const UgcDemoPage = () => {
  return (
    <section className='pt-8 md:pt-[45px] 2xl:pt-[60px]'>
      <div className="bg-secondary min-h-[496px] md:min-h-[333px] 2xl:min-h-[442px]" />
      <div className="pt-8 md:pt-[45px] 2xl:pt-10">
        <h2 className='text-center text-xl 2xl:text-[28px] font-medium pb-8 md:pb-4 2xl:pb-[45px]'>
          Follow our top users
        </h2>

        <EntryPoint
          id="#596207"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>
    </section>
  );
};

export default UgcDemoPage;

