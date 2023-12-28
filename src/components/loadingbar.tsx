import React from "react";
import '../styles/style.css';

interface LoadingBarProps {
  width: number;
  height: number;
  myClass: string;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ width, height, myClass }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${myClass} text-blue-500`}
      height={height}
    >
      <rect className={`w-full`} height={height} fill="#FFFFFF" />
      <rect className={`w-full loading-progress`} height={height} fill="#D9E0E5" />
    </svg>
  );
};

export default LoadingBar;
