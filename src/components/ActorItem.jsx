import { IconStarFilled } from "@tabler/icons-react";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";
import { observerImgSlider } from "../utils/lazyLoading";

export const ActorItem = ({ actor }) => {
  const actorImage = useRef(null);
  const navigate = useNavigate();
  const { lang } = useMoviesContext();

  const as = (lang === "es" && langs.es.actorItem.as) || "As";
  const seeMore = (lang === "es" && langs.es.actorItem.see) || "See more";

  useEffect(() => {
    observerImgSlider.observe(actorImage.current);
  }, []);

  function doubleClickHandler() {
    navigate(`/actor/${actor.id}`);
  }

  return (
    <div className="movieItem">
      <div className="movieItem__info" onClick={doubleClickHandler}>
        <p className="movieItem__info__title">{actor.original_name}</p>
        <p className="movieItem__info__des">
          {as} "{actor.character}"
        </p>
        <p className="movieItem__info__link">{seeMore}</p>
        <p className="movieItem__info__note">
          {actor.popularity} <IconStarFilled size={18} color="red" />
        </p>
      </div>
      <img
        className="skeleton"
        ref={actorImage}
        data-src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
      />
    </div>
  );
};
