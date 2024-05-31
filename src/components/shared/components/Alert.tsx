import clsx from "clsx";
import { capitalize } from "lodash-es";
import { PropsWithChildren, ReactNode } from "react";
import tw, { styled } from "twin.macro";

import { IconExclamation, IconExclamationCircle, IconSparkle } from "./Icons";

type AlertVariant = "note" | "tip" | "warning" | "danger";

type AlertProps = PropsWithChildren<{
  variant?: AlertVariant;
  className?: string;
}>;

const variantToIcon: Record<AlertVariant, ReactNode> = {
  note: <IconExclamationCircle className="text-[#00A5C6] dark:text-[#B0FF61]" />,
  tip: <IconSparkle className="text-[#00A5C6] dark:text-[#B0FF61]" />,
  warning: <IconExclamationCircle className="text-black" />,
  danger: <IconExclamation className="text-white" />,
};

const StyledAlert = styled.div<{ variant: AlertVariant }>`
  ${tw`mt-6 p-4 md:p-8 rounded-lg flex items-center`}

  ${({ variant }) => (variant === "note" || variant === "tip") && tw`border border-grey-200 dark:border-grey-600`};
  ${({ variant }) => variant === "warning" && tw`bg-warning-500`};
  ${({ variant }) => variant === "danger" && tw`bg-negative-500`};

  .content {
    ${tw`font-medium text-sm leading-[135%]`}

    ${({ variant }) =>
      (variant === "note" || variant === "tip") && tw`text-grey-400 dark:text-grey-300 mt-[3px] sm:flex gap-1`};
    ${({ variant }) => variant === "warning" && tw`text-black mt-[3px]`};
    ${({ variant }) => variant === "danger" && tw`text-white mt-0.5`};

    a {
      ${({ variant }) => variant === "warning" && tw`!underline !text-black`};
      ${({ variant }) => variant === "danger" && tw`!underline !text-white`};
    }

    p {
      ${tw`mt-0 inline font-medium text-sm leading-[135%]`}
    }
  }
`;

export const Alert: React.FC<AlertProps> = ({ variant = "note", className, children }) => {
  return (
    <StyledAlert variant={variant} className={className}>
      <div
        className={clsx("flex", {
          "gap-2 sm:gap-4": variant === "note" || variant === "tip",
          "gap-2": variant === "warning" || variant === "danger",
        })}
      >
        <div className="shrink-0">{variantToIcon[variant]}</div>

        <div className="content">
          <span
            className={clsx({
              "font-semibold": variant === "note" || variant === "tip",
              uppercase: variant === "warning" || variant === "danger",
            })}
          ></span>
          <span>{children}</span>
        </div>
      </div>
    </StyledAlert>
  );
};
