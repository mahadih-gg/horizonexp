"use client";

import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/web-shorts';

const FlagshipEntryPoint = () => {
  return (
    <EntryPoint
      id="#935370"
      skeletonType={EntryPointType.RECTANGLE}
      skeletonSize={EntryPointSize.BOLD}
    />
  );
};

export default FlagshipEntryPoint;