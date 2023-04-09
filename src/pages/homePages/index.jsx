import React from "react";
import { useGlobalStateContext } from "../../contexts/GlobalStateContext";
import { Categories } from "../../containers/Categories";
import { LazyTopRated } from "../../containers/TopRateds/index";
import { LazyTrends } from "../../containers/Trendss/index";
import { LazyUpComing } from "../../containers/UpComings/index";
import { Footer } from "../../components/Footers";
import { SearchMovieInput } from "../../components/SearchMovieInputs";
import { InitialLoader } from "../../components/InitalLoaders";

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
