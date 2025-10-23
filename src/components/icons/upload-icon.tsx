import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const UploadIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43725)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M45.5 32.5v2.6c0 3.64 0 5.46-.709 6.85a6.5 6.5 0 0 1-2.84 2.841c-1.39.709-3.21.709-6.851.709H16.9c-3.64 0-5.46 0-6.85-.709a6.5 6.5 0 0 1-2.842-2.84C6.5 40.56 6.5 38.74 6.5 35.1v-2.6m30.333-15.167L26 6.5m0 0L15.167 17.333M26 6.5v26"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43725"
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

export default UploadIcon;
