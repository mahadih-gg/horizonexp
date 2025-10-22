import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const XIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[24px]", className)}
    fill="none"
    viewBox="0 0 24 24"
  >
    <rect width="24" height="24" fill="#fff" rx="12"></rect>
    <path
      fill="#1C2B33"
      d="M15.775 5.97h1.992l-4.375 4.982 5.112 6.758h-4.011l-3.141-4.107-3.596 4.107H5.764l4.635-5.328L5.504 5.97h4.11l2.838 3.751zm-.698 10.57h1.105L9.034 7.098H7.847z"
    ></path>
  </svg>
);

export default XIcon;
