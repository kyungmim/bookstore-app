import styles from '@styles/booklist.module.scss';
import { bookFetch } from '@/model/fetch/bookFetch';
import Pagination from '@/components/Pagination';
import BookItem from './BookItem';

const BookList = async ({ searchParams }: { searchParams?: { page?: string; query?: string; type?: string } }) => {
  const page = searchParams?.page ? String(searchParams.page) : '1';
  const query = searchParams?.query || '';
  const type = searchParams?.type || 'title';

  const data = await bookFetch({ page, search: query, type });

  const bookItem = data.docs.map((item) => <BookItem key={item.key} item={item} />);

  return (
    <>
      <ul className={styles.bookList}>{bookItem}</ul>
      <Pagination total={data.numFound} />
    </>
  );
};

export default BookList;
