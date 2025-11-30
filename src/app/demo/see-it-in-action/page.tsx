'use client';

import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';

const SeeItInActionDemoPage = () => {
  return (
    <main className="pt-page">
      <section className="container">
        <div className="py-8 md:py-[45px] 2xl:py-[60px]">
          <EntryPoint
            id="#935370"
            skeletonType={EntryPointType.CIRCLE}
            skeletonSize={EntryPointSize.BOLD}
          />
        </div>
        <div className="bg-secondary min-h-[572px] md:min-h-[393px] 2xl:min-h-[524px]" />
      </section>
    </main>
  );
};

export default SeeItInActionDemoPage;

