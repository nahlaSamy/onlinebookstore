import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import styles from './featuredbook.module.css';
import book2 from '../../../assets/images/book2.png';

export default function FeaturedBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Dummy data to simulate the API response
    const dummyData = [
      {
        cover: 'https://via.placeholder.com/300x450',
        title: 'Birds Gonna Be Happy',
        author: 'Timbur Hood',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.',
        price: 45.00
      },
      {
        cover: 'https://via.placeholder.com/300x450',
        title: 'Another Featured Book',
        author: 'Another Author',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.',
        price: 50.00
      }
      // Add more dummy books as needed
    ];

    setBooks(dummyData);
  }, []);

  return (
    <div className={`${styles.featuredBookSection} container`}>
      <Swiper
        className="mySwiper"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
      >
        {books.map((book, index) => (
          <SwiperSlide key={index}>
            <div className={`${styles.bookContainer} row align-items-center`}>
              <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                <img src={book2} alt={book.title} className={styles.bookCover} />
              </div>
              <div className={`${styles.bookDetails} col-lg-6 col-md-6 col-sm-12`}>
                <h3 className={styles.bookTitle}>Featured Book</h3>
                <p className={styles.bookAuthor}>By {book.author}</p>
                <h2 className={styles.bookName}>{book.title}</h2>
                <p className={styles.bookDescription}>{book.description}</p>
                <p className={styles.bookPrice}>${book.price.toFixed(2)}</p>
                <button className={styles.viewMoreButton}>View More</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
