import { bookDetailFetch } from '@/model/fetch/bookFetch';
import styles from '@styles/bookDetail.module.scss';
import ImageSlider from './ImageSlider';
import Link from 'next/link';

export default async function BookDetail({ params }: { params: { id: string } }) {
  const { data, authorData } = await bookDetailFetch(params.id);

  const getDayFormat = (value: string) => {
    const date = new Date(value);

    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const getDay = `${year}-${month}-${day}`;
    return getDay;
  };

  return (
    <div className={styles.detailWrapper}>
      <ImageSlider images={data.covers} />
      <div className={styles.bookInfo}>
        <div className={styles.tagList}>
          {data.subjects.slice(0, 5).map((item, i) => (
            <span key={i}># {item}</span>
          ))}
        </div>
        <h2>{data.title}</h2>
        <div className={styles.authors}>
          <p className={styles.name}>{authorData.name}</p>
          <span>|</span>
          <p>{getDayFormat(data.created.value)}</p>
        </div>
        <p className={styles.excerpts}>{data.excerpts[0].excerpt}</p>
        <div className={styles.linkList}>
          <h3>Reference Links</h3>
          {data.links.map((item, i) => (
            <Link key={i} href={item.url}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
