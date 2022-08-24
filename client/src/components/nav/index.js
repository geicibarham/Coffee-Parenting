import react from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";
import coffee from "../../assets/images/coffee-grains.png";
import randomColor from "randomcolor";
import DrawerNav from "./drawer";
import Test from "./test";
function Nav() {
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
  </style>;
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [test, setTest] = useState(false)

  const change = () => {
    setTest(true)
  }
  return (
    <nav id="main-nav">
      <h3 id="title">
        <img id="grains" src={coffee} alt="coffee grains" />
        <NavLink id="coffee" className="titleBtnLink" to="/">
          Coffee & Parenting
        </NavLink>
      </h3>

      <ul id="nav-list">

        {Auth.loggedIn() && (
          <>
            <li id="logout" className="navBtn">
              <a className="navBtnLink" href="/" onClick={logout}>
                Logout
              </a>
            </li>

            <Link id="link-user" to="/user-page">
              <p style={{ backgroundColor: randomColor() }} class="dot">
                {Auth.getUsername().charAt(0).toUpperCase().trim()}
              </p>
            </Link>
          </>


        )}
        {/* <button onClick={change}>test</button> */}

        {test &&
          <Test />
        }

        <a
          id="menu"
          href="#"
          data-target="mobile-nav"
          className="sidenav-trigger hide-on-large-only"
        >
          <DrawerNav />
        </a>
      </ul>
    </nav>

  );
}

export default Nav;
