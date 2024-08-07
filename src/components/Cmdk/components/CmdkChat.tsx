import { useChat } from "ai/react";
import clsx from "clsx";
import { Command } from "cmdk";
import React, { useEffect, useRef } from "react";

import { basePath } from "~/lib/app.constants";

import { cmdkChatQuestions } from "../cmdk.constants";
import { ArrowUpIcon } from "./ArrowUpIcon";
import { LoadingDots } from "./LoadingDots";
import { MarkdownMessage } from "./MarkdownMesage";

const AssistantMessage: React.FC<{ children: React.ReactNode; className?: string; messageClasses?: string }> = ({
  children,
  className,
  messageClasses,
}) => {
  return (
    <div className={clsx("flex px-4 mb-4 overflow-hidden", className)}>
      <div className="min-w-[32px] mb-[1px] mt-[1px] mr-4 w-8 h-8 rounded-full flex items-center justify-center bg-green-100">
        <img src={`${basePath}/img/logos/zeta.svg`} height="14" width="14" />
      </div>
      <div className={clsx("max-w-[95%]", messageClasses)}>{children}</div>
    </div>
  );
};

export const CmdkChat: React.FC<CmdkChatProps> = ({ closeCmdk, initialValue, setCmdkInputValue }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH && typeof window !== "undefined"
      ? `https://${window.location.host}/${process.env.NEXT_PUBLIC_BASE_PATH}`
      : "";
  const { messages, append, handleSubmit, input, handleInputChange, error, isLoading, setInput } = useChat({
    api: `${basePath}/api/chat`,
  });

  const isLoadingAssistantMessage = isLoading;

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (initialValue && input.length === 0) {
      setInput(initialValue);
      setCmdkInputValue("");
    }
  }, [initialValue, input]);

  return (
    <div className="w-full" onClick={(e) => e.stopPropagation()}>
      <div className={clsx("relative py-4")}>
        {Boolean(messages.length) && (
          <AssistantMessage>
            The AI-driven features in this product are experimental and provided for informational purposes only. Given
            the inherent volatility and complexity of cryptocurrency, AI-generated insights, predictions, and analyses
            should not be interpreted as fully accurate, reliable, or as financial advice. By using this product, you
            acknowledge and accept that the information provided by AI is subject to errors and omissions and that any
            reliance on this information is at your own risk.
          </AssistantMessage>
        )}
        {error && <AssistantMessage messageClasses="flex items-center">{error.message}</AssistantMessage>}
        {!error &&
          messages.map((message, index) => {
            switch (message.role) {
              case "user":
                return (
                  <div key={index} className="flex gap-4 mx-4 mb-4 justify-end">
                    <div
                      className={clsx(
                        "prose text-foreground-lighter bg-[#00D5FF26] dark:bg-zeta-teal px-4 py-2 text-right max-w-xs w-fit",
                        {
                          "rounded-full": message.content.length < 38,
                          "rounded-lg": message.content.length >= 38,
                        }
                      )}
                    >
                      {message.content}
                    </div>
                  </div>
                );
              case "assistant":
                return (
                  <AssistantMessage
                    key={index}
                    className={clsx(index === messages.length - 1 && "mb-8")}
                    messageClasses={message.content.length < 90 ? "flex items-center" : undefined}
                  >
                    <MarkdownMessage closeCmdk={closeCmdk} message={message} />
                  </AssistantMessage>
                );
              default:
                return (
                  <div key={index} className="px-4 [overflow-anchor:none] mb-[25px]">
                    <div className="flex gap-6 [overflow-anchor:none] mb-6">
                      <MarkdownMessage closeCmdk={closeCmdk} message={message} />
                    </div>
                  </div>
                );
            }
          })}

        {isLoadingAssistantMessage && Boolean(messages.length) && messages[messages.length - 1]?.role === "user" && (
          <AssistantMessage className="mb-8" messageClasses="flex">
            <LoadingDots className="mb-1" />
          </AssistantMessage>
        )}
        {messages.length === 0 && !error && (
          <Command.Group className="w-full" heading="Example questions">
            {cmdkChatQuestions.map((question) => {
              const key = question.replace(/\s+/g, "_");

              return (
                <Command.Item
                  key={key}
                  value={question}
                  className={clsx("cursor-pointer", "w-full")}
                  onSelect={() => {
                    append({ role: "user", content: question });
                  }}
                >
                  {question}
                </Command.Item>
              );
            })}
          </Command.Group>
        )}
      </div>
      <div className="w-[98%] h-8" />
      <div className="absolute bottom-0 pb-4 w-[98%] bg-background py-3 pt-0 bg-white dark:bg-[#15191e] flex items-center justify-center">
        <div className="flex items-center border rounded-full shadow-sm w-[95%] justify-center">
          <input
            aria-label="Chat input"
            ref={inputRef}
            type="text"
            placeholder={isLoading ? "Waiting on an answer..." : "What can ZetaAI do for you?"}
            className="flex-1 px-4 py-1 bg-[transparent] text-gray-600 border-none rounded-full focus:outline-none"
            value={input}
            disabled={isLoading}
            onChange={(e) => {
              if (!isLoading) {
                handleInputChange(e as React.ChangeEvent<HTMLInputElement>);
              }
            }}
            onKeyUp={(e) => {
              switch (e.key) {
                case "Backspace":
                  e.stopPropagation();
              }
            }}
            onKeyDown={(e) => {
              switch (e.key) {
                case "Enter":
                  if (isLoading) return;
                  handleSubmit(e);
                  return;
                case "Backspace":
                  e.stopPropagation();
                  break;
                default:
                  return;
              }
            }}
          />
          <button
            disabled={isLoading || input.length === 0}
            className={clsx(
              "flex items-center justify-center w-10 h-6 rounded-full text-gray-300 m-2 transition-colors duration-200 ease-in-out",
              {
                "bg-[#00DDA5]": input.length > 0,
                "dark:bg-grey-600 bg-grey-200": input.length === 0,
              }
            )}
            onClick={handleSubmit}
          >
            <ArrowUpIcon enabled={input.length > 0} className="w-2 h-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface CmdkChatProps {
  closeCmdk: () => void;
  initialValue: string;
  setCmdkInputValue: React.Dispatch<React.SetStateAction<string>>;
}
