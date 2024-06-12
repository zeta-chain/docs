import clsx from "clsx";
import { useSelector } from "react-redux";

import { useAppDispatch } from "~/lib/app.store";
import { themeSelectors } from "~/lib/theme/theme.redux.selectors";
import { updateThemeMode } from "~/lib/theme/theme.redux.thunks";

import { HeroIconMoon, HeroIconSun } from "./Icons";

export const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();

  const isDarkMode = useSelector(themeSelectors.selectIsDarkMode);

  return (
    <button
      type="button"
      className={clsx("flex items-center justify-center bg-[transparent] p-2 rounded transition-all", className)}
      onClick={() => dispatch(updateThemeMode())}
    >
      {isDarkMode && <HeroIconMoon className="text-current w-6 h-6 shrink-0" />}
      {!isDarkMode && <HeroIconSun className="text-current w-6 h-6 shrink-0" />}
    </button>
  );
};
