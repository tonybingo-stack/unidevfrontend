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
    //   viewBox={`0 0 ${width} ${height}`}
    //   width={width}
      height={height}
      className="text-blue-500 w-full"
    >
      <rect className={`${myClass}`} height={height} fill="#FFFFFF" />
      <rect className={`${myClass} loading-progress`}  height={height} fill="#D9E0E5" />
    </svg>
  );
};

export default LoadingBar;
