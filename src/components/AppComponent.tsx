import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { compose } from "@reduxjs/toolkit";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";

import { HeadProgressBar, Layout } from "~/components/shared";
import { environment } from "~/env.cjs";
import mixpanelService from "~/lib/analytics/mixpanel";
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

  // Initialize Mixpanel
  React.useEffect(() => {
    if (environment.NEXT_PUBLIC_MIXPANEL_TOKEN) {
      mixpanelService.init();
    }
  }, []);

  // Track route changes
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (environment.NEXT_PUBLIC_MIXPANEL_TOKEN) {
        mixpanelService.trackPageView();
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const isTextTarget = getIsTextTarget(e.target as HTMLInputElement);
      const key = e.key.toLowerCase();

      switch (key) {
        case "b": {
          if (e.shiftKey && !isTextTarget) {
            e.preventDefault();
            mixpanelService.trackKeyboardShortcut("Shift+B", "Navigate to Developers");
            router.push("/developers");
          }
          break;
        }
        case "h": {
          if (e.shiftKey && !isTextTarget) {
            e.preventDefault();
            mixpanelService.trackKeyboardShortcut("Shift+H", "Navigate to Home");
            router.push("/");
          }
          break;
        }
        case "n": {
          if (e.shiftKey && !isTextTarget) {
            e.preventDefault();
            mixpanelService.trackKeyboardShortcut("Shift+N", "Navigate to Nodes");
            router.push("/nodes");
          }
          break;
        }
        case "u": {
          if (e.shiftKey && !isTextTarget) {
            e.preventDefault();
            mixpanelService.trackKeyboardShortcut("Shift+U", "Navigate to Users");
            router.push("/users");
          }
          break;
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [router]);

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
