import { ChangeEvent, useState } from "react";
import { FilterBar } from "../../components/filter-bar";
import { useSearchCocktails } from "../../api";
import { useDebounce } from "../../../../hooks";
import classes from "./SearchCocktail.module.css";

import { CocktailGrid } from "../../components";

export const SearchCocktail = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data, isLoading, isError } = useSearchCocktails({
    search: debouncedSearchTerm,
    enabled: !!debouncedSearchTerm.trim(),
  });

  const handleOnChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value);
  };

  return (
    <div className={classes.container}>
      <FilterBar onChange={handleOnChange} value={searchTerm} />
      <CocktailGrid
        isLoading={isLoading}
        isError={isError}
        cocktails={data?.drinks}
      />
    </div>
  );
};
