import Link from 'next/link';
import styles from './index.module.css';

export const Header = () => {
  return (
    <header id="masthead" className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">TODO</Link>
      </h1>
    </header>
  );
};
