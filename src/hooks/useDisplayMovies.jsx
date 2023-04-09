import { useEffect, useState } from "react";
import { useGlobalStateContext } from "../contexts/GlobalStateContext";
import { api } from "../utils/api";

export function useDisplayMovies(endPoint) {
  const [movies, setMovies] = useState([]);
  const { state, dispatch } = useGlobalStateContext();

  useEffect(() => {
    let mounted = true;

    async function getMovies() {
      try {
        dispatch({ type: "STAR_INITIAL_REQUEST" });
        const { data, status } = await api(`${endPoint}`, {
          params: { language: `${state.lang}` },
        });
        dispatch({ type: "REQUEST__SUCCESS" });
        const moviesReceived = data.results;
        mounted && setMovies(moviesReceived);
      } catch (error) {
        dispatch({ type: "REQUEST__FAIILED" });
        console.log(error);
      }
    }

    getMovies();

    return () => (mounted = false);
  }, [state.lang]);

  return movies;
}
