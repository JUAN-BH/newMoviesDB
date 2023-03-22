import { IconStarFilled } from "@tabler/icons-react";
import React from "react";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import movieDefault from "../assets/img/movieDefaultBack2.jpg";
import { useThemeContext } from "../contexts/ThemeContext";
import { Controls } from "../components/Controls";
import { langs } from "../utils/languages";

export const MovieInfo = () => {
  const { lang, movie } = useMoviesContext();
  const { theme } = useThemeContext();

  const duration = (lang == "es" && langs.es.moviePage.du) || "Duration";
  const date = (lang == "es" && langs.es.moviePage.date) || "Release date";

  const fadeColor = theme === "dark" ? "rgb(30 30 30)" : "#fff";

  const movieImg =
    `https://image.tmdb.org/t/p/original${movie.backdrop_path}`.includes(null)
      ? movieDefault
      : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

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
            <h2>{movie.title}</h2>
            <p>
              {movie.vote_average} <IconStarFilled size={20} />
            </p>
          </div>
          <div className="movieInfo__data__mainInfo__info">
            <p>
              <strong>{duration}:</strong> {movie.runtime} min
            </p>
            <p>
              <strong>{date}:</strong> {movie.release_date}
            </p>
          </div>
        </div>
        <div className="movieInfo__data__categories">
          {movie?.genres && movie.genres.map((g) => <p key={g.id}>{g.name}</p>)}
        </div>
        <p className="movieInfo__data__des">{movie.overview}</p>
      </article>
    </section>
  );
};
