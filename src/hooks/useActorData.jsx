import { useEffect, useState } from "react";
import { useGlobalStateContext } from "../contexts/GlobalStateContext";
import { useParams } from "react-router-dom";
import { api } from "../utils/api";

export function useActorData(endpoint = "") {
  const { state, dispatch } = useGlobalStateContext();
  const { idActor } = useParams();
  const [actorData, setActorData] = useState([]);

  useEffect(() => {
    let mounted = true;

    async function getDataActor() {
      try {
        dispatch({ type: "STAR_REQUEST" });
        const { data, status } = await api(`/person/${idActor}${endpoint}`, {
          params: { language: `${state.lang}` },
        });

        dispatch({ type: "REQUEST__SUCCESS" });
        if (mounted) {
          setActorData(data);
        }
      } catch (error) {
        dispatch({ type: "REQUEST__FAIILED" });
        console.log(error);
      }
    }

    getDataActor();

    return () => (mounted = false);
  }, [state.lang]);

  return { actorData };
}
