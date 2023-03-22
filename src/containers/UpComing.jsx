import React from "react";
import { NavLink } from "react-router-dom";
import { MovieItem } from "../components/MovieItem";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";
import { Gallery } from "./Gallery";

export const UpComing = () => {
  const { lang, upComingMovies } = useMoviesContext();
  const title = (lang == "es" && langs.es.homePage.up) || "Upcoming Movies";
  const seeMore = (lang == "es" && langs.es.homePage.see) || "See more";

  return (
    <section className="upComing moviesDisplay">
      <div className="moviesDisplay__title">
        <h2>{title}</h2>
        <NavLink to="/upComingMovies">
          <h3>{seeMore}</h3>
        </NavLink>
      </div>
      <Gallery>
        {upComingMovies.length > 0 ? (
          upComingMovies.map((m) => {
            return <MovieItem movie={m} key={m.id} />;
          })
        ) : (
          <p>cargando</p>
        )}
      </Gallery>
    </section>
  );
};
