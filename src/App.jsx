import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { GlobalStateContextProvider } from "./contexts/GlobalStateContext";

import { HomePage } from "./pages/homePage";
import { MoviePage } from "./pages/moviePage";
import { ActorPage } from "./pages/actorPage";
import { CategoriesPage } from "./pages/categoriesPage";
import { SearchedMoviesPage } from "./pages/searchedMoviesPage";
import { TopRatedMoviesPage } from "./pages/topRatedMoviesPage";
import { TrendingMoviesPage } from "./pages/trendingMoviesPage";
import { UpComingMoviesPage } from "./pages/upComingMoviesPage";
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
