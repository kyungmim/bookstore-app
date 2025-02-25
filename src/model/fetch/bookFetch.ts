import { OpenLibraryResponse } from '@/types/bookType';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const LIMIT = process.env.NEXT_PUBLIC_LIMIT;

export const bookFetch = async (page: string): Promise<OpenLibraryResponse> => {
  const response = await fetch(`${SERVER}search.json?q=harry+potter&limit=${LIMIT}&offset=${Number(page) * Number(LIMIT)}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  return data;
};
