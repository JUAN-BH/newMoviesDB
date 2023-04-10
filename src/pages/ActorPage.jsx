import { LazyActorMovies } from "../containers/ActorMovies";
import { ActorInfo } from "../components/ActorInfo";
import { BackButton } from "../components/BackButton";
import { Footer } from "../components/Footer";

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
