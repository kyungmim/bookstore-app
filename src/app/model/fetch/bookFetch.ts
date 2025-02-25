import { OpenLibraryResponse } from '@/types/bookType';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const LIMIT = process.env.NEXT_PUBLIC_LIMIT;

export const bookFetch = async ({ page = '1' }: { page?: string }): Promise<OpenLibraryResponse> => {
  const offset = (Number(page) - 1) * Number(LIMIT);

  const response = await fetch(`${SERVER}search.json?q=harry+potter&limit=${LIMIT}&offset=${offset}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  return data;
};
