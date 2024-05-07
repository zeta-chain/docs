import { Alert as MuiAlert, AlertTitle, Typography } from "@mui/material";
import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import tw, { styled } from "twin.macro";

import { HeroIconFire, HeroIconLightBulb, IconExclamationCircle } from "./Icons";

type AlertVariant = "note" | "tip" | "danger" | "info";

type AlertProps = PropsWithChildren<{
  variant: AlertVariant;
  className?: string;
}>;

const variantToIcon: Record<AlertVariant, ReactNode> = {
  note: <IconExclamationCircle className="text-black dark:text-grey-50" height={16} width={16} />,
  tip: <HeroIconLightBulb className="text-black dark:text-grey-50" height={16} width={16} />,
  danger: <HeroIconFire className="text-black dark:text-grey-50" height={16} width={16} />,
  info: <IconExclamationCircle className="text-black dark:text-grey-50" height={16} width={16} />,
};

const StyledAlertContent = styled.span`
  &&,
  p {
    ${tw`text-sm text-black dark:text-grey-50 text-opacity-70`}
  }
`;

export const Alert: React.FC<AlertProps> = ({ variant, className, children }) => {
  return (
    <MuiAlert
      className={clsx(
        "mt-6 border-l-[5px] rounded-lg",
        {
          "bg-grey-100 dark:bg-grey-500 border-grey-300 dark:border-grey-200": variant === "note",
          "bg-[#e6f6e6] dark:bg-[#003100] border-[#009400] dark:border-[#009400]": variant === "tip",
          "bg-[#ffebec] dark:bg-[#4b1113] border-[#e13238] dark:border-[#e13238]": variant === "danger",
          "bg-[#eef9fd] dark:bg-[#193c47] border-[#4cb2d4] dark:border-[#4cb2d4]": variant === "info",
        },
        className
      )}
      icon={false}
    >
      <AlertTitle className="flex items-center gap-1">
        {variantToIcon[variant]}

        <Typography variant="caption" className="text-black dark:text-grey-50 uppercase tracking-wider font-medium">
          {variant}
        </Typography>
      </AlertTitle>

      <StyledAlertContent>{children}</StyledAlertContent>
    </MuiAlert>
  );
};
