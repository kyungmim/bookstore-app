import styles from '@styles/home.module.scss';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <Link href="/booklist">Book List</Link>
      <Link href="/mybook">My Book</Link>
    </div>
  );
};

export default Home;
