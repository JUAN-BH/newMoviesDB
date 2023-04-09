import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { GlobalStateContextProvider } from "./contexts/GlobalStateContext";

import { HomePage } from "./pages/HomePage";
import { MoviePage } from "./pages/MoviePage";
import { ActorPage } from "./pages/ActorPage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { SearchedMoviesPage } from "./pages/SearchedMoviesPage";
import { TopRatedMoviesPage } from "./pages/TopRatedMoviesPage";
import { TrendingMoviesPage } from "./pages/TrendingMoviesPage";
import { UpComingMoviesPage } from "./pages/UpComingMoviesPage";
import { LayoutHeader } from "./containers/LayoutHeader";

function App() {
  return (
    <BrowserRouter>
      <GlobalStateContextProvider>
        <ThemeContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <LayoutHeader>
                  <HomePage />
                </LayoutHeader>
              }
            />
            <Route path="/movie/:idMovie" element={<MoviePage />} />
            <Route path="/actor/:idActor" element={<ActorPage />} />
            <Route
              path="/category/:nameCategory/:idCategory"
              element={
                <LayoutHeader>
                  <CategoriesPage />
                </LayoutHeader>
              }
            />
            <Route
              path="/upComingMovies"
              element={
                <LayoutHeader>
                  <UpComingMoviesPage />
                </LayoutHeader>
              }
            />
            <Route
              path="/trendingMovies"
              element={
                <LayoutHeader>
                  <TrendingMoviesPage />
                </LayoutHeader>
              }
            />
            <Route
              path="/topRatedMovies"
              element={
                <LayoutHeader>
                  <TopRatedMoviesPage />
                </LayoutHeader>
              }
            />
            <Route
              path="/result"
              element={
                <LayoutHeader>
                  <SearchedMoviesPage />
                </LayoutHeader>
              }
            />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </ThemeContextProvider>
      </GlobalStateContextProvider>
    </BrowserRouter>
  );
}

export default App;
