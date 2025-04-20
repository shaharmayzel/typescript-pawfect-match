import { useState } from "react";
import { AppContext, AppState } from "./AppContext";
import { CatInstance, MatchPreferences } from "../types";
import {cats, cats as catsData} from "../data/cats"; 
import { matchScore } from "../utils/matchmaker";


export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<MatchPreferences>({});
  const [filteredCats, setFilteredCats] = useState<CatInstance[]>(catsData);


 const setCatPreferences = (newPreferences: MatchPreferences) => {
  setPreferences((prev) => {
    const updatedPreferences = { ...prev, ...newPreferences };

    const filtered = cats.filter((cat) => {
      const score = matchScore(cat, updatedPreferences); 
      return score === "100%";
    });

    setFilteredCats(filtered);
    return updatedPreferences;
  });
};

  const value: AppState = { preferences, setCatPreferences, filteredCats, setFilteredCats };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};