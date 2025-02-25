import styles from '@styles/booklist.module.scss';
import { bookFetch } from '@/app/model/fetch/bookFetch';
import Pagination from '@/components/Pagination';
import BookItem from './BookItem';

const IMGSERVER = process.env.NEXT_PUBLIC_API_IMG_SERVER;

export const BookList = async ({ searchParams }: { searchParams?: { page?: string } }) => {
  const page = searchParams?.page ? String(searchParams.page) : '1';

  const data = await bookFetch({ page });

  const bookItem = data.docs.map((item) => <BookItem key={item.key} item={item} />);

  return (
    <>
      <ul className={styles.bookList}>{bookItem}</ul>
      <Pagination total={data.numFound} />
    </>
  );
};

export default BookList;
