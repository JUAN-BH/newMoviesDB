import React, { useRef } from "react";
import { useGlobalStateContext } from "../../contexts/GlobalStateContext";
import { useInfiniteMovies } from "../../hooks/useInfiniteMovies";
import { MoviesResults } from "../../containers/MovieResults";
import { Loading } from "../../components/Loadings";
import { langs } from "../../utils/languages";

export const TrendingMoviesPage = () => {
  const { state } = useGlobalStateContext();
  const snitchRef = useRef();
  const { movies } = useInfiniteMovies({
    endPoint: `trending/movie/day`,
    visorRef: state.loading ? null : snitchRef,
  });

  const lang = state.lang;
  const title = (lang == "es" && langs.es.homePage.tre) || "Trending movies";

  return (
    <div>
      <h2>{title}</h2>
      <MoviesResults movies={movies} />
      {state.loading && <Loading />}
      <div className="snitch" ref={snitchRef}></div>
    </div>
  );
};
