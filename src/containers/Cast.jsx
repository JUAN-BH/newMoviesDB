import { useGlobalStateContext } from "../contexts/GlobalStateContext";
import { useMovieInfo } from "../hooks/useMovieInfo";
import { useNearScreen } from "../hooks/useNearScreen";
import { Gallery } from "./Gallery";
import { ActorItem } from "../components/ActorItem";
import { langs } from "../utils/languages";

const Cast = () => {
  const { state } = useGlobalStateContext();
  const { movieData } = useMovieInfo("/credits");

  const lang = state.lang;
  const cast = (lang == "es" && langs.es.moviePage.cast) || "Cast";

  if (!movieData.cast?.length > 0) {
    return null;
  }

  return (
    <div className="movieExtraInfo__cast">
      <h2>{cast}</h2>

      {movieData?.cast && (
        <Gallery>
          {movieData.cast.map((a) => {
            return <ActorItem actor={a} key={a.id} />;
          })}
        </Gallery>
      )}
    </div>
  );
};

export const LazyCast = () => {
  const { show, elRef } = useNearScreen();
  return <div ref={elRef}>{show && <Cast />} </div>;
};
