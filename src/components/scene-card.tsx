import Link from "next/link";
import type { Scene } from "@/lib/scenes";

export function SceneCard({ scene }: { scene: Scene }) {
  return (
    <Link
      href={`/generate?scene=${scene.id}`}
      className="block bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer transition-all duration-200 hover:bg-white/10 hover:border-blue-500/30"
    >
      <h3 className="text-white font-bold text-lg mb-2">{scene.name}</h3>
      <p className="text-white/70 text-base leading-relaxed">
        {scene.description}
      </p>
    </Link>
  );
}
