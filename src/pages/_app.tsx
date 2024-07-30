import "src/styles/globals.css";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { compose } from "@reduxjs/toolkit";
import type { AppProps } from "next/app";
import Script from "next/script";

import { HeadProgressBar, Layout } from "~/components/shared";
import { AskCookbook } from "~/components/shared/components/AskCookbook";
import { environment } from "~/env.cjs";
import { useAppAnalytics } from "~/hooks/useAppAnalytics";
import { useAppDispatch, wrapper } from "~/lib/app.store";
import { createEmotionCache } from "~/lib/helpers/createEmotionCache";
import { useHydrateTheme } from "~/lib/theme/useHydrateTheme";
import { withProviders } from "~/lib/withProviders";
import { GlobalStyles } from "~/styles/GlobalStyles";

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps, ...rest }: AppProps & { emotionCache: EmotionCache }) => {
  const { emotionCache = clientSideEmotionCache, router } = rest;

  useAppAnalytics(router);

  const appDispatch = useAppDispatch();
  const { theme } = useHydrateTheme({ appDispatch });

  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <HeadProgressBar />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>

      {environment.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${environment.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${environment.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
      <AskCookbook />
    </>
  );
};

const hocs = compose(wrapper.withRedux, withProviders());

export default hocs(App);
