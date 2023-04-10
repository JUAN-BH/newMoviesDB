import React from "react";
import { useMovieInfo } from "../hooks/useMovieInfo";
import { useNearScreen } from "../hooks/useNearScreen";

const MovieTrailer = () => {
  const { movieData } = useMovieInfo("/videos");

  if (!movieData?.results?.length > 0) {
    return null;
  }
  return (
    <div className="movieExtraInfo__trailerCon">
      <h2>Trailer</h2>
      <iframe
        className="movieExtraInfo__trailerCon__trailer"
        src={`https://www.youtube.com/embed/${movieData.results[0].key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export const LazyMovieTrailer = () => {
  const { show, elRef } = useNearScreen();

  return <div ref={elRef}>{show && <MovieTrailer />}</div>;
};
