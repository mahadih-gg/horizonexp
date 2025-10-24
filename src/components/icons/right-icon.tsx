import { cn } from "@/lib/utils";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const RightIcon: React.FC<PropsType> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[20px]", className)}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#1C2B33"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m8.125 15 5-5-5-5"
      ></path>
    </svg>
  );
};

export default RightIcon;