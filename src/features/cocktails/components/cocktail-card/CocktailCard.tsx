import { Card, CustomLink } from "../../../../components";
import classes from "./CocktailCard.module.css";

type CocktailCardProp = {
  cocktail: any;
};

export const CocktailCard = ({ cocktail }: CocktailCardProp) => {
  return (
    <Card>
      <div>
        <img src={cocktail.strDrinkThumb} />
      </div>
      <div className={classes.content}>
        <h2>{cocktail.strDrink}</h2>
        <div className={classes.link}>
          <CustomLink to="/">Show More</CustomLink>
        </div>
      </div>
    </Card>
  );
};
