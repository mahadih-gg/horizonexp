import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGSVGElement>;

const HmXIcon: React.FC<PropsType> = ({ className, ...props }) => (
  <svg
    width="43"
    height="43"
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[32px] 2xl:size-[42px]", className)}
    {...props}
  >
    <rect x="0.666667" y="0.666667" width="41.3333" height="41.3333" rx="20.6667" fill="#1C2B33" />
    <rect x="0.666667" y="0.666667" width="41.3333" height="41.3333" rx="20.6667" stroke="#1C2B33" strokeWidth="1.33333" />
    <path d="M23.3773 19.6537L31.37 10.3628H29.476L22.5359 18.43L16.9929 10.3628H10.5996L18.9818 22.5618L10.5996 32.3048H12.4937L19.8227 23.7856L25.6765 32.3048H32.0698L23.3768 19.6537H23.3773ZM20.783 22.6693L19.9337 21.4545L13.1762 11.7887H16.0855L21.5389 19.5893L22.3882 20.8041L29.4769 30.9438H26.5676L20.783 22.6698V22.6693Z" fill="white" />
  </svg>
);

export default HmXIcon;
