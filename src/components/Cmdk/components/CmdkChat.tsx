import styled from "@emotion/styled";
import { Person, Send } from "@mui/icons-material";
import { IconButton, Input, InputAdornment, TextField, Typography } from "@mui/material";
import twTheme from "@zetachain/ui-toolkit/theme/tailwind.theme.json";
import { useChat } from "ai/react";
import clsx from "clsx";
import React from "react";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: twTheme.colors.green[600],
    },
  },
}));

import { CommandGroup, CommandItem } from "cmdk";

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
                  <div key={index} className="flex gap-6 mx-4 [overflow-anchor:none] mb-6">
                    <div
                      className="
                          w-7 h-7 bg-background rounded-full border border-muted flex items-center justify-center text-foreground-lighter first-letter:ring-background
                          ring-1
                          shadow-sm
                        "
                    >
                      <Person strokeWidth={1.5} size={16} />
                    </div>
                    <div className="prose text-foreground-lighter">{message.content}</div>
                  </div>
                );
              case MessageRole.Assistant:
                return (
                  <div className="flex px-4 pb-12 overflow-hidden">
                    <div className="mr-6">
                      <div className="w-7 h-7 bg-background rounded-full border border-muted flex items-center justify-center text-foreground-lighter first-letter:ring-background ring-1 shadow-sm">
                        {/* <img src="/zeta-bot.png" className="w-[16px] h-[16px]" /> */}
                        {/* <IconSparkle className="h-[18px] w-[18px] ml-0.5 text-green-300" /> */}
                      </div>
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
          <CommandGroup className="w-full" heading="Example questions">
            {cmdkChatQuestions.map((question) => {
              const key = question.replace(/\s+/g, "_");

              return (
                <CommandItem
                  key={key}
                  className={clsx("cursor-pointer", "w-full")}
                  onSelect={() => {
                    append({ role: "user", content: question });
                  }}
                >
                  {question}
                </CommandItem>
              );
            })}
          </CommandGroup>
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
      <div className="absolute bottom-0 pb-4 w-[98%]">
        <CustomTextField
          className="w-full bg-alternative rounded px-3 [&_input]:pr-32 md:[&_input]:pr-40 !focus:outline-none"
          color="primary"
          placeholder="Ask Zeta AI a question..."
          InputProps={{
            classes: {
              input: "dark:text-white",
              root: "!hover:border-red h-[30px]",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end" disabled>
                  <Send className="dark:text-white h-[14px] w-[14px]" />
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
