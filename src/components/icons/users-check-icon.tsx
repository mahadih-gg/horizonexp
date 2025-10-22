import * as React from "react";

const UsersCheckIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="none"
    viewBox="0 0 30 30"
  >
    <path
      stroke="#1C2B33"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.875"
      d="m20 22.5 2.5 2.5 5-5M15 18.75h-5c-2.33 0-3.495 0-4.413.38a5 5 0 0 0-2.706 2.707C2.5 22.755 2.5 23.92 2.5 26.25M19.375 4.113a5.002 5.002 0 0 1 0 9.274m-2.5-4.637a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
    ></path>
  </svg>
);

export default UsersCheckIcon;
