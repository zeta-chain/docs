import styled from "@emotion/styled";
import { Person, Send } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import twTheme from "@zetachain/ui-toolkit/theme/tailwind.theme.json";
import { useChat } from "ai/react";
import clsx from "clsx";
import React from "react";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    fieldset: {
      borderColor: `${twTheme.colors.green[900]}`,
    },
    "&:not(.Mui-disabled):hover fieldset": {
      borderColor: `${twTheme.colors.green[600]} !important`,
    },
    "&.Mui-disabled fieldset": {
      borderColor: twTheme.colors.grey[700],
    },
  },
}));

import { Command } from "cmdk";

import { IconSparkle } from "~/components/shared";

import { cmdkChatQuestions } from "../cmdk.constants";
import { MarkdownMessage } from "./MarkdownMesage";

export enum MessageRole {
  User = "user",
  Assistant = "assistant",
}

export enum MessageStatus {
  Pending = "pending",
  InProgress = "in-progress",
  Complete = "complete",
}

export interface Message {
  role: MessageRole;
  content: string;
  status: MessageStatus;
}

interface NewMessageAction {
  type: "new";
  message: Message;
}

interface UpdateMessageAction {
  type: "update";
  index: number;
  message: Partial<Message>;
}

interface AppendContentAction {
  type: "append-content";
  index: number;
  content: string;
}

interface ResetAction {
  type: "reset";
}

type MessageAction = NewMessageAction | UpdateMessageAction | AppendContentAction | ResetAction;

export const CmdkChat: React.FC<CmdkChatProps> = ({ ...props }) => {
  const { messages, append, handleSubmit, input, handleInputChange, error, isLoading, setInput } = useChat({});

  return (
    <div className="w-full" onClick={(e) => e.stopPropagation()}>
      <div className={clsx("relative py-4")}>
        {!error &&
          messages.map((message, index) => {
            switch (message.role) {
              case MessageRole.User:
                return (
                  <div key={index} className="flex gap-4 mx-4 mb-4">
                    <div className="w-7 h-7 bg-background rounded-full border border-muted flex items-center justify-center text-foreground-lighter first-letter:ring-background ring-1 shadow-sm">
                      <Person sx={{ fontSize: 20 }} />
                    </div>
                    <div className="prose text-foreground-lighter">{message.content}</div>
                  </div>
                );
              case MessageRole.Assistant:
                return (
                  <div className="flex px-4 mb-4 overflow-hidden">
                    <div className="min-w-[29px] mb-[1px] mt-[1px] mr-4 w-7 h-7 bg-background rounded-full border border-muted flex items-center justify-center text-foreground-lighter first-letter:ring-background ring-1 shadow-sm">
                      <IconSparkle className="h-[18px] w-[18px] ml-0.5 text-green-300" />
                    </div>
                    <div className="max-w-[95%]">
                      <MarkdownMessage message={message} />
                    </div>
                  </div>
                );
              default:
                return (
                  <div key={index} className="px-4 [overflow-anchor:none] mb-[25px]">
                    <div className="flex gap-6 [overflow-anchor:none] mb-6">
                      {/* <AiIconChat /> */}
                      <>
                        <MarkdownMessage message={message} />
                      </>
                    </div>
                  </div>
                );
            }
          })}

        {messages.length === 0 && (
          <Command.Group className="w-full" heading="Example questions">
            {cmdkChatQuestions.map((question) => {
              const key = question.replace(/\s+/g, "_");

              return (
                <Command.Item
                  key={key}
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
        {/* {error && (
            <div className="p-6 flex flex-col items-center gap-6 mt-4">
              <IconAlertTriangle className="text-amber-900" strokeWidth={1.5} size={21} />
              <p className="text-lg text-foreground text-center">Sorry, looks like Zeta AI is having a hard time!</p>
              <p className="text-sm text-foreground-muted text-center">Please try again in a bit.</p>
              <Button size="tiny" type="secondary" onClick={handleReset}>
                Try again?
              </Button>
            </div>
          )} */}
      </div>
      <div className="w-[98%] h-8" />
      <div className="absolute bottom-0 pb-4 w-[98%] bg-background py-3 pt-0 bg-white dark:bg-[#15191e]">
        <CustomTextField
          className="w-full bg-alternative rounded px-3 !focus:outline-none"
          color="primary"
          placeholder="Ask Zeta AI a question..."
          value={input}
          disabled={isLoading}
          InputProps={{
            classes: {
              input: "dark:text-white text-grey-800",
              root: "h-[30px]",
              disabled: "!text-red",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  disabled={!input.length}
                  type="submit"
                  onClick={(e: Event) => {
                    handleSubmit(e);
                  }}
                >
                  <Send
                    className={clsx("dark:text-white h-[14px] w-[14px]", {
                      "dark:!text-grey-400": !input.length,
                      "text-grey-300": !input.length,
                      "text-grey-800": input.length,
                    })}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
          // inputRef={inputRef}
          // autoFocus
          // placeholder={isLoadingCommandMenu || isLoading ? "Waiting on an answer..." : "Ask Zeta AI a question..."}
          // value={input}
          // actions={
          //   <>
          //     {!isLoadingCommandMenu && !isLoading ? (
          //       <div
          //         className={`flex items-center gap-3 mr-3 transition-opacity duration-700 ${
          //           search ? "opacity-100" : "opacity-0"
          //         }`}
          //       >
          //         <span className="text-foreground-light">Submit message</span>
          //         <div className="hidden text-foreground-light md:flex items-center justify-center h-6 w-6 rounded bg-overlay-hover">
          //           <IconCornerDownLeft size={12} strokeWidth={1.5} />
          //         </div>
          //       </div>
          //     ) : null}
          //   </>
          // }
          onChange={(e) => {
            if (!isLoading) {
              handleInputChange(e as React.ChangeEvent<HTMLInputElement>);
            }
          }}
          // onCompositionStart={() => setIsImeComposing(true)}
          // onCompositionEnd={() => setIsImeComposing(false)}
          onKeyUp={(e) => {
            switch (e.key) {
              case "Backspace":
                e.stopPropagation();
            }
          }}
          onKeyDown={(e) => {
            switch (e.key) {
              case "Enter":
                // if (!search || isLoadingCommandMenu || isLoading || isImeComposing) {
                if (isLoading) {
                  return;
                }
                handleSubmit(e as any);
                return;
              case "Backspace":
                e.stopPropagation();
              default:
                return;
            }
          }}
        />
      </div>
    </div>
  );
};

interface CmdkChatProps {}
