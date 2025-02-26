import styles from '@styles/home.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.headerwrapper}>
      <Link href="/">
        <div className={styles.logoCover}>
          <Image width={170} height={90} src="/images/logo.svg" alt="logo" priority />
        </div>
        <h1>Harry Potter Book</h1>
      </Link>
    </header>
  );
};

export default Header;
