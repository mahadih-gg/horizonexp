import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const TeamIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43741)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M41.167 45.5v-13m-6.5 6.5h13m-21.666-6.5h-8.667c-4.038 0-6.057 0-7.65.66a8.67 8.67 0 0 0-4.69 4.69c-.66 1.593-.66 3.612-.66 7.65m29.25-38.37a8.67 8.67 0 0 1 0 16.073m-4.333-8.036a8.667 8.667 0 1 1-17.334 0 8.667 8.667 0 0 1 17.334 0"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43741"
        x1="26.001"
        x2="26.001"
        y1="45.5"
        y2="6.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A8FA4"></stop>
        <stop offset="0.6" stopColor="#002253"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default TeamIcon;
