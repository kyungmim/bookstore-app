import { OpenLibraryBookDetail, OpenLibraryResponse } from '@/types/bookType';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const LIMIT = process.env.NEXT_PUBLIC_LIMIT;

// 책 리스트
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

//책 상세정보
export const bookDetailFetch = async (bookKey: string) => {
  const response = await fetch(`${SERVER}works/${bookKey}.json`);
  if (!response.ok) throw new Error('Failed to fetch book details');
  const data: OpenLibraryBookDetail = await response.json();

  const authorKey = data.authors?.[0]?.author?.key;
  let authorData = null;

  if (authorKey) {
    const authorResponse = await fetch(`${SERVER}${authorKey}.json`);
    if (authorResponse.ok) {
      authorData = await authorResponse.json();
    }
  }

  return { data, authorData };
};
