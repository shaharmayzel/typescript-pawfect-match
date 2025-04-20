import { CatInstance } from "./cat";
import { CatColor, CatTemperament } from "./catFeatures";

export type MatchPreferences = Partial<CatInstance> & {
  temperament?: CatTemperament;
  colorPreference?: CatColor;
  ageRange?: [number, number];

};

