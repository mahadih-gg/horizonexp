import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const DashboardIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43729)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="m45.5 19.5-13.972 9.98c-.424.303-.637.455-.864.5-.2.04-.408.024-.599-.05-.217-.082-.401-.266-.77-.635l-6.59-6.59c-.369-.369-.553-.553-.77-.636a1.1 1.1 0 0 0-.6-.05c-.226.046-.439.198-.863.501L6.5 32.5m10.4 13h18.2c3.64 0 5.46 0 6.85-.709a6.5 6.5 0 0 0 2.841-2.84c.709-1.39.709-3.21.709-6.851V16.9c0-3.64 0-5.46-.709-6.85a6.5 6.5 0 0 0-2.84-2.842C40.56 6.5 38.74 6.5 35.1 6.5H16.9c-3.64 0-5.46 0-6.85.708a6.5 6.5 0 0 0-2.842 2.841C6.5 11.44 6.5 13.26 6.5 16.9v18.2c0 3.64 0 5.46.708 6.85a6.5 6.5 0 0 0 2.841 2.841c1.39.709 3.21.709 6.851.709"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43729"
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

export default DashboardIcon;
