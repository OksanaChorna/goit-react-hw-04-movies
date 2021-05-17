import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import routes from './routs/routes';
import AppBar from './components/AppBar/AppBar';

// import pixabayApi from './services/pixabay.api';
// import PropTypes from 'prop-types';

const App = () => (
  <>
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      <Route path={routes.movies} component={MoviesPage} />

      <Route component={HomePage} />
    </Switch>
  </>
);

export default App;
