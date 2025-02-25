import styles from '@styles/home.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.headerwrapper}>
      <Link href="/">
        <div className={styles.logoCover}>
          <Image width={100} height={80} src="/images/logo.svg" alt="logo" />
        </div>
        <h1>Romance Book Search</h1>
      </Link>
    </header>
  );
};

export default Header;
