import axios from 'axios';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import CastComponent from '../../components/Cast/Cast';
import Container from '../../components/Container';
import ReviewsComponent from '../../components/Reviews/Reviews';
import routes from '../../routes/routes';

class MovieDetailsPage extends Component {
  state = {
    movies: [],
    poster_path: '',
    title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
    // cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=17f34524669c2658ba6f6a8fb0e96e0c`,
    );

    this.setState({ ...response.data });
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    const {
      title,
      release_date,
      vote_average,
      overview,
      genres,
      poster_path,
      // cast,
    } = this.state;

    const fullYear = new Date(release_date).getFullYear();
    const { match } = this.props;

    return (
      <>
        <button type="button" className="backBtn" onClick={this.handleGoBack}>
          &#8592; Go back
        </button>

        <section className="section-film">
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
        </section>
        <section className="film-info-det">
          <p>Additional information</p>
          <ul className="film-info-list">
            <li>
              <NavLink to={`${match.url}/cast`} className="rew-link">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/reviews`} className="rew-link">
                Reviews
              </NavLink>
            </li>
          </ul>
          <Container>
            <Route path={`${match.path}/cast`} component={CastComponent} />
            {/* <Route
              path={`${match.path}/cast`}
              render={props => {
                console.log(props);
                const movieId = Number(match.params.movieId);
                console.log(movieId);
                return <CastComponent {...props} cast={cast} />;
              }}
            /> */}
            <Route
              path={`${match.path}/reviews`}
              component={ReviewsComponent}
            />
          </Container>
        </section>
      </>
    );
  }
}

export default MovieDetailsPage;
