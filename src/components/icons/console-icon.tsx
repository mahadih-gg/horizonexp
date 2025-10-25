import { cn } from '@/lib/utils';
import React from 'react';

interface ConsoleIconProps {
  className?: string;
}

export const ConsoleIcon: React.FC<ConsoleIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[30px] 2xl:size-10", className)}
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        stroke="#1C2B33"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.33"
        d="M12.62 35A17 17 0 0 1 20 33.333c2.65 0 5.156.6 7.38 1.667m-16.047-6.667h17.334c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185c.545-1.07.545-2.47.545-5.27V13c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C32.867 5 31.467 5 28.667 5H11.333c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 3.878 7.73C3.333 8.8 3.333 10.2 3.333 13v7.333c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c1.07.545 2.47.545 5.27.545"
      ></path>
    </svg>
  );
};
