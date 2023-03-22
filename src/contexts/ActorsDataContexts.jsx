import { createContext, useContext, useState } from "react";
import { api } from "../utils/api";
import { useMoviesContext } from "./MoviesDataContext";

const ActorDataContext = createContext();

export function ActorDataProvider({ children }) {
  const { lang } = useMoviesContext();
  const [actor, setActor] = useState({});
  const [actorMovies, setActorMovies] = useState([]);

  async function getActor(id) {
    try {
      const { data, status } = await api(`/person/${id}`, {
        params: { language: `${lang}` },
      });
      setActor(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  async function getActorMovies(id) {
    try {
      const { data, status } = await api(`/person/${id}/movie_credits`, {
        params: { language: `${lang}` },
      });
      setActorMovies(data.cast);
    } catch (error) {
      console.log("error", error);
    }
  }

  const actorData = { actor, getActor, actorMovies, getActorMovies };
  return (
    <ActorDataContext.Provider value={actorData}>
      {children}
    </ActorDataContext.Provider>
  );
}

export function useActorDataContext() {
  const actorData = useContext(ActorDataContext);
  return actorData;
}
