import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const PollIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43719)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M17.334 28.167v8.667m17.333-13v13m-8.666-21.667v21.667m21.666-10.833c0 11.966-9.7 21.666-21.666 21.666s-21.667-9.7-21.667-21.666 9.7-21.667 21.667-21.667c11.966 0 21.666 9.7 21.666 21.667"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43719"
        x1="26.001"
        x2="26.001"
        y1="47.667"
        y2="4.334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A8FA4"></stop>
        <stop offset="0.6" stopColor="#002253"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default PollIcon;
