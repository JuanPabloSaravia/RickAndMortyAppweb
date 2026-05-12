const API_BASE = 'https://rickandmortyapi.com/api/character';

export async function fetchCharacters({ page = 1, name = '', status = '', gender = '', species = '' } = {}) {
  const params = new URLSearchParams();
  params.set('page', page);

  if (name.trim()) params.set('name', name.trim());
  if (status) params.set('status', status);
  if (gender) params.set('gender', gender);
  if (species.trim()) params.set('species', species.trim());

  const response = await fetch(`${API_BASE}?${params.toString()}`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const message = errorData && errorData.error ? errorData.error : 'No se pudieron cargar los personajes.';
    throw new Error(message);
  }

  return response.json();
}
