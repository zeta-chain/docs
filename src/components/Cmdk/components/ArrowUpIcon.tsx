import clsx from "clsx";
import React from "react";

export const ArrowUpIcon: React.FC<ArrowUpIconProps> = ({ className, enabled }) => {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.55024 0H7.05024C7.32638 0 7.55024 0.223858 7.55024 0.5V5H6.55024V1.70711L0.928786 7.32856L0.22168 6.62145L5.84313 1H2.55024V0Z"
        className={clsx({
          "fill-black dark:fill-grey-300": !enabled,
          "fill-black": enabled,
        })}
      />
    </svg>
  );
};

interface ArrowUpIconProps {
  className: string;
  enabled: boolean;
}
