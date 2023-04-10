import React from "react";
import { LazyCast } from "./Cast";
import { LazyMovieTrailer } from "./MovieTrailer";
import { LazyRelatedMovies } from "./RelatedMovies";

export const MovieExtraInfo = () => {
  return (
    <div className="movieExtraInfo">
      <LazyCast />
      <LazyMovieTrailer />
      <LazyRelatedMovies />
    </div>
  );
};
