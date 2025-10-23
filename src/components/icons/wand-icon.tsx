import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const WandIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43732)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="m28.166 30.334-6.5-6.5m10.856-16.25v-3.25m8.535 6.631 2.298-2.298m-2.298 19.5 2.298 2.298m-19.5-19.5-2.298-2.298M44.44 19.501h3.25M13.284 45.216l20.014-20.014c.858-.858 1.287-1.287 1.448-1.782a2.17 2.17 0 0 0 0-1.339c-.16-.495-.59-.924-1.448-1.782l-1.597-1.597c-.858-.858-1.287-1.287-1.782-1.448a2.17 2.17 0 0 0-1.339 0c-.495.16-.924.59-1.782 1.448L6.784 38.716c-.858.858-1.287 1.287-1.447 1.782a2.17 2.17 0 0 0 0 1.339c.16.495.59.924 1.447 1.782l1.598 1.597c.858.858 1.287 1.287 1.782 1.448.435.141.903.141 1.338 0 .495-.16.924-.59 1.782-1.448"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43732"
        x1="26.46"
        x2="26.46"
        y1="46.77"
        y2="4.334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A8FA4"></stop>
        <stop offset="0.6" stopColor="#1C2B33"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default WandIcon;
