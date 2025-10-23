import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const WebsiteMonitorIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43680)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M17.334 45.5h17.333m-8.666-8.667V45.5m-11.267-8.667h22.533c3.64 0 5.46 0 6.851-.708a6.5 6.5 0 0 0 2.84-2.84c.71-1.391.71-3.211.71-6.852V16.9c0-3.64 0-5.46-.71-6.85a6.5 6.5 0 0 0-2.84-2.842c-1.39-.708-3.21-.708-6.85-.708H14.733c-3.64 0-5.46 0-6.851.708a6.5 6.5 0 0 0-2.84 2.841c-.709 1.39-.709 3.21-.709 6.851v9.533c0 3.64 0 5.46.708 6.851a6.5 6.5 0 0 0 2.841 2.84c1.39.71 3.21.71 6.851.71"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43680"
        x1="26.001"
        x2="26.001"
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

export default WebsiteMonitorIcon;
