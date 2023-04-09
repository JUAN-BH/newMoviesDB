import { useNearScreen } from "../../hooks/useNearScreen";
import { TopRated } from "./TopRated";

export const LazyTopRated = () => {
  const { show, elRef } = useNearScreen();

  return (
    <section className="topRated moviesDisplay" ref={elRef}>
      {show && <TopRated />}
    </section>
  );
};
