import styles from '@styles/booklist.module.scss';
import SearchBar from '@/components/SearchBar';
import BookList from './BookList';

const Bookpage = async ({ searchParams }: { searchParams: { page: string } }) => {
  return (
    <div className={styles.bookWrapper}>
      <SearchBar />
      <BookList searchParams={searchParams} />
    </div>
  );
};

export default Bookpage;
