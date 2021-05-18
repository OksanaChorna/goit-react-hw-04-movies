import axios from 'axios';
import React, { Component } from 'react';
import Container from '../Container';

class CastComponent extends Component {
  state = {
    casts: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const castsGetApi = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=17f34524669c2658ba6f6a8fb0e96e0c`,
    );
    this.setState({ casts: castsGetApi.data.cast });
  }
  render() {
    const { casts } = this.state;

    return (
      <Container>
        <ul className="cast">
          {casts.length ? (
            casts.map(cast => (
              <li key={cast.cast_id}>
                {cast.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt="cast img"
                  />
                ) : (
                  <img
                    src="https://gravatar.com/avatar/070bfd05635ca2f82dda904ac6c13e21?d=https%3A%2F%2Fassets.codepen.io%2Finternal%2Favatars%2Fusers%2Fdefault.png&fit=crop&format=auto&height=256&version=0&width=256"
                    alt="cast img"
                  />
                )}
                <h3>{cast.name}</h3>
                <p>Character: {cast.character}</p>
              </li>
            ))
          ) : (
            <h2>There is no cast for this film</h2>
          )}
        </ul>
      </Container>
    );
  }
}

export default CastComponent;
