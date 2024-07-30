import styled from "@emotion/styled";
import { HomeOutlined as HomeIcon } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogContent, Paper, Typography } from "@mui/material";
import twTheme from "@zetachain/ui-toolkit/theme/tailwind.theme.json";
import clsx from "clsx";
import { Command } from "cmdk";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import tw from "twin.macro";

import { IconClaim, IconCode, IconServer } from "~/components/shared";

import { ArrowIcon } from "./ArrowIcon";
import { CmdkBreadcrumb } from "./CmdkBreadcrumb";
import { CmdkChat } from "./CmdkChat";
import { ZetaAiIcon } from "./ZetaAiIcon";

const Container = styled(Paper)`
  /* [cmdk-root] {
    max-width: 640px;
    width: 100%;
    border-radius: 12px;
    font-family: var(--font-sans);
    border: 1px solid var(--gray6);
    box-shadow: var(--cmdk-shadow);
    transition: transform 100ms ease;
    outline: none;
  } */

  [cmdk-input] {
    font-family: var(--font-sans);
    border: none;
    width: 100%;
    font-size: 17px;
    padding: 8px 8px 16px 8px;
    outline: none;
    color: var(--gray12);
    border-bottom: 1px solid var(--gray6);
    margin-bottom: 16px;
    border-radius: 0;

    &::placeholder {
      color: var(--gray9);
    }
  }

  [cmdk-zeta-badge] {
    height: 20px;
    background: var(--grayA3);
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    font-size: 12px;
    color: var(--grayA11);
    border-radius: 4px;
    margin: 4px 0 4px 4px;
    user-select: none;
    text-transform: capitalize;
    font-weight: 500;
  }

  [cmdk-item] {
    content-visibility: auto;

    cursor: pointer;
    height: 48px;
    border-radius: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 16px;
    user-select: none;
    will-change: background, color;
    transition: all 150ms ease;
    transition-property: none;

    &[data-selected="true"] {
      ${tw`bg-grey-200 dark:bg-grey-700 dark:text-white`}
    }

    &[data-disabled="true"] {
      color: ${twTheme.colors.grey[300]};
      cursor: not-allowed;
    }

    &:active {
      transition-property: background;
      ${tw`bg-grey-300 dark:bg-grey-800`}
    }

    & + [cmdk-item] {
      margin-top: 4px;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }

  [cmdk-list] {
    height: min(330px, calc(var(--cmdk-list-height)));
    max-height: 400px;
    overflow: auto;
    overscroll-behavior: contain;
    transition: 100ms ease;
    transition-property: height;
  }

  [cmdk-zeta-shortcuts] {
    display: flex;
    margin-left: auto;
    gap: 8px;

    kbd {
      font-family: var(--font-sans);
      font-size: 12px;
      min-width: 20px;
      padding: 4px;
      height: 20px;
      border-radius: 4px;
      color: var(--gray11);
      background: var(--gray4);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
    }
  }

  [cmdk-separator] {
    height: 1px;
    width: 100%;
    background: var(--gray5);
    margin: 4px 0;
  }

  *:not([hidden]) + [cmdk-group] {
    margin-top: 8px;
  }

  [cmdk-group-heading] {
    user-select: none;
    font-size: 12px;
    color: var(--gray11);
    padding: 0 8px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  [cmdk-empty] {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    white-space: pre-wrap;
    color: var(--gray11);
  }
`;

type CmdkProps = {
  isOpen: boolean;
  setIsCmdkOpen: Dispatch<SetStateAction<boolean>>;
};

