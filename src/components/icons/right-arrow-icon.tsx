import { cn } from "@/lib/utils";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const RightArrowIcon: React.FC<PropsType> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[18px]", className)}
      viewBox="0 0 18 18"
    >
      <path
        stroke="#1C2B33"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 9h12m0 0-4.5-4.5M15 9l-4.5 4.5"
      ></path>
    </svg>
  );
};

export default RightArrowIcon;