import classes from "./SingleCocktail.module.css";
import { extractIngredients } from "./exract-inggredients";
import { useGetSingleCocktailById } from "../../api";
import { useParams } from "react-router-dom";
import { ErrorView, Loader } from "../../../../components";
import { useCocktailStore } from "../../store";

export const SingleCocktail = () => {
  const { savedCocktails } = useCocktailStore();
  const { id = "" } = useParams();

  const savedCocktail = savedCocktails.find((c) => c.idDrink === id);

  const { data, isError, isLoading } = useGetSingleCocktailById({
    id,
    enabled: !savedCocktail && !!id,
  });

  if (isLoading) return <Loader />;
  if (isError || (!data?.drinks && !savedCocktail)) return <ErrorView />;

  const cocktail = savedCocktail || data.drinks[0];
  const ingredeints = extractIngredients(cocktail);

  return (
    <div className={classes.container}>
      <h1>{cocktail.strDrink}</h1>
      <img className={classes.img} src={cocktail.strDrinkThumb} />
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
