import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { api } from "../utils/api";

const MoviesContext = createContext();

export const MoviesDataContext = ({ children }) => {
  console.log(import.meta.env.VITE_API_KEY);

  const locationH = useLocation();
  const [loading, setLoading] = useState(true);

  const [trendMovies, setTrendMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [moviesSearch, setMoviesSearch] = useState([]);

  const [trendMoviesTotal, setTrendMoviesTotal] = useState([]);
  const [topRatedMoviesTotal, setTopRatedMoviesTotal] = useState([]);
  const [upComingMoviesTotal, setUpComingMoviesTotal] = useState([]);
  const [page, setPage] = useState(1);

  const [categories, setCategories] = useState([]);
  const [movie, setMovie] = useState({});
  const [movieCast, setMovieCast] = useState({});
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [videoMovie, setVideoMovie] = useState([]);
  const [moviesByCategory, setMoviesByCategory] = useState([]);
  const [lang, setLang] = useState(navigator.language.split("-")[0]);

  useEffect(() => {
    setPage(1);
  }, [locationH.pathname]);

  useEffect(() => {
    getUpComingMovies();
    getTrendMovies();
    getTopRatedMovies();
    getCategories();
  }, [lang, page]);

  useEffect(() => {
    window.addEventListener("scroll", inifinityScroll);
    return () => window.removeEventListener("scroll", inifinityScroll);
  }, []);

  function inifinityScroll() {
    const innerHeight = window.innerHeight;
    const { scrollTop, scrollHeight } = document.documentElement;
    if (innerHeight + scrollTop + 1 >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  }

  async function getTrendMovies() {
    try {
      setLoading(true);
      const { data, status } = await api("trending/movie/day", {
        params: { language: `${lang}`, page: page },
      });
      setLoading(false);
      const movies = data.results;
      if (page == 1) {
        setTrendMovies(movies);
        setTrendMoviesTotal(movies);
      } else if (page > 1) {
        setTrendMoviesTotal((prev) => [...prev, ...movies]);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  async function getTopRatedMovies() {
    try {
      setLoading(true);
      const { data, status } = await api("movie/top_rated", {
        params: { language: `${lang}`, page: page },
      });
      setLoading(false);
      const movies = data.results;

      if (page == 1) {
        setTopRatedMovies(movies);
        setTopRatedMoviesTotal(movies);
      } else if (page > 1) {
        setTopRatedMoviesTotal((prev) => [...prev, ...movies]);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  async function getUpComingMovies() {
    try {
      setLoading(true);
      const { data, status } = await api("movie/upcoming", {
        params: { language: `${lang}`, page: page },
      });
      setLoading(false);

      const movies = data.results;

      if (page == 1) {
        setUpComingMovies(movies);
        setUpComingMoviesTotal(movies);
      } else if (page > 1) {
        setUpComingMoviesTotal((prev) => [...prev, ...movies]);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  async function getCategories() {
    try {
      setLoading(true);
      const { data, status } = await api("genre/movie/list", {
        params: { language: `${lang}` },
      });
      setLoading(false);

      const categories = data.genres;
      setCategories(categories);
    } catch (e) {
      console.log(e.message);
    }
  }

  async function getMovie(id) {
    try {
      setLoading(true);
      const { data, status } = await api(`movie/${id}`, {
        params: { language: `${lang}` },
      });
      setLoading(false);

      setMovie(data);
    } catch (e) {
      console.log(e.message);
    }
  }

  async function getCastMovie(id) {
    try {
      setLoading(true);
      const { data, status } = await api(`movie/${id}/credits`, {
        params: { language: `${lang}` },
      });
      setLoading(false);

      setMovieCast(data);
    } catch (e) {
      console.log(e.message);
    }
  }

  async function getVideoMovie(id) {
    try {
      setLoading(true);
      const { data, status } = await api(`movie/${id}/videos`, {
        params: { language: `${lang}` },
      });
      setLoading(false);

      setVideoMovie(data.results);
    } catch (e) {
      console.log(e.message);
    }
  }

  async function getRelatedMovies(id) {
    try {
      setLoading(true);
      const { data, status } = await api(`movie/${id}/recommendations`, {
        params: { language: `${lang}` },
      });
      setLoading(false);

      setRelatedMovies(data.results);
    } catch (e) {
      console.log(e.message);
    }
  }

  async function getMoviesByCategories(id) {
    try {
      setLoading(true);
      const { data, status } = await api(`discover/movie`, {
        params: {
          with_genres: id,
          page: page,
          language: `${lang}`,
        },
      });
      setLoading(false);

      if (page == 1) {
        setMoviesByCategory(data.results);
      } else if (page > 1) {
        setLoading(false);

        setMoviesByCategory((prev) => [...prev, ...data.results]);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  async function getSearchedMovies(query) {
    setLoading(true);
    const { data, status } = await api(`search/movie`, {
      params: {
        query: query,
        page: page,
        language: `${lang}`,
      },
    });
    setLoading(false);

    const movies = data.results;

    // setMoviesSearch([]);
    if (page == 1) {
      setMoviesSearch(movies);
    } else if (page > 1) {
      setMoviesSearch((prev) => [...prev, ...movies]);
    }
  }

  const data = {
    trendMovies,
    topRatedMovies,
    upComingMovies,
    getCategories,
    categories,
    movie,
    getMovie,
    movieCast,
    getCastMovie,
    relatedMovies,
    getRelatedMovies,
    videoMovie,
    getVideoMovie,
    moviesByCategory,
    setMoviesByCategory,
    getMoviesByCategories,
    moviesSearch,
    setMoviesSearch,
    getSearchedMovies,
    lang,
    setLang,
    trendMoviesTotal,
    topRatedMoviesTotal,
    upComingMoviesTotal,
    page,
    setPage,
    loading,
  };
  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  );
};

export function useMoviesContext() {
  const data = useContext(MoviesContext);
  return data;
}
