import Link from "next/link";

import { globalLinks } from "~/constants";

import { ThemeToggle } from "../../ThemeToggle";
import { ErrorContainer } from "./ErrorContainer";

export const ServerError: React.FC = () => {
  return (
    <>
      <div className="hidden sm:flex justify-end px-4 py-5 sm:py-8 sm:px-6 md:px-[72px]">
        <ThemeToggle />
      </div>

      <ErrorContainer title="Sorry! We ran into an issue.">
        <p className="text-center text-grey-400 dark:text-grey-300">
          The team has been notified of this error. If you continue to run into issues, chat with the team on{" "}
          <Link
            href={globalLinks.discordLink}
            target="_blank"
            className="inline font-medium text-green-500 dark:text-green-100 hover:text-green-400 dark:hover:text-green-200 transition-all"
          >
            Discord
          </Link>
          !
        </p>
      </ErrorContainer>
    </>
  );
};
