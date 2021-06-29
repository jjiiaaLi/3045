import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import title from '../images/title.png';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="NavDiv">
      <div className="NavObj">
        <NavLink to="/" exact={true} activeClassName="active">
          <img className='logoImg' src={title} alt='logo'/>
        </NavLink>
      </div>
      <div className="NavObj">
        <NavLink to="/login" exact={true} activeClassName="active">
          Login
        </NavLink>
      </div>
      <div className="NavObj">
        <NavLink to="/sign-up" exact={true} activeClassName="active">
          Sign Up
        </NavLink>
      </div>
      <div className="NavObj">
        <NavLink to="/users" exact={true} activeClassName="active">
          Users
        </NavLink>
      </div>
      <div className="NavObj">
        <LogoutButton />
      </div>
    </nav>
  );
}

export default NavBar;
