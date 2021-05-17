import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';

const Navigation = () => {
  return (
    <ul className="List">
      <li>
        <NavLink
          exact
          className="Link"
          activeClassName="ActiveLink"
          to={routes.home}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="Link"
          activeClassName="ActiveLink"
          to={routes.movies}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
