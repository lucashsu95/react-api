import Head from 'next/head';

import styles from '@/styles/components/layout/Layout.module.scss';

import Navbar from './Navbar';
// import Footer from './Footer';

/**
 *
 * 元件描述
 * @param title 網頁名稱
 * @param children 子元件
 * @returns 元件名稱
 *
 * @since 1.0.0
 */

export default function Layout({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.layout}>{children}</main>
    </section>
  );
}
