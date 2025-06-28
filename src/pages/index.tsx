import { useEffect, useState } from "react";
import { useCharacters } from "@/hooks/useCharacters";
import { CharacterGrid } from "@/components/CharacterGrid";
import { FilterSidebar } from "@/components/FilterSideBar";

export default function Home() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const { characters, loading, error } = useCharacters(name, status, gender); 

  useEffect(() => {
    if (name || status || gender) {
      setHasSearched(true);
    }
  }, [name, status, gender]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center text-lime-600 mb-10">
          Personajes de Rick & Morty
        </h1>
        <div className="flex flex-col sm:flex-row gap-8">
          <aside className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <FilterSidebar
              name={name}
              status={status}
              gender={gender}
              onNameChange={setName}
              onStatusChange={setStatus}
              onGenderChange={setGender}
            />
          </aside>
          <section className="w-full md:w-2/3 lg:w-3/4">
            {loading && (
              <div className="flex justify-center items-center">
                <div className="bg-lime-100 text-lime-800 px-6 py-4 rounded-md shadow text-center w-full">
                  Cargando personajes...
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-center items-center">
                <div className="bg-red-100 text-red-700 px-6 py-4 rounded-md shadow text-center w-full">
                  {error}
                </div>
              </div>
            )}
            {!loading && !error && characters.length > 0 && (
              <CharacterGrid characters={characters} />
            )}
            {!loading && !error && characters.length === 0 &&  hasSearched && (
              <div className="flex justify-center items-center">
                <div className="bg-yellow-100 text-yellow-800 px-6 py-4 rounded-md shadow text-center w-full">
                  No se encontraron personajes con los filtros aplicados.
                </div>
              </div>
            )}
          </section>
        </div>

      </main>
    </div>
  );
}

