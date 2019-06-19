import React from 'react';
import { NavLink } from 'react-router-dom';
import User from './User';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-between">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' exact className="nav-link" activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/add' className="nav-link" activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/leaderboard' className="nav-link" activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
      </ul>
      <User />
    </nav>
  );
};

export default Nav;