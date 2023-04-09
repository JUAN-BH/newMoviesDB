import { useNearScreen } from "../../hooks/useNearScreen";
import { UpComing } from "./UpComing";

export const LazyUpComing = () => {
  const { show, elRef } = useNearScreen();

  return (
    <section className="upComing moviesDisplay" ref={elRef}>
      {show && <UpComing />}
    </section>
  );
};
