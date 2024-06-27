import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import cat from "../../../../assets/images/Cat1.png";
import styles from './Categories.module.css';

import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import { apiProtected } from '../../../SharedModule/axiosInstance'; 



const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiProtected.get('/category');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className={`${styles.categoriesSection} container`}>
      <h2 className={styles.categoriesTitle}>Explore our Top Categories</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: `.${styles.customNextButton}`,
          prevEl: `.${styles.customPrevButton}`,
        }}
        modules={[Keyboard, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className={styles.categoryCard}>
              <img src={cat} alt={category.name} className={styles.categoryImage} />
              <h3 className={styles.categoryName}>{category.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${styles.customNextButton} swiper-button-next`}></div>
      <div className={`${styles.customPrevButton} swiper-button-prev`}></div>
    </section>
  );
};

export default Categories;
