import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Container from './components/Container';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

// import pixabayApi from './services/pixabay.api';
// import PropTypes from 'prop-types';

const App = () => (
  <Container>
    <ul className="List">
      <li>
        <NavLink exact className="Link" activeClassName="ActiveLink" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="Link" activeClassName="ActiveLink" to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />

      <Route component={HomePage} />
    </Switch>
  </Container>
);

export default App;
