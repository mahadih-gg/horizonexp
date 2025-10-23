import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const AnalyticsIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43735)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M17.333 32.5v4.333m8.667-13v13m8.667-21.666v21.666M16.9 45.5h18.2c3.64 0 5.46 0 6.85-.709a6.5 6.5 0 0 0 2.841-2.84c.709-1.39.709-3.21.709-6.851V16.9c0-3.64 0-5.46-.709-6.85a6.5 6.5 0 0 0-2.84-2.842C40.56 6.5 38.74 6.5 35.1 6.5H16.9c-3.64 0-5.46 0-6.85.708a6.5 6.5 0 0 0-2.842 2.841C6.5 11.44 6.5 13.26 6.5 16.9v18.2c0 3.64 0 5.46.708 6.85a6.5 6.5 0 0 0 2.841 2.841c1.39.709 3.21.709 6.851.709"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43735"
        x1="26"
        x2="26"
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

export default AnalyticsIcon;
