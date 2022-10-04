import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  faHouse,
  faBell,
  faSquareCheck,
  faDollarSign,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Auth from '../../utils/auth/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Get It Done
          </h1>
        </Link>
        
        <div>
          {Auth.loggedIn() ? (
            <>
              <NavLink 
                exact="true"
                activeclassname="active"
                to="/dashboard">
                <FontAwesomeIcon icon={faHouse} color="#4d4d4e" />
              </NavLink>
              
              <NavLink 
                exact="true"
                activeclassname="active"
                className="about-link"
                to="/about">
                <FontAwesomeIcon icon={faCircleInfo} color="#4d4d4e" />
              </NavLink>

              <NavLink 
                exact="true"
                activeclassname="active"
                className="task-link"
                to="/">
                <FontAwesomeIcon icon={faSquareCheck} color="#4d4d4e" />
              </NavLink>

              <NavLink 
                exact="true"
                activeclassname="active"
                className="notification-link"
                to="/notifications">
                <FontAwesomeIcon icon={faBell} color="#4d4d4e" />
              </NavLink>

              <NavLink 
                exact="true"
                activeclassname="active"
                className="donation-link"
                to="/donation">
                <FontAwesomeIcon icon={faDollarSign} color="#4d4d4e" />
              </NavLink>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
