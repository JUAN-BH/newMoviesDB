import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { MoviesResults } from "../../containers/MovieResults";
import { Loading } from "../../components/Loader";
import { langs } from "../../utils/languages";
import { useGlobalStateContext } from "../../contexts/GlobalStateContext";
import { useInfiniteMovies } from "../../hooks/useInfiniteMovies";

export const CategoriesPage = () => {
  const { state } = useGlobalStateContext();
  const { idCategory, nameCategory } = useParams();
  const snitchRef = useRef();
  const { movies } = useInfiniteMovies({
    endPoint: "discover/movie",
    visorRef: snitchRef,
    genreId: idCategory,
  });

  const lang = state.language;
  const title = (lang == "es" && langs.es.categoriePage.mov) || "movies";

  return (
    <div>
      <h2>
        {lang === "es"
          ? `${title} ${nameCategory}`
          : `${nameCategory} ${title}`}
      </h2>
      <MoviesResults movies={movies} />
      {state.loading && <Loading />}
      <div className="snitch" ref={snitchRef}></div>
    </div>
  );
};
