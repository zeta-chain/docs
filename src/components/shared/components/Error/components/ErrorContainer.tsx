import { Typography } from "@mui/material";
import Link from "next/link";

export const ErrorContainer: React.FC<ErrorContainerProps> = ({ title, children }) => {
  return (
    <div className="my-[60px] md:my-[88px] flex justify-center">
      <div className="flex justify-center flex-col items-center h-full w-full sm:max-w-[500px] gap-[16px]">
        <Typography variant="headline1" className="text-center">
          {title}
        </Typography>

        <div className="mb-2 px-4">{children}</div>

        <Link href="/">
          <button
            type="button"
            className="text-grey-50 bg-green-500 hover:bg-green-600 px-4 py-1.5 rounded-b font-medium"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

interface ErrorContainerProps {
  title: string;
  children: React.ReactNode;
}
