import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { useGlobalStateContext } from "../contexts/GlobalStateContext";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const { state, dispatch } = useGlobalStateContext();

  useEffect(() => {
    let mounted = true;

    async function getCatgegories() {
      try {
        dispatch({ type: "STAR_INITIAL_REQUEST" });
        const { data, status } = await api("genre/movie/list", {
          params: { language: `${state.lang}` },
        });
        dispatch({ type: "REQUEST__SUCCESS" });
        mounted && setCategories(data.genres);
      } catch (error) {
        dispatch({ type: "REQUEST__FAIILED" });
        console.log(error.message);
      }
    }

    getCatgegories();

    return () => (mounted = false);
  }, [state.lang]);

  return categories;
}
