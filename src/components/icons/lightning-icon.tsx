import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const LightningIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_947_32412)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M19.5 37.917H7.584M14.084 26h-9.75M19.5 14.083H8.667M36.834 6.5 22.54 26.51c-.632.885-.949 1.328-.935 1.697.012.321.166.62.42.817.293.226.837.226 1.926.226h10.715L32.5 45.5l14.292-20.01c.633-.885.95-1.328.936-1.697a1.08 1.08 0 0 0-.421-.817c-.293-.226-.837-.226-1.925-.226H34.667z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_947_32412"
        x1="26.031"
        x2="26.031"
        y1="45.5"
        y2="6.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A8FA4"></stop>
        <stop offset="0.6" stopColor="#1C2B33"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default LightningIcon;
