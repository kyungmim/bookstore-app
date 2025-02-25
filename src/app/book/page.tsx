import styles from '@styles/booklist.module.scss';
import Image from 'next/image';
import BookList from './BookList';
import SearchBar from '@/components/SearchBar';

const Bookpage = async ({ searchParams }: { searchParams: { page: string } }) => {
  return (
    <div className={styles.bookWrapper}>
      <SearchBar />
      <BookList searchParams={searchParams} />
    </div>
  );
};

export default Bookpage;
