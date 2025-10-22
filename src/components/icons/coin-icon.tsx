import * as React from "react";

const CoinIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
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
      d="M19.922 19.922A8.752 8.752 0 0 0 18.75 2.5c-4.435 0-8.1 3.3-8.672 7.578M20 18.75a8.75 8.75 0 1 1-17.5 0 8.75 8.75 0 0 1 17.5 0"
    ></path>
  </svg>
);

export default CoinIcon;
