import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = React.SVGProps<SVGElement>;

const PlayIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[13px]", className)}
    fill="none"
    viewBox="0 0 13 13"
  >
    <g clipPath="url(#clip0_1252_9599)">
      <path
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.204"
        d="M2.63 2.028c0-.585 0-.877.121-1.039a.6.6 0 0 1 .445-.237c.201-.012.445.15.931.474l6.333 4.222c.402.268.603.402.673.571a.6.6 0 0 1 0 .461c-.07.17-.27.303-.673.572l-6.333 4.221c-.486.325-.73.487-.931.475a.6.6 0 0 1-.445-.238c-.122-.161-.122-.453-.122-1.038z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_1252_9599">
        <path fill="#fff" d="M0 0h12.5v12.5H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default PlayIcon;
