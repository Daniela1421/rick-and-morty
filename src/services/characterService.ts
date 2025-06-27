import axios from "axios";
import { Character } from "@/types/character";

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (): Promise<Character[]> => {
  const res = await axios.get(`${BASE_URL}/character`);
  return res.data.results;
};