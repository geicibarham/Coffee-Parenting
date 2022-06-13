import react from "react";
import { Link } from "react-router-dom";
import css from "./nav.css";
import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";

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
      <h2 id="title">
        <NavLink id="coffee"className="titleBtnLink" to="/">
         Coffee & Parenting
        </NavLink>
      </h2>

      <ul id="nav-list">
        <li className="navBtn">
          <NavLink className="navBtnLink" to="/main">
           Feed
          </NavLink>
        </li>

        {Auth.loggedIn() ? (
          <>
            <li className="navBtn">
              <NavLink className="navBtnLink" to="/user-page">
                My Posts
              </NavLink>
            </li>

            <li className="navBtn">
              <a className="navBtnLink" href="/" onClick={logout}>
                Logout
              </a>
            </li>
          </>
        ) : (
          <>
            <li className="navBtn">
              <NavLink className="navBtnLink" to="/login">
                Login
              </NavLink>
            </li>
            <li className="navBtn">
              <NavLink className="navBtnLink" to="/join">
                Join
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
