import React from "react";
import { IconStarFilled } from "@tabler/icons-react";
import { useActorDataContext } from "../contexts/ActorsDataContexts";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";
import { Controls } from "./Controls";
import { useThemeContext } from "../contexts/ThemeContext";

export const ActorInfo = () => {
  const { actor } = useActorDataContext();
  const { lang } = useMoviesContext();
  const { theme } = useThemeContext();

  const bio = (lang == "es" && langs.es.actorPage.bio) || "Biography";
  const fadeColor = theme === "dark" ? "rgb(30 30 30)" : "#fff";

  const imgStyle = {
    backgroundImage: `linear-gradient(to top, ${fadeColor},transparent) , url(https://image.tmdb.org/t/p/original${actor.profile_path})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  console.log(actor);

  return (
    <section className="actorInfo">
      <figure className="actorInfo__image" style={imgStyle}></figure>
      <div className="controlsMoviePage">
        <Controls />
      </div>
      <article className="actorInfo__data">
        <div className="actorInfo__data__name">
          <h1>{actor.name}</h1>
          <div className="">
            {actor.popularity} <IconStarFilled />
          </div>
        </div>
        {actor.biography == "" ? null : (
          <>
            <h2>{bio}</h2>
            <p>{actor.biography}</p>
          </>
        )}
      </article>
    </section>
  );
};
