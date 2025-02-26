'use client';

import styles from '@styles/bookDetail.module.scss';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const IMGSERVER = process.env.NEXT_PUBLIC_API_IMG_SERVER;

const ImageSlider = ({ images }: { images: number[] }) => {
  return (
    <>
      <Swiper spaceBetween={0} modules={[Autoplay]} loop={true} centeredSlides={true} slidesPerView={1} className={styles.swiperWrapper} autoplay={{ delay: 5000, disableOnInteraction: false }}>
        {images
          .filter((image) => image !== -1)
          .map((image) => (
            <SwiperSlide key={image} className={styles.slider}>
              <Image priority={true} src={`${IMGSERVER}${image}-L.jpg`} alt="bookCover" fill={true} sizes="100%" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;
