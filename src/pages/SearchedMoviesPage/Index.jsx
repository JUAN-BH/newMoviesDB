import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useGlobalStateContext } from "../../contexts/GlobalStateContext";
import { useInfiniteMovies } from "../../hooks/useInfiniteMovies";
import { MoviesResults } from "../../containers/MovieResults";
import { SearchMovieInput } from "../../components/SearchMovieInput";
import { Loading } from "../../components/Loader";
import { langs } from "../../utils/languages";

export const SearchedMoviesPage = () => {
  const { state } = useGlobalStateContext();
  const [searchParams] = useSearchParams();
  const paramsValue = searchParams.get("search");
  const snitchRef = useRef();
  const { movies } = useInfiniteMovies({
    endPoint: "search/movie",
    visorRef: snitchRef,
    searchQuery: paramsValue,
  });

  const lang = state.lang;
  const title = (lang === "es" && langs.es.resultsPage.res) || "Results for";

  return (
    <div className="resultsMoviesContainer">
      <SearchMovieInput />
      <h2>
        {title} {paramsValue}
      </h2>
      <MoviesResults movies={movies} />
      {state.loading && <Loading />}
      <div className="snitch" ref={snitchRef}></div>
    </div>
  );
};
