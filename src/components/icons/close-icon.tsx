import { cn } from "@/lib/utils";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const CloseIcon: React.FC<PropsType> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[24px]", className)}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#1C2B33"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 6 6 18M6 6l12 12"
      ></path>
    </svg>
  )
}

export default CloseIcon