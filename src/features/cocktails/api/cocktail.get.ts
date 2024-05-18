import axios from "axios";
import { useQuery } from "react-query";

type SearchCocktailArgs = {
  search: string;
  enabled?: boolean;
};

type GetSingleCocktailByIdArgs = { id: string; enabled?: boolean };

export const searchCocktail = async ({ search }: SearchCocktailArgs) => {
  const { data } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
  );
  return data;
};

const getSingleCocktailById = async ({ id }: GetSingleCocktailByIdArgs) => {
  const { data } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return data;
};

export const useGetSingleCocktailById = ({
  id,
  enabled,
}: GetSingleCocktailByIdArgs) => {
  return useQuery({
    queryFn: () => getSingleCocktailById({ id }),
    queryKey: ["single_cocktail", id],
    enabled,
  });
};

export const useSearchCocktails = ({ search, enabled }: SearchCocktailArgs) => {
  return useQuery({
    queryFn: () => searchCocktail({ search }),
    queryKey: ["search_cocktails", search],
    enabled,
  });
};
