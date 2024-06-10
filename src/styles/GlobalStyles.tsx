import { Global } from "@emotion/react";
import tw, { css } from "twin.macro";

const customStyles = css({
  body: {
    ...tw`antialiased font-primary text-black dark:text-white !bg-grey-50 dark:!bg-grey-900 min-w-[320px]`,
    scrollbarGutter: "stable",
  },

  "::selection": {
    ...tw`text-black dark:text-white bg-[#00A5C6]/20 dark:bg-[#B0FF61]/20`,
  },

  "::-webkit-scrollbar": {
    ...tw`block overflow-auto w-2 h-2 bg-none`,
  },

  "::-webkit-scrollbar-thumb": {
    ...tw`bg-grey-300 dark:bg-grey-700 rounded-full`,
  },

  "::-webkit-scrollbar-corner": {
    backgroundColor: "transparent",
  },
});

export const GlobalStyles = () => <Global styles={customStyles} />;
