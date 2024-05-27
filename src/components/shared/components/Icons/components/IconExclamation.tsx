import clsx from "clsx";
import { SVGProps } from "react";

const IconExclamation = <T extends unknown>({
  color,
  ...otherProps
}: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-400 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.61812 3.625C10.6766 1.79167 13.3228 1.79167 14.3813 3.625L21.3095 15.625C22.3679 17.4583 21.0448 19.75 18.9279 19.75H5.07149C2.95453 19.75 1.63144 17.4583 2.68992 15.625L9.61812 3.625ZM13.0822 4.375C12.6011 3.54167 11.3983 3.54167 10.9172 4.375L3.98895 16.375C3.50783 17.2083 4.10924 18.25 5.07149 18.25H18.9279C19.8901 18.25 20.4915 17.2083 20.0104 16.375L13.0822 4.375ZM12.7497 8.25V11.75H11.2497V8.25H12.7497ZM11.2497 15C11.2497 14.5858 11.5855 14.25 11.9997 14.25H12.0097C12.4239 14.25 12.7597 14.5858 12.7597 15C12.7597 15.4142 12.4239 15.75 12.0097 15.75H11.9997C11.5855 15.75 11.2497 15.4142 11.2497 15Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconExclamation };
