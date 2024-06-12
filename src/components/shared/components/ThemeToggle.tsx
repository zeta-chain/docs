import clsx from "clsx";
import { useTheme } from "nextra-theme-docs";
import { useEffect, useState } from "react";

import { HeroIconMoon, HeroIconSun } from "./Icons";

export const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { setTheme, resolvedTheme } = useTheme();

  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme || resolvedTheme;
    setIsLightMode(initialTheme === "light");
  }, []);

  useEffect(() => {
    setIsLightMode(resolvedTheme === "light");
  }, [resolvedTheme]);

  return (
    <button
      type="button"
      className={clsx("flex items-center justify-center bg-[transparent] p-2 rounded transition-all", className)}
      onClick={() => setTheme(isLightMode ? "dark" : "light")}
    >
      {!isLightMode && <HeroIconMoon className="text-current w-6 h-6 shrink-0" />}
      {isLightMode && <HeroIconSun className="text-current w-6 h-6 shrink-0" />}
    </button>
  );
};
