'use client';

import styles from '@styles/booklist.module.scss';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const LIMIT = Number(process.env.NEXT_PUBLIC_LIMIT);

const Pagination = ({ total }: { total: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page') ?? '1');

  const startPage = Math.floor((currentPage - 1) / LIMIT) * LIMIT + 1;
  const endPage = Math.min(startPage + LIMIT - 1, total);

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => (startPage + i).toString());

  const prevPage = currentPage > 10 ? currentPage - 10 : null;
  const nextPage = currentPage + 10 <= total ? currentPage + 10 : null;

  return (
    <ul className={styles.pagination}>
      <li className={styles.prev}>{prevPage ? <Link href={`${pathname}?page=${prevPage}`}>이전</Link> : <span>이전</span>}</li>

      {pages.map((page) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page);

        return (
          <li key={page} className={Number(page) === currentPage ? styles.selected : ''}>
            <Link href={`${pathname}?${params.toString()}`}>{page}</Link>
          </li>
        );
      })}

      <li className={styles.next}>{nextPage ? <Link href={`${pathname}?page=${nextPage}`}>다음</Link> : <span>다음</span>}</li>
    </ul>
  );
};

export default Pagination;
