
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSearchResults } from 'components/Api/Api';
import Loader from 'components/Loader/Loader';
import styles from "./moviespage.module.css"
const MoviesPage = () => {
  const [searchFilms, setSearchFilms] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  const handleSearch = (event) => {
    setSearchFilms(event.target.value);
  };

  useEffect(() => {
    async function fetchSearchResults() {
      try {
        const data = await getSearchResults(searchFilms);
        setSearchResults(data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    }

    if (searchFilms) {
      fetchSearchResults();
    }
  }, [searchFilms]);

  return (
      <div>
      <h1>Search Movies</h1>
          <input className={styles.SearchInput} type="text" onChange={handleSearch} />
        {error && <p>{error.massage}</p>}
        {loading && <Loader />}
      <ul>
        {searchResults.map((movie) => (
          <Link className={styles.searchLink} to={`${movie.id}`} key={movie.id}>{movie.title}</Link>
        ))}

      </ul>
    </div>
  );
};

export default MoviesPage;
