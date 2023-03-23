import React from "react";
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";
import { SearchMovieInput } from "../components/SearchMovieInput";
import { Categories } from "../containers/Categories";
import { TopRated } from "../containers/TopRated";
import { Trends } from "../containers/Trends";
import { UpComing } from "../containers/UpComing";
import { useMoviesContext } from "../contexts/MoviesDataContext";

export const HomePage = () => {
  const { loading } = useMoviesContext();

  return (
    <div>
      {loading && <Loading />}
      <SearchMovieInput />
      <Categories />
      <UpComing />
      <Trends />
      <TopRated />
      <Footer />
    </div>
  );
};
