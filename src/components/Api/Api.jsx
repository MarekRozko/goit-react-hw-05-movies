import axios from 'axios';
const API_KEY = 'f632edb05cc91b97d9ccb27096819906';
const BASE_URL = 'https://api.themoviedb.org/3/';


export const getTrendingMovies = async () => {
    const responce = await axios.get(`${BASE_URL}trending/movie/week`, {
        params: {
            api_key: API_KEY,
        },
    });
    const movies = await responce.data.results;
    return movies;
};





export const getSearchResults = async(searchFilms, page = 1) => {
  const responce = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchFilms}&page=${page}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query: searchFilms,
      page: 1,
    },
  });
  const movies = await responce.data.results;
  return movies;
}




export const fetchFilmToId = async id => {
  return await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};

export const getCastToId = async id => {
  return await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
};

export const getReviews = async id => {
  return await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
};











