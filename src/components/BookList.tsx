import { bookFetch } from '@/app/model/fetch/bookFetch';
import styles from '@styles/home.module.scss';
import Image from 'next/image';
import Pagination from './Pagination';

const IMGSERVER = process.env.NEXT_PUBLIC_API_IMG_SERVER;

export const BookList = async ({ searchParams }: { searchParams?: { page?: string } }) => {
  const page = searchParams?.page ? String(searchParams.page) : '1';

  const data = await bookFetch({ page });

  return (
    <>
      <ul className={styles.bookList}>
        {data.docs.map((item) => (
          <li key={item.key}>
            <div className={styles.bookCover}>
              <Image priority={true} src={`${item.cover_i ? `${IMGSERVER}${item.cover_i}-L.jpg` : '/images/default-cover.png'}`} alt="bookCover" fill={true} sizes="100%" />
            </div>
            <h2>{item.title}</h2>
            <p>
              <span>First Published</span>: {item.first_publish_year}
            </p>
            <p>
              <span>author_name</span>: {`${item.author_name ? item.author_name[0] : 'unknown'}`}
            </p>
          </li>
        ))}
      </ul>
      <Pagination total={data.numFound} />
    </>
  );
};

export default BookList;
