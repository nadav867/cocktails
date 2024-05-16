import { RouteObject } from "react-router-dom";
import { routes } from "../../../routes";
import { SingleCocktail, SearchCocktail } from "../view";

export const cocktailRoutes: RouteObject[] = [
  {
    path: routes.cocktail.search,
    element: <SearchCocktail />,
    index: true,
  },
  {
    path: routes.cocktail.single,
    element: <SingleCocktail />,
  },
];
