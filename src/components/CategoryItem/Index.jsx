import React from "react";
import { useNavigate } from "react-router-dom";

export const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  function handleCategorie() {
    navigate(`/category/${category.name}/${category.id}`);
  }
  return (
    <button className="categoryBtn" onClick={handleCategorie}>
      {category.name.replace(" ", "")}
    </button>
  );
};
