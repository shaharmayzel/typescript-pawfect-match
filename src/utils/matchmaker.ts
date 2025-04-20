import { CatInstance, MatchPreferences } from "../types";

export function matchScore(cat: CatInstance, prefs: MatchPreferences): string {
  const rules: [number, boolean][] = [
    [20, prefs.prefersIndoor === cat.prefersIndoor],
    [10, prefs.lovesBirds === cat.lovesBirds],
    [10, prefs.isAnnoying === cat.isAnnoying],
    [15, prefs.isFluffy === cat.isFluffy],
    [20, !!prefs.temperament && cat.temperament === prefs.temperament],
    [10, !!prefs.ageRange && cat.age in cat && cat?.age >= prefs.ageRange[0] && cat?.age <= prefs.ageRange[1]],
  ];

  const total = rules.reduce((sum, [points, condition]) => sum + (condition ? points : 0), 0);
  return `${Math.min(total, 100)}%`;
}
