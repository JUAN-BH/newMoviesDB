import { useNearScreen } from "../../hooks/useNearScreen";
import { Trends } from "./Trends";

export const LazyTrends = () => {
  const { show, elRef } = useNearScreen();

  return (
    <section className="trends moviesDisplay" ref={elRef}>
      {show && <Trends />}
    </section>
  );
};
