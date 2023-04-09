import React from "react";
import { useThemeContext } from "../../contexts/ThemeContext";
import { langs } from "../../utils/languages";
import { Controls } from "../Controlss";

import { IconStarFilled } from "@tabler/icons-react";
import { useGlobalStateContext } from "../../contexts/GlobalStateContext";
import { useActorData } from "../../hooks/useActorData";

export const ActorInfo = () => {
  const { state } = useGlobalStateContext();
  const { actorData } = useActorData();
  const { theme } = useThemeContext();

  const lang = state.lang;
  const bio = (lang == "es" && langs.es.actorPage.bio) || "Biography";
  const fadeColor = theme === "dark" ? "rgb(30 30 30)" : "#fff";

  const imgStyle = {
    backgroundImage: `linear-gradient(to top, ${fadeColor},transparent) , url(https://image.tmdb.org/t/p/original${actorData.profile_path})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="actorInfo">
      <figure className="actorInfo__image" style={imgStyle}></figure>
      <div className="controlsMoviePage">
        <Controls />
      </div>
      <article className="actorInfo__data">
        <div className="actorInfo__data__name">
          <h1>{actorData.name}</h1>
          <div className="">
            {actorData.popularity} <IconStarFilled />
          </div>
        </div>
        {actorData.biography == "" ? null : (
          <>
            <h2>{bio}</h2>
            <p>{actorData.biography}</p>
          </>
        )}
      </article>
    </section>
  );
};
