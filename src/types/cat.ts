import { CatColor, CatTemperament } from "./catFeatures";

export type CatBase = {
  lovesBirds: boolean;
  prefersIndoor: boolean;
  isAnnoying: boolean;
  isFluffy: boolean;
  temperament: CatTemperament;
  age: number;
  color: CatColor;
};

export type CatInstance = CatBase & {
  name: string;
  id: string;
};