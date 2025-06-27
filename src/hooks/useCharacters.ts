import { useEffect, useState } from 'react';
import { Character } from '@/types/character';
import { getCharacters } from '@/services/characterService';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (e) {
        console.log(e)
        setError('Error al cargar personajes.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { characters, loading, error };
};
