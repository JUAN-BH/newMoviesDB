import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ActorInfo } from "../components/ActorInfo";
import { BackButton } from "../components/BackButton";
import { Footer } from "../components/Footer";
import { ActorMovies } from "../containers/ActorMovies";
import { useActorDataContext } from "../contexts/ActorsDataContexts";
import { useMoviesContext } from "../contexts/MoviesDataContext";

export const ActorPage = () => {
  const { lang } = useMoviesContext();
  const { getActor, getActorMovies } = useActorDataContext();
  const { idActor } = useParams();
  useEffect(() => {
    getActor(idActor);
    getActorMovies(idActor);
  }, [idActor, lang]);
  return (
    <div>
      <BackButton />
      <ActorInfo />
      <ActorMovies />
      <Footer />
    </div>
  );
};
