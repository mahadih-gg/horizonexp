import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGSVGElement>;

const HmTiktokIcon: React.FC<PropsType> = ({ className, ...props }) => (
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
    <path d="M31.2196 18.5381C31.0396 18.5556 30.8588 18.5648 30.678 18.5656C28.694 18.5659 26.8435 17.5642 25.7567 15.9015V24.9734C25.7567 28.6764 22.7598 31.6783 19.0629 31.6783C15.3661 31.6783 12.3691 28.6764 12.3691 24.9734C12.3691 21.2703 15.3661 18.2684 19.0629 18.2684C19.2027 18.2684 19.3393 18.281 19.4766 18.2896V21.5937C19.3393 21.5772 19.2042 21.5521 19.0629 21.5521C17.1761 21.5521 15.6466 23.0842 15.6466 24.9741C15.6466 26.8641 17.1761 28.3962 19.0629 28.3962C20.9501 28.3962 22.6167 26.9069 22.6167 25.0166L22.6497 9.60938H25.8054C26.103 12.444 28.3848 14.6581 31.2228 14.866V18.5381" fill="white" />
  </svg>
);

export default HmTiktokIcon;
