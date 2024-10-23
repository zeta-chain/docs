import clsx from "clsx";
import { SVGProps } from "react";

const IconWelcome = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-400 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.70831 4.99992C2.70831 3.73427 3.73433 2.70825 4.99998 2.70825H8.95831V8.95825H2.70831V4.99992ZM4.99998 3.95825C4.42468 3.95825 3.95831 4.42462 3.95831 4.99992V7.70825H7.70831V3.95825H4.99998ZM11.0416 2.70825H15C16.2656 2.70825 17.2916 3.73427 17.2916 4.99992V8.95825H11.0416V2.70825ZM12.2916 3.95825V7.70825H16.0416V4.99992C16.0416 4.42462 15.5753 3.95825 15 3.95825H12.2916ZM2.70831 11.0416H8.95831V17.2916H4.99998C3.73433 17.2916 2.70831 16.2656 2.70831 14.9999V11.0416ZM3.95831 12.2916V14.9999C3.95831 15.5752 4.42468 16.0416 4.99998 16.0416H7.70831V12.2916H3.95831ZM11.0416 11.0416H17.2916V14.9999C17.2916 16.2656 16.2656 17.2916 15 17.2916H11.0416V11.0416ZM12.2916 12.2916V16.0416H15C15.5753 16.0416 16.0416 15.5752 16.0416 14.9999V12.2916H12.2916Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconWelcome };
