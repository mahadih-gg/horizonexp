import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const ClockIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[40px]", className)}
    fill="none"
    viewBox="0 0 40 40"
  >
    <path
      stroke="#1C2B33"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.333"
      d="M20 10v10l6.667 3.333m10-3.333c0 9.204-7.462 16.666-16.667 16.666S3.333 29.204 3.333 20 10.795 3.333 20 3.333 36.667 10.795 36.667 20"
    ></path>
  </svg>
);

export default ClockIcon;
