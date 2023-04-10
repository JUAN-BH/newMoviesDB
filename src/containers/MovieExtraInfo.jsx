import React from "react";
import { LazyCast } from "./Castss";
import { LazyMovieTrailer } from "./MovieTrailers";
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
