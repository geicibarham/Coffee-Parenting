import react from "react";
import { Link } from "react-router-dom";
import css from "./nav.css";
import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import coffee from '../../assets/images/coffee-grains.png'
import randomColor from "randomcolor";

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
        <img id="grains" src={coffee} alt="coffee grains" />
        <NavLink id="coffee" className="titleBtnLink" to="/">
          Coffee & Parenting
        </NavLink>

      </h3>

      <ul id="nav-list">
        <Dropdown title="Dropdown button">
          <Dropdown.Toggle style={{ color: "white" }}
            variant="" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/main">Feed</Dropdown.Item>

            {Auth.loggedIn() && (

              <>
                <Dropdown.Item href="/user-page">My Posts</Dropdown.Item>
                <Dropdown.Item href="/names">Baby Names</Dropdown.Item>
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


            <li id="logout" className="navBtn">
              <a className="navBtnLink" href="/" onClick={logout}>
                Logout
              </a>

            </li>





        <Link id="link-user"to="/user-page">
              <p  style={{ backgroundColor: randomColor() }} class="dot">{Auth.getUsername().
                charAt(0).toUpperCase().trim()}</p>
           
           </Link>


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
