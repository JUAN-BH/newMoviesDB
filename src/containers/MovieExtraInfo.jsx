import React from "react";
import { LazyCast } from "./Castss/Index";
import { LazyMovieTrailer } from "./MovieTrailers/Index";
import { LazyRelatedMovies } from "./RelatedMovies/Index";

export const MovieExtraInfo = () => {
  return (
    <div className="movieExtraInfo">
      <LazyCast />
      <LazyMovieTrailer />
      <LazyRelatedMovies />
    </div>
  );
};
