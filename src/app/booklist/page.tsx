import BookList from '@/components/BookList';
import styles from '@styles/home.module.scss';
import Image from 'next/image';

const Bookpage = async ({ searchParams }: { searchParams: { page: string } }) => {
  return (
    <div className={styles.homeWrapper}>
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
