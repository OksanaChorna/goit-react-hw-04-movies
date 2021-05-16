import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ query: '' });
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  render() {
    return (
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
    );
  }
}

Searchbar.propTypes = {
  query: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
