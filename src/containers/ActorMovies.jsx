import React from "react";
import { MovieItem } from "../components/MovieItem";
import { useActorDataContext } from "../contexts/ActorsDataContexts";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";
import { Gallery } from "./Gallery";

export const ActorMovies = () => {
  const { actorMovies, actor } = useActorDataContext();
  const { lang } = useMoviesContext();
  const movies =
    lang == "es"
      ? `${langs.es.actorPage.mov} ${actor.name}`
      : `${actor.name}'s movies`;

  return (
    <section className="actorMovies trends moviesDisplay">
      <div className="moviesDisplay__title">
        <h2>{movies}</h2>
      </div>
      <Gallery>
        {actorMovies.map((m) => {
          return <MovieItem movie={m} key={m.id} />;
        })}
      </Gallery>
    </section>
  );
};
