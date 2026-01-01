import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const XIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn("size-[24px]", className)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="12" fill="white" />
    <path d="M15.7748 5.9707H17.7675L13.3923 10.9524L18.5039 17.7101H14.4926L11.352 13.6035L7.75649 17.7101H5.76382L10.3989 12.3819L5.50391 5.9707H9.61487L12.4523 9.72212L15.7748 5.9707ZM15.0774 16.5405H16.182L9.0344 7.09699H7.84746L15.0774 16.5405Z" fill="#5781C4" />
  </svg>
);

export default XIcon;
