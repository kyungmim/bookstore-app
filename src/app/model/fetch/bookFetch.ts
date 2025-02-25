import { OpenLibraryResponse } from '@/types/bookType';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const LIMIT = process.env.NEXT_PUBLIC_LIMIT;

export const bookFetch = async ({ page = '1', search = '', type = 'title' }: { page?: string; search?: string; type?: string }): Promise<OpenLibraryResponse> => {
  const offset = (Number(page) - 1) * Number(LIMIT);

  const searchQuery = type === 'author' ? `author=${search}` : `title=harry+potter+${search}`;

  const response = await fetch(`${SERVER}search.json?${searchQuery}&limit=${LIMIT}&offset=${offset}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  return data;
};
