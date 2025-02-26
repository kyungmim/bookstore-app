import styles from '@styles/home.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.headerwrapper}>
      <Link href="/">
        <h1>
          <div className={styles.logoCover}>
            <Image width={170} height={90} src="/images/logo.svg" alt="logo" priority />
          </div>
        </h1>
      </Link>
    </header>
  );
};

export default Header;
