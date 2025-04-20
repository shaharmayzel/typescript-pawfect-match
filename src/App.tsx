import { useAppContext } from "./context/AppContext";
import { CatCard } from "./components/CatCard";
import { MatchForm } from "./components/MatchForm";

export default function App() {
  const { filteredCats } = useAppContext();

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">🐾 Pawfect Match</h1>
        <MatchForm />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {filteredCats.map((cat) => (
            <CatCard key={cat.name} cat={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}