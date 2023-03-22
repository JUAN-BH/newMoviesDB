import React from "react";
import { MoviesResults } from "../containers/MoviesResults";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";

export const UpComingMoviesPage = () => {
  const { lang, upComingMoviesTotal } = useMoviesContext();
  const title = (lang == "es" && langs.es.homePage.up) || "UpComing movies";

  return (
    <div>
      <h2>{title}</h2>
      <MoviesResults movies={upComingMoviesTotal} />
    </div>
  );
};
