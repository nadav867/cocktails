import { ErrorView, Loader } from "../../../../components";
import { CocktailCard } from "../cocktail-card";
import classes from "./CocktailGrid.module.css";

type CocktailGridProps = {
  cocktails: any[];
  isLoading: boolean;
  isError: boolean;
};

export const CocktailGrid = ({
  cocktails,
  isError,
  isLoading,
}: CocktailGridProps) => {
  if (isLoading) return <Loader />;
  if (isError) return <ErrorView />;
  if (!cocktails?.length) return "No Cocktails Found";
  return (
    <div className={classes.container}>
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
};
