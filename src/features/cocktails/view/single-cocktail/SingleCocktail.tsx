import { useEffect } from "react";
import { useCocktailStore } from "../../store";
import classes from "./SingleCocktail.module.css";
import { extractIngredients } from "./exract-inggredients";
import { useGetSingleCocktailById } from "../../api";
import { useParams } from "react-router-dom";
import { Loader } from "../../../../components";

export const SingleCocktail = () => {
  const { id = "" } = useParams();

  const { data, isError, isLoading } = useGetSingleCocktailById({
    id,
  });

  if (isLoading) return <Loader />;

  const cocktail = data.drinks[0];

  const ingredeints = extractIngredients(cocktail);

  return (
    <div className={classes.container}>
      <h1>{cocktail.strDrink}</h1>

      <img src={cocktail.strDrinkThumb} />
      <div className={classes.ingredients}>
        <h2>Ingredients</h2>
        <ul>
          {ingredeints.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      </div>
      <div className={classes.instructions}>
        <h2>Instructions</h2>
        {cocktail.strInstructions}
      </div>
    </div>
  );
};
