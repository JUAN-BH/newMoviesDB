import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";

export const SearchMovieInput = () => {
  const navigate = useNavigate();
  const { lang } = useMoviesContext();
  const placeHolder =
    (lang == "es" && langs.es.input.placeHolder) || "Search a movie";

  function searchMovies(e) {
    const query = e.target.movieInput.value;
    e.preventDefault();
    navigate(`/result?search=${query}`);
  }

  return (
    <form className="searchMovieForm" onSubmit={searchMovies}>
      <input
        type="text"
        name="movieInput"
        className="searchMovieForm__input"
        placeholder={placeHolder}
        autoComplete="off"
      />
      <IconSearch className="searchMovieForm__icon" />
    </form>
  );
};
