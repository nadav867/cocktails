import { Card } from "../../../../components";

type CocktailCardProp = {
  cocktail: any;
};

export const CocktailCard = ({ cocktail }: CocktailCardProp) => {
  return (
    <Card>
      <div>{cocktail.strDrink}</div>
    </Card>
  );
};
