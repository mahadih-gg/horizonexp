import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const FrameIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43722)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M27.083 6.5H16.9c-3.64 0-5.46 0-6.85.71a6.5 6.5 0 0 0-2.842 2.84C6.5 11.44 6.5 13.26 6.5 16.9v18.2c0 3.641 0 5.461.708 6.852a6.5 6.5 0 0 0 2.841 2.84c1.39.709 3.21.709 6.851.709h19.933c2.015 0 3.023 0 3.85-.222a6.5 6.5 0 0 0 4.596-4.596c.221-.827.221-1.834.221-3.849m-4.333-19.5v-13m-6.5 6.5h13M22.75 18.417a4.333 4.333 0 1 1-8.667 0 4.333 4.333 0 0 1 8.667 0m9.728 7.406L14.151 42.485c-1.031.937-1.546 1.406-1.592 1.811-.04.352.095.701.361.935.307.27 1.004.27 2.397.27h20.338c3.118 0 4.677 0 5.901-.524a6.5 6.5 0 0 0 3.42-3.42c.524-1.224.524-2.784.524-5.902 0-1.049 0-1.574-.115-2.062a4.3 4.3 0 0 0-.81-1.685c-.31-.395-.72-.723-1.538-1.378l-6.061-4.849c-.82-.655-1.23-.983-1.681-1.1a2.17 2.17 0 0 0-1.208.039c-.443.144-.832.497-1.609 1.203"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43722"
        x1="27.083"
        x2="27.083"
        y1="45.501"
        y2="4.334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A8FA4"></stop>
        <stop offset="0.6" stopColor="#002253"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default FrameIcon;
