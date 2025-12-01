import { cn } from '@/lib/utils';

const CircleCheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-[58px]", className)}
      fill="none"
      viewBox="0 0 58 58"
    >
      <rect width="58" height="58" fill="#1C2B33" rx="29"></rect>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.867"
        d="M44.465 18.125 23.198 39.392l-9.667-9.667"
      ></path>
    </svg>
  );
};

export default CircleCheckIcon;