export const findSavedCocktails = (
  searchTerm: string,
  cocktails: Array<any>
) => {
  return cocktails.filter(
    (c) => searchTerm && c.strDrink.toLowerCase().includes(searchTerm)
  );
};
