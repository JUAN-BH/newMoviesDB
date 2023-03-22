import React from "react";
import { Cast } from "./Cast";
import { MovieTrailer } from "./MovieTrailer";
import { RelatedMovies } from "./RelatedMovies";

export const MovieExtraInfo = () => {
  return (
    <div className="movieExtraInfo">
      <Cast />
      <MovieTrailer />
      <RelatedMovies />
    </div>
  );
};
