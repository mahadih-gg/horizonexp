import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const PriceTagIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43696)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M17.334 17.334h.022M4.334 11.267v9.695c0 1.06 0 1.59.12 2.089.106.442.281.865.519 1.252.268.438.642.812 1.392 1.562L22.98 42.48c2.574 2.574 3.861 3.861 5.345 4.344a6.5 6.5 0 0 0 4.018 0c1.484-.483 2.77-1.77 5.345-4.344l4.792-4.792c2.574-2.574 3.861-3.861 4.344-5.345a6.5 6.5 0 0 0 0-4.018c-.483-1.484-1.77-2.77-4.344-5.345L25.865 6.365c-.75-.75-1.124-1.124-1.562-1.392a4.3 4.3 0 0 0-1.252-.52c-.5-.119-1.029-.119-2.089-.119h-9.695c-2.427 0-3.64 0-4.567.472A4.33 4.33 0 0 0 4.806 6.7c-.472.927-.472 2.14-.472 4.567m14.083 6.067a1.083 1.083 0 1 1-2.166 0 1.083 1.083 0 0 1 2.166 0"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43696"
        x1="25.738"
        x2="25.738"
        y1="47.142"
        y2="4.334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A8FA4"></stop>
        <stop offset="0.6" stopColor="#1C2B33"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default PriceTagIcon;
