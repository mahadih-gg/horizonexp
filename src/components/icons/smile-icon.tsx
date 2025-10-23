import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const SmileIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43716)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M18.417 27.083s2.843 3.25 7.583 3.25 7.583-3.25 7.583-3.25M31.958 16.25h.022m-11.938 0h.021M15.167 39v5.06c0 1.155 0 1.732.236 2.029.206.257.518.407.848.407.38 0 .83-.361 1.732-1.082l5.168-4.135c1.056-.845 1.584-1.267 2.172-1.567a6.5 6.5 0 0 1 1.65-.58C27.62 39 28.296 39 29.648 39H35.1c3.64 0 5.46 0 6.85-.709a6.5 6.5 0 0 0 2.841-2.84c.709-1.39.709-3.21.709-6.851V16.9c0-3.64 0-5.46-.709-6.85a6.5 6.5 0 0 0-2.84-2.842C40.56 6.5 38.74 6.5 35.1 6.5H16.9c-3.64 0-5.46 0-6.85.708a6.5 6.5 0 0 0-2.842 2.841C6.5 11.44 6.5 13.26 6.5 16.9v13.433c0 2.015 0 3.023.221 3.85a6.5 6.5 0 0 0 4.597 4.596c.826.221 1.834.221 3.849.221m17.875-22.75a1.083 1.083 0 1 1-2.167 0 1.083 1.083 0 0 1 2.167 0m-11.917 0a1.083 1.083 0 1 1-2.167 0 1.083 1.083 0 0 1 2.167 0"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43716"
        x1="26"
        x2="26"
        y1="46.496"
        y2="6.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A8FA4"></stop>
        <stop offset="0.6" stopColor="#1C2B33"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default SmileIcon;
