import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { MoviesResults } from "../containers/MoviesResults";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";

export const CategoriesPage = () => {
  const { idCategory, nameCategory } = useParams();
  const { moviesByCategory, getMoviesByCategories, lang, page, loading } =
    useMoviesContext();

  useEffect(() => {
    getMoviesByCategories(idCategory);
  }, [idCategory, page, lang]);

  const title = (lang == "es" && langs.es.categoriePage.mov) || "movies";

  return (
    <div>
      {loading && <Loading />}

      <h2>
        {lang === "es"
          ? `${title} ${nameCategory}`
          : `${nameCategory} ${title}`}
      </h2>
      <MoviesResults movies={moviesByCategory} />
    </div>
  );
};
