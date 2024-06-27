import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './LatestArticles.module.css';
import pic1 from "../../../../assets/images/pic1.png"
import pic2 from "../../../../assets/images/pic2.png"
import pic3 from "../../../../assets/images/pic3.png"

const articles = [
  {
    date: '2 Aug, 2021',
    title: 'Reading Books Always Makes The Moments Happy',
    image: pic1,
  },
  {
    date: '2 Aug, 2021',
    title: 'Reading Books Always Makes The Moments Happy',
    image: pic2,
  },
  {
    date: '2 Aug, 2021',
    title: 'Reading Books Always Makes The Moments Happy',
    image: pic3,
  },
];

const LatestArticles = () => {
  return (
    <section className={styles.latestArticlesSection}>
      <div className="container">
        <div className="text-center mb-5">
          <h6 className={styles.subtitle}>READ OUR ARTICLES</h6>
          <h2 className={styles.title}>Latest Articles</h2>
        </div>
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className={styles.articleCard}>
                <img src={article.image} alt={article.title} className={styles.articleImage} />
                <div className={styles.articleContent}>
                  <p className={styles.articleDate}>{article.date}</p>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <div className={styles.articleFooter}>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className={styles.readAllButton}>READ ALL ARTICLES</button>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
