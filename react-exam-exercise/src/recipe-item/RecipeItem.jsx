import React from "react";
import styles from "./Recipe.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
const RecipeItem = ({ recipe }) => {
  const { favorites } = useSelector((state) => state);

  const { toggleFavorites } = useActions();
  const isExist = favorites.some((r) => r.id === recipe.id);
  return (
    <div className={styles.item}>
      <h3>{recipe.name}</h3>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExist ? "Remove from" : "Add to"} fav
      </button>
    </div>
  );
};

export default RecipeItem;
