import { CatInstance } from "../types";

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-2 py-1 rounded-full text-xs font-medium ${className}`}>
    {children}
  </span>
);

export function CatCard({ cat }: { cat: CatInstance }) {
  return (
    <div className="bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-lg transition duration-200 border border-zinc-700 space-y-2">
      <div>
        <h2 className="text-2xl font-semibold">{cat.name}</h2>
        <p className="text-sm text-zinc-400 italic">Age: {cat.age}</p>
      </div>

      <div className="text-sm space-y-1">
        <p><strong>Color:</strong> {cat.color}</p>
        <p><strong>Temperament:</strong> {cat.temperament}</p>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {cat.isFluffy && (
          <Badge className="bg-pink-500/10 text-pink-300">🧸 Fluffy</Badge>
        )}
        {cat.isAnnoying && (
          <Badge className="bg-red-500/20 text-red-300">😾 High Maintenance</Badge>
        )}
        <Badge
          className={
            cat.prefersIndoor
              ? "bg-green-500/10 text-green-300"
              : "bg-yellow-500/10 text-yellow-300"
          }
        >
          {cat.prefersIndoor ? "🏠 Indoor" : "🌳 Outdoor"}
        </Badge>
        {cat.lovesBirds && (
          <Badge className="bg-blue-500/10 text-blue-300">🐦 Bird Watcher</Badge>
        )}
      </div>
    </div>
  );
}
