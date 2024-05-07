import { DocsThemeConfig } from "nextra-theme-docs";

import { AppHead, Footer, IconZetaDocsLogo, ThemeToggle } from "~/components/shared";
import { defaultBaseUrl, nextSeoProps } from "~/config/next-seo.config";
/**
 * @description Custom Nextra Docs theme configuration
 * @see https://nextra.site/docs/docs-theme/theme-configuration
 */
const nextraDocsThemeConfig: DocsThemeConfig = {
  // Add main logo to the left side of the navbar
  logo: <IconZetaDocsLogo className="text-green-700 dark:text-grey-50" />,

  // Add theme toggle button to the right side of the navbar
  navbar: {
    extraContent: <ThemeToggle />,
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
    placeholder: "Search...",
  },

  // Edit sidebar component
  sidebar: {
    // Control default sidebar collapse level
    defaultMenuCollapseLevel: 1,
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

  // Add custom footer component
  footer: {
    component: <Footer />,
  },
};

export default nextraDocsThemeConfig;
