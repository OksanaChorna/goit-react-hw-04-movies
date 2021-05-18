import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import moviesApi from '../../services/moviesApi';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    moviesApi
      .fetchTrendingMovies()
      .then(({ results }) => this.setState({ movies: results }));
  }

  render() {
    const { location } = this.props;

    return (
      <Container>
        <h2>Trending movies</h2>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${this.props.match.url}movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
                {movie.original_name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default HomePage;
