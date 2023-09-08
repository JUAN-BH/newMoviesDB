import React from "react";
import { useGlobalStateContext } from "../contexts/GlobalStateContext";
import { Categories } from "../containers/Categories";
import { LazyTopRated } from "../containers/TopRated";
import { LazyTrends } from "../containers/Trends";
import { LazyUpComing } from "../containers/UpComing";
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
      {/* <LazyUpComing /> */}
      <LazyTrends />
      <LazyTopRated />
      <Footer />
    </>
  );
};
