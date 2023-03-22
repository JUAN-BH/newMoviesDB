import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchMovieInput } from "../components/SearchMovieInput";
import { MoviesResults } from "../containers/MoviesResults";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";

export const SearchedMoviesPage = () => {
  const {
    moviesSearch,
    setMoviesSearch,
    getSearchedMovies,
    lang,
    page,
    setPage,
  } = useMoviesContext();
  const [searchParams] = useSearchParams();
  const paramsValue = searchParams.get("search");
  const title = (lang === "es" && langs.es.resultsPage.res) || "Results for";

  useEffect(() => {
    setMoviesSearch([]);
    setPage(1);
    getSearchedMovies(paramsValue);
  }, [paramsValue]);

  useEffect(() => {
    getSearchedMovies(paramsValue);
  }, [lang, page]);

  return (
    <div className="resultsMoviesContainer">
      <SearchMovieInput />
      <h2>
        {title} {paramsValue}
      </h2>
      <MoviesResults movies={moviesSearch} />
    </div>
  );
};
