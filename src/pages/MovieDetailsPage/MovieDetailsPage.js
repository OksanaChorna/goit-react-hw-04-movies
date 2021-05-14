import axios from 'axios';
import React, { Component } from 'react';

class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=17f34524669c2658ba6f6a8fb0e96e0c`,
    );
    console.log(response.data);

    this.setState({ ...response.data });
  }

  render() {
    const { title, release_date, vote_average, overview, genres } = this.state;
    const fullYear = new Date(release_date).getFullYear();
    return (
      <>
        <h2>
          {title} ({fullYear})
        </h2>
        <p>User score: {vote_average}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.flatMap(genre => genre.name).join(' ')}</p>
        <img src="" alt="" />

        {/* <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={}>
                {' '}
                {movie.title}
                {movie.original_name}
              </Link>
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default MovieDetailsPage;
