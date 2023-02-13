import axios from 'axios';
const API_KEY = 'f632edb05cc91b97d9ccb27096819906';
const baseURL = 'https://api.themoviedb.org/3/';


export const getTrendingMovies = async () => {
    const responce = await axios.get(`${baseURL}trending/movie/day`, {
        params: {
            api_key: API_KEY,
        },
    });
    const movies = await responce.data.results;
    return movies;
};



export const getSearchResults = async(searchFilms) => {
  const responce = await axios.get(`${baseURL}search/movie?&query=${searchFilms}`, {
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

// export const getReviews = async(movieId) => {
//   const responce = await axios.get(`${baseURL}/movie/${id}/reviews?api_key=${API_KEY}`, {
//     params: {
//       api_key: API_KEY,
//     },
//   });
//   const movies = await responce.data.results;
//   return movies;
// }



export const fetchFilmToId = async id => {
  return await axios.get(`${baseURL}/movie/${id}?api_key=${API_KEY}`);
};

export const getCastToId = async id => {
  return await axios.get(
    `${baseURL}/movie/${id}/credits?api_key=${API_KEY}`
  );
};

export const getReviews = async id => {
  return await axios.get(`${baseURL}/movie/${id}/reviews?api_key=${API_KEY}`);
};












