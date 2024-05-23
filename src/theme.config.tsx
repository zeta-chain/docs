import { DocsThemeConfig } from "nextra-theme-docs";

import { AppHead, ThemeToggle } from "~/components/shared";
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
  // @todo - Add custom Hero component to all pages except the home page.
  //         Need to update all mdx content to move main headings and descriptions (and some images) to the Hero component
  // main: MainContent,

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

  // Remove bottom page navigation
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
