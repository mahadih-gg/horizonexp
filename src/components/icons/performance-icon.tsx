import { cn } from '@/lib/utils';
import React from 'react';

interface PerformanceIconProps {
  className?: string;
}

export const PerformanceIcon: React.FC<PerformanceIconProps> = ({ className }) => {
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
        d="M35.969 12a4.21 4.21 0 0 0-2.94-3.03C30.425 8.332 20 8.332 20 8.332s-10.424 0-13.03.697a4.21 4.21 0 0 0-2.939 3.03 44 44 0 0 0-.697 8.015c-.017 2.707.217 5.41.697 8.075a4.21 4.21 0 0 0 2.94 2.91c2.605.696 13.029.696 13.029.696s10.424 0 13.03-.697a4.21 4.21 0 0 0 2.939-3.03c.473-2.625.706-5.287.697-7.954A44 44 0 0 0 35.969 12"
      ></path>
      <path
        stroke="#1C2B33"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.33"
        d="M16.25 15.775c0-.795 0-1.193.166-1.415a.83.83 0 0 1 .608-.332c.277-.02.611.195 1.28.626l6.572 4.224c.58.373.87.56.971.797a.83.83 0 0 1 0 .649c-.1.237-.39.424-.971.797l-6.572 4.225c-.669.43-1.003.645-1.28.625a.83.83 0 0 1-.608-.332c-.166-.222-.166-.62-.166-1.415z"
      ></path>
    </svg>
  );
};
