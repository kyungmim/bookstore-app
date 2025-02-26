'use client';

import styles from '@styles/booklist.module.scss';
import Image from 'next/image';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = { query: string };

const SearchBar = () => {
  const [type, setType] = useState<'title' | 'author' | 'none'>('none');
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const onSubmit = (data: FormValues) => {
    if (!data.query.trim()) return;

    const params = new URLSearchParams(searchParams);
    params.set('type', type);
    params.set('query', data.query.trim());
    params.delete('page');

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleReset = () => {
    setType('none');
    router.push('?');
    reset({ query: '' });
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.filter}>
        <button type="button" className={styles.reset} onClick={handleReset}>
          전체
        </button>
        <button type="button" className={type === 'title' ? styles.active : ''} onClick={() => setType('title')}>
          제목 검색
        </button>
        <button type="button" className={type === 'author' ? styles.active : ''} onClick={() => setType('author')}>
          저자 검색
        </button>
      </div>

      <form className={styles.search} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="제목 및 저자를 입력하세요." {...register('query', { required: true })} />
        <button type="submit">
          <Image src="/images/searchIcon.svg" width={24} height={24} alt="search" />
          <span className="hidden">검색</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
