import { OpenLibraryBook } from '@/types/bookType';
import styles from '@styles/booklist.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const IMGSERVER = process.env.NEXT_PUBLIC_API_IMG_SERVER;

export default async function BookItem({ item }: { item: OpenLibraryBook }) {
  const link = item.key.split('/').pop();

  return (
    <li key={item.key} className={styles.bookItem}>
      <Link href={`/book/${link}`}>
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
      </Link>
    </li>
  );
}
