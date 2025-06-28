import axios from 'axios';
import { Character } from '@/types/character';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (
  name = '',
  status = '',
  gender = ''
): Promise<Character[]> => {
  const query = new URLSearchParams();
  if (name) query.append('name', name);
  if (status) query.append('status', status);
  if (gender) query.append('gender', gender);

  const res = await axios.get(`${BASE_URL}/character?${query.toString()}`);
  return res.data.results;
};
