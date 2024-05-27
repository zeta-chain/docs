import { PropsWithChildren } from "react";
import tw, { styled } from "twin.macro";

import { NavigationLayout } from "./NavigationLayout";

const LayoutContainer = styled.div`
  ${tw`bg-grey-50 dark:bg-grey-900`};

  /* Base styles for rendered tables */
  table {
    ${tw`border-collapse`};

    tbody tr:nth-of-type(even) {
      ${tw`bg-[#FBFBFB] dark:bg-[#1B1F25]`};
    }

    tr {
      ${tw`border-t-0 border-b border-grey-200 dark:border-grey-600`};
    }

    th,
    td {
      ${tw`px-6 border-none text-center text-base leading-[130%] text-grey-400 dark:text-grey-300`};
    }

    th {
      ${tw`py-2 font-semibold`};
    }

    td {
      ${tw`py-4 sm:py-6`};
    }
  }

  /* Custom styles for Nextra Navbar component */
  .nextra-nav-container {
    ${tw`static`};

    .nextra-nav-container-blur {
      ${tw`hidden`};
    }

    nav {
      ${tw`justify-between px-4 py-5 sm:py-8 sm:px-6 md:px-[72px] h-auto max-w-none`};

      /* Custom styles for Nextra Search component */
      .nextra-search {
        ${tw`block w-full sm:w-[250px]`};

        input {
          ${tw`bg-[transparent] border border-grey-200 dark:border-grey-600 rounded-full px-4 py-2 transition-none
               focus:ring-0 focus:outline-none placeholder:text-grey-400 dark:placeholder-grey-300 text-sm pl-10`};
        }

        ul.nextra-scrollbar {
          ${tw`left-0 max-w-[calc(100vw-32px)] sm:max-w-[min(calc(100vw-248px), 500px)]`};

          li.nx-text-primary-600 {
            ${tw`bg-grey-100 dark:bg-grey-700`};

            a {
              ${tw`focus:outline-none focus:shadow-none focus:ring-0 focus:ring-offset-0`};
            }
          }
        }

        kbd {
          ${tw`hidden`};
        }
      }

      a.nx-flex.nx-items-center,
      .nextra-hamburger {
        ${tw`hidden`};
      }
    }

    + .nx-mx-auto.nx-flex {
      ${tw`max-w-none`};
    }
  }

  /* Custom styles for Nextra TOC component */
  nav.nextra-toc {
    ${tw`md:mr-14 md:pt-24`};

    .nextra-scrollbar {
      ${tw`pt-0`};

      > p {
        ${tw`hidden`};
      }
    }
  }

  /* Custom styles for Nextra main content container */
  .nextra-content main {
    ${tw`px-4 py-5 sm:py-8 sm:px-6 md:px-[72px] md:pt-24 max-w-none`};
  }

  /* Hide Nextra docs theme components */
  .nextra-sidebar-container,
  .nextra-breadcrumb,
  .nextra-toc {
    ${tw`hidden`};
  }

  .nx-text-primary-600 {
    ${tw`text-[#00A5C6] dark:text-[#B0FF61]`};
  }

  a[href] {
    ${tw`hover:text-[#00A5C6]/80 dark:hover:text-[#B0FF61]/80 transition-all`};
    text-decoration: auto;
  }

  li.active a {
    ${tw`text-[#00A5C6] dark:text-[#B0FF61] bg-grey-100 dark:bg-grey-800`};
  }

  [tabindex]:not([tabindex="-1"]),
  input,
  button {
    ${tw`outline-0 ring-0 ring-offset-0 shadow-none focus:outline-0 focus:ring-0 focus:ring-offset-0 focus:shadow-none`};
  }

  input {
    ${tw`focus:outline focus:outline-1 focus:outline-grey-200 dark:focus:outline-grey-600`};
  }

  img {
    ${tw`rounded-lg mt-6`};
  }

  /* Custom Shiki code block syntax highlighting styles */
  pre code {
    .line {
      /**
        * Classes for transformerNotationHighlight
        * @see https://shiki.style/packages/transformers#transformernotationhighlight
        */
      &.highlighted {
        ${tw`bg-grey-200 dark:bg-grey-600 shadow-none`};
      }

      /**
        * Classes for transformerNotationDiff
        * @see https://shiki.style/packages/transformers#transformernotationdiff
        */
      &.diff {
        &.remove {
          ${tw`bg-negative-100 dark:bg-[#4b1113] shadow-[2px_0_currentColor_inset] shadow-red-300 line-through`};
        }

        &.add {
          ${tw`bg-positive-200 dark:bg-[#003100] shadow-[2px_0_currentColor_inset] shadow-green-100`};
        }
      }
    }
  }

  /** 
    * Style fix for LaTeX expressions
    * @see https://nextra.site/docs/guide/advanced/latex
    */
  .katex {
    ${tw`overflow-y-auto py-1`};
  }
`;

type LayoutProps = {
  className?: string;
};

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ className, children }) => (
  <LayoutContainer className={className}>
    <NavigationLayout>{children}</NavigationLayout>
  </LayoutContainer>
);
