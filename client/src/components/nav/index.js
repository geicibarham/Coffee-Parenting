import react from "react";
import { Link } from "react-router-dom";
import css from "./nav.css";
import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


function Nav() {
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
  </style>
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (

    <nav id="main-nav">
      <h3 id="title">
        <NavLink id="coffee" className="titleBtnLink" to="/">
          Coffee & Parenting
        </NavLink>
      </h3>

      <ul id="nav-list">
      <Dropdown title="Dropdown button">
        <Dropdown.Toggle style={{color:"white"}} variant="" id="dropdown-basic">
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
        <Dropdown.Item href="/main">Feed</Dropdown.Item>

          {Auth.loggedIn() && (
            <>
              <Dropdown.Item href="/user-page">My Posts</Dropdown.Item>
         
              <Dropdown.Item href="/activities">Activities</Dropdown.Item>
              </>
          )}


          {!Auth.loggedIn() && (
            <>
              <Dropdown.Item href="/join">Join</Dropdown.Item>
              <Dropdown.Item href="/login">Login</Dropdown.Item>
            </>
          )}

        </Dropdown.Menu>
      </Dropdown>
   


        {Auth.loggedIn() ? (
          <>


            <li className="navBtn">
              <a className="navBtnLink" href="/" onClick={logout}>
                Logout
              </a>
            </li>
          </>
        ) : (
          <>


          </>
        )}
      </ul>
    </nav>

  );
}

export default Nav;
