import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGSVGElement>;

const HmYoutubeIcon: React.FC<PropsType> = ({ className, ...props }) => (
  <svg
    width="43"
    height="43"
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[32px] 2xl:size-[42px]", className)}
    {...props}
  >
    <rect x="0.666667" y="0.666667" width="41.3333" height="41.3333" rx="20.6667" fill="#1C2B33" />
    <rect x="0.666667" y="0.666667" width="41.3333" height="41.3333" rx="20.6667" stroke="#1C2B33" strokeWidth="1.33333" />
    <path d="M31.9131 16.0496C31.6587 15.1495 30.9132 14.4399 29.9681 14.1976C28.241 13.7476 21.3333 13.7476 21.3333 13.7476C21.3333 13.7476 14.4255 13.7476 12.6985 14.1801C11.7715 14.4227 11.0079 15.1495 10.7534 16.0496C10.2988 17.6941 10.2988 21.1039 10.2988 21.1039C10.2988 21.1039 10.2988 24.5309 10.7534 26.1581C11.0079 27.058 11.7531 27.7679 12.6985 28.0101C14.4436 28.4602 21.3333 28.4602 21.3333 28.4602C21.3333 28.4602 28.241 28.4602 29.9681 28.0274C30.9132 27.7851 31.6587 27.0755 31.9131 26.1754C32.3678 24.5309 32.3678 21.1211 32.3678 21.1211C32.3678 21.1211 32.3858 17.6941 31.9131 16.0496Z" fill="white" />
    <path d="M19.1348 17.9531V24.2537L24.8791 21.1034L19.1348 17.9531Z" fill="#1C2B33" stroke="#1C2B33" strokeWidth="1.25" />
  </svg>
);

export default HmYoutubeIcon;
