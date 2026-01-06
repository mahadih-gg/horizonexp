import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const CommentIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[46px]", className)}
    fill="none"
    viewBox="0 0 46 46"
  >
    <path
      stroke="url(#paint0_linear_3088_6172)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.875"
      d="M13.417 16.292H23M13.417 23H28.75M13.417 34.5v4.476c0 1.022 0 1.532.209 1.795.182.228.458.36.75.36.336 0 .734-.32 1.532-.957l4.572-3.658c.934-.747 1.401-1.12 1.921-1.386a5.8 5.8 0 0 1 1.46-.513c.572-.117 1.17-.117 2.366-.117h4.823c3.22 0 4.83 0 6.06-.627a5.75 5.75 0 0 0 2.513-2.513c.627-1.23.627-2.84.627-6.06V14.95c0-3.22 0-4.83-.627-6.06a5.75 5.75 0 0 0-2.513-2.513c-1.23-.627-2.84-.627-6.06-.627h-16.1c-3.22 0-4.83 0-6.06.627A5.75 5.75 0 0 0 6.377 8.89c-.627 1.23-.627 2.84-.627 6.06v11.883c0 1.783 0 2.674.196 3.405a5.75 5.75 0 0 0 4.066 4.066c.731.196 1.622.196 3.405.196"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_3088_6172"
        x1="23"
        x2="23"
        y1="41.131"
        y2="5.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6E8193"></stop>
        <stop offset="0.6" stopColor="#002253"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default CommentIcon;
