import React from "react";
import { CategoryItem } from "../components/CategoryItem";
import { useMoviesContext } from "../contexts/MoviesDataContext";
import { langs } from "../utils/languages";

export const Categories = () => {
  const { lang, categories } = useMoviesContext();
  const title = (lang == "es" && langs.es.homePage.ca) || "Categories";

  return (
    <section className="categories">
      <h2 className="categories__title">{title}</h2>
      <div className="categories__items">
        {categories.map((c) => (
          <CategoryItem category={c} key={c.id} />
        ))}
      </div>
    </section>
  );
};
