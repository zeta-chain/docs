import React from "react";

interface Props extends React.ComponentPropsWithRef<"svg"> {
  size?: number;
  color?: string;
}

export const IconTelegram = ({ size = 20, color = "currentColor", ...other }: Props) => {
  return (
    <svg width={size} height={size} {...other} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.9055 43.3205C25.8135 43.3205 26.2145 42.9053 26.7215 42.4125L31.5642 37.7036L25.5235 34.0609"
        fill={color}
      />
      <path
        d="M25.5229 34.0619L40.16 44.876C41.8305 45.7976 43.0357 45.3203 43.4519 43.3254L49.4099 15.2488C50.0198 12.8032 48.4777 11.6936 46.8796 12.4191L11.894 25.9094C9.50589 26.8674 9.52011 28.1998 11.4587 28.7933L20.4368 31.5957L41.2221 18.4825C42.2034 17.8875 43.1041 18.2071 42.365 18.8633"
        fill={color}
      />
    </svg>
  );
};
