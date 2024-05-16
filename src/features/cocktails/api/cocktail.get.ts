import axios from "axios";
import { useQuery } from "react-query";

type SearchCocktailArgs = {
  search: string;
  enabled?: boolean;
};

const searchCocktail = async ({ search }: SearchCocktailArgs) => {
  const { data } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
  );
  return data;
};

export const useSearchCocktails = ({ search, enabled }: SearchCocktailArgs) => {
  return useQuery({
    queryFn: () => searchCocktail({ search }),
    queryKey: ["search_cocktails", search],
    enabled,
  });
};
