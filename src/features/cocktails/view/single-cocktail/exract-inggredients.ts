export const extractIngredients = (cocktail: any): Array<any> => {
  const obj = Object.fromEntries(
    Object.entries(cocktail).filter(
      ([key, value]) => key.startsWith("strIngredient") && value
    )
  );
  return Object.values(obj);
};
