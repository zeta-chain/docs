import { useChat } from "ai/react";
import type OpenAI from "openai";
import { Dispatch, SetStateAction, useCallback, useEffect, useReducer, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { MarkdownMessage } from "../SearchModal/components/MarkdownMessage";
import { questions } from "./cmdk.constants";
import { AiIconChat } from "./Command.icons";
import { CommandGroup, CommandItem, useAutoInputFocus, useHistoryKeys } from "./Command.utils";
import { useCommandMenu } from "./CommandMenuProvider";
import {
  AiIconAnimation,
  Button,
  IconAlertTriangle,
  IconCornerDownLeft,
  IconUser,
  Input,
  markdownComponents,
} from "./ui";
import { cn } from "./ui/src/lib/utils";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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

function messageReducer(state: Message[], messageAction: MessageAction) {
  let current = [...state];
  const { type } = messageAction;

  switch (type) {
    case "new": {
      const { message } = messageAction;
      current.push(message);
      break;
    }
    case "update": {
      const { index, message } = messageAction;
      if (current[index]) {
        Object.assign(current[index], message);
      }
      break;
    }
    case "append-content": {
      const { index, content } = messageAction;
      if (current[index]) {
        current[index].content += content;
      }
      break;
    }
    case "reset": {
      current = [];
      break;
    }
    default: {
      throw new Error(`Unknown message action '${type}'`);
    }
  }

  return current;
}

export interface UseAiChatOptions {
  messageTemplate?: (message: string) => string;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
}

/**
 * Perform a one-off query to AI based on a snapshot of messages
 */

const AiCommand = () => {
  const { isLoading: isLoadingCommandMenu, setIsLoading, search, setSearch } = useCommandMenu();
  const { messages, append, handleSubmit, input, handleInputChange, error, isLoading, setInput } = useChat({
    initialInput: search,
  });

  useEffect(() => {
    setSearch(input);
  }, [input]);

  const inputRef = useAutoInputFocus();

  useHistoryKeys({
    enable: !isLoading,
    messages: messages.filter(({ role }) => role === MessageRole.User).map(({ content }) => content),
    setPrompt: setSearch,
  });

  const handleReset = useCallback(() => {
    setInput("");
  }, []);

  // Detect an IME composition (so that we can ignore Enter keypress)
  const [isImeComposing, setIsImeComposing] = useState(false);

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div className={cn("relative py-4")}>
        {!error &&
          messages.map((message, index) => {
            switch (message.role) {
              case MessageRole.User:
                return (
                  <div key={index} className="flex gap-6 mx-4 [overflow-anchor:none] mb-6">
                    <div
                      className="
                  w-7 h-7 bg-background rounded-full border border-muted flex items-center justify-center text-foreground-lighter first-letter:
                  ring-background
                  ring-1
                  shadow-sm
              "
                    >
                      <IconUser strokeWidth={1.5} size={16} />
                    </div>
                    <div className="prose text-foreground-lighter">{message.content}</div>
                  </div>
                );
              case MessageRole.Assistant:
                return (
                  <div className="flex px-4 mb-8 overflow-auto">
                    <div className="mr-4">
                      <div className="w-7 h-7 bg-background rounded-full border border-muted flex items-center justify-center text-foreground-lighter first-letter:ring-background ring-1 shadow-sm">
                        <IconUser strokeWidth={1.5} size={16} />
                      </div>
                    </div>
                    <div>
                      <MarkdownMessage message={message} />
                    </div>
                  </div>
                );
                return (
                  <div key={index} className="px-4 [overflow-anchor:none] mb-[25px]">
                    <div className="flex gap-6 [overflow-anchor:none] mb-6">
                      <AiIconChat />
                      <>
                        <MarkdownMessage message={message} />
                      </>
                    </div>
                  </div>
                );
            }
          })}

        {messages.length === 0 && !error && (
          <CommandGroup heading="Examples">
            {questions.map((question) => {
              const key = question.replace(/\s+/g, "_");
              return (
                <CommandItem
                  type="command"
                  onSelect={() => {
                    if (!search) {
                      append({ content: question, role: "user" });
                    }
                  }}
                  key={key}
                >
                  <AiIconAnimation />
                  {question}
                </CommandItem>
              );
            })}
          </CommandGroup>
        )}
        {error && (
          <div className="p-6 flex flex-col items-center gap-6 mt-4">
            <IconAlertTriangle className="text-amber-900" strokeWidth={1.5} size={21} />
            <p className="text-lg text-foreground text-center">Sorry, looks like Clippy is having a hard time!</p>
            <p className="text-sm text-foreground-muted text-center">Please try again in a bit.</p>
            <Button size="tiny" type="secondary" onClick={handleReset}>
              Try again?
            </Button>
          </div>
        )}

        <div className="[overflow-anchor:auto] h-px w-full"></div>
      </div>
      <div className="absolute bottom-0 w-full bg-background py-3">
        <Input
          className="bg-alternative rounded mx-3 [&_input]:pr-32 md:[&_input]:pr-40"
          inputRef={inputRef}
          autoFocus
          placeholder={isLoadingCommandMenu || isLoading ? "Waiting on an answer..." : "Ask Zeta AI a question..."}
          value={input}
          actions={
            <>
              {!isLoadingCommandMenu && !isLoading ? (
                <div
                  className={`flex items-center gap-3 mr-3 transition-opacity duration-700 ${
                    search ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-foreground-light">Submit message</span>
                  <div className="hidden text-foreground-light md:flex items-center justify-center h-6 w-6 rounded bg-overlay-hover">
                    <IconCornerDownLeft size={12} strokeWidth={1.5} />
                  </div>
                </div>
              ) : null}
            </>
          }
          onChange={(e) => {
            if (!isLoadingCommandMenu || !isLoading) {
              handleInputChange(e);
            }
          }}
          onCompositionStart={() => setIsImeComposing(true)}
          onCompositionEnd={() => setIsImeComposing(false)}
          onKeyDown={(e) => {
            switch (e.key) {
              case "Enter":
                if (!search || isLoadingCommandMenu || isLoading || isImeComposing) {
                  return;
                }
                handleSubmit(e as any);
                return;
              default:
                return;
            }
          }}
        />
      </div>
    </div>
  );
};

export default AiCommand;
