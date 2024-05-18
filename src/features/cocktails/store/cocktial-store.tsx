import { create } from "zustand";

type CocktailStore = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  savedCocktails: Array<any>;
  cocktails: Array<any>;
  setCocktails: (cocktails: Array<any>) => void;
  saveCocktail: (cocktail: any) => void;
};

export const useCocktailStore = create<CocktailStore>((set) => ({
  searchTerm: "",
  setSearchTerm: (searchTerm) => set(() => ({ searchTerm })),
  savedCocktails: [],
  cocktails: [],
  setCocktails: (cocktails) => set(() => ({ cocktails })),
  saveCocktail: (cocktail) =>
    set((state) => ({ savedCocktails: [...state.savedCocktails, cocktail] })),
}));
