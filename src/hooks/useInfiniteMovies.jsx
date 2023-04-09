import { useEffect, useState } from "react";
import { useGlobalStateContext } from "../contexts/GlobalStateContext";
import { api } from "../utils/api";
import debounce from "just-debounce-it";
import { useSearchParams } from "react-router-dom";

export function useInfiniteMovies({
  endPoint,
  visorRef,
  genreId = null,
  searchQuery = null,
}) {
  const { state, dispatch } = useGlobalStateContext();
  const [movies, setMovies] = useState([]);
  const [isBottom, setIsBottom] = useState(false);
  const [searchParams] = useSearchParams();
  const paramsValue = searchParams.get("search");

  const paramsNormal = { language: `${state.lang}`, page: state.page };
  const paramsGenre = { ...paramsNormal, with_genres: genreId };
  const paramsQuery = { ...paramsNormal, query: searchQuery };

  let requestParams;

  if (genreId == null && searchQuery == null) {
    requestParams = paramsNormal;
  } else if (genreId != null) {
    requestParams = paramsGenre;
  } else if (searchQuery != null) {
    requestParams = paramsQuery;
  }

  const nextPage = debounce(
    () => dispatch({ type: "MANAGE_PAGE", payload: state.page + 1 }),
    200
  );

  async function getMovies(mounted) {
    try {
      dispatch({ type: "STAR_REQUEST" });
      const { data, status } = await api(`${endPoint}`, {
        params: requestParams,
      });
      dispatch({ type: "REQUEST__SUCCESS" });
      const moviesReceived = [...movies, ...data.results];
      if (mounted) {
        if (state.page == 1) {
          setMovies(data.results);
        }
        setMovies(moviesReceived);
      }
    } catch (error) {
      dispatch({ type: "REQUEST__FAIILED" });
      console.log(error);
    }
  }

  async function changeLangMovies(mounted) {
    try {
      setMovies([]);
      dispatch({ type: "STAR_REQUEST" });
      const { data, status } = await api(`${endPoint}`, {
        params: requestParams,
      });
      dispatch({ type: "REQUEST__SUCCESS" });
      if (mounted) {
        setMovies(data.results);
      }
    } catch (error) {
      dispatch({ type: "REQUEST__FAIILED" });
      console.log(error);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(loadComponent, {
      rootMargin: "50px",
    });

    function loadComponent(entries) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    }

    if (visorRef != null) {
      observer.observe(visorRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    isBottom && nextPage();
  }, [isBottom]);

  useEffect(() => {
    let mounted = true;
    dispatch({ type: "MANAGE_PAGE", payload: 1 });
    changeLangMovies(mounted);
    return () => (mounted = false);
  }, [state.lang, paramsValue]);

  useEffect(() => {
    let mounted = true;
    getMovies(mounted);
    return () => (mounted = false);
  }, [state.page]);

  return { movies };
}
