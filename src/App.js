import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
// import HomePage from './pages/HomePage';
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import routes from './routes/routes';
import AppBar from './components/AppBar/AppBar';

const HomePage = lazy(() =>
  import('./pages/HomePage/index' /* webpackChunkName: "home-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h2>Wait...</h2>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />

        <Route component={HomePage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
