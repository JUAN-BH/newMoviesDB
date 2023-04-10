import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalStateContext } from "../contexts/GlobalStateContext";
import { useDisplayMovies } from "../hooks/useDisplayMovies";
import { useNearScreen } from "../hooks/useNearScreen";
import { Gallery } from "./Gallery";
import { Loading } from "../components/Loading";
import { MovieItem } from "../components/MovieItem";
import { langs } from "../utils/languages";

const TopRated = () => {
  const topRatedMovies = useDisplayMovies("movie/top_rated");
  const { state } = useGlobalStateContext();
  const lang = state.lang;

  const title = (lang == "es" && langs.es.homePage.top) || "Top rated Movies";
  const seeMore = (lang == "es" && langs.es.homePage.see) || "See more";

  return (
    <>
      <div className="moviesDisplay__title">
        <h2>{title}</h2>
        <NavLink to="/topRatedMovies">
          <h3>{seeMore}</h3>
        </NavLink>
      </div>
      <Gallery>
        {topRatedMovies.length > 0 ? (
          topRatedMovies.map((m) => {
            return <MovieItem movie={m} key={m.id} />;
          })
        ) : (
          <Loading />
        )}
      </Gallery>
    </>
  );
};

export const LazyTopRated = () => {
  const { show, elRef } = useNearScreen();

  return (
    <section className="topRated moviesDisplay" ref={elRef}>
      {show && <TopRated />}
    </section>
  );
};
