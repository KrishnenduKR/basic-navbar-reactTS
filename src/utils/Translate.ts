// src/api/translate.ts
import axios from 'axios';

export const translateText = async (text: string, target = 'ja') => {
  const response = await axios.post('http://localhost:5000/api/translate/', { text, target });
  return response.data.translated;
};
