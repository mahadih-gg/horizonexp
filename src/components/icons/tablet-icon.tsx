import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const TabletIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[52px]", className)}
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43686)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M6.5 34.666V15.599c0-2.427 0-3.64.473-4.567a4.33 4.33 0 0 1 1.894-1.894c.927-.472 2.14-.472 4.567-.472h25.133c2.427 0 3.64 0 4.568.472a4.33 4.33 0 0 1 1.893 1.894c.473.927.473 2.14.473 4.567v19.067H33.937c-.53 0-.795 0-1.045.06-.22.053-.432.14-.626.26-.219.133-.406.32-.78.695l-.137.136c-.374.375-.562.562-.78.696a2.2 2.2 0 0 1-.627.26c-.249.06-.514.06-1.044.06h-5.795c-.53 0-.795 0-1.044-.06a2.2 2.2 0 0 1-.626-.26c-.219-.134-.406-.321-.781-.696l-.136-.136c-.375-.374-.562-.562-.78-.696a2.2 2.2 0 0 0-.627-.26c-.25-.059-.514-.059-1.044-.059zm0 0c-1.196 0-2.166.97-2.166 2.167v.722c0 1.343 0 2.015.148 2.566a4.33 4.33 0 0 0 3.064 3.064c.55.148 1.222.148 2.566.148h31.777c1.344 0 2.015 0 2.566-.148a4.33 4.33 0 0 0 3.065-3.064c.147-.551.147-1.223.147-2.566 0-.672 0-1.008-.074-1.283a2.17 2.17 0 0 0-1.532-1.532c-.275-.074-.61-.074-1.283-.074h-1.444"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43686"
        x1="26.001"
        x2="26.001"
        y1="43.333"
        y2="8.666"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A8FA4"></stop>
        <stop offset="0.6" stopColor="#1C2B33"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default TabletIcon;
