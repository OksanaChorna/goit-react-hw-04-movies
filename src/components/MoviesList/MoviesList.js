import { Link, withRouter } from 'react-router-dom';

const MoviesList = ({ movies, match }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${match.url}/${movie.id}`}>
            {movie.title}
            {movie.original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
