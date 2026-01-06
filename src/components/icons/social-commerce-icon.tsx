import { cn } from '@/lib/utils';
import React from 'react';

interface SocialCommerceIconProps {
  className?: string;
}

export const SocialCommerceIcon: React.FC<SocialCommerceIconProps> = ({ className }) => {
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
        d="M26.666 13.333a6.667 6.667 0 0 1-13.333 0m-7.278-.997-1.167 14c-.25 3.007-.376 4.51.132 5.671a5 5 0 0 0 2.2 2.39C8.333 35 9.842 35 12.86 35h14.278c3.018 0 4.527 0 5.641-.603a5 5 0 0 0 2.2-2.39c.508-1.16.382-2.664.132-5.671l-1.167-14c-.216-2.588-.324-3.882-.897-4.861A5 5 0 0 0 30.89 5.49C29.867 5 28.568 5 25.972 5H14.027c-2.597 0-3.895 0-4.918.49A5 5 0 0 0 6.95 7.475c-.573.98-.68 2.273-.896 4.86"
      ></path>
    </svg>
  );
};
