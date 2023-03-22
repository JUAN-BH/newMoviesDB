import React from "react";
import { ActorItem } from "../components/ActorItem";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";
import { Gallery } from "./Gallery";

export const Cast = () => {
  const { lang, movieCast } = useMoviesContext();
  const cast = (lang == "es" && langs.es.moviePage.cast) || "Cast";

  if (!movieCast.cast?.length > 0) {
    return null;
  }

  return (
    <div className="movieExtraInfo__cast">
      <h2>{cast}</h2>

      {movieCast?.cast ? (
        <Gallery>
          {movieCast.cast.map((a) => {
            return <ActorItem actor={a} key={a.id} />;
          })}
        </Gallery>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};
