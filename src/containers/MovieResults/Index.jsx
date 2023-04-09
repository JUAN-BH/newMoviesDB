import React from "react";
import { MovieItem } from "../../components/MovieItems";

export const MoviesResults = ({ movies }) => {
  return (
    <div className="moviesResults">
      {movies.map((m) => (
        <MovieItem movie={m} key={m.id} />
      ))}
    </div>
  );
};
