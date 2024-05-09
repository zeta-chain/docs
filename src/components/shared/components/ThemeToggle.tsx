import { useTheme as useNextraTheme } from "nextra-theme-docs";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "~/lib/app.store";
import { themeSelectors } from "~/lib/theme/theme.redux.selectors";
import { updateThemeMode } from "~/lib/theme/theme.redux.thunks";

import { HeroIconMoon, HeroIconSun } from "./Icons";

export const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch();

  const isDarkMode = useSelector(themeSelectors.selectIsDarkMode);

  const { setTheme: setNextraTheme } = useNextraTheme();

  useEffect(() => {
    setNextraTheme(isDarkMode ? "dark" : "light");
  }, [isDarkMode, setNextraTheme]);

  return (
    <button
      type="button"
      className="flex items-center justify-center bg-[transparent] py-2 px-4 rounded transition-all"
      onClick={() => dispatch(updateThemeMode())}
    >
      {isDarkMode && <HeroIconMoon className="text-current w-5 h-5 shrink-0" />}
      {!isDarkMode && <HeroIconSun className="text-current w-5 h-5 shrink-0" />}
    </button>
  );
};
