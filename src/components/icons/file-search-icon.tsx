import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const FileSearchIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[40px]", className)}
    fill="none"
    viewBox="0 0 40 40"
  >
    <path
      stroke="#002253"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.333"
      d="M33.333 17.5v-6.167c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185c-1.07-.545-2.47-.545-5.27-.545H14.667c-2.8 0-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185c-.545 1.07-.545 2.47-.545 5.27v17.333c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c1.07.545 2.47.545 5.27.545h4.5m17.5 0-2.5-2.5M35.833 30a5.833 5.833 0 1 1-11.666 0 5.833 5.833 0 0 1 11.666 0"
    ></path>
  </svg>
);

export default FileSearchIcon;
