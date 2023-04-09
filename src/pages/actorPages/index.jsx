import { LazyActorMovies } from "../../containers/ActorMovies";
import { ActorInfo } from "../../components/ActorInfos";
import { BackButton } from "../../components/BackButtons";
import { Footer } from "../../components/Footers";

export const ActorPage = () => {
  return (
    <div>
      <BackButton />
      <ActorInfo />
      <LazyActorMovies />
      <Footer />
    </div>
  );
};
