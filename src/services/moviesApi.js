import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '17f34524669c2658ba6f6a8fb0e96e0c';

const fetchTrendingMovies = () => {
  return axios
    .get(`${baseURL}/movie/popular?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch(error => error);
};

const fetchMovieDetails = movieId => {
  return axios
    .get(`${baseURL}/movie/${movieId}?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch(error => error);
};

const fetchMovieCast = movieId => {
  return axios
    .get(`${baseURL}/movie/${movieId}/credits?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch(error => error);
};

const fetchMovieReviews = movieId => {
  return axios
    .get(`${baseURL}/movie/${movieId}/reviews?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch(error => error);
};

const fetchSearchMovies = ({ searchQuery = '' }) => {
  return axios
    .get(`${baseURL}/search/movie?query=${searchQuery}&api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch(error => error);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchSearchMovies,
  fetchMovieCast,
  fetchMovieReviews,
};
