import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const CommentIcon: React.FC<PropsType> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={cn("size-[52px]", className)} viewBox="0 0 52 52" fill="none">
    <path d="M15.1667 18.4167H26M15.1667 26H32.5M15.1667 39V44.0603C15.1667 45.2148 15.1667 45.792 15.4033 46.0885C15.6091 46.3463 15.9213 46.4963 16.2512 46.496C16.6305 46.4956 17.0813 46.135 17.9828 45.4138L23.1513 41.279C24.2071 40.4343 24.735 40.012 25.3229 39.7116C25.8444 39.4452 26.3996 39.2505 26.9733 39.1327C27.6199 39 28.296 39 29.6481 39H35.1C38.7403 39 40.5605 39 41.9509 38.2915C43.174 37.6684 44.1684 36.674 44.7915 35.4509C45.5 34.0605 45.5 32.2403 45.5 28.6V16.9C45.5 13.2597 45.5 11.4395 44.7915 10.0491C44.1684 8.82601 43.174 7.83163 41.9509 7.20846C40.5605 6.5 38.7403 6.5 35.1 6.5H16.9C13.2597 6.5 11.4395 6.5 10.0491 7.20846C8.82601 7.83163 7.83163 8.82601 7.20846 10.0491C6.5 11.4395 6.5 13.2597 6.5 16.9V30.3333C6.5 32.3483 6.5 33.3557 6.72148 34.1823C7.32252 36.4254 9.07458 38.1775 11.3177 38.7785C12.1443 39 13.1517 39 15.1667 39Z" stroke="url(#paint0_linear_887_43713)" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round" />
    <defs>
      <linearGradient id="paint0_linear_887_43713" x1="26" y1="46.496" x2="26" y2="6.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7A8FA4" />
        <stop offset="0.6" stop-color="#1C2B33" />
      </linearGradient>
    </defs>
  </svg>
);

export default CommentIcon;
