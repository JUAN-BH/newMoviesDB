import { useNearScreen } from "../../hooks/useNearScreen";
import { Cast } from "./Cast";

export const LazyCast = () => {
  const { show, elRef } = useNearScreen();
  return <div ref={elRef}>{show && <Cast />} </div>;
};
