type Props = {
  name: string;
  status: string;
  gender: string;
  onNameChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onGenderChange: (value: string) => void;
};

export const FilterSidebar = ({
  name,
  status,
  gender,
  onNameChange,
  onStatusChange,
  onGenderChange,
}: Props) => {
  const statusOptions = [
    { value: "alive", label: "Vivo" },
    { value: "dead", label: "Muerto" },
    { value: "unknown", label: "Desconocido" },
  ];

  const genderOptions = [
    { value: "male", label: "Masculino" },
    { value: "female", label: "Femenino" },
    { value: "genderless", label: "Sin género" },
    { value: "unknown", label: "Desconocido" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 space-y-6">
      <h2 className="text-2xl font-bold text-lime-600">Filtros</h2>
      <div className="space-y-1">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Ej: Rick"
          className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-lime-500 focus:outline-none"
        />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Estado</p>
        <div className="space-y-2">
          {statusOptions.map(({ value, label }) => (
            <label key={value} className="flex items-center gap-2 text-gray-800">
              <input
                type="checkbox"
                checked={status === value}
                onChange={() => onStatusChange(status === value ? '' : value)}
                className="accent-lime-500 w-4 h-4"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Género</p>
        <div className="space-y-2">
          {genderOptions.map(({ value, label }) => (
            <label key={value} className="flex items-center gap-2 text-gray-800">
              <input
                type="checkbox"
                checked={gender === value}
                onChange={() => onGenderChange(gender === value ? '' : value)}
                className="accent-lime-500 w-4 h-4"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};


