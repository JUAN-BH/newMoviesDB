import React from "react";
import { useThemeContext } from "../../contexts/ThemeContext";
import { Controls } from "../../components/Controlss";
import { langs } from "../../utils/languages";

import { IconStarFilled } from "@tabler/icons-react";
import movieDefault from "../../assets/img/movieDefaultBack2.jpg";
import { useMovieInfo } from "../../hooks/useMovieInfo";
import { useGlobalStateContext } from "../../contexts/GlobalStateContext";

export const MovieInfo = () => {
  const { state, dispatch } = useGlobalStateContext();
  const { theme } = useThemeContext();
  const { movieData } = useMovieInfo();

  const lang = state.lang;
  const duration = (lang == "es" && langs.es.moviePage.du) || "Duration";
  const date = (lang == "es" && langs.es.moviePage.date) || "Release date";

  const fadeColor = theme === "dark" ? "rgb(30 30 30)" : "#fff";

  const movieImg =
    `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`.includes(
      null
    )
      ? movieDefault
      : `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`;

  const imgStyle = {
    backgroundImage: `linear-gradient(to top, ${fadeColor} , transparent 20%), url(${movieImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="movieInfo">
      <figure className="movieInfo__posterMovie show" style={imgStyle}></figure>
      <div className="controlsMoviePage">
        <Controls />
      </div>
      <article className="movieInfo__data">
        <div className="movieInfo__data__mainInfo">
          <div className="movieInfo__data__mainInfo__title">
            <h2>{movieData.title}</h2>
            <p>
              {movieData.vote_average} <IconStarFilled size={20} />
            </p>
          </div>
          <div className="movieInfo__data__mainInfo__info">
            <p>
              <strong>{duration}:</strong> {movieData.runtime} min
            </p>
            <p>
              <strong>{date}:</strong> {movieData.release_date}
            </p>
          </div>
        </div>
        <div className="movieInfo__data__categories">
          {movieData?.genres &&
            movieData.genres.map((g) => <p key={g.id}>{g.name}</p>)}
        </div>
        <p className="movieInfo__data__des">{movieData.overview}</p>
      </article>
    </section>
  );
};
