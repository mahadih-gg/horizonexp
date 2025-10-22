import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const DatabaseIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[30px]", className)}
    fill="none"
    viewBox="0 0 30 30"
  >
    <path
      stroke="#1C2B33"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.875"
      d="M26.25 6.25C26.25 8.321 21.213 10 15 10S3.75 8.321 3.75 6.25m22.5 0c0-2.071-5.037-3.75-11.25-3.75S3.75 4.179 3.75 6.25m22.5 0v17.5c0 2.075-5 3.75-11.25 3.75S3.75 25.825 3.75 23.75V6.25m22.5 5.9c0 2.075-5 3.75-11.25 3.75S3.75 14.225 3.75 12.15m22.5 5.9c0 2.075-5 3.75-11.25 3.75S3.75 20.125 3.75 18.05"
    ></path>
  </svg>
);

export default DatabaseIcon;
