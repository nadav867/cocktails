import { ChangeEvent, useState } from "react";
import { FilterBar } from "../../components/filter-bar";
import { useSearchCocktails } from "../../api";
import { useDebounce } from "../../../../hooks";
import classes from "./SearchCocktail.module.css";

export const SearchCocktail = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

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
    <div>
      <div className={classes.filterBarContainer}>
        <FilterBar onChange={handleOnChange} value={searchTerm} />
      </div>
    </div>
  );
};
