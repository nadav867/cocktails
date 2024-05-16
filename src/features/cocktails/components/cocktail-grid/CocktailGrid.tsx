import { CocktailCard } from "../cocktail-card";
import classes from "./CocktailGrid.module.css";

type CocktailGridProps = {
  cocktails: any[];
};

export const CocktailGrid = ({ cocktails }: CocktailGridProps) => {
  if (!cocktails?.length) return "No Cocktails Found";
  return (
    <div className={classes.container}>
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
};
