import { useParams } from "react-router-dom";
import { api } from "../utils/api";
import { useEffect, useState } from "react";
import { useGlobalStateContext } from "../contexts/GlobalStateContext";

export function useMovieInfo(endPoint = "") {
  const { state, dispatch } = useGlobalStateContext();
  const { idMovie } = useParams();

  const [movieData, setMovieData] = useState({});
  //CAST: movie/${idMovie}/credits
  //TRAILER: movie/${idMovie}/videos
  //RELATED: movie/${idMovie}/recommendations

  useEffect(() => {
    let mounted = true;

    async function getMovieData() {
      try {
        dispatch({ type: "STAR_REQUEST" });
        const { data, status } = await api(`movie/${idMovie}${endPoint}`, {
          params: { language: `${state.lang}` },
        });
        dispatch({ type: "REQUEST__SUCCESS" });
        if (mounted) {
          setMovieData(data);
        }
      } catch (e) {
        dispatch({ type: "REQUEST__FAIILED" });
        console.log(e.message);
      }
    }

    getMovieData();

    return () => (mounted = false);
  }, [idMovie, state.lang]);

  return { movieData };
}
