import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <div className="Navigation-bar">
    <h1 className="nav-title">KanBan Project</h1>
    <div className="navLinks">
      <NavLink exact to="/" activeClassName="nav-active" className="link-el">Rockets</NavLink>
      <NavLink exact to="/Missions" activeClassName="nav-active" className="link-el">Missions</NavLink>
      <NavLink exact to="/MyProfile" activeClassName="nav-active" className="link-el">My Profile</NavLink>
    </div>
  </div>
);

export default Navigation;
