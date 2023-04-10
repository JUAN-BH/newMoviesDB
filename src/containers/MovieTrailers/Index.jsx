import React from "react";
import { MovieTrailer } from "./MovieTrailer";
import { useNearScreen } from "../../hooks/useNearScreen";

export const LazyMovieTrailer = () => {
  const { show, elRef } = useNearScreen();

  return <div ref={elRef}>{show && <MovieTrailer />}</div>;
};
