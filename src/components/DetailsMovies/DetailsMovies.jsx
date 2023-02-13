import { fetchFilmToId } from 'components/Api/Api';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet} from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import styles from "./detailsMovies.module.css";

const DetailsMovies = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();


  

  useEffect(() => {
    const getTrandingMovie = async () => {
      setLoading(true);

      try {
        const { data } = await fetchFilmToId(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getTrandingMovie(movieId);
  }, [movieId]);
    
      if (!movie) {
    return;
  }

  const {poster_path } = movie;
const ganresList = movie.genres.map(ganre => ganre.name).join(', ');

const goBackHome = location.state?.from || '/';;
  return (
    <div>
       <Link to={goBackHome} className={styles.backLink}>Go back</Link>
        <div className={styles.postContainer}>
            {loading && <Loader />} 
            {error && <p>{error.massage}</p>}      
            <div>
               <img
                src={
              poster_path === undefined
                ? 'https://klike.net/uploads/posts/2022-09/1662373395_b-1.jpg'
                : `https://image.tmdb.org/t/p/w500${poster_path}`
            }
                alt="Poster"
                width="240"
                className={styles.postMovie}
            />   
            </div>
            <div className={styles.textContainer}>
                <h3 className={styles.title}>{movie.title}</h3>
                <h3>Rating {movie.vote_average}</h3>
                <h3>Overwiev</h3>
                <p className={styles.overview}>{movie.overview}</p>
                <h3>Genres</h3>
                {ganresList}
            </div>   
          </div>
        <p className={styles.inform}>Additional information:</p>
            <Link  to={`/movies/${movieId}/cast`} className={styles.cast}>
            Cast
          </Link>
      <Link to="reviews" className={styles.reviews}>Reviews</Link>
      <Outlet />
    </div>
  );
};

export default DetailsMovies;