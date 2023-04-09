import React from "react";
import { useGlobalStateContext } from "../../contexts/GlobalStateContext";
import { Gallery } from "../Gallerys";
import { MovieItem } from "../../components/MovieItems";
import { langs } from "../../utils/languages";
import { useMovieInfo } from "../../hooks/useMovieInfo";

export const RelatedMovies = () => {
  const { state } = useGlobalStateContext();
  const { movieData } = useMovieInfo("/recommendations");

  const lang = state.lang;
  const related = (lang == "es" && langs.es.moviePage.rel) || "Related movies";

  if (!movieData?.results?.length > 0) {
    return null;
  }

  return (
    <div>
      <h2>{related}</h2>
      {movieData?.results && (
        <Gallery>
          {movieData.results.map((m) => {
            return <MovieItem movie={m} key={m.id} />;
          })}
        </Gallery>
      )}
    </div>
  );
};
