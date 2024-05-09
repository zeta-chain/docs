import Link from "next/link";

import { globalLinks } from "~/constants";

import { ErrorContainer } from "./ErrorContainer";

export const ServerError: React.FC = () => {
  return (
    <ErrorContainer title="Sorry! We ran into an issue.">
      <p className="text-center text-grey-400 dark:text-grey-300">
        The team has been notified of this error. If you continue to run into issues, chat with the team on{" "}
        <Link
          href={globalLinks.discordLink}
          target="_blank"
          className="inline font-semibold text-green-500 dark:text-green-100 hover:text-green-400 dark:hover:text-green-200 transition-all duration-200"
        >
          Discord
        </Link>
        !
      </p>
    </ErrorContainer>
  );
};
