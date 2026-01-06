import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const ShareIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43706)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="m18.612 29.272 14.798 8.624m-.022-23.79-14.776 8.623M45.5 10.834a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-26 15.167a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m26 15.166a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43706"
        x1="26"
        x2="26"
        y1="47.667"
        y2="4.334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A8FA4"></stop>
        <stop offset="0.6" stopColor="#002253"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default ShareIcon;
