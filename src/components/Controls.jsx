import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useGlobalStateContext } from "../contexts/GlobalStateContext";

export const Controls = () => {
  const { theme, darkMode, lightMode } = useThemeContext();

  const { state, dispatch } = useGlobalStateContext();

  function changeLang(e) {
    dispatch({ type: "CHANGE_LANG", payload: e.target.value });
  }

  return (
    <>
      {theme == "dark" ? (
        <IconSunFilled className="controlTheme" onClick={darkMode} />
      ) : (
        <IconMoonFilled className="controlTheme" onClick={lightMode} />
      )}
      <select
        value={state.lang}
        name=""
        id=""
        onChange={changeLang}
        className="selectLang"
      >
        <option value="en">{state.lang == "es" ? "Ingles" : "English"}</option>
        <option value="es">{state.lang == "es" ? "Español" : "Spanish"}</option>
      </select>
    </>
  );
};