export const Cmdk: React.FC<CmdkProps> = ({ isOpen, setIsCmdkOpen }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inputValue, setInputValue] = React.useState("");

  const [pages, setPages] = React.useState<("chat" | "home")[]>(["home"]);
  const activePage = pages[pages.length - 1];
  const isHome = activePage === "home";

  const onValueChange = React.useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages];
      x.splice(-1, 1);
      return x;
    });
  }, []);

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (isHome || inputValue.length) {
        return;
      }

      if (e.key === "Backspace") {
        e.preventDefault();
        popPage();
      }
    },
    [inputValue.length, isHome, popPage]
  );

  const commandListMaxHeight = activePage === "chat" ? "min(600px, 50vh)" : "auto";

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsCmdkOpen(false);
      }}
      classes={{
        root: "w-full",
        paper:
          "border dark:border-[#353535] border-grey-400 w-full relative min-h-[500px] m-0 py-0 dark:bg-[#15191E] dark:text-white",
      }}
      PaperComponent={Container}
    >
      <DialogContent
        className={clsx(
          "p-0",
          "!dark:bg-overlay/90 backdrop-filter",
          "!border-overlay/90",
          "transition ease-out",
          "place-self-start mx-auto top-24",
          "w-full"
        )}
      >
        <Command
          ref={ref}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (isHome || inputValue.length) {
              return;
            }

            if (e.key === "Backspace") {
              e.preventDefault();
              popPage();
            }
          }}
        >
          {activePage === "chat" && (
            <div className="py-3 px-1">
              <div className="w-full flex justify-end my-2 mb-4">
                <CloseIcon className="cursor-pointer mr-2" onClick={() => setIsCmdkOpen(false)} />
              </div>
              <CmdkBreadcrumb className="flex justify-between w-full items-center">
                <div className="flex items-center">
                  <button
                    onClick={() => {
                      setPages([...pages, "home"]);
                    }}
                    className="cursor-pointer"
                  >
                    <ArrowIcon />
                  </button>
                  <ZetaAiIcon className="ml-2" />
                </div>
                <div className="flex items-center ml-3 rounded-full bg-surface-200 text-foreground-light border border-strong border-grey-600 pl-3 pr-3 py-1.5">
                  <img className="mr-2" src="/img/logos/experimental.svg" width="20" />
                  <Typography className="uppercase dark:text-grey-300">Experimental</Typography>
                </div>
              </CmdkBreadcrumb>
            </div>
          )}
          {activePage === "home" && (
            <div className="flex flex-col items-center" cmdk-input-wrapper="">
              <Command.Input
                value={inputValue}
                autoFocus
                onValueChange={onValueChange}
                placeholder="Type a command or search..."
                className={clsx(
                  "flex h-11 w-full rounded-md bg-transparent px-4 py-7 !text-sm outline-none !p-4",
                  "text-foreground-light placeholder:text-border-stronger disabled:cursor-not-allowed disabled:opacity-50 !border-bottom dark:bg-[#0c0d10] bg-[#f3f3f3] !border-[#353535]"
                )}
              />
            </div>
          )}

          <Command.List
            className={clsx("overflow-y-auto overflow-x-hidden bg-transparent mx-0 !my-0 p-0 px-2")}
            style={{
              maxHeight: commandListMaxHeight,
              height: activePage === "chat" ? commandListMaxHeight : "auto",
            }}
          >
            {activePage === "home" && (
              <Home
                inputValue={inputValue}
                goToChat={() => setPages([...pages, "chat"])}
                setIsCmdkOpen={setIsCmdkOpen}
              />
            )}
            {activePage === "chat" && <CmdkChat initialValue={inputValue} setCmdkInputValue={setInputValue} />}
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

function Home({
  goToChat,
  inputValue,
  setIsCmdkOpen,
}: {
  goToChat: Function;
  inputValue: string;
  setIsCmdkOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();

  return (
    <>
      <Command.Group heading="Learn">
        <Item
          onSelect={() => {
            goToChat();
          }}
          value={inputValue}
        >
          <FeedbackIcon />
          Chat with the docs
          {inputValue ? (
            <>
              {":"}
              <span className="ml-[-4px] text-foreground font-semibold max-w-[200px] overflow-ellipsis whitespace-nowrap overflow-hidden">
                {inputValue}
              </span>
            </>
          ) : (
            "..."
          )}
        </Item>
      </Command.Group>
      <Command.Group heading="Sections">
        <Item
          shortcut="⇧ H"
          onSelect={() => {
            setIsCmdkOpen(false);
            router.push("/");
          }}
        >
          <HomeIcon className="dark:text-grey-300" sx={{ strokeWidth: 0.2 }} />
          Go to "Home" section
        </Item>
        <Item
          shortcut="⇧ B"
          onSelect={() => {
            setIsCmdkOpen(false);
            router.push("/developers");
          }}
        >
          <IconCode />
          Go to "Build" section
        </Item>
        <Item
          shortcut="⇧ N"
          onSelect={() => {
            setIsCmdkOpen(false);
            router.push("/nodes");
          }}
        >
          <IconServer />
          Go to "Run a Node" section
        </Item>
        <Item
          shortcut="⇧ U"
          onSelect={() => {
            setIsCmdkOpen(false);
            router.push("/users");
          }}
        >
          <IconClaim />
          Go to "Use" section
        </Item>
      </Command.Group>
    </>
  );
}

function Item({
  children,
  shortcut,
  onSelect = () => {},
  value,
}: {
  children: React.ReactNode;
  shortcut?: string;
  onSelect?: (value: string) => void;
  value?: string;
}) {
  return (
    <Command.Item onSelect={onSelect} value={value} itemType="command">
      {children}
      {shortcut && (
        <div cmdk-zeta-shortcuts="">
          {shortcut.split(" ").map((key) => {
            return <kbd key={key}>{key}</kbd>;
          })}
        </div>
      )}
    </Command.Item>
  );
}

function FeedbackIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    </svg>
  );
}
