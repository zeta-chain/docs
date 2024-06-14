import { DocsThemeConfig } from "nextra-theme-docs";

import {
  AppHead,
  Code,
  Heading,
  HeadingLink,
  MainContentWrapper,
  Pre,
  StyledOrderedList,
  StyledUnorderedList,
  ThemeToggle,
} from "~/components/shared";
import { defaultBaseUrl, nextSeoProps } from "~/config/next-seo.config";

/**
 * @description Custom Nextra Docs theme configuration
 * @see https://nextra.site/docs/docs-theme/theme-configuration
 */
const nextraDocsThemeConfig: DocsThemeConfig = {
  docsRepositoryBase: "https://github.com/zeta-chain/docs",

  // Remove logo from the navbar
  logo: null,

  // Add Theme toggle button to the navbar
  navbar: {
    extraContent: <ThemeToggle className="hidden sm:flex" />,
  },

  // Add extra components to all rendered pages
  main: MainContentWrapper,

  components: {
    // Render custom components for each html element
    // ...
    table: (props) => (
      <div className="overflow-x-auto mt-8 first:mt-0">
        <table {...props} />
      </div>
    ),
    tr: (props) => <tr {...props} />,
    th: (props) => <th {...props} />,
    td: (props) => <td {...props} />,

    // If there are any h1 (^#\s) rendered in the markdown, it will be rendered as h2 to avoid duplication with Hero component
    h1: (props) => <HeadingLink tag="h2" {...props} />,
    h2: (props) => <HeadingLink tag="h2" {...props} />,
    h3: (props) => <Heading tag="h3" {...props} />,
    h4: (props) => <Heading tag="h4" {...props} />,
    h5: (props) => <Heading tag="h5" {...props} />,
    h6: (props) => <Heading tag="h6" {...props} />,

    p: (props) => (
      <p className="text-base leading-[160%] text-grey-400 dark:text-grey-300 mt-8 first:mt-0" {...props} />
    ),
    ul: (props) => <StyledUnorderedList {...props} />,
    ol: (props) => <StyledOrderedList {...props} />,
    li: (props) => (
      <li className="my-2 text-base leading-[160%] text-grey-400 dark:text-grey-300 relative" {...props} />
    ),
    hr: (props) => <hr className="my-8 first:mt-0 border-t border-grey-200 dark:border-grey-600" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="mt-8 first:mt-0 py-4 px-6 border-l border-[#E34ED6] dark:border-[#00C6EE] text-grey-400 dark:text-grey-300"
        {...props}
      />
    ),
    pre: Pre,
    code: Code,
  },

  // Remove nextra default theme switch in favor of custom theme toggle button
  darkMode: false,

  // Remove default icon/link to the right side of the search bar
  project: {
    icon: null,
  },
  chat: {
    icon: null,
  },

  // Configure App Head component
  head: <AppHead />,

  // Configure next-seo props
  useNextSeoProps: () => {
    return {
      ...nextSeoProps,
      canonical: typeof window !== "undefined" ? window.location.href : defaultBaseUrl,
    };
  },

  // Edit search component in the navbar
  search: {
    placeholder: "Search the docs",
  },

  // Edit sidebar component
  sidebar: {
    // Control default sidebar collapse level
    defaultMenuCollapseLevel: 1,
    // Remove title component
    titleComponent: null,
  },

  // Edit table of contents (TOC) component
  toc: {
    title: null,
    backToTop: true,
  },

  // Remove extra elements below the TOC
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },

  // Remove last updated date
  gitTimestamp: undefined,

  // Remove nextra bottom page navigation
  navigation: {
    prev: false,
    next: false,
  },

  // Remove footer component
  footer: {
    component: null,
    text: `© ${new Date().getFullYear()} Meta Protocol, Inc`,
  },
};

export default nextraDocsThemeConfig;
