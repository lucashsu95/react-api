import styles from '@styles/pages/Index.module.scss';
import Layout from '@/components/layout/Layout';
import { useEffect, useState } from 'react';
import PageButton from '@/components/common/PageButton';
import bookApi from '@/lib/api/bookApi';
import { ListData } from '@/lib/types/ApiType';
import router from 'next/router';

export default function HistoryRecord() {
  const [page, setPage] = useState<number>(1);
  const [dataList, setdataList] = useState<ListData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await bookApi.getBookList();

        setdataList(response.data);
      } catch (error: any) {
        alert(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h2>書庫紀錄</h2>
        <div className={styles.newBook}>
          <button onClick={() => router.push('/add')}>薪資書籍</button>
        </div>
        <main className={styles.tabletitle}>
          <div className={styles.title}>
            <h6>編號</h6>
            <h6>書名</h6>
            <h6>作者</h6>
            <h6>存放日期</h6>
            <h6>書籍分類</h6>
            <h6>貨架</h6>
            <h6>功能</h6>
          </div>
          <div className={styles.list}>
            {dataList?.map((v, i) => (
              <>
                <p>{i + 1}</p>
                <p>{v.name}</p>
                <p>{v.writer}</p>
                <p>{v.storeDate}</p>
                <p>{v.classifications}</p>
                <p>{v.shelves}</p>
                <div className={styles.btns}>
                  <button className={styles.edit}>編輯</button>
                  <button className={styles.delete}>刪除</button>
                </div>
              </>
            ))}
          </div>
        </main>
        <PageButton page={page} setPageNumber={setPage} />
      </div>
    </Layout>
  );
}
