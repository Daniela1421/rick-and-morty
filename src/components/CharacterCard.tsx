import { Character } from "@/types/character";
import { translateStatus, translateSpecies } from "@/utils/translate";

type Props = {
  character: Character;
};

export const CharacterCard = ({ character }: Props) => {
  const statusColor = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-400",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{character.name}</h3>

        <div className="flex items-center gap-2 text-sm">
          <span
            className={`w-3 h-3 rounded-full ${statusColor[character.status] ?? "bg-gray-400"}`}
          />
          <span className="text-gray-600">
            {translateStatus(character.status)} - {translateSpecies(character.species)}
          </span>
        </div>
      </div>
    </div>
  );
};


