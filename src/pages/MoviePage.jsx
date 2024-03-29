import { useGlobalStateContext } from "../contexts/GlobalStateContext";
import { MovieExtraInfo } from "../containers/MovieExtraInfo";
import { MovieInfo } from "../containers/MovieInfo";
import { BackButton } from "../components/BackButton";
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";
import { MovieReviews } from "../containers/MoiveReviews";

export const MoviePage = () => {
  const { state } = useGlobalStateContext();
  return (
    <div>
      {state.loading && <Loading />}
      <BackButton />
      <MovieInfo />
      <MovieExtraInfo />
      <MovieReviews />
      <Footer />
    </div>
  );
};
