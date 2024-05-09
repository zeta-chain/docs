import { ErrorContainer } from "./ErrorContainer";

export const PageNotFound: React.FC = () => {
  return (
    <ErrorContainer title="Not Found">
      <p className="text-center text-grey-400 dark:text-grey-300">
        We were unable to find this page. Please make sure the url you are trying to visit is valid.
      </p>
    </ErrorContainer>
  );
};
