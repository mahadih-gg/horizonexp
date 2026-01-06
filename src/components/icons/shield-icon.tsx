import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const ShieldIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[30px]", className)}
    fill="none"
    viewBox="0 0 30 30"
  >
    <path
      stroke="#002253"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.875"
      d="M14.128 27.02c.276.161.415.242.61.284.151.032.373.032.524 0 .195-.042.334-.123.61-.284C18.309 25.599 25 21.137 25 15V9.024c0-1 0-1.5-.163-1.929a2.5 2.5 0 0 0-.684-.986c-.345-.304-.813-.48-1.748-.83l-6.703-2.514c-.26-.097-.39-.146-.523-.165a1.3 1.3 0 0 0-.358 0c-.133.02-.263.068-.523.165L7.596 5.278c-.936.35-1.404.526-1.749.83a2.5 2.5 0 0 0-.684.986C5 7.524 5 8.024 5 9.023V15c0 6.136 6.693 10.598 9.128 12.019"
    ></path>
  </svg>
);

export default ShieldIcon;
