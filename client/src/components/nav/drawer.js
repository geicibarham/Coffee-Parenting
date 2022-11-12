import React, { useState, Fragment } from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./nav.css";
import menu from "../../assets/images/menu.png";
import Auth from "../../utils/auth";


const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};


export default function DrawerNav() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      id="menu"
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        background:
          "#f0f2f5",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Auth.loggedIn() && (
          <>
            <Link to='/user-page'>
              <li>My Posts</li></Link>

            <li onClick={logout}>
              <a style={{ color: '#1b2a4c' }} href="#">Logout</a>
            </li>

          </>
        )}
        {!Auth.loggedIn() &&
          <>
            <Link to='/login'>
              <li>Login</li></Link>
            <Link to='/join'>
              <li>Join</li></Link>
          </>}

        <Link to='/names'>
          <li>Baby Names</li></Link>

        <Link to='/main'>
          <li>See Posts</li></Link>

        <Link to='/activities'>
          <li>Activities</li></Link>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img id="button__icon" src={menu} alt="menu icon" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
