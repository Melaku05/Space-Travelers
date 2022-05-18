import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import routes from '../routes';
import './Nav.css';

const Nav = () => (
  <header className="contained">
    <div className="logo-title">
      <img src={logo} alt="Logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <nav>
      <ul className="menu-list">
        {routes.map((route) => (
          <li key={route.id}>
            <NavLink
              className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
              to={route.path}
            >
              {route.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
export default Nav;
