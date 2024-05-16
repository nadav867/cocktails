import { ChangeEvent, useState } from "react";
import { FilterBar } from "../../components/filter-bar";
import { useSearchCocktails } from "../../api";
import { useDebounce } from "../../../../hooks";
import classes from "./SearchCocktail.module.css";

import mockCocktails from "../../../../__mock__/mockCocktails.json";
import { CocktailGrid } from "../../components";
import { Loader } from "../../../../components";

export const SearchCocktail = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data, isLoading, isError } = useSearchCocktails({
    search: debouncedSearchTerm,
    enabled: !!debouncedSearchTerm.trim(),
  });

  console.log({ data });

  const handleOnChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value);
  };

  return (
    <div className={classes.container}>
      <FilterBar onChange={handleOnChange} value={searchTerm} />

      {isLoading ? (
        <Loader />
      ) : (
        <CocktailGrid cocktails={mockCocktails?.drinks} />
      )}
    </div>
  );
};
