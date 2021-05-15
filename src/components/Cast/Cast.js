import axios from 'axios';
import React, { Component } from 'react';

class CastComponent extends Component {
  state = {
    casts: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const castsGetApi = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=17f34524669c2658ba6f6a8fb0e96e0c`,
    );
    console.log(castsGetApi.data.cast);
    this.setState({ casts: castsGetApi.data.cast });
  }
  render() {
    const { casts } = this.state;

    return (
      <ul>
        {casts.map(cast => (
          <li key={cast.cast_id}>
            <img src="" alt="" />
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default CastComponent;
