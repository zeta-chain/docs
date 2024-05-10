import { PropsWithChildren } from "react";
import tw, { styled } from "twin.macro";

const LayoutContainer = styled.div`
  ${tw`bg-grey-50 dark:bg-grey-900`};

  table {
    ${tw`border-collapse`};

    thead tr,
    tbody tr:nth-of-type(even) {
      ${tw`bg-grey-100 dark:bg-grey-800`};
    }

    th,
    td {
      ${tw`p-2 border border-grey-200 dark:border-grey-700`};
    }
  }

  /* Custom styles for nextra Navbar component */
  .nextra-nav-container {
    .nextra-nav-container-blur {
      ${tw`!bg-grey-50/80 dark:!bg-grey-900/80`};
    }

    nav a.nx-flex.nx-items-center {
      ${tw`hover:opacity-100 dark:hover:opacity-100`};
    }
  }

  .nextra-sidebar-container {
    ${tw`hidden`};
  }

  .nx-text-primary-600 {
    ${tw`text-green-100`};
  }

  a[href] {
    ${tw`hover:text-green-100 dark:hover:text-green-100 transition-all`};
    text-decoration: auto;
  }

  li.active a {
    ${tw`text-green-100 bg-grey-100 dark:bg-grey-800`};
  }

  input {
    ${tw`focus:outline focus:outline-1 focus:outline-grey-200 dark:focus:outline-grey-600 focus:shadow-none focus:ring-0 focus:ring-offset-0`};
  }

  button {
    ${tw`focus:outline-none focus:shadow-none focus:ring-0 focus:ring-offset-0`};
  }

  img {
    ${tw`rounded-[5px] mt-6`};
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
  <LayoutContainer className={className}>{children}</LayoutContainer>
);
