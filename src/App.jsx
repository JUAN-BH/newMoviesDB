import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { GlobalStateContextProvider } from "./contexts/GlobalStateContext";

import { HomePage } from "./pages/homePages";
import { MoviePage } from "./pages/moviePages";
import { ActorPage } from "./pages/actorPages";
import { CategoriesPage } from "./pages/categoriesPages";
import { SearchedMoviesPage } from "./pages/searchedMoviesPages";
import { TopRatedMoviesPage } from "./pages/topRatedMoviesPages";
import { TrendingMoviesPage } from "./pages/trendingMoviesPages";
import { UpComingMoviesPage } from "./pages/upComingMoviesPages";
import { LayoutHeader } from "./containers/LayOutHeaders";

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
