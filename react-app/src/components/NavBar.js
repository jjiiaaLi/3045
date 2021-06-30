import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import title from '../images/title.png';
import './NavBar.css'

const NavBar = () => {
  

  return (
    <nav className="NavDiv">
      <div className="NavObj">
        <Link to="/" exact={true}>
          <img className="logoImg" src={title} alt="logo" />
        </Link>
      </div>
      <div className="NavObj">
        <Link className="NavLinks" to="/login" exact={true}>
          Login
        </Link>
      </div>
      <div className="NavObj">
        <Link className="NavLinks" to="/sign-up" exact={true}>
          Sign Up
        </Link>
      </div>
      <div className="NavObj">
        <Link className="NavLinks" to="/users" exact={true}>
          Users
        </Link>
      </div>
      <div className="NavObj">
        <LogoutButton  />
      </div>
    </nav>
  );
}

export default NavBar;
