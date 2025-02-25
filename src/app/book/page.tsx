import styles from '@styles/booklist.module.scss';
import Image from 'next/image';
import BookList from './BookList';

const Bookpage = async ({ searchParams }: { searchParams: { page: string } }) => {
  return (
    <div className={styles.bookWrapper}>
      <div className={styles.searchWrapper}>
        <input type="search" placeholder="제목 혹은 저자를 입력하세요." />
        <button type="button">
          <Image src="/images/searchIcon.svg" width={24} height={24} alt="search" />
          <span className="hidden">검색</span>
        </button>
      </div>
      <BookList searchParams={searchParams} />
    </div>
  );
};

export default Bookpage;
