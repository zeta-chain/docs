import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/material/styles";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import tw, { GlobalStyles } from "twin.macro";

import { useInitSentryClient, useSubscribeToPageChangeAnalytics } from "../hooks";
import { store } from "../lib/store";
import { theme } from "../lib/theme";

export const createEmotionCache = () => createCache({ key: "css", prepend: true });

const GlobalStylesWrapper = styled.div`
  ${tw`antialiased font-roobert text-black dark:text-white bg-grey-50 dark:bg-grey-900 min-w-[320px]`};
  scrollbar-gutter: "stable";

  .navbar {
    border-bottom: 1px solid;
    ${tw`antialiased font-roobert text-black dark:text-white bg-grey-50 dark:bg-grey-900 border-grey-200 dark:border-grey-600 shadow-none sticky w-full`};
  }

  .main-wrapper {
    padding-top: 60px;
  }

  main {
    margin-top: -50px;
  }

  ::-webkit-scrollbar {
    ${tw`block overflow-auto w-[8px] h-[8px] bg-none`}
  }

  ::-webkit-scrollbar-thumb {
    ${tw`bg-grey-300 dark:bg-grey-700 rounded-full`}
  }

  ::-webkit-scrollbar-corner {
    background-color: "transparent";
  }
`;

const clientSideEmotionCache = createEmotionCache();

const Root: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  useSubscribeToPageChangeAnalytics();
  useInitSentryClient();

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyles />
          <GlobalStylesWrapper>{children}</GlobalStylesWrapper>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Root;
