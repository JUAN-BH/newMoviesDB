import React from "react";
import { useGlobalStateContext } from "../contexts/GlobalStateContext";
import { Categories } from "../containers/Categories";
import { LazyTopRated } from "../containers/TopRateds/Index.jsx";
import { LazyTrends } from "../containers/Trendss/index";
import { LazyUpComing } from "../containers/UpComings/Index";
import { Footer } from "../components/Footer";
import { SearchMovieInput } from "../components/SearchMovieInput";
import { InitialLoader } from "../components/InitialLoader";

export const HomePage = () => {
  const { state } = useGlobalStateContext();

  return (
    <>
      {state.initialLoader && <InitialLoader />}
      <SearchMovieInput />
      <Categories />
      <LazyUpComing />
      <LazyTrends />
      <LazyTopRated />
      <Footer />
    </>
  );
};
