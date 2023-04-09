import { useGlobalStateContext } from "../../contexts/GlobalStateContext";
import { useActorData } from "../../hooks/useActorData";
import { Gallery } from "../Gallerys";
import { MovieItem } from "../../components/MovieItems";
import { langs } from "../../utils/languages";

export const ActorMovies = () => {
  const { state } = useGlobalStateContext();
  const { actorData } = useActorData("/movie_credits");

  const lang = state.lang;
  const movies = lang == "es" ? `${langs.es.actorPage.mov}` : `Movies`;

  return (
    <section className="actorMovies trends moviesDisplay">
      <div className="moviesDisplay__title">
        <h2>{movies}</h2>
      </div>

      {Array.isArray(actorData?.cast) ? (
        <Gallery>
          {actorData.cast.map((m) => {
            return <MovieItem movie={m} key={m.id} />;
          })}
        </Gallery>
      ) : (
        <p>No movies Found</p>
      )}
    </section>
  );
};
