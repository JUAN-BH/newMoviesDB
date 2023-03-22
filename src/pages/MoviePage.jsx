import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import { MovieExtraInfo } from "../containers/MovieExtraInfo";
import { MovieInfo } from "../containers/MovieInfo";
import { useMoviesContext } from "../contexts/MoviesDataContext";

export const MoviePage = () => {
  const { idMovie } = useParams();
  const { getMovie, getCastMovie, getVideoMovie, getRelatedMovies, lang } =
    useMoviesContext();

  useEffect(() => {
    getMovie(idMovie);
    getCastMovie(idMovie);
    getVideoMovie(idMovie);
    getRelatedMovies(idMovie);
  }, [idMovie, lang]);

  return (
    <div>
      <BackButton />
      <MovieInfo />
      <MovieExtraInfo />
    </div>
  );
};
