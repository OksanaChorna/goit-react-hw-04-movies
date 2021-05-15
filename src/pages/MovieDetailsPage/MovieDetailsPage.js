import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieDetailsPage extends Component {
  state = {
    movies: [],
    poster_path: '',
    title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
    casts: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=17f34524669c2658ba6f6a8fb0e96e0c`,
    );
    console.log(response.data);

    this.setState({ ...response.data });

    const castsGetApi = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=17f34524669c2658ba6f6a8fb0e96e0c`,
    );
    console.log(castsGetApi.data.cast);
    this.setState({ casts: castsGetApi.data.cast });
    // /credits
    const reviewsGetApi = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=17f34524669c2658ba6f6a8fb0e96e0c`,
    );
    console.log(reviewsGetApi.data);
  }

  render() {
    const {
      title,
      release_date,
      vote_average,
      overview,
      genres,
      casts,
      poster_path,
    } = this.state;

    const fullYear = new Date(release_date).getFullYear();
    console.log(casts);

    return (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="poster img"
        />
        <h1>
          {title} ({fullYear})
        </h1>
        <p>User score: {vote_average * 10}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres.flatMap(genre => genre.name).join(' ')}</p>

        {/* <ul>
          {this.state.casts.map(cast => (
            <li key={cast.cast_id}>
              <Link
                to={`${this.props.match.url}movies/${this.props.movieId}/cast`}
              >
                {cast.name}
                Character: {cast.character}
              </Link>
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default MovieDetailsPage;
