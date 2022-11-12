import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";
import coffee from "../../assets/images/coffee-grains.png";
import randomColor from "randomcolor";
import DrawerNav from "./drawer";

function Nav() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav id="main-nav">
      <h1 id="title">
        <img id="grains" src={coffee} alt="coffee grains" />
        <NavLink id="coffee" className="titleBtnLink" to="/">
          Coffee & Parenting
        </NavLink>
      </h1>

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
        <a
          id="menu"
          href="#navbar"
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
