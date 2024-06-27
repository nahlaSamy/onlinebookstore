import React from 'react';
import styles from './BookSale.module.css';
import book from "../../../../assets/images/Unsplash.png"
const BookSale = () => {
  return (
    <div className={`container ${styles.bookSaleContainer} ` }>
      <div className="row">
        <div className="col-md-6">
          <h2>All books are 50% off now! Don't miss such a deal!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
          <div className={styles.timer}>
            <div>
              <span>768</span>
              <p>DAYS</p>
            </div>
            <div>
              <span>01</span>
              <p>HOUR</p>
            </div>
            <div>
              <span>27</span>
              <p>MINT</p>
            </div>
            <div>
              <span>55</span>
              <p>SEC</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={book} alt="Books on Sale" className={`img-fluid ${styles.bookImage}`} />
        </div>
      </div>
    </div>
  );
}

export default BookSale;
