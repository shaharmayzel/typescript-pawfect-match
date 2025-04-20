import { createContext, useContext } from "react";
import { CatInstance, MatchPreferences } from "../types";

export interface AppState {
  preferences: MatchPreferences;
  setCatPreferences: (preferences: MatchPreferences) => void;
  filteredCats: CatInstance[];
  setFilteredCats: React.Dispatch<React.SetStateAction<CatInstance[]>>;
}

export const AppContext = createContext<AppState | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};