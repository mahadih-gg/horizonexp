import { cn } from '@/lib/utils';
import React from 'react';

interface NativeStreamingIconProps {
  className?: string;
}

export const NativeStreamingIcon: React.FC<NativeStreamingIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[30px] 2xl:size-10", className)}
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        stroke="#002253"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.33"
        d="M8.333 8.316c0-1.618 0-2.428.338-2.874.294-.389.743-.629 1.23-.658.558-.033 1.231.416 2.578 1.313l17.526 11.684c1.113.742 1.67 1.113 1.863 1.58.17.41.17.869 0 1.278-.194.467-.75.838-1.863 1.58L12.48 33.903c-1.347.898-2.02 1.347-2.578 1.313a1.67 1.67 0 0 1-1.23-.658c-.338-.446-.338-1.255-.338-2.874z"
      ></path>
    </svg>
  );
};
