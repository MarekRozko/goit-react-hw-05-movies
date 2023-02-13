import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastToId } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import styles from "./cast.module.css";
const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getCastMovie = async () => {
      setIsLoading(true);
      try {
        const { data } = await getCastToId(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error.massage);
      } finally {
        setIsLoading(false);
      }
    };
    getCastMovie(movieId);
  }, [movieId]);


  return (
      <ul className={styles.actorList}>
      {loading && <Loader />} 
      {error && <p>{error.massage}</p>} 
      {cast.length > 0 ? (
        cast.map(({ id, profile_path, name, character }) => (
        <li key={id} className={styles.actorItem}>
        <div>
            <img
                src={
                profile_path === null
                  ? 'https://klike.net/uploads/posts/2022-09/1662373395_b-1.jpg'
                  : `https://image.tmdb.org/t/p/w500${profile_path}`
              }
                alt={name}
                width="220"
                height="300"        
              />        
        </div>
        <p className={styles.actorName}>{name}</p>
        <p className={styles.actorCharacter}>Character: {character}</p>
        </li>
        ))
      ) : (
        <p>No cast</p>
      )}
    </ul>
  );
};

export default Cast;
