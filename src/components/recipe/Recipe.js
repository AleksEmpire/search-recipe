import React, { useState } from "react";
import DetailRecipe from "../detailRecipe/DetailRecipe";
const Recipe = ({ recipe }) => {
  const { label, image, url, ingredients } = recipe.recipe;
  const [ingr, setIngredient] = useState(false);

  const showIngredient = () => {
    setIngredient(!ingr);
    console.log(ingr);
  };
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url}>URL</a>
      <button onClick={showIngredient} className="button-detail-recipe">
        Ingredients
      </button>
      {ingr ? (
        <DetailRecipe
          showIngredient={showIngredient}
          ingredients={ingredients}
        />
      ) : null}
    </div>
  );
};

export default Recipe;
