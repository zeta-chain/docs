import { Typography } from "@mui/material";

type PageBlockedProps = {
  title: string;
  subtitle?: string;
};

export const PageBlocked: React.FC<PageBlockedProps> = ({ title, subtitle }) => {
  return (
    <div className="my-[60px] md:my-[88px] flex justify-center">
      <div className="flex justify-center flex-col items-center h-full w-full sm:max-w-[410px] gap-[16px]">
        <Typography variant="heading2" className="text-center mb-1">
          {title}
        </Typography>

        {subtitle && <Typography className="text-center mb-3">{subtitle}</Typography>}
      </div>
    </div>
  );
};
