import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const ShoppingCartIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[40px]", className)}
    fill="none"
    viewBox="0 0 40 40"
  >
    <path
      stroke="#002253"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.333"
      d="M3.333 3.333H5.51c.41 0 .615 0 .78.075a.83.83 0 0 1 .355.308c.098.153.127.356.185.762L7.62 10m0 0 1.752 12.885c.223 1.635.334 2.453.725 3.069.344.542.838.973 1.422 1.241.662.305 1.488.305 3.138.305H28.92c1.57 0 2.356 0 2.998-.283a3.33 3.33 0 0 0 1.403-1.16c.397-.578.544-1.35.838-2.893l2.206-11.582c.104-.543.155-.814.08-1.027a.83.83 0 0 0-.366-.442C35.885 10 35.61 10 35.055 10zm9.047 25a1.667 1.667 0 1 1-3.334 0 1.667 1.667 0 0 1 3.334 0M30 35a1.667 1.667 0 1 1-3.333 0A1.667 1.667 0 0 1 30 35"
    ></path>
  </svg>
);

export default ShoppingCartIcon;
