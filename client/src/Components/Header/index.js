import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-main text-dark mb-4 py-2 display-flex align-center">
      <div className="ml-5 display-flex align-center">
        <Link className="text-main" to="/">
        <i className="fa-solid fa-2x fa-circle-check mx-3 "></i>
          <h1 className="display-inline-block " style={{ fontSize: '2rem' }}>
            Get It Done
          </h1>
        </Link>
        
        <div className='justify-flex-end'>
          {Auth.loggedIn() ? (
            <button className="btn m-2" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="btn m-2" to="/login">
                Login
              </Link>
              <Link className="btn m-2" to="/signup">
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
