import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalStateContext } from "../../contexts/GlobalStateContext";
import { useDisplayMovies } from "../../hooks/useDisplayMovies";
import { Gallery } from "../Gallerys";
import { Loading } from "../../components/Loadings";
import { MovieItem } from "../../components/MovieItems";
import { langs } from "../../utils/languages";

export const Trends = () => {
  const trendMovies = useDisplayMovies("trending/movie/day");

  const { state } = useGlobalStateContext();
  const lang = state.lang;

  const title = (lang == "es" && langs.es.homePage.tre) || "Trending Movies";
  const seeMore = (lang == "es" && langs.es.homePage.see) || "See more";

  return (
    <>
      <div className="moviesDisplay__title">
        <h2>{title}</h2>
        <NavLink to="/trendingMovies">
          <h3>{seeMore}</h3>
        </NavLink>
      </div>
      <Gallery>
        {trendMovies.length > 0 ? (
          trendMovies.map((m) => {
            return <MovieItem movie={m} key={m.id} />;
          })
        ) : (
          <Loading />
        )}
      </Gallery>
    </>
  );
};
