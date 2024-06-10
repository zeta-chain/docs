import type { ComponentProps, ReactElement } from "react";
import { useCallback, useEffect, useState } from "react";

import { IconCheck, IconCopy } from "../../Icons";

const DISPLAY_COPIED_TIMEOUT = 2000;

export const CopyToClipboard = ({
  getValue,
  ...props
}: {
  getValue: () => string;
} & ComponentProps<"button">): ReactElement => {
  const [isCopied, setCopied] = useState(false);

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
      await navigator.clipboard.writeText(getValue());
    } catch {
      console.error("Failed to copy");
    }
  }, [getValue]);

  return (
    <button type="button" onClick={handleClick} {...props}>
      {isCopied ? <IconCheck /> : <IconCopy />}
    </button>
  );
};
