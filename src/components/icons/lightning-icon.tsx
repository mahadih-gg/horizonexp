import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const LightningIcon: React.FC<PropsType> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={cn("size-[52px]", className)} viewBox="0 0 52 52" fill="none">
    <path d="M19.5007 37.9167H7.58398M14.084 26H4.33398M19.5007 14.0833H8.66732M36.834 6.5L22.5417 26.5092C21.9091 27.3948 21.5928 27.8376 21.6065 28.2068C21.6184 28.5282 21.7726 28.8277 22.0272 29.0243C22.3197 29.25 22.8638 29.25 23.9522 29.25H34.6673L32.5007 45.5L46.7929 25.4908C47.4255 24.6052 47.7418 24.1624 47.7281 23.7932C47.7162 23.4718 47.5621 23.1723 47.3074 22.9757C47.015 22.75 46.4708 22.75 45.3825 22.75H34.6673L36.834 6.5Z" stroke="url(#paint0_linear_887_43692)" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round" />
    <defs>
      <linearGradient id="paint0_linear_887_43692" x1="26.0313" y1="45.5" x2="26.0313" y2="6.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7A8FA4" />
        <stop offset="0.6" stop-color="#1C2B33" />
      </linearGradient>
    </defs>
  </svg>
);

export default LightningIcon;
