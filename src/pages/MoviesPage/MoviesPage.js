import React, { Component } from 'react';
import querystring from 'query-string';
import MoviesList from '../../components/MoviesList/MoviesList';
import Searchbar from '../../components/Search/Search';
import moviesApi from '../../services/moviesApi';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  componentDidMount() {
    const { search, pathname } = this.props.location;

    if (search && pathname) {
      this.setState({
        searchQuery: querystring.parse(search).query,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchFilms();
    }
  }

  changeQuery = query => {
    const { history, location } = this.props;

    this.setState({
      searchQuery: query,
      movies: [],
    });

    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  fetchFilms() {
    const { searchQuery } = this.state;
    const options = { searchQuery };

    if (!searchQuery) {
      return;
    }

    moviesApi
      .fetchSearchMovies(options)
      .then(({ results }) => {
        if (results.length === 0) {
          console.log(results.length);
        }

        this.setState({
          movies: [...results],
        });
      })
      .catch(error => error);
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.changeQuery} />;
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default MoviesPage;
