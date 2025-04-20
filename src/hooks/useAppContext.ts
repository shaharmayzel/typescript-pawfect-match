import { createContext, useContext } from "react";
import { AppState } from "../context/AppContext";


export const AppContext = createContext<AppState | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};