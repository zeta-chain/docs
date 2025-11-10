import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { compose } from "@reduxjs/toolkit";
import Link from "next/link";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";

import { HeadProgressBar, Layout } from "~/components/shared";
import { ClientOnlyPortal } from "~/components/shared/components/ClientOnlyPortal";
import { environment } from "~/env.cjs";
import { basePath } from "~/lib/app.constants";
import { useAppDispatch, wrapper } from "~/lib/app.store";
import { createEmotionCache } from "~/lib/helpers/createEmotionCache";
import { useHydrateTheme } from "~/lib/theme/useHydrateTheme";
import { withProviders } from "~/lib/withProviders";
import { GlobalStyles } from "~/styles/GlobalStyles";

const clientSideEmotionCache = createEmotionCache();

const textTargetTags = ["INPUT", "TEXTAREA"];

export const getIsTextTarget = (target: any) => target?.nodeName && textTargetTags.includes(target.nodeName);

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const rawPath = router.asPath || "/";

  let normalized = rawPath;
  if (basePath && normalized.startsWith(basePath)) {
    normalized = normalized.slice(basePath.length) || "/";
  }

  const [pathAndQuery, hash] = normalized.split("#", 2);
  const [rawPathname, search] = pathAndQuery.split("?", 2);

  let pathname = rawPathname || "/";
  if (!pathname.startsWith("/")) pathname = `/${pathname}`;

  const isChinese = pathname === "/zh" || pathname.startsWith("/zh/");

  const englishPathname = isChinese ? pathname.replace(/^\/zh/, "") || "/" : pathname;
  const chinesePathname =
    pathname === "/"
      ? "/zh"
      : isChinese
      ? pathname
      : pathname.startsWith("/zh/")
      ? pathname
      : `/zh${pathname}`;

  const targetPathname = isChinese ? englishPathname : chinesePathname;

  let target = targetPathname || "/";
  if (search) target += `?${search}`;
  if (hash) target += `#${hash}`;

  const label = isChinese ? "English" : "中文";

  const linkClasses =
    "inline-flex items-center justify-center rounded-full border border-grey-200 dark:border-grey-600 px-3 py-1.5 text-sm font-medium text-grey-500 hover:text-black hover:border-grey-300 dark:text-grey-200 dark:hover:text-white transition-colors";

  const renderLink = (additionalClasses?: string) => (
    <Link key={additionalClasses ?? "default"} href={target} prefetch={false} className={`${linkClasses} ${additionalClasses ?? ""}`}>
      {label}
    </Link>
  );

  return (
    <>
      <ClientOnlyPortal selector=".nextra-nav-container nav">
        <div className="hidden sm:flex items-center gap-3 ml-4">{renderLink()}</div>
      </ClientOnlyPortal>

      <ClientOnlyPortal selector="#docs-mobile-language-switcher">
        {renderLink("sm:hidden")}
      </ClientOnlyPortal>
    </>
  );
};

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
            <LanguageSwitcher />
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
