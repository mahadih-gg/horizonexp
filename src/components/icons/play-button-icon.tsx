import * as React from "react";

type PropsType = {
  className?: string;
} & React.SVGProps<SVGElement>;

const PlayButtonIcon: React.FC<PropsType> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="52"
    fill="none"
    viewBox="0 0 52 52"
  >
    <path
      stroke="url(#paint0_linear_887_43689)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M20.583 19.425c0-1.034 0-1.551.216-1.84.189-.252.477-.409.79-.431.36-.026.795.254 1.665.813l10.228 6.575c.755.485 1.132.728 1.263 1.036.113.27.113.574 0 .844-.13.308-.508.55-1.263 1.036l-10.228 6.575c-.87.56-1.305.839-1.665.813a1.08 1.08 0 0 1-.79-.431c-.216-.289-.216-.806-.216-1.84z"
    ></path>
    <path
      stroke="url(#paint1_linear_887_43689)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.25"
      d="M6.5 16.9c0-3.64 0-5.46.708-6.85a6.5 6.5 0 0 1 2.841-2.842C11.44 6.5 13.26 6.5 16.9 6.5h18.2c3.64 0 5.46 0 6.85.708a6.5 6.5 0 0 1 2.841 2.841c.709 1.39.709 3.21.709 6.851v18.2c0 3.64 0 5.46-.709 6.85a6.5 6.5 0 0 1-2.84 2.841c-1.39.709-3.21.709-6.851.709H16.9c-3.64 0-5.46 0-6.85-.709a6.5 6.5 0 0 1-2.842-2.84C6.5 40.56 6.5 38.74 6.5 35.1z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_887_43689"
        x1="26"
        x2="26"
        y1="45.5"
        y2="6.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A8FA4"></stop>
        <stop offset="0.6" stopColor="#1C2B33"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_887_43689"
        x1="26"
        x2="26"
        y1="45.5"
        y2="6.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7A8FA4"></stop>
        <stop offset="0.6" stopColor="#1C2B33"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default PlayButtonIcon;
