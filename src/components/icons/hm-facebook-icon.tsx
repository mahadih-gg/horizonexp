import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGSVGElement>;

const HmFacebookIcon: React.FC<PropsType> = ({ className, ...props }) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[32px] 2xl:size-[42px]", className)}
    {...props}
  >
    <rect x="1.33268" y="1.33317" width="41.3333" height="41.3333" rx="20.6667" fill="#1C2B33" />
    <rect x="1.33268" y="1.33317" width="41.3333" height="41.3333" rx="20.6667" stroke="#1C2B33" strokeWidth="1.33333" />
    <path d="M18.7525 33.1808H23.2707V22.4894H27.041L27.6039 18.3229H23.2707V15.6627C23.2707 14.4581 23.6231 13.635 25.4411 13.635H27.7585V9.9078C27.3554 9.85711 25.9811 9.74365 24.3813 9.74365C21.0395 9.74365 18.7525 11.6845 18.7525 15.2499V18.3229H14.9746V22.4894H18.7525V33.1808Z" fill="white" />
  </svg>
);

export default HmFacebookIcon;
