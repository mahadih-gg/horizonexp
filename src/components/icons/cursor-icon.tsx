import { cn } from "@/lib/utils";
import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const CursorIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-[40px]", className)}
    fill="none"
    viewBox="0 0 40 40"
  >
    <path
      stroke="#1C2B33"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.333"
      d="M34.176 17.96c1.028-.4 1.542-.6 1.686-.882a.83.83 0 0 0-.01-.777c-.152-.279-.67-.465-1.71-.838L7.66 5.956c-.85-.305-1.274-.457-1.552-.361a.83.83 0 0 0-.515.515c-.096.277.057.702.362 1.552l9.506 26.483c.373 1.038.56 1.557.838 1.709a.83.83 0 0 0 .777.01c.283-.144.483-.658.883-1.687l4.328-11.129c.078-.201.117-.302.178-.387a.8.8 0 0 1 .194-.194c.085-.06.186-.1.387-.178z"
    ></path>
  </svg>
);

export default CursorIcon;
