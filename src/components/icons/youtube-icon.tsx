import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const YoutubeIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[24px]", className)}
    fill="none"
    viewBox="0 0 24 24"
  >
    <g fill="#fff" clipPath="url(#clip0_887_43533)">
      <path d="m10.402 14.312 3.928-2.306-3.928-2.307z"></path>
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0m6 14.147c0 2.067-2.067 2.067-2.067 2.067H8.067C6 16.214 6 14.147 6 14.147v-4.29c0-2.066 2.067-2.066 2.067-2.066h7.866C18 7.79 18 9.858 18 9.858z"></path>
    </g>
    <defs>
      <clipPath id="clip0_887_43533">
        <path fill="#fff" d="M0 0h24v24H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default YoutubeIcon;
