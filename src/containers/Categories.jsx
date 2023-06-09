import { useGlobalStateContext } from "../contexts/GlobalStateContext";
import { useCategories } from "../hooks/useCategories";
import { CategoryItem } from "../components/CategoryItem";
import { langs } from "../utils/languages";

export const Categories = () => {
  const categories = useCategories();
  const { state } = useGlobalStateContext();
  const lang = state.lang;
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
