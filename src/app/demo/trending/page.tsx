'use client';

import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';

const TrendingDemoPage = () => {
  return (
    <section>
      <div className="bg-secondary min-h-[478px] md:min-h-[251px] 2xl:min-h-[357px]" />
      <div className="pt-8 md:pt-[45px] 2xl:pt-[60px]">
        <EntryPoint
          id="#935370"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>
    </section>
  );
};

export default TrendingDemoPage;

