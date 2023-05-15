import { useState, useEffect } from "react";

export const useTheme = (): (() => void)[] => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  let handleTheme = () => {
    setDarkTheme(!darkTheme);
    if (darkTheme) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  return [handleTheme];
};
