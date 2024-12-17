import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import styles from '@styles/components/common/PageButton.module.scss';

/*
 *
 * 元件描述
 * @returns 頁面切換功能
 *
 * @since 1.0.0
 *
 */
interface pageProps {
  page: number;
  setPageNumber: (page: number) => void;
}

export default function PageButton({ page, setPageNumber }: pageProps) {
  console.log(page);

  const nextPage = () => {
    setPageNumber(page + 1);
  };
  const pageBack = () => {
    setPageNumber(page - 1);
  };

  return (
    <section className={styles.pageButton}>
      {
        <p>
          <FaAngleLeft onClick={pageBack} className={page > 1 ? styles.noClick : ''} />
        </p>
      }
      <p>{page}</p>
      <p>
        <FaAngleRight onClick={nextPage} />
      </p>
    </section>
  );
}
