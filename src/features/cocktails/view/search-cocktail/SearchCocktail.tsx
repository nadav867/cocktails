import { ChangeEvent, useMemo, useState } from "react";
import { FilterBar } from "../../components/filter-bar";
import { useSearchCocktails } from "../../api";
import { useDebounce } from "../../../../hooks";
import classes from "./SearchCocktail.module.css";

import { CocktailGrid } from "../../components";
import { AddCocktailModal } from "../../components/add-cocktail-modal";
import { Button } from "../../../../components";
import { findSavedCocktails } from "./find-saved-cocktails";
import { useCocktailStore } from "../../store";

export const SearchCocktail = () => {
  const { savedCocktails } = useCocktailStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddCocktailModalOpen, setIsAddCocktailModalOpen] = useState(false);

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

  const allCocktails = useMemo(
    () => [
      ...(data?.drinks || []),
      ...findSavedCocktails(debouncedSearchTerm, savedCocktails),
    ],
    [data, debouncedSearchTerm, savedCocktails]
  );

  return (
    <>
      <div className={classes.container}>
        <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <FilterBar onChange={handleOnChange} value={searchTerm} />
          <Button onClick={() => setIsAddCocktailModalOpen(true)}>
            Add Cocktail
          </Button>
        </div>

        <CocktailGrid
          isLoading={isLoading}
          isError={isError}
          cocktails={allCocktails}
        />
      </div>
      <AddCocktailModal
        isOpen={isAddCocktailModalOpen}
        onClose={() => setIsAddCocktailModalOpen(false)}
      />
    </>
  );
};
