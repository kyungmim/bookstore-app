import { bookFetch } from '@/model/action/bookAction';
import styles from '@styles/home.module.scss';

const Home = async () => {
  const data = await bookFetch();

  console.log(data);
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.header}>
        <img src="/images/logo.svg" alt="logo" />
        <h1>Romance Book Search</h1>
      </div>
      <input type="text" />
      <ul className={styles.bookList}>
        {data?.map((item) => (
          <li key={item.lending_edition_s}>
            <div className={styles.bookCover}>
              <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`} alt="bookCover" />
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
