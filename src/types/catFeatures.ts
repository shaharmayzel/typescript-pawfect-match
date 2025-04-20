export const CatColors = {
  BLACK: "black",
  WHITE: "white",
  ORANGE: "orange",
  GRAY: "gray",
  BROWN: "brown",
  CALICO: "calico",
  TABBY: "tabby",
  TORTOISESHELL: "tortoiseshell",
} as const;

export type CatColor = typeof CatColors[keyof typeof CatColors];

export const CatTemperaments = {
  PLAYFUL: "playful",
  LAZY: "lazy",
  AFFECTIONATE: "affectionate",
  INDEPENDENT: "independent",
  CHAOTIC_EVIL: "chaotic evil",
} as const;

export type CatTemperament = typeof CatTemperaments[keyof typeof CatTemperaments];

