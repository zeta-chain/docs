import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { compose } from "@reduxjs/toolkit";
import type { AppProps } from "next/app";
import Script from "next/script";
import React from "react";

import { HeadProgressBar, Layout } from "~/components/shared";
import { environment } from "~/env.cjs";
import { useAppDispatch, wrapper } from "~/lib/app.store";
import { createEmotionCache } from "~/lib/helpers/createEmotionCache";
import { useHydrateTheme } from "~/lib/theme/useHydrateTheme";
import { withProviders } from "~/lib/withProviders";
import { GlobalStyles } from "~/styles/GlobalStyles";

const clientSideEmotionCache = createEmotionCache();

const textTargetTags = ["INPUT", "TEXTAREA"];

export const getIsTextTarget = (target: any) => target?.nodeName && textTargetTags.includes(target.nodeName);

const App = ({ Component, pageProps, ...rest }: AppProps & { emotionCache: EmotionCache }) => {
  const { emotionCache = clientSideEmotionCache, router } = rest;

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const isTextTarget = getIsTextTarget(e.target as HTMLInputElement);
      const key = e.key.toLowerCase();

      switch (key) {
        case "b": {
          if (e.shiftKey && !isTextTarget) {
            e.preventDefault();
            router.push("/developers");
          }
          break;
        }
        case "h": {
          if (e.shiftKey && !isTextTarget) {
            e.preventDefault();
            router.push("/");
          }
          break;
        }
        case "n": {
          if (e.shiftKey && !isTextTarget) {
            e.preventDefault();
            router.push("/nodes");
          }
          break;
        }
        case "u": {
          if (e.shiftKey && !isTextTarget) {
            e.preventDefault();
            router.push("/users");
          }
          break;
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

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
    </>
  );
};

const hocs = compose(wrapper.withRedux, withProviders());

export default hocs(App);
