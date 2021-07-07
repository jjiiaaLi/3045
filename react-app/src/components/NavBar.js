import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import title from '../images/title.png';
import './NavBar.css'

const NavBar = () => {
  
  const user=useSelector(state=>Object.values(state.session))


  return (
    <nav className="NavDiv">
      <div className="NavObj">
        <Link to="/" exact={true}>
          <img className="logoImg" src={title} alt="logo" />
        </Link>
      </div>
      {user[0]===null&&<div className="NavObj">
        <Link className="NavLinks" to="/login" exact={true}>
          Login
        </Link>
      </div>}
      {user[0]===null&&<div className="NavObj">
        <Link className="NavLinks" to="/sign-up" exact={true}>
          Sign Up
        </Link>
      </div>}
      <div className="NavObj">
        <Link className="NavLinks" to={`/users/${user[0].id}`} exact={true}>
          Home
        </Link>
      </div>
      {user[0]&&<div className="NavObj">
        <LogoutButton  />
      </div>}
    </nav>
  );
}

export default NavBar;
