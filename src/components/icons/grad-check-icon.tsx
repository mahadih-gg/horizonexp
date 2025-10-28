import { cn } from "@/lib/utils";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const GradCheckIcon: React.FC<PropsType> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[20px]", className)}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="url(#paint0_linear_947_32346)"
        fillRule="evenodd"
        d="M10 20c5.525 0 10-4.475 10-10S15.525 0 10 0 0 4.475 0 10s4.475 10 10 10m4.631-11.619a1.253 1.253 0 0 0 0-1.769 1.25 1.25 0 0 0-1.768 0l-4.12 4.12-1.618-1.62a1.25 1.25 0 0 0-1.769 0 1.25 1.25 0 0 0 0 1.77l2.5 2.5a1.253 1.253 0 0 0 1.769 0l5-5z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_947_32346"
          x1="10"
          x2="10"
          y1="20"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7A8FA4"></stop>
          <stop offset="0.6" stopColor="#1C2B33"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradCheckIcon;