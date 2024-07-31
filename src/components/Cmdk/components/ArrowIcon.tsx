import React from "react";

export const ArrowIcon: React.FC<ArrowIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6.93945L2.46967 11.4698C2.17678 11.7627 2.17678 12.2375 2.46967 12.5304L7 17.0608L8.06066 16.0001L4.81066 12.7501L21.75 12.7501L21.75 11.2501L4.81066 11.2501L8.06066 8.00011L7 6.93945Z"
        className="dark:fill-white fill-[#696E75]"
      />
    </svg>
  );
};

interface ArrowIconProps {
  className?: string;
}
