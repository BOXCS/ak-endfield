import { Character } from "@/types/rotation";

interface CharacterIconProps {
  chara: Character;
}

export function CharacterIcon({ chara }: CharacterIconProps) {
  return (
    <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-white/20">
      <img
        src={chara.image}
        alt={chara.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
