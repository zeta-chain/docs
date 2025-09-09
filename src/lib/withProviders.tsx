import { NextPage } from "next";

import { PostHogProvider } from "../components/PostHogProvider";
import { environment } from "../env.cjs";

export const withProviders =
  () =>
  <Props extends Record<string, any> = {}, InitialProps = Props>(
    PageComponent: NextPage<Props, InitialProps>
  ): NextPage<Props, InitialProps> => {
    const WithProviders = ({ session, ...props }: any) => (
      <PostHogProvider>
        <PageComponent {...props} />
      </PostHogProvider>
    );

    if (environment.NEXT_PUBLIC_VERCEL_ENV !== "production") {
      const displayName = PageComponent.displayName || PageComponent.name || "Component";

      WithProviders.displayName = `withProviders(${displayName})`;
    }

    WithProviders.getInitialProps = PageComponent.getInitialProps;

    return WithProviders;
  };
