import { useState, useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';
import { MoviePost } from 'components/MoviesPost/MoviesPost';
import styles from "./homepage.module.css";
import { getTrendingMovies } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';

const  Homepage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();

  useEffect(() => {
    async function fetchtrendingMovies() {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    }
    fetchtrendingMovies();
  }, []);

    const elements = trendingMovies.map(movie => (
        
        <li className={styles.imagesLink}>
           <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            state={{ from: location }}
            className={styles.Link}

            >
            {MoviePost(movie)}
          </Link> 
        </li>
        
  ));
    
  return (
      <div>
        {loading && <Loader />}
        {error && <p>{error.massage}</p>} 
        <h1 className={styles.title}>Trending Movies</h1> 
        <ul className={styles.gallery}>{elements}</ul>
    </div>
  );
}

export default Homepage;
