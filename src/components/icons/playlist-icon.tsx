import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const PlaylistIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43703)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M4.334 26h43.333M4.334 15.168h10.833m21.667 0h10.833M4.334 36.834h10.833m21.667 0h10.833m-32.5 10.833V4.334m21.667 43.333V4.334m-22.1 43.333h22.533c3.64 0 5.46 0 6.851-.708a6.5 6.5 0 0 0 2.84-2.84c.71-1.391.71-3.211.71-6.852V14.734c0-3.64 0-5.46-.71-6.851a6.5 6.5 0 0 0-2.84-2.84c-1.39-.709-3.21-.709-6.85-.709H14.733c-3.64 0-5.46 0-6.851.708a6.5 6.5 0 0 0-2.84 2.841c-.709 1.39-.709 3.21-.709 6.851v22.533c0 3.64 0 5.46.708 6.851a6.5 6.5 0 0 0 2.841 2.84c1.39.71 3.21.71 6.851.71"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43703"
        x1="26.001"
        x2="26.001"
        y1="47.667"
        y2="4.334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A8FA4"></stop>
        <stop offset="0.6" stopColor="#1C2B33"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default PlaylistIcon;
