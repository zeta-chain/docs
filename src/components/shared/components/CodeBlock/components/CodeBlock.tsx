import { Skeleton } from "@mui/material";
import { random, range } from "lodash-es";
import { Code, Pre } from "nextra/components";
import { useCallback, useEffect, useMemo, useState } from "react";
import tw, { styled } from "twin.macro";

import { highlightCode, SupportedLanguage } from "../CodeBlock.helpers";

type CodeBlockPropsBase = {
  language?: SupportedLanguage;
  filename?: string;
  copy?: boolean;
  showLineNumbers?: boolean;
};

// Source of the code to be highlighted
type CodeSource =
  | {
      // Code directly in string format
      code: string;
    }
  | {
      // URL to fetch the code remotely
      codeUrl: string;
    };

type CodeBlockProps = CodeBlockPropsBase & CodeSource;

const StyledCode = styled(Code)`
  .line {
    ${tw`min-h-[1.25rem]`}
  }
`;

const LOADING_ELEMENTS_COUNT = 7;

/**
 * @description Replicates Nextra's default code block styles and enhances it with custom highlighter features
 */
export const CodeBlock: React.FC<CodeBlockProps> = ({
  language = "text",
  filename,
  copy = true,
  showLineNumbers = false,
  ...codeSource
}) => {
  const code = "code" in codeSource ? codeSource.code : undefined;
  const codeUrl = "codeUrl" in codeSource ? codeSource.codeUrl : undefined;

  const [codeToHighlight, setCodeToHighlight] = useState(code || "");
  const [highlightedCode, setHighlightedCode] = useState("");
  const [error, setError] = useState("");

  // Highlight code from props or URL
  useEffect(() => {
    if (!codeToHighlight) return;

    (async () => {
      const codeHighlighted = await highlightCode({
        code: codeToHighlight,
        language,
      });

      setHighlightedCode(codeHighlighted);
    })();
  }, [codeToHighlight, language]);

  const fetchRemoteCode = useCallback(async (url: string) => {
    setError("");

    try {
      const codeResponse = await fetch(url);
      const codeText = await codeResponse.text();

      setCodeToHighlight(codeText);
    } catch {
      const errorMessage = `Error fetching code from ${url}`;

      console.error(errorMessage);
      setError(errorMessage);
    }
  }, []);

  // If codeUrl prop is present, fetch code from URL
  useEffect(() => {
    if (!codeUrl) return;

    fetchRemoteCode(codeUrl);
  }, [codeUrl, fetchRemoteCode]);

  const loadingState = useMemo(
    () => (
      <Pre filename={filename}>
        <Code>
          {range(LOADING_ELEMENTS_COUNT).map((i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              height={20}
              className="rounded mb-5 last-of-type:mb-0 bg-grey-200 dark:bg-grey-600"
              style={{ width: `${random(20, 100)}%` }}
            />
          ))}
        </Code>
      </Pre>
    ),
    [filename]
  );

  const codeHtml = useMemo(
    () =>
      error ? `<span class="line"><span style="color:var(--shiki-color-text)">${error}</span></span>` : highlightedCode,
    [highlightedCode, error]
  );

  if (!highlightedCode && !error) return loadingState;

  return (
    <Pre filename={filename} hasCopyCode={copy} data-language={language} data-theme="default">
      <StyledCode
        data-language={language}
        data-theme="default"
        {...(showLineNumbers ? { "data-line-numbers": true } : undefined)}
        dangerouslySetInnerHTML={{ __html: codeHtml }}
      />
    </Pre>
  );
};
