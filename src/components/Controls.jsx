import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import React from "react";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { useThemeContext } from "../contexts/ThemeContext";

export const Controls = () => {
  const { theme, darkMode, lightMode } = useThemeContext();
  const { lang, setLang } = useMoviesContext();
  function changeLang(e) {
    setLang(e.target.value);
  }

  return (
    <>
      {theme == "dark" ? (
        <IconSunFilled className="controlTheme" onClick={darkMode} />
      ) : (
        <IconMoonFilled className="controlTheme" onClick={lightMode} />
      )}
      <select value={lang} name="" id="" onChange={changeLang}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </>
  );
};
