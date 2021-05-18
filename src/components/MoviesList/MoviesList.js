import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ title, original_name, id }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
            }}
          >
            {title}
            {original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propType = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      original_name: PropTypes.string,
    }),
  ),
};

export default withRouter(MoviesList);
