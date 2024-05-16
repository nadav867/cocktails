import { create } from "zustand";

type CocktailStore = {
  selectedCocktail: any;
  setSelectedCocktail: (b: any) => void;
};

export const useCocktailStore = create<CocktailStore>((set) => ({
  selectedCocktail: null,
  setSelectedCocktail: (selectedCocktail) => set(() => ({ selectedCocktail })),
}));
