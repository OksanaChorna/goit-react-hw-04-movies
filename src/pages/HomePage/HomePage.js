import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=17f34524669c2658ba6f6a8fb0e96e0c',
    );
    console.log(response.data.results);

    this.setState({ movies: response.data.results });
  }

  render() {
    console.log(this.props.match.url);
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
      </Container>
    );
  }
}

export default HomePage;
