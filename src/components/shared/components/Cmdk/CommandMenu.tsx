import clsx from "clsx";
import { useRouter } from "next/router";
import * as React from "react";

import AiCommand from "./AiCommand";
import APIKeys from "./APIKeys";
import { COMMAND_ROUTES } from "./Command.constants";
import { CommandDialog, CommandGroup, CommandInput, CommandItem, CommandList } from "./Command.utils";
import { useCommandMenu } from "./CommandMenuProvider";
import CommandMenuShortcuts from "./CommandMenuShortcuts";
import DocsSearch from "./DocsSearch";
import SearchableStudioItems from "./SearchableStudioItems";
import ThemeOptions from "./ThemeOptions";
import { IconArrowRight } from "./ui/src/components/Icon/icons/IconArrowRight";
import { IconBook } from "./ui/src/components/Icon/icons/IconBook";
import { IconColumns } from "./ui/src/components/Icon/icons/IconColumns";
import { IconHome } from "./ui/src/components/Icon/icons/IconHome";
import { IconInbox } from "./ui/src/components/Icon/icons/IconInbox";
import { IconMonitor } from "./ui/src/components/Icon/icons/IconMonitor";
import { IconPhone } from "./ui/src/components/Icon/icons/IconPhone";
import { IconUser } from "./ui/src/components/Icon/icons/IconUser";
import { AiIconAnimation } from "./ui/src/layout/ai-icon-animation/ai-icon-animation";

export const CHAT_ROUTES = [
  COMMAND_ROUTES.AI, // this one is temporary
  COMMAND_ROUTES.AI_ASK_ANYTHING,
  COMMAND_ROUTES.AI_RLS_POLICY,
  COMMAND_ROUTES.GENERATE_SQL,
];

const iconPicker: { [key: string]: React.ReactNode } = {
  arrowRight: <IconArrowRight />,
  book: <IconBook />,
  inbox: <IconInbox />,
  mobile: <IconPhone />,
  person: <IconUser />,
  services: <IconColumns />,
  contact: <IconMonitor />,
  icon: <IconHome />,
  products: <IconColumns />,
};

const CommandMenu = () => {
  const router = useRouter();

  const {
    isOpen,
    setIsOpen,
    search,
    setSearch,
    pages,
    setPages,
    currentPage,
    site,
    project,
    inputRef: commandInputRef,
  } = useCommandMenu();
  const showCommandInput = !currentPage || !CHAT_ROUTES.includes(currentPage);

  // This function has been added to prevent the use of double quotes in the search docs input due to an issue with the cmdk-supabase module. This function can be removed when we transition to using cmdk.
  const handleInputChange = (value: string) => {
    const newValue = value.replace(/"/g, ""); // Remove double quotes
    setSearch(newValue);
  };

  const commandListMaxHeight =
    currentPage === COMMAND_ROUTES.DOCS_SEARCH ||
    currentPage === COMMAND_ROUTES.AI ||
    currentPage === COMMAND_ROUTES.GENERATE_SQL
      ? "min(600px, 50vh)"
      : "300px";

  return (
    <>
      <CommandDialog setIsOpen={setIsOpen} page={currentPage} visible={isOpen} open={isOpen}>
        {pages.length > 0 && <CommandMenuShortcuts />}
        {showCommandInput && (
          <CommandInput
            ref={commandInputRef}
            placeholder="Type a command or search..."
            value={search}
            onValueChange={handleInputChange}
          />
        )}
        <CommandList
          style={{
            maxHeight: commandListMaxHeight,
            height:
              currentPage === COMMAND_ROUTES.DOCS_SEARCH ||
              currentPage === COMMAND_ROUTES.AI ||
              currentPage === COMMAND_ROUTES.GENERATE_SQL
                ? commandListMaxHeight
                : "auto",
          }}
          className="my-2"
        >
          {!currentPage && (
            <>
              <CommandGroup heading="Documentation" forceMount={true}>
                <CommandItem
                  type="command"
                  onSelect={() => setPages([...pages, COMMAND_ROUTES.DOCS_SEARCH])}
                  forceMount={true}
                  className={clsx("hover:border-overlay", "hover:bg-grey-700", "hover:shadow-sm", "cursor-pointer")}
                >
                  <IconBook />

                  <span>
                    Search the docs
                    {search ? (
                      <>
                        {": "}
                        <span className="text-foreground font-semibold">{search}</span>
                      </>
                    ) : (
                      "..."
                    )}
                  </span>
                </CommandItem>
                <CommandItem
                  type="command"
                  onSelect={() => {
                    setPages([...pages, COMMAND_ROUTES.AI]);
                  }}
                  aria-selected={true ? "true" : "false"}
                  className={clsx("hover:border-overlay", "hover:bg-grey-700", "hover:shadow-sm", "cursor-pointer")}
                  forceMount={true}
                >
                  <AiIconAnimation />
                  <span className="text-brand flex items-center ml-[-8px]">
                    <img src="zeta-bot.png" className="w-[24px] h-[24px] mr-2" />
                    Ask Zeta AI
                    {search ? (
                      <>
                        {":"} <span className="ml-1 text-foreground font-semibold">{`${search}`}</span>
                      </>
                    ) : (
                      "..."
                    )}
                  </span>
                </CommandItem>
              </CommandGroup>

              {/* <DashboardTableEditor /> */}

              <ThemeOptions isSubItem />
              {site === "studio" && search && <SearchableStudioItems />}
            </>
          )}
          {currentPage === COMMAND_ROUTES.AI && <AiCommand />}
          {currentPage === COMMAND_ROUTES.DOCS_SEARCH && <DocsSearch />}
          {currentPage === COMMAND_ROUTES.THEME && <ThemeOptions />}
          {currentPage === COMMAND_ROUTES.API_KEYS && <APIKeys />}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export { CommandMenu };
