import type { ComponentProps, ReactElement } from "react";
import { useCallback, useEffect, useState } from "react";

import { useMixpanel } from "~/hooks/useMixpanel";

import { IconCheck, IconCopy } from "../../Icons";

const DISPLAY_COPIED_TIMEOUT = 2000;

export const CopyToClipboard = ({
  getValue,
  ...props
}: {
  getValue: () => string;
} & ComponentProps<"button">): ReactElement => {
  const [isCopied, setCopied] = useState(false);
  const { trackCodeCopy } = useMixpanel();

  useEffect(() => {
    if (!isCopied) return;

    const timerId = setTimeout(() => {
      setCopied(false);
    }, DISPLAY_COPIED_TIMEOUT);

    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied]);

  const handleClick = useCallback<NonNullable<ComponentProps<"button">["onClick"]>>(async () => {
    setCopied(true);

    if (!navigator?.clipboard) {
      console.error("Access to clipboard rejected");
    }

    try {
      const codeContent = getValue();
      await navigator.clipboard.writeText(codeContent);

      // Track successful code copy
      trackCodeCopy(
        "unknown", // We'd need to pass language as prop if we want to track it
        codeContent,
        {
          success: true,
          character_count: codeContent.length,
          line_count: codeContent.split("\n").length,
        }
      );
    } catch (error) {
      console.error("Failed to copy");

      // Track failed code copy
      trackCodeCopy("unknown", "", {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }, [getValue, trackCodeCopy]);

  return (
    <button type="button" onClick={handleClick} {...props}>
      {isCopied ? <IconCheck /> : <IconCopy />}
    </button>
  );
};
