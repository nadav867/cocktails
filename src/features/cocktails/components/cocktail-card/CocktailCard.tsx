import { Link } from "react-router-dom";
import { Card, CustomLink } from "../../../../components";
import classes from "./CocktailCard.module.css";
import { routes } from "../../../../routes";

type CocktailCardProp = {
  cocktail: any;
};

export const CocktailCard = ({ cocktail }: CocktailCardProp) => {
  return (
    <Link to="">
      <Card>
        <img className={classes.img} src={cocktail.strDrinkThumb} />
      </Card>
    </Link>
  );
};
