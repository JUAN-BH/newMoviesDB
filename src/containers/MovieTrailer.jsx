import React from "react";
import { useMoviesContext } from "../contexts/MoviesDataContext";

export const MovieTrailer = () => {
  const { videoMovie } = useMoviesContext();

  if (!videoMovie.length > 0) {
    return null;
  }
  return (
    <div className="movieExtraInfo__trailerCon">
      <h2>Trailer</h2>
      <iframe
        className="movieExtraInfo__trailerCon__trailer"
        src={`https://www.youtube.com/embed/${videoMovie[0].key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
