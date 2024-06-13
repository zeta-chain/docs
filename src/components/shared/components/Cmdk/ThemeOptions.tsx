import { CommandGroup } from "cmdk";
import { useTheme } from "next-themes";

import ChildItem from "./ChildItem";
import { useCommandMenu } from "./CommandMenuProvider";
import { Theme, themes } from "./ui/src/components/ThemeProvider/themes";

const ThemeOptions = ({ isSubItem = false }) => {
  const { setIsOpen } = useCommandMenu();
  const { setTheme } = useTheme();
  return (
    <CommandGroup>
      {themes
        .filter((x) => x.name === "System" || x.name === "Light" || x.name === "Dark")
        .map((theme: Theme) => (
          <ChildItem
            key={theme.value}
            isSubItem={isSubItem}
            onSelect={() => {
              setTheme(theme.value);
              setIsOpen(false);
            }}
          >
            Change Theme to {theme.name === "System" ? "System Default" : theme.name}
          </ChildItem>
        ))}
    </CommandGroup>
  );
};

export default ThemeOptions;
