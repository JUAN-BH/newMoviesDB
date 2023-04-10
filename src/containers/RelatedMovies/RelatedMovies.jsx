import React from "react";
import { useGlobalStateContext } from "../../contexts/GlobalStateContext";
import { useMovieInfo } from "../../hooks/useMovieInfo";
import { Gallery } from "../Gallery";
import { MovieItem } from "../../components/MovieItem";
import { langs } from "../../utils/languages";

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
