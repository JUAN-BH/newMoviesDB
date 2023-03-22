import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const themeSelected = localStorage.getItem("theme");
  const [theme, setTheme] = useState(themeSelected || "dark");
  const body = document.querySelector("body");

  if (theme === "dark") {
    body.classList.add("dark");
  }

  function darkMode() {
    setTheme("light");
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  function lightMode() {
    setTheme("dark");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  const themeData = { theme, darkMode, lightMode };
  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const themeData = useContext(ThemeContext);
  return themeData;
}
