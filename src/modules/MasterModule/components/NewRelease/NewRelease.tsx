import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './NewRelease.module.css';
import bookpic from '../../../../assets/images/book44.png';
import { apiProtected } from '../../../SharedModule/axiosInstance'; 

interface Book {
  cover: string;
  title: string;
  author: string;
  price: number;
  description: string;
  id:string;
}

const NewRelease: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await apiProtected.get('/book');
        const result = response.data;

        console.log('API response:', result);

        if (Array.isArray(result.data)) {
          const mappedData = result.data.map((book: any) => ({
            cover: '', // Placeholder for image URL
            title: book.name,
            author: book.auther,
            price: book.price,
            description: book.description,
            id:book._id
          }));
          setBooks(mappedData);
        } else {
          console.error('Data is not an array:', result.data);
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchBooks();
  }, []);

  const chunkArray = (array: Book[], chunkSize: number): Book[][] => {
    return array.reduce((result, item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);

      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }

      result[chunkIndex].push(item);

      return result;
    }, [] as Book[][]);
  };

  const renderBooks = () => {
    if (!books.length) {
      return <p>Loading books...</p>;
    }

    const bookChunks = chunkArray(books, 4);
    return bookChunks.map((chunk, index) => (
      <SwiperSlide key={index}>
        <div className={styles.bookContainer} >
          {chunk.map((book, idx) => (
            <div className={styles.book} key={idx}>
              <img src={bookpic} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <p>${book.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <div className={styles.newRelease}>
      <p className='text-muted'>Some quality items</p>
      <h2>New Release Books</h2>
      <Swiper
        className="mySwiper pt-4"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
      >
        {renderBooks()}
      </Swiper>
    </div>
  );
};

export default NewRelease;
