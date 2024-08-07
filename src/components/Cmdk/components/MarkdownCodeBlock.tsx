import styled from "@emotion/styled";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { Children, memo, ReactNode, useState } from "react";
import { Light as SyntaxHighlighter, SyntaxHighlighterProps } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import json from "react-syntax-highlighter/dist/cjs/languages/hljs/json";
import ts from "react-syntax-highlighter/dist/cjs/languages/hljs/typescript";

import { monokaiCustomTheme } from "./CodeBlock.utils";

export interface CodeBlockProps {
  title?: ReactNode;
  language?: "js" | "jsx" | "sql" | "py" | "bash" | "ts" | "dart" | "json" | "csharp" | "kotlin" | "curl" | "http";
  linesToHighlight?: number[];
  hideCopy?: boolean;
  hideLineNumbers?: boolean;
  className?: string;
  value?: string;
  children?: string;
  renderer?: SyntaxHighlighterProps["renderer"];
}

const ShortCodeBlock = styled.code`
  color: azure;
  font-weight: 400;
  font-size: 0.875em;
  margin-top: 5px;
  overflow: scroll;
  padding: 0.2rem 0.4rem !important;
  background-color: #282828;
  border: 1px solid #2e2e2e;
  border-radius: 0.5rem;
`;

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("ts", ts);
SyntaxHighlighter.registerLanguage("json", json);
// SyntaxHighlighter.registerLanguage("sol", solidity);

const MarkdownCodeBlock = (props: CodeBlockProps) => {
  let {
    title,
    language,
    linesToHighlight = [],
    className,
    value,
    children,
    hideCopy = false,
    hideLineNumbers = false,
    renderer,
  } = props;

  const { resolvedTheme } = useTheme();
  const isDarkTheme = Boolean(resolvedTheme?.includes("dark"));
  const monokaiTheme = monokaiCustomTheme(isDarkTheme);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  // Extract string when `children` has a single string node
  const childrenArray = Children.toArray(children);
  const [singleChild] = childrenArray.length === 1 ? childrenArray : [];
  const singleString = typeof singleChild === "string" ? singleChild : undefined;

  let codeValue = value ?? singleString ?? children;
  codeValue = codeValue?.trimEnd?.() ?? codeValue;

  // check the length of the string inside the <code> tag
  // if it's fewer than 70 characters, add a white-space: pre so it doesn't wrap
  const shortCodeBlockClasses = typeof codeValue === "string" && codeValue.length < 70 ? "bg-black p-1" : "";

  let lang = language ? language : className ? className.replace("language-", "") : "js";
  // force jsx to be js highlighted
  if (lang === "jsx") lang = "js";

  const large = false;
  // don't show line numbers if bash == lang
  if (lang === "bash" || lang === "sh") hideLineNumbers = true;
  const showLineNumbers = !hideLineNumbers;

  return (
    <>
      {title && (
        <div className="text-sm rounded-t-md bg-surface-100 py-2 px-4 border border-b-0 border-default font-sans">
          {title}
        </div>
      )}
      {className ? (
        <div className="group my-4 relative max-w-[90vw] md:max-w-none overflow-auto">
          {/* @ts-ignore */}
          <SyntaxHighlighter
            language={lang}
            wrapLines={true}
            // @ts-ignore
            style={monokaiTheme}
            className={clsx(
              "code-block border border-surface p-4 w-full !my-0 !bg-surface-100",
              `${!title ? "!rounded-md" : "!rounded-t-none !rounded-b-md"}`,
              `${!showLineNumbers ? "pl-6" : ""}`,
              className
            )}
            customStyle={{
              fontSize: large ? 18 : 13,
              lineHeight: large ? 1.5 : 1.4,
            }}
            showLineNumbers={showLineNumbers}
            lineProps={(lineNumber) => {
              if (linesToHighlight.includes(lineNumber)) {
                return {
                  style: { display: "block", backgroundColor: "hsl(var(--background-selection))" },
                };
              }
              return {};
            }}
            lineNumberContainerStyle={{
              paddingTop: "128px",
            }}
            lineNumberStyle={{
              minWidth: "44px",
              paddingLeft: "4px",
              paddingRight: "4px",
              marginRight: "12px",
              color: "#828282",
              textAlign: "center",
              fontSize: large ? 14 : 12,
              paddingTop: "4px",
              paddingBottom: "4px",
            }}
            renderer={renderer}
          >
            {codeValue}
          </SyntaxHighlighter>
          {!hideCopy && (value || children) && className ? (
            <div
              className={[
                "absolute right-2 top-2",
                "opacity-0 group-hover:opacity-100 transition",
                `${isDarkTheme ? "dark" : ""}`,
              ].join(" ")}
            />
          ) : null}
        </div>
      ) : (
        <ShortCodeBlock className={"text-black dark:text-white bg-white dark:bg-grey-500"}>
          {value || children}
        </ShortCodeBlock>
      )}
    </>
  );
};

const MemoizedMarkdownCodeBlock = memo(MarkdownCodeBlock);

export { MemoizedMarkdownCodeBlock as MarkdownCodeBlock };
