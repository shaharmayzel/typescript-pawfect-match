import { useAppContext } from "../context/AppContext";
import { CatTemperaments } from "../types";

export function MatchForm() {
  const { preferences, setCatPreferences } = useAppContext();

  const handlePreferenceChange = (key: keyof typeof preferences, value: any) => {
    setCatPreferences({ [key]: value });
  };

  return (
    <form className="bg-zinc-800 p-4 rounded-xl">
      <h2 className="text-xl font-semibold mb-2">Match Preferences</h2>
      <label className="block mb-2">
        <input
          type="checkbox"
          checked={preferences.lovesBirds || false}
          onChange={(e) => handlePreferenceChange("lovesBirds", e.target.checked)}
          className="mr-2"
        />
        Loves bird watching
      </label>
      <label className="block mb-2">
        <input
          type="checkbox"
          checked={preferences.prefersIndoor || false}
          onChange={(e) => handlePreferenceChange("prefersIndoor", e.target.checked)}
          className="mr-2"
        />
        Prefers indoor cats
      </label>
      <label className="block mb-2">
        <input
          type="checkbox"
          checked={preferences.isAnnoying || false}
          onChange={(e) => handlePreferenceChange("isAnnoying", e.target.checked)}
          className="mr-2"
        />
        Likes annoying cats
      </label>
      <label className="block mb-2">
        <input
          type="checkbox"
          checked={preferences.isFluffy || false}
          onChange={(e) => handlePreferenceChange("isFluffy", e.target.checked)}
          className="mr-2"
        />
        Prefers fluffy cats
      </label>
      <label className="block mb-2">
        <input
          type="checkbox"
          checked={preferences.temperament === CatTemperaments.AFFECTIONATE}
          onChange={(e) =>
            handlePreferenceChange(
              "temperament",
              e.target.checked ? CatTemperaments.AFFECTIONATE : undefined
            )
          }
          className="mr-2"
        />
        Affectionate temperament
      </label>
    </form>
  );
}