import axios from 'axios';
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import CastComponent from '../../components/Cast/Cast';
import Container from '../../components/Container';

class MovieDetailsPage extends Component {
  state = {
    movies: [],
    poster_path: '',
    title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
    // casts: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=17f34524669c2658ba6f6a8fb0e96e0c`,
    );
    console.log(response.data);

    this.setState({ ...response.data });

    // const castsGetApi = await axios.get(
    //   `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=17f34524669c2658ba6f6a8fb0e96e0c`,
    // );
    // console.log('cast', castsGetApi.data.cast);
    // this.setState({ casts: castsGetApi.data.cast });

    // /credits
    // const reviewsGetApi = await axios.get(
    //   `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=17f34524669c2658ba6f6a8fb0e96e0c`,
    // );
    // console.log(reviewsGetApi.data);
  }

  render() {
    const {
      title,
      release_date,
      vote_average,
      overview,
      genres,
      poster_path,
      // casts,
    } = this.state;

    const fullYear = new Date(release_date).getFullYear();
    const { match } = this.props;
    console.log(match.path);
    console.log(match.url);

    return (
      <>
        <section>
          <Container>
            <div className="poster">
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt="poster img"
                />
              ) : (
                <img
                  src="https://gravatar.com/avatar/070bfd05635ca2f82dda904ac6c13e21?d=https%3A%2F%2Fassets.codepen.io%2Finternal%2Favatars%2Fusers%2Fdefault.png&fit=crop&format=auto&height=256&version=0&width=256"
                  alt="poster img"
                />
              )}
            </div>
            <div>
              <h1>
                {title} ({fullYear})
              </h1>
              <p>User score: {vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <p>{genres.flatMap(genre => genre.name).join(' ')}</p>
            </div>
          </Container>
        </section>
        <Container>
          <Link to={`${match.url}/cast`}>Cast</Link>
          <Route path={`${match.path}/cast`} component={CastComponent} />
        </Container>
      </>
    );
  }
}

export default MovieDetailsPage;
