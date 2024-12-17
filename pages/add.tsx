import Layout from '@/components/layout/Layout';
import bookApi from '@/lib/api/bookApi';
import { bookInfo, Dropdown } from '@/lib/types/ApiType';
import styles from '@/styles/pages/AddBook.module.scss';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function AddBook() {
  const { register, getValues } = useForm<bookInfo>();
  const [dropdown, getdropdown] = useState<Dropdown>();
  const submit = async () => {
    const data = getValues();

    data.classification = Number(data.classification);
    data.shelves = Number(data.shelves);

    try {
      const response = await bookApi.addBook(data);

      alert(response.message);
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await bookApi.getDropdown();

        getdropdown(response.data);
        console.log(dropdown);
      } catch (error: any) {
        alert(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <Layout>
      <form className={styles.container}>
        <div>
          <label>書名：</label>
          <input type="text" {...register('name')} />
        </div>

        <div>
          <label>作者：</label>
          <input type="text" {...register('writer')} />
        </div>

        <div>
          <label>入庫日期：</label>
          <input type="text" {...register('shelves')} disabled placeholder="系統自動產生" />
        </div>

        <div>
          <label>書籍分類：</label>
          <select name="classifications">
            {dropdown?.classifications?.map((it, index) => (
              <>
                <option value={it.id} key={index} {...register('classification')}>
                  {it.id} {it.value}
                </option>
              </>
            ))}
          </select>
        </div>

        <div>
          <label>存放貨架：</label>
          <select name="shelves">
            {dropdown?.shelves?.map((it, index) => (
              <>
                <option value={it.id} key={index} {...register('shelves')}>
                  {it.id} {it.value}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className={styles.btns}>
          <button type="button" className={styles.cancel}>
            取消
          </button>
          <button type="button" className={styles.confirm} onClick={submit}>
            確認
          </button>
        </div>
      </form>
    </Layout>
  );
}