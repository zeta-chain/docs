import cn, { clsx } from "clsx";
import type { ComponentProps, ReactElement } from "react";
import { useEffect, useRef, useState } from "react";

import { IconLineWrap } from "../../Icons";
import { CopyToClipboard } from "./CopyToClipboard";

/**
 * @description Minimum lines of code in block to display the wrap button
 */
const MIN_LINES_TO_WRAP = 2;

export const Pre = ({
  children,
  className,
  hasCopyCode,
  filename,
  ...props
}: ComponentProps<"pre"> & {
  filename?: string;
  hasCopyCode?: boolean;
}): ReactElement => {
  const [showWrapButton, setShowWrapButton] = useState(false);
  const [isWordWrapEnabled, setIsWordWrapEnabled] = useState(false);
  const preRef = useRef<HTMLPreElement | null>(null);

  const codeContent = preRef.current?.querySelector("code")?.textContent || "";

  useEffect(() => {
    const lineCount = codeContent.split("\n").filter((line) => line.trim() !== "").length;
    setShowWrapButton(lineCount >= MIN_LINES_TO_WRAP);
  }, [codeContent]);

  return (
    <div className="relative mt-8 first:mt-0">
      {filename && (
        <div className="absolute top-0 z-[1] w-full truncate rounded-t-lg bg-grey-200 dark:bg-grey-600 px-8 py-4 text-base leading-[160%] text-black dark:text-white">
          {filename}
        </div>
      )}

      <pre
        className={cn(
          "bg-grey-100 dark:bg-grey-900 mb-8 overflow-x-auto rounded-lg nx-subpixel-antialiased text-base leading-[160%] text-black dark:text-white",
          filename ? "px-4 pt-[90px] pb-8" : "px-4 py-8",
          className
        )}
        ref={preRef}
        style={{ whiteSpace: isWordWrapEnabled ? "pre-wrap" : "pre" }}
        {...props}
      >
        {children}
      </pre>

      <div
        className={cn(
          "opacity-0 transition-all [div:hover>&]:opacity-100 focus-within:opacity-100",
          "flex flex-col items-center gap-1 absolute right-8",
          filename ? "top-[90px]" : "top-8"
        )}
      >
        {hasCopyCode && <CopyToClipboard getValue={() => codeContent} />}

        {showWrapButton && (
          <button
            type="button"
            onClick={() => setIsWordWrapEnabled((isWrapped) => !isWrapped)}
            className={clsx("w-8 h-8 flex items-center justify-center rounded-lg transition-all", {
              "!bg-[#00A87D] dark:!bg-[#B0FF61]": isWordWrapEnabled,
            })}
          >
            <IconLineWrap
              className={clsx("transition-all", {
                "text-grey-400 dark:text-grey-300": !isWordWrapEnabled,
                "text-white dark:text-black": isWordWrapEnabled,
              })}
            />
          </button>
        )}
      </div>
    </div>
  );
};
