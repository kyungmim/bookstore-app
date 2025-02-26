import styles from '@styles/booklist.module.scss';
import SearchBar from '@/components/SearchBar';
import BookList from './BookList';

export default async function Bookpage({ searchParams }: { searchParams: { page: string } }) {
  return (
    <div className={styles.bookWrapper}>
      <SearchBar />
      <BookList searchParams={searchParams} />
    </div>
  );
}
