import axios from 'axios';
import React, { Component } from 'react';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  // async componentDidMount() {
  //   const response = await axios.get(
  //     'https://api.themoviedb.org/3/trending/all/day?api_key=17f34524669c2658ba6f6a8fb0e96e0c',
  //   );
  //   console.log(response.data.results);

  //   this.setState({ movies: response.data.results });
  // }

  render() {
    console.log(this.props.match.url);
    return (
      <>
        <h2>Movies</h2>
      </>
    );
  }
}

export default MoviesPage;
