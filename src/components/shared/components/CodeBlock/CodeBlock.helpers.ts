import { transformerNotationDiff, transformerNotationHighlight } from "@shikijs/transformers";
import {
  BundledLanguage,
  BundledTheme,
  createCssVariablesTheme,
  getHighlighter,
  HighlighterGeneric,
  SpecialLanguage,
} from "shiki";

export const supportedLanguages: Partial<BundledLanguage | SpecialLanguage>[] = [
  "text",
  "javascript",
  "js",
  "jsx",
  "typescript",
  "ts",
  "tsx",
  "json",
  "bash",
  "shell",
  "solidity",
  "yml",
  "yaml",
  "html",
  "css",
  "graphql",
  "ansi",
  "proto",
];

export type SupportedLanguage = typeof supportedLanguages[number];

let highlighter: HighlighterGeneric<SupportedLanguage, BundledTheme> | null = null;

/**
 * @description Custom CSS theme to replicate default Nextra's code block colors
 * @see https://nextra.site/docs/guide/syntax-highlighting#customize-the-theme
 * @see https://shiki.style/guide/theme-colors#css-variables-theme
 */
const customCssTheme = createCssVariablesTheme({
  name: "css-variables",
  variablePrefix: "--shiki-",
  variableDefaults: {},
  fontStyle: true,
});

/**
 * @description Setup the highlighter instance
 * @see https://shiki.style/guide/install#highlighter-usage
 */
const setupHighlighter = async () => {
  const newHighlighter = await getHighlighter({
    themes: [customCssTheme],
    langs: supportedLanguages,
  });

  return newHighlighter as HighlighterGeneric<SupportedLanguage, BundledTheme>;
};

/**
 * @description Remove wrapping <pre> and <code> elements from the HTML string returned by highlighter.codeToHtml()
 */
const removeWrappingCodeBlockElements = (html: string): string => {
  // Create a new DOMParser instance
  const parser = new DOMParser();

  // Parse the HTML string into a document
  const doc = parser.parseFromString(html, "text/html");

  // Remove <pre> and <code> elements
  doc.querySelectorAll("pre, code").forEach((element) => {
    // While the element has a parent node, insert each child of the element
    // before the element itself in the parent's child list
    while (element.firstChild && element.parentNode) {
      element.parentNode.insertBefore(element.firstChild, element);
    }
    // Remove the now-empty <pre> or <code> element from its parent
    element.remove();
  });

  // Serialize the document back to an HTML string
  // Using innerHTML of the body to get only the content, excluding <html> and <body> tags
  return doc.body.innerHTML;
};

/**
 * @description Highlight code using Shiki highlighter with Nextra theme and added transformers
 * @see https://shiki.style/packages/transformers
 */
export const highlightCode = async ({ code, language }: { code: string; language: SupportedLanguage }) => {
  if (!highlighter) {
    highlighter = await setupHighlighter();
  }

  const html = highlighter.codeToHtml(code, {
    lang: language,
    theme: "css-variables",
    transformers: [transformerNotationHighlight(), transformerNotationDiff()],
  });

  const parsedHtml = removeWrappingCodeBlockElements(html);

  return parsedHtml;
};
