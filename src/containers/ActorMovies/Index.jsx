import { useNearScreen } from "../../hooks/useNearScreen";
import { ActorMovies } from "./ActorMovies";

export const LazyActorMovies = () => {
  const { show, elRef } = useNearScreen();
  return <section ref={elRef}>{show && <ActorMovies />}</section>;
};
