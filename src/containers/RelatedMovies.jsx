import React from "react";
import { MovieItem } from "../components/MovieItem";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";
import { Gallery } from "./Gallery";

export const RelatedMovies = () => {
  const { lang, relatedMovies } = useMoviesContext();
  const related = (lang == "es" && langs.es.moviePage.rel) || "Related movies";

  if (!relatedMovies.length > 0) {
    return null;
  }

  return (
    <div>
      <h2>{related}</h2>

      {relatedMovies ? (
        <Gallery>
          {relatedMovies.map((m) => {
            return <MovieItem movie={m} key={m.id} />;
          })}
        </Gallery>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};
