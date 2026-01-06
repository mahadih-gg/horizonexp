import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const GradShoppingCartIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43683)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M4.334 4.334h2.83c.533 0 .8 0 1.014.098.19.086.35.225.461.4.128.199.166.463.24.99l1.026 7.179m0 0 2.28 16.751c.289 2.126.433 3.189.941 3.989a4.33 4.33 0 0 0 1.85 1.614c.86.396 1.933.396 4.079.396h18.542c2.042 0 3.063 0 3.897-.368a4.33 4.33 0 0 0 1.823-1.508c.517-.751.708-1.754 1.09-3.76l2.868-15.057c.135-.706.202-1.059.105-1.335a1.08 1.08 0 0 0-.476-.575c-.253-.147-.613-.147-1.331-.147zm11.762 32.5a2.167 2.167 0 1 1-4.333 0 2.167 2.167 0 0 1 4.333 0m17.334 0a2.167 2.167 0 1 1-4.334 0 2.167 2.167 0 0 1 4.334 0"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43683"
        x1="25.88"
        x2="25.88"
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

export default GradShoppingCartIcon;
