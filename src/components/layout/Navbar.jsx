import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>Great Quotes</h1>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes">
              <h2>All Quotes</h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote">
              <h2>Add a quote</h2>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
