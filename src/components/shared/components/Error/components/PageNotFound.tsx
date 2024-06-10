import { ThemeToggle } from "../../ThemeToggle";
import { ErrorContainer } from "./ErrorContainer";

export const PageNotFound: React.FC = () => {
  return (
    <>
      <div className="hidden sm:flex justify-end px-4 py-5 sm:py-8 sm:px-6 md:px-[72px]">
        <ThemeToggle />
      </div>

      <ErrorContainer title="Not Found">
        <p className="text-center text-grey-400 dark:text-grey-300">
          We were unable to find this page. Please make sure the url you are trying to visit is valid.
        </p>
      </ErrorContainer>
    </>
  );
};
