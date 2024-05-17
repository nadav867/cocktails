import { create } from "zustand";

type CocktailStore = {
  savedCocktails: Array<any>;
  saveCocktail: (cocktail: any) => void;
};

export const useCocktailStore = create<CocktailStore>((set) => ({
  savedCocktails: [],
  saveCocktail: (cocktail) =>
    set((state) => ({ savedCocktails: [...state.savedCocktails, cocktail] })),
}));
