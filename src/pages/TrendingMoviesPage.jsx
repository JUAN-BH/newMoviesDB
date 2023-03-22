import React from "react";
import { MoviesResults } from "../containers/MoviesResults";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";

export const TrendingMoviesPage = () => {
  const { lang, trendMoviesTotal } = useMoviesContext();
  const title = (lang == "es" && langs.es.homePage.tre) || "Trending movies";

  return (
    <div>
      <h2>{title}</h2>
      <MoviesResults movies={trendMoviesTotal} />
    </div>
  );
};
