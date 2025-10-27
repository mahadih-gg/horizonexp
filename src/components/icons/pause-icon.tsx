import { cn } from "@/lib/utils";

type PropsType = React.SVGProps<SVGElement>;

const PauseIcon: React.FC<PropsType> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[13px]", className)}
      viewBox="0 0 13 13"
    >
      <g fill="#fff" clipPath="url(#clip0_1244_7369)">
        <path d="M5.313.781H1.874V11.72h3.438zM10.627.781H7.189V11.72h3.438z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1244_7369">
          <path fill="#fff" d="M0 0h12.5v12.5H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default PauseIcon;