import BookList from '@/components/BookList';
import Pagination from '@/components/Pagination';
import { bookFetch } from '@/model/fetch/bookFetch';
import styles from '@styles/home.module.scss';
import Image from 'next/image';

const Home = async ({ searchParams }: { searchParams: { page: string } }) => {
  const page = searchParams.page || '1';
  const data = await bookFetch(page);

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.searchWrapper}>
        <input type="search" placeholder="제목 혹은 저자를 입력하세요." />
        <button type="button">
          <Image src="/images/searchIcon.svg" width={24} height={24} alt="search" />
          <span className="hidden">검색</span>
        </button>
      </div>
      <BookList bookData={data.docs} />
      <Pagination total={data.numFound} />
    </div>
  );
};

export default Home;
