import { useEffect, useState } from "react";
import { getCharacters } from "@/services/characterService";
import { Character } from "@/types/character";

export function useCharacters(name: string, status: string, gender: string) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getCharacters(name, status, gender);
        setCharacters(data);
      } catch (err: any) {
        if (err.response?.status === 404) {
          setCharacters([]);
        } else {
         setError("No pudimos cargar los personajes. Intenta nuevamente más tarde.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [name, status, gender]);

  return { characters, loading, error };
}

