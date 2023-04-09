import { useGlobalStateContext } from "../../contexts/GlobalStateContext";
import { MovieExtraInfo } from "../../containers/MovieExtraInfos";
import { MovieInfo } from "../../containers/MovieInfos";
import { BackButton } from "../../components/BackButtons";
import { Footer } from "../../components/Footers";
import { Loading } from "../../components/Loadings";

export const MoviePage = () => {
  const { state } = useGlobalStateContext();
  return (
    <div>
      {state.loading && <Loading />}
      <BackButton />
      <MovieInfo />
      <MovieExtraInfo />
      <Footer />
    </div>
  );
};
