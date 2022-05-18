import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Nav = () => (
  <nav className="navbar flex-row">
    <div className="flex-row">
      <ul id="menu" className="navmenu flex-row">
        <img src={logo} style={{ width: '30px' }} alt="logo" />
        <li style={{ marginLeft: '80em' }}>
          {' '}
          <NavLink exact to="/rockets" activClassName="active">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/missions" activClassName="active">
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-profile" activClassName="active">
            My Profile
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
export default Nav;
