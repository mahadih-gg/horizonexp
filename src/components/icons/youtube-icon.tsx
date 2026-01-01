import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const YoutubeIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[24px]", className)}
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#clip0_3020_6530)">
      <path d="M10.4023 14.3098L14.3305 12.0035L10.4023 9.69727V14.3098Z" fill="white" />
      <path d="M12 -0.00195312C5.37188 -0.00195312 0 5.36992 0 11.998C0 18.6262 5.37188 23.998 12 23.998C18.6281 23.998 24 18.6262 24 11.998C24 5.36992 18.6281 -0.00195312 12 -0.00195312ZM18 14.1449C18 16.2121 15.9328 16.2121 15.9328 16.2121H8.06719C6 16.2121 6 14.1449 6 14.1449V9.85586C6 7.78867 8.06719 7.78867 8.06719 7.78867H15.9328C18 7.78867 18 9.85586 18 9.85586V14.1449Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_3020_6530">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default YoutubeIcon;
