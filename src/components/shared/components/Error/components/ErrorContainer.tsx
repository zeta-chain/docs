import { Typography } from "@mui/material";

import { IconDocument } from "../../Icons";
import { PrimaryLink } from "../../Link";

type ErrorContainerProps = {
  title: string;
  children: React.ReactNode;
};

export const ErrorContainer: React.FC<ErrorContainerProps> = ({ title, children }) => {
  return (
    <div className="px-4 py-5 sm:py-8 sm:px-6 md:px-[72px] pt-10 md:pt-24 flex justify-center flex-grow">
      <div className="flex justify-center flex-col items-center h-full w-full sm:max-w-[500px] gap-[16px]">
        <Typography variant="headline1" className="text-center">
          {title}
        </Typography>

        <div className="mb-2 px-4">{children}</div>

        <PrimaryLink href="/" icon={<IconDocument />}>
          Home
        </PrimaryLink>
      </div>
    </div>
  );
};
