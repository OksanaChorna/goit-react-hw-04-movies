import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CastComponent from '../../components/Cast/Cast';
import Container from '../../components/Container';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=17f34524669c2658ba6f6a8fb0e96e0c',
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <Container>
        <h2>Trending movies</h2>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${this.props.match.url}movies/${movie.id}`}>
                {movie.title}
                {movie.original_name}
              </Link>
            </li>
          ))}
        </ul>
        {/* <Route
          path={`${this.props.match.path}movies/:movieId/cast`}
          render={props => {
            console.log(props);
            const movieId = Number(this.props.match.params.movieId);
            console.log(movieId);
            const costMovie = this.state.movies.find(
              ({ id }) => id === movieId,
            );
            console.log(costMovie);
            // return costMovie && <CastComponent {...props} cast={cast} />;
          }}
        /> */}
      </Container>
    );
  }
}

export default HomePage;
