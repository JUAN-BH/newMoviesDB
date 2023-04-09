import { useGlobalStateContext } from "../../contexts/GlobalStateContext";
import { MovieExtraInfo } from "../../containers/MovieExtraInfo";
import { MovieInfo } from "../../containers/MovieInfo";
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loader";

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
