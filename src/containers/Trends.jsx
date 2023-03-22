import React from "react";
import { NavLink } from "react-router-dom";
import { MovieItem } from "../components/MovieItem";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";
import { Gallery } from "./Gallery";

export const Trends = () => {
  const { lang, trendMovies } = useMoviesContext();
  const title = (lang == "es" && langs.es.homePage.tre) || "Trending Movies";
  const seeMore = (lang == "es" && langs.es.homePage.see) || "See more";

  return (
    <section className="trends moviesDisplay">
      <div className="moviesDisplay__title">
        <h2>{title}</h2>
        <NavLink to="/trendingMovies">
          <h3>{seeMore}</h3>
        </NavLink>
      </div>
      <Gallery>
        {trendMovies.map((m) => {
          return <MovieItem movie={m} key={m.id} />;
        })}
      </Gallery>
    </section>
  );
};
