import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import styles from "./reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviewsMovie = async () => {
      setIsLoading(true);
      try {
        const { data } = await getReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error.massage);
      } finally {
        setIsLoading(false);
      }
    };
    getReviewsMovie(movieId);
  }, [movieId]);

  return (
      <ul>
        {loading && <Loader />} 
          {error && <p>{error.massage}</p>}
        <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content, created_at }) => (
            <li key={id} className={styles.itemReviews}>
            
            <h3 className={styles.authorReviews}>{author}</h3>
            <p className={styles.contentReviews}>{content}</p>
            <p>Publication date: {created_at}</p>
          </li>
        ))
      ) : (
        <p>No reviews</p>
      )}
    </ul>
  );
};

export default Reviews;