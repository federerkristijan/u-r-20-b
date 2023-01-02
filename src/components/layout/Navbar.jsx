import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/quotes">
              <h2>All Quotes</h2>
            </Link>
          </li>
          <li>
            <Link to="/new-quote">
              <h2>Add a quote</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
