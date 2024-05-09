import { NextPage } from "next";

import { environment } from "../env.cjs";

export const withProviders =
  () =>
  <Props extends Record<string, any> = {}, InitialProps = Props>(
    PageComponent: NextPage<Props, InitialProps>
  ): NextPage<Props, InitialProps> => {
    const WithProviders = ({ session, ...props }: any) => <PageComponent {...props} />;

    if (environment.NEXT_PUBLIC_VERCEL_ENV !== "production") {
      const displayName = PageComponent.displayName || PageComponent.name || "Component";

      WithProviders.displayName = `withProviders(${displayName})`;
    }

    WithProviders.getInitialProps = PageComponent.getInitialProps;

    return WithProviders;
  };
