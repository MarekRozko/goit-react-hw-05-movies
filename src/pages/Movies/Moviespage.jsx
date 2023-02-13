
import { useState, useEffect } from 'react';
import { Outlet, useSearchParams, Link, useLocation } from 'react-router-dom';
import { getSearchResults } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import styles from "./moviespage.module.css"
import { MoviePost } from 'components/MoviesPost/MoviesPost';
const MoviesPage = () => {
  const [movesState, setMovesState] = useState([]);
  const [searchMovieQwerry, setSearchMovieQwerry] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoader] = useState(false);
  const moveName = searchParams.get('name') ?? '';
  const location = useLocation();

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (searchMovieQwerry === '') {
      return;
    } else {
      setLoader(true);
      getSearchResults(searchMovieQwerry)
        .then(movies => setMovesState(movies))
        .finally(setLoader(false));
    }
  }, [searchMovieQwerry]);

  useEffect(() => {
    if (moveName !== '') {
      setSearchMovieQwerry(moveName);
    }
  }, [moveName]);

  const onSummit = event => {
    event.preventDefault();
    const value = event.target.name.value;
    setSearchMovieQwerry(value);
    updateQueryString(value);
    event.target.reset();
  };

  return (
      <div>
      <h1>Search Movies</h1>
          <form onSubmit={onSummit}>
        <input className={styles.inputSearch} type="text" name="name" placeholder="Search movies..." />
        <button type={'submit'} className={styles.btnSearch}>Search</button>
      </form>
      {loading && <Loader />}
      <Outlet />
      <ul className={styles.gallerySearch}>
        {movesState?.map(movie => (
            <li key={movie.id} className={styles.itemSearch}>
                <Link className={styles.linkSearch} to={`${movie.id}`} key={movie.id} state={{ from: location }}>
            {MoviePost(movie)}
          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;