'use server';

import { OpenLibraryBook } from '@/types/bookType';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const LIMIT = process.env.NEXT_PUBLIC_LIMIT;

export const bookFetch = async (): Promise<OpenLibraryBook[]> => {
  const response = await fetch(`${SERVER}search.json?q=romance&limit=${LIMIT}`);
  const data = await response.json();

  return data.docs;
};
