import React from "react";
import { SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import { useGlobalStateContext } from "../contexts/GlobalStateContext";
import { useDisplayMovies } from "../hooks/useDisplayMovies";
import { useNearScreen } from "../hooks/useNearScreen";
import { Gallery } from "./Gallery";
import { Loading } from "../components/Loading";
import { MovieItem } from "../components/MovieItem";
import { langs } from "../utils/languages";

const UpComing = () => {
  const upComingMovies = useDisplayMovies("movie/upcoming");
  const { state } = useGlobalStateContext();
  const lang = state.lang;

  const title = (lang == "es" && langs.es.homePage.up) || "Upcoming Movies";
  const seeMore = (lang == "es" && langs.es.homePage.see) || "See more";

  return (
    <>
      <div className="moviesDisplay__title">
        <h2>{title}</h2>
        <NavLink to="/upComingMovies">
          <h3>{seeMore}</h3>
        </NavLink>
      </div>
      <Gallery>
        {upComingMovies.length > 0 ? (
          upComingMovies.map((m) => {
            return (
              <SwiperSlide>
                <MovieItem movie={m} key={m.id} />
              </SwiperSlide>
              );
          })
        ) : (
          <Loading />
        )}
      </Gallery>
    </>
  );
};

export const LazyUpComing = () => {
  const { show, elRef } = useNearScreen();

  return (
    <section className="upComing moviesDisplay" ref={elRef}>
      {show && <UpComing />}
    </section>
  );
};
