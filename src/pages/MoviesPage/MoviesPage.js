import axios from 'axios';
import React, { Component } from 'react';
import Container from '../../components/Container';

class MoviesPage extends Component {
  state = {
    query: '',
  };

  async componentDidMount() {
    const { query } = this.state;
    const queryGetApi = await axios.get(
      `https://api.themoviedb.org/3/${query}/movie?api_key=17f34524669c2658ba6f6a8fb0e96e0c`,
    );
    console.log(queryGetApi.data);

    // this.setState({ movies: queryGetApi.data });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    // this.props.onSubmit(this.state.query);
    this.setState({ query: event.currentTarget.value });
    this.setState({ query: '' });
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  render() {
    return (
      <>
        <section className="Searchbar">
          <Container>
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
          </Container>
        </section>
      </>
    );
  }
}

export default MoviesPage;
