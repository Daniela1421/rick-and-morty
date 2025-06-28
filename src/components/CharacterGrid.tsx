import { CharacterCard } from './CharacterCard';
import { Character } from '@/types/character';

export const CharacterGrid = ({ characters }: { characters: Character[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
    {characters.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ))}
  </div>
);
