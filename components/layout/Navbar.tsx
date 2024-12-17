import styles from '@styles/components/layout/Navbar.module.scss';
import Link from 'next/link';

export default function Navba() {
  return (
    <>
      <nav className={styles.navbar}>
        <section className={styles.mainTitle}>
          <h1>圖書館書庫管理</h1>
        </section>
        <section>
          <ul className={styles.navLink}>
            <li>
              <Link href={'/'}>借閱紀錄</Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
}
