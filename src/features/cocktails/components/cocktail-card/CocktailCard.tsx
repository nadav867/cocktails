import { Link } from "react-router-dom";
import { Card } from "../../../../components";
import classes from "./CocktailCard.module.css";
import { routes } from "../../../../routes";
import { useCocktailStore } from "../../store";

type CocktailCardProp = {
  cocktail: any;
};

export const CocktailCard = ({ cocktail }: CocktailCardProp) => {
  return (
    <Link to={routes.cocktail.single.replace(":id", cocktail.idDrink)}>
      <Card>
        <img className={classes.img} src={cocktail.strDrinkThumb} />
      </Card>
    </Link>
  );
};
