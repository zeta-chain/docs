import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Dialog, Paper } from "@mui/material";
import clsx from "clsx";
import { Command } from "cmdk";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";

import { CmdkBreadcrumb } from "./CmdkBreadcrumb";
import { CmdkChat } from "./CmdkChat";

const Container = styled(Paper)`
  [cmdk-root] {
    max-width: 640px;
    width: 100%;
    border-radius: 12px;
    font-family: var(--font-sans);
    border: 1px solid var(--gray6);
    box-shadow: var(--cmdk-shadow);
    transition: transform 100ms ease;
    outline: none;
  }

  [cmdk-input] {
    font-family: var(--font-sans);
    border: none;
    width: 100%;
    font-size: 17px;
    padding: 8px 8px 16px 8px;
    outline: none;
    background: var(--bg);
    color: var(--gray12);
    border-bottom: 1px solid var(--gray6);
    margin-bottom: 16px;
    border-radius: 0;

    &::placeholder {
      color: var(--gray9);
    }
  }

  [cmdk-vercel-badge] {
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
    color: var(--gray11);
    user-select: none;
    will-change: background, color;
    transition: all 150ms ease;
    transition-property: none;

    &[data-selected="true"] {
      background: var(--grayA3);
      color: var(--gray12);
    }

    &[data-disabled="true"] {
      color: var(--gray8);
      cursor: not-allowed;
    }

    &:active {
      transition-property: background;
      background: var(--gray4);
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

  [cmdk-vercel-shortcuts] {
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

  const [pages, setPages] = React.useState<("chat" | "home" | "sections")[]>(["chat"]);
  const activePage = pages[pages.length - 1];
  const isHome = activePage === "home";

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

  function bounce() {
    if (ref.current) {
      ref.current.style.transform = "scale(0.96)";
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = "";
        }
      }, 100);

      setInputValue("");
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsCmdkOpen(false);
      }}
      classes={{
        root: "w-full",
        paper: "border border-[#353535] w-full relative min-h-[500px] m-0 py-0",
      }}
      PaperComponent={Container}
    >
      <Command
        ref={ref}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            bounce();
          }

          if (isHome || inputValue.length) {
            return;
          }

          if (e.key === "Backspace") {
            e.preventDefault();
            popPage();
            bounce();
          }
        }}
      >
        {activePage !== "home" && (
          <CmdkBreadcrumb onClick={() => setPages(["home"])}>
            <ArrowBackIcon />
          </CmdkBreadcrumb>
        )}
        <div className="flex flex-col items-center" cmdk-input-wrapper="">
          <Command.Input
            // value={value}
            autoFocus
            // onValueChange={onValueChange}
            // ref={ref}
            placeholder="Type a command or search..."
            className={clsx(
              "flex h-11 w-full rounded-md bg-transparent px-4 py-7 !text-sm outline-none !p-4",
              "text-foreground-light placeholder:text-border-stronger disabled:cursor-not-allowed disabled:opacity-50 !border-bottom !bg-[#0c0d10] !border-[#353535]"
            )}
          />
        </div>

        {activePage !== "home"
          ? pages.map((p) => (
              <div key={p} cmdk-vercel-badge="">
                {p}
              </div>
            ))
          : null}
        <Command.List>
          {activePage === "home" && (
            <Home
              searchSections={() => setPages([...pages, "sections"])}
              goToChat={() => setPages([...pages, "chat"])}
            />
          )}
          {activePage === "sections" && <SectionsList />}
          {activePage === "chat" && <CmdkChat />}
        </Command.List>
      </Command>
    </Dialog>
  );
};

function Home({
  goToChat,
  searchSections,
  setIsCmdkOpen,
}: {
  goToChat: Function;
  searchSections: Function;
  setIsCmdkOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  return (
    <>
      <Command.Group heading="Sections">
        <Item
          shortcut="S P"
          onSelect={() => {
            router.push("developers");
          }}
        >
          <ProjectsIcon />
          Go to "Build" section
        </Item>
        <Item
          shortcut="S P"
          onSelect={() => {
            router.push("nodes");
          }}
        >
          <ProjectsIcon />
          Go to "Run a Node" section
        </Item>
        <Item
          shortcut="S P"
          onSelect={() => {
            router.push("users");
            // setIsCmdkOpen
          }}
        >
          <ProjectsIcon />
          Go to "Use" section
        </Item>
      </Command.Group>
      <Command.Group heading="Help">
        <Item
          shortcut="⇧ C"
          onSelect={() => {
            goToChat();
          }}
        >
          <FeedbackIcon />
          Chat with the docs
        </Item>
        <Item shortcut="⇧ D">
          <DocsIcon />
          Search docs...
        </Item>
      </Command.Group>
    </>
  );
}

function SectionsList() {
  return (
    <>
      <Item>Build</Item>
      <Item>Run a Node</Item>
      <Item>Use</Item>
    </>
  );
}

function Item({
  children,
  shortcut,
  onSelect = () => {},
}: {
  children: React.ReactNode;
  shortcut?: string;
  onSelect?: (value: string) => void;
}) {
  return (
    <Command.Item onSelect={onSelect}>
      {children}
      {shortcut && (
        <div cmdk-vercel-shortcuts="">
          {shortcut.split(" ").map((key) => {
            return <kbd key={key}>{key}</kbd>;
          })}
        </div>
      )}
    </Command.Item>
  );
}

function ProjectsIcon() {
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
      <path d="M3 3h7v7H3z"></path>
      <path d="M14 3h7v7h-7z"></path>
      <path d="M14 14h7v7h-7z"></path>
      <path d="M3 14h7v7H3z"></path>
    </svg>
  );
}

function PlusIcon() {
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
      <path d="M12 5v14"></path>
      <path d="M5 12h14"></path>
    </svg>
  );
}

function TeamsIcon() {
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
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
      <path d="M16 3.13a4 4 0 010 7.75"></path>
    </svg>
  );
}

function CopyIcon() {
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
      <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
    </svg>
  );
}

function DocsIcon() {
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
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
      <path d="M14 2v6h6"></path>
      <path d="M16 13H8"></path>
      <path d="M16 17H8"></path>
      <path d="M10 9H8"></path>
    </svg>
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

function ContactIcon() {
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <path d="M22 6l-10 7L2 6"></path>
    </svg>
  );
}
