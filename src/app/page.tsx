import { bookFetch } from '@/model/action/bookAction';
import styles from '@styles/home.module.scss';
import Image from 'next/image';

const Home = async () => {
  const data = await bookFetch();

  console.log(data);

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.searchWrapper}>
        <input type="search" placeholder="제목 혹은 저자를 입력하세요." />
        <button type="button">
          <Image src="/images/searchIcon.svg" width={24} height={24} alt="search" />
          <span className="hidden">검색</span>
        </button>
      </div>
      <ul className={styles.bookList}>
        {data?.map((item) => (
          <li key={item.lending_edition_s}>
            <div className={styles.bookCover}>
              <Image src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`} alt="bookCover" fill={true} sizes="100%" />
            </div>
            <h2>{item.title}</h2>
            <p>
              <span>First Published</span>: {item.first_publish_year}
            </p>
            <p>
              <span>author_name</span>: {item.author_name[0]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
