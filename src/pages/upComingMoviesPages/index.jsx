import { useRef } from "react";
import { useGlobalStateContext } from "../../contexts/GlobalStateContext";
import { useInfiniteMovies } from "../../hooks/useInfiniteMovies";
import { MoviesResults } from "../../containers/MovieResults/Index";
import { Loading } from "../../components/Loadings";
import { langs } from "../../utils/languages";

export const UpComingMoviesPage = () => {
  const { state } = useGlobalStateContext();
  const snitchRef = useRef();
  const { movies } = useInfiniteMovies({
    endPoint: `movie/upcoming`,
    visorRef: state.loading ? null : snitchRef,
  });

  const lang = state.lang;
  const title = (lang == "es" && langs.es.homePage.up) || "UpComing movies";

  return (
    <div>
      <h2>{title}</h2>
      <MoviesResults movies={movies} />
      {state.loading && <Loading />}
      <div className="snitch" ref={snitchRef}></div>
    </div>
  );
};
{
  /* <MoviesResults movies={movies} />
{state.loading && <Loading />} */
}
