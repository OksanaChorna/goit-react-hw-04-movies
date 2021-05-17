import axios from 'axios';
import React, { Component } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    const queryGetApi = axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=17f34524669c2658ba6f6a8fb0e96e0c&query=${query}`,
      )
      .then(({ data }) => {
        console.log(data);

        this.setState({ movies: data.results });
        this.setState({ query: '' });
      });
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  render() {
    return (
      <>
        <section className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </form>
          <div>
            <MoviesList movies={this.state.movies} />
          </div>
        </section>
      </>
    );
  }
}

export default MoviesPage;
