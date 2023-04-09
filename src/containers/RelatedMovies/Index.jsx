import { useNearScreen } from "../../hooks/useNearScreen";
import { RelatedMovies } from "./RelatedMovies";

export const LazyRelatedMovies = () => {
  const { show, elRef } = useNearScreen();
  return <div ref={elRef}>{show && <RelatedMovies />}</div>;
};
