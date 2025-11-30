'use client';

import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts';

const NewArrivalsDemoPage = () => {
  return (
    <section>
      <div className="pb-8 md:pb-[45px] 2xl:pb-[60px]">
        <EntryPoint
          id="#935370"
          skeletonType={EntryPointType.CIRCLE}
          skeletonSize={EntryPointSize.BOLD}
        />
      </div>
      <div className="bg-secondary min-h-[572px] md:min-h-[393px] 2xl:min-h-[524px]" />
    </section>
  );
};

export default NewArrivalsDemoPage;

