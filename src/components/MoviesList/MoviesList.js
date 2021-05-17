import { Link, withRouter } from 'react-router-dom';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ title, original_name, id }) => (
        <li key={id}>
          <Link to={{ pathname: `movies/${id}`, state: { from: location } }}>
            {title}
            {original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
