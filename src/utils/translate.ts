export const translateStatus = (status: string): string => {
  const map: Record<string, string> = {
    alive: 'Vivo',
    dead: 'Muerto',
    unknown: 'Desconocido',
  };
  return map[status.toLowerCase()] ?? status;
};

export const translateGender = (gender: string): string => {
  const map: Record<string, string> = {
    male: 'Masculino',
    female: 'Femenino',
    genderless: 'Sin género',
    unknown: 'Desconocido',
  };
  return map[gender.toLowerCase()] ?? gender;
};

export const translateSpecies = (specie: string): string => {
  const map: Record<string, string> = {
    human: 'Humano', 
    alien: 'Alien', 
    humanoid: 'Humanoide', 
    unknown: 'Desconocido',
    'mythological creature': 'Criatura Mitológica'
  }; 
  return map[specie.toLocaleLowerCase()] ?? specie; 
}