import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const HeartIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43709)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M33.683 21.506c.81-1.44 1.485-2.739 1.902-3.727 2.023-4.801.023-10.323-4.868-12.576-4.89-2.252-9.8.083-11.956 4.593-4.121-2.828-9.619-2.413-12.65 2s-2.08 10.18 2.072 13.325c1.884 1.428 5.611 3.532 9.12 5.405m18.008-5.067c-.914-4.914-5.095-8.508-10.36-7.531s-8.668 5.726-7.956 10.887c.571 4.147 3.727 13.875 4.946 17.54.167.5.25.75.414.924.144.152.334.262.538.31.233.055.491.002 1.007-.104 3.783-.776 13.786-2.907 17.663-4.485 4.825-1.964 7.315-7.284 5.45-12.334-1.865-5.051-6.989-6.872-11.702-5.207"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43709"
        x1="25.984"
        x2="25.984"
        y1="47.611"
        y2="4.334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A8FA4"></stop>
        <stop offset="0.6" stopColor="#1C2B33"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default HeartIcon;
