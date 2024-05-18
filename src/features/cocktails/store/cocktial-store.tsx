import { create } from "zustand";

type CocktailStore = {
  searchTrem: string;
  setSearchTerm: (value: string) => void;
  cocktails: Array<any>;
  setCocktails: (cocktails: Array<any>) => void;
  saveCocktail: (cocktail: any) => void;
};

export const useCocktailStore = create<CocktailStore>((set) => ({
  searchTrem: "",
  setSearchTerm: (value) => set(() => ({ searchTrem: value })),
  cocktails: [],
  setCocktails: (cocktails) => set(() => ({ cocktails })),
  saveCocktail: (cocktail) =>
    set((state) => ({ cocktails: [...state.cocktails, cocktail] })),
}));
