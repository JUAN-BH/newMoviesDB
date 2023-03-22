import React from "react";
import { MoviesResults } from "../containers/MoviesResults";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";

export const TopRatedMoviesPage = () => {
  const { lang, topRatedMoviesTotal } = useMoviesContext();
  const title = (lang == "es" && langs.es.homePage.top) || "Top rated movies";

  return (
    <div>
      <h2>{title}</h2>
      <MoviesResults movies={topRatedMoviesTotal} />
    </div>
  );
};
